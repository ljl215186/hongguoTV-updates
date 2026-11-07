(()=>{
  const dialog=document.getElementById('poster'),image=document.getElementById('poster-image');
  const save=document.getElementById('save-poster'),share=document.getElementById('share-poster-image');
  const retry=document.getElementById('retry-poster'),status=document.getElementById('poster-status');
  let options,ready=null,pending=null,objectUrl=null,epoch=0;
  const text=(ctx,value,x,y,size,color,bold=false)=>{ctx.font=(bold?'700 ':'400 ')+size+'px system-ui,-apple-system,"Noto Sans SC",sans-serif';ctx.fillStyle=color;ctx.fillText(value,x,y);};
  function lines(ctx,value,width,max){
    const chars=Array.from(value.replace(/\r/g,'')),out=[];let line='';
    for(let i=0;i<chars.length;i++){
      const char=chars[i];
      if(char==='\n'||ctx.measureText(line+char).width>width){
        if(out.length===max-1){let last=line;while(last&&ctx.measureText(last+'…').width>width)last=Array.from(last).slice(0,-1).join('');out.push(last+'…');return out;}
        out.push(line);line=char==='\n'?'':char;
      }else line+=char;
    }
    if(line)out.push(line);return out;
  }
  function load(src){return new Promise((resolve,reject)=>{
    const img=new Image();img.crossOrigin='anonymous';const timer=setTimeout(()=>{img.onload=img.onerror=null;img.src='';reject(Error('image-timeout'));},12000);
    img.onload=()=>{clearTimeout(timer);resolve(img);};img.onerror=()=>{clearTimeout(timer);reject(Error('image-failed'));};img.src=src;
  });}
  async function create(o){
    const svg=document.querySelector('#poster-qr svg');if(!svg)throw Error('qr-unavailable');
    const qrUrl=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)],{type:'image/svg+xml'}));
    let frame,qr;try{[frame,qr]=await Promise.all([load(document.querySelector('.hero img').src),load(qrUrl)]);}finally{URL.revokeObjectURL(qrUrl);}
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');if(!ctx)throw Error('canvas-unavailable');
    const width=900,pad=44,inside=width-pad*2;
    // 封面降级图已由电视端合成剧名和简介，不再把同一份资料画第二遍。
    ctx.font='700 46px system-ui,-apple-system,"Noto Sans SC",sans-serif';const titleLines=o.embeddedDetails?[]:lines(ctx,o.title,inside,3);
    ctx.font='400 26px system-ui,-apple-system,"Noto Sans SC",sans-serif';const descriptionLines=o.embeddedDetails?[]:lines(ctx,o.description,inside,4);
    const pictureHeight=Math.min(880,Math.max(280,Math.round(inside*frame.naturalHeight/frame.naturalWidth)));
    const titleY=248+pictureHeight,descriptionY=titleY+titleLines.length*62+76;
    const footerY=descriptionY+descriptionLines.length*40+42;
    canvas.width=width;canvas.height=footerY+292;
    const gradient=ctx.createLinearGradient(0,0,width,canvas.height);gradient.addColorStop(0,'#1e2b3d');gradient.addColorStop(1,'#0b0f15');ctx.fillStyle=gradient;ctx.fillRect(0,0,width,canvas.height);
    text(ctx,'红果TV',pad,50,25,'#ff8964',true);text(ctx,'好剧一起看',width-pad-150,49,23,'#afbdce');
    text(ctx,'大屏看短剧',pad,125,54,'#f5f7fa',true);
    text(ctx,'把喜欢的剧，带到电视上',pad,168,25,'#ffb49b');
    ctx.fillStyle='#090d13';ctx.fillRect(pad,200,inside,pictureHeight);
    const scale=Math.min(inside/frame.naturalWidth,pictureHeight/frame.naturalHeight),fw=frame.naturalWidth*scale,fh=frame.naturalHeight*scale;
    ctx.drawImage(frame,pad+(inside-fw)/2,200+(pictureHeight-fh)/2,fw,fh);
    titleLines.forEach((value,i)=>text(ctx,value,pad,titleY+i*62,46,'#f5f7fa',true));
    const episodeY=titleY+titleLines.length*62+12;text(ctx,o.episode,pad,episodeY,28,'#ff9b78',true);
    descriptionLines.forEach((value,i)=>text(ctx,value,pad,descriptionY+i*40,26,'#c7ced7'));
    ctx.strokeStyle='#344052';ctx.beginPath();ctx.moveTo(pad,footerY-8);ctx.lineTo(width-pad,footerY-8);ctx.stroke();
    text(ctx,'扫码打开分享页',pad,footerY+70,33,'#f5f7fa',true);
    text(ctx,'查看剧集与观看方式',pad,footerY+116,25,'#c7ced7');
    text(ctx,new URL(o.url).hostname,pad,footerY+166,20,'#afbdce');
    text(ctx,document.querySelector('.eyebrow').textContent,pad,footerY+210,20,'#afbdce');
    ctx.imageSmoothingEnabled=false;ctx.drawImage(qr,width-pad-224,footerY+24,224,224);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    canvas.width=canvas.height=1;if(!blob)throw Error('encode-failed');
    const name=(o.title.replace(/[\\/:*?"<>|\u0000-\u001f]/g,'').slice(0,60)||'红果TV')+'-'+o.episode+'.png';
    return {blob,file:typeof File==='function'?new File([blob],name,{type:'image/png'}):null,name};
  }
  function supported(file){try{return file&&navigator.share&&navigator.canShare&&navigator.canShare({files:[file]});}catch{return false;}}
  async function ensure(){
    const token=epoch;status.textContent='正在生成分享海报…';retry.hidden=true;
    try{
      if(!pending)pending=create(options).then(value=>(ready=value,value)).catch(error=>{pending=null;throw error;});
      const value=await pending;if(token!==epoch||!dialog.open)return;
      if(!objectUrl)objectUrl=URL.createObjectURL(value.blob);
      image.src=objectUrl;image.hidden=false;save.href=objectUrl;save.download=value.name;save.hidden=false;
      share.hidden=!supported(value.file);status.textContent='海报已生成，可保存图片并复制文案。';
    }catch{if(token!==epoch||!dialog.open)return;status.textContent='海报暂未生成，请重试；也可以先复制分享文案或链接。';retry.hidden=false;}
  }
  window.HongguoPoster={open(o){
    options=o;epoch++;
    document.getElementById('poster-title').textContent='保存分享海报';
    document.getElementById('poster-guide').textContent='保存海报并复制文案，可发给好友或发布到朋友圈。';
    if(/MicroMessenger|iPhone|iPad/i.test(navigator.userAgent))document.getElementById('poster-guide').textContent+=' 也可以长按下方海报保存图片。';
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');ensure();
  }};
  document.getElementById('close-poster').onclick=()=>dialog.close?dialog.close():dialog.removeAttribute('open');
  dialog.addEventListener('close',()=>{epoch++;});
  document.getElementById('copy-poster-text').onclick=async()=>{status.textContent=await options.copy(options.shareText)?'分享文案已复制，可粘贴到微信。':'复制未完成，请使用页面上的复制入口重试。';};
  retry.onclick=()=>ensure();
  save.onclick=()=>{status.textContent='已发起图片保存；若未保存，请长按海报选择保存图片。';};
  share.onclick=async()=>{if(!ready||!supported(ready.file))return;share.disabled=true;
    try{await navigator.share({title:options.title,files:[ready.file]});status.textContent='已交给系统分享面板，请选择微信或其他平台。';}
    catch(error){if(error.name!=='AbortError')status.textContent='系统分享未完成，请保存海报后在微信中选择图片。';}
    finally{share.disabled=false;}
  };
  addEventListener('pagehide',event=>{epoch++;if(!event.persisted){if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=null;}});
  addEventListener('pageshow',event=>{if(event.persisted&&dialog.open)ensure();});
})();(()=>{
  const main=document.querySelector('main'),title=main.dataset.title,url=main.dataset.url;
  const episode=document.querySelector('.episode').textContent,description=document.querySelector('meta[name="description"]').content;
  const shareText=[title+' · '+episode,description,url].filter(Boolean).join('\n');
  const status=document.getElementById('status'),box=document.getElementById('lightbox');
  const guide=document.getElementById('share-guide-dialog'),shareGuide=document.getElementById('share-guide'),wechat=/MicroMessenger/i.test(navigator.userAgent);
  function say(text){status.textContent=text;}
  async function copy(text){
    try{
      let copied=false;
      if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(text);copied=true;}catch{}}
      if(!copied){const e=document.createElement('textarea');e.value=text;e.style.position='fixed';e.style.opacity='0';document.body.append(e);e.select();let ok=false;try{ok=document.execCommand('copy');}finally{e.remove();}if(!ok)throw Error();}
      say(text===title?'剧名已复制':text===shareText?'分享文案已复制，请粘贴给朋友':'链接已复制，请粘贴到要分享的平台');
      return true;
    }catch{say('复制未完成，请长按地址栏复制链接');return false;}
  }
  async function system(){
    if(navigator.share){try{await navigator.share({title,text:title,url});say('已交给系统分享面板');}catch(e){if(e.name!=='AbortError')await copy(url);}}
    else await copy(url);
  }
  function openDialog(d){if(typeof d.showModal==='function')d.showModal();else d.setAttribute('open','');}
  shareGuide.onclick=()=>wechat?openDialog(guide):system();
  if(!wechat){shareGuide.querySelector('.share-guide-label').textContent='分享给朋友';shareGuide.setAttribute('aria-label','分享给朋友');}
  document.getElementById('close-share-guide').onclick=()=>guide.close?guide.close():guide.removeAttribute('open');
  const synopsis=document.getElementById('story-description'),toggle=document.getElementById('toggle-description');
  if(synopsis&&toggle){requestAnimationFrame(()=>{toggle.hidden=synopsis.scrollHeight<=synopsis.clientHeight+1;});toggle.onclick=()=>{const expanded=synopsis.classList.toggle('expanded');toggle.textContent=expanded?'收起简介':'展开简介';toggle.setAttribute('aria-expanded',String(expanded));};}
  document.getElementById('open-image').onclick=()=>openDialog(box);
  document.getElementById('close-image').onclick=()=>box.close?box.close():box.removeAttribute('open');
  document.querySelectorAll('[data-share]').forEach(b=>b.onclick=async()=>{
    const kind=b.dataset.share;
    if(kind==='copy'||kind==='title'||kind==='text'){await copy(kind==='title'?title:kind==='text'?shareText:url);return;}
    if(kind==='poster'){window.HongguoPoster.open({mode:kind,title,episode,description,url,shareText,copy,embeddedDetails:main.dataset.imageKind==='cover'});return;}
    const destinations={
      telegram:'https://t.me/share/url?'+new URLSearchParams({url,text:title}),
      qq:'https://connect.qq.com/widget/shareqq/index.html?'+new URLSearchParams({url,title,summary:document.querySelector('meta[name="description"]').content,pics:document.querySelector('.hero img').src}),
      weibo:'https://service.weibo.com/share/share.php?'+new URLSearchParams({url,title,pic:document.querySelector('.hero img').src})
    };
    if(destinations[kind]){
      try{window.open(destinations[kind],'_blank','noopener');say('请在平台页面选择分享对象；若未打开，请用“复制链接”或“更多分享”。');}
      catch{await system();}
      return;
    }
    await system();
  });
})();