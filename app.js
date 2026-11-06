/* 介绍站保持纯静态：不读取账号信息，不依赖第三方接口即可浏览与下载。 */
// 静态 HTML 不绑定域名；浏览器中的页面标识跟随当前 CDN 入口。
const pageUrl = new URL(location.pathname, location.origin).href;
document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
const preview = document.querySelector('meta[property="og:image"]');
if (preview) preview.setAttribute('content', new URL(preview.getAttribute('content'), location.href).href);
const screens = {
  discovery: { image: 'assets/discovery.webp', alt: '找剧页的热门榜单和海报网格', title: '想找什么，都有入口。', description: '多个热门榜单，搭配真人剧 / 漫剧分类筛选，浏览与搜索各得其所。' },
  playback: { image: 'assets/playback.webp', alt: '正剧播放界面的进度条与遥控器操作菜单', title: '把常用操作，放在手边。', description: '进度、选集、清晰度与倍速，在视频上直接操作。返回键逐层收起面板。' },
  danmaku: { image: 'assets/danmaku.webp', alt: '视频上半屏显示带头像的彩色弹幕', title: '一起看，也自在看。', description: '带头像的彩色弹幕，支持四档字号、全屏 / 半屏、速度与透明度，随自己的习惯调整。' },
  episodes: { image: 'assets/episodes.webp', alt: '分组选集面板，展示分组与各集按钮', title: '想看哪集，直接到达。', description: '分组浏览与清晰焦点，遥控器就能快速选集，继续上一段精彩。' }
};
const tabs = [...document.querySelectorAll('.showcase-tab')];
const panel = document.querySelector('#screen-panel');
const screenImage = document.querySelector('#screen-image');
const dialog = document.querySelector('#image-dialog');
const dialogImage = document.querySelector('#dialog-image');

function selectScreen(tab, focus = false) {
  const screen = screens[tab.dataset.screen];
  if (!screen) return;
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  screenImage.src = screen.image;
  screenImage.alt = screen.alt;
  document.querySelector('#screen-title').textContent = screen.title;
  document.querySelector('#screen-description').textContent = screen.description;
  document.querySelector('#screen-count').textContent = `0${tabs.indexOf(tab) + 1} / 04`;
  panel.setAttribute('aria-labelledby', tab.id);
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectScreen(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectScreen(tabs[next], true);
  });
});

document.querySelector('.screen-expand')?.addEventListener('click', () => {
  dialogImage.src = screenImage.src;
  dialogImage.alt = screenImage.alt;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else window.open(screenImage.src, '_blank', 'noopener');
});
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
function closeNav() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', '展开导航');
  navLinks.classList.remove('is-open');
}
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(expanded));
  navToggle.setAttribute('aria-label', expanded ? '收起导航' : '展开导航');
  navLinks.classList.toggle('is-open', expanded);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    closeNav();
    navToggle.focus();
  }
});
