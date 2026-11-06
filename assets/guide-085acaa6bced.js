const deviceSearch = document.querySelector('#device-search');
const deviceFilters = [...document.querySelectorAll('.device-filters button')];
const deviceGuides = [...document.querySelectorAll('.device-guide')];
let selectedCategory = 'all';

function filterDevices() {
  const query = deviceSearch.value.trim().toLocaleLowerCase();
  let count = 0;
  deviceGuides.forEach(guide => {
    const matches = (selectedCategory === 'all' || guide.dataset.category === selectedCategory) && guide.dataset.search.toLocaleLowerCase().includes(query);
    guide.hidden = !matches;
    if (matches) count++;
  });
  deviceFilters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === selectedCategory)));
  document.querySelector('#device-count').textContent = `${count} 组设备指引`;
  document.querySelector('#device-empty').hidden = count > 0;
}
deviceSearch.addEventListener('input', filterDevices);
deviceFilters.forEach(button => button.addEventListener('click', () => {
  selectedCategory = button.dataset.category;
  filterDevices();
}));
document.querySelector('.device-clear').addEventListener('click', () => {
  deviceSearch.value = '';
  filterDevices();
  deviceSearch.focus();
});

function revealTarget() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!(target instanceof HTMLDetailsElement)) return;
  if (target.classList.contains('device-guide') && target.hidden) {
    selectedCategory = 'all';
    deviceSearch.value = '';
    filterDevices();
  }
  target.open = true;
  requestAnimationFrame(() => target.scrollIntoView({block:'start',behavior:'auto'}));
}
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  if (link.hash === location.hash) revealTarget();
}));
window.addEventListener('hashchange', revealTarget);
filterDevices();
revealTarget();

document.querySelector('.copy-download').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  const address = document.querySelector('#download-address').textContent;
  try {
    await navigator.clipboard.writeText(address);
    status.textContent = '下载地址已复制';
  } catch {
    status.textContent = '未能复制，请选中上方地址手动复制';
  }
});
