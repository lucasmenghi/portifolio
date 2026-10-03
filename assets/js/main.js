window.addEventListener('load', function(){ document.body.classList.remove('is-preload'); });

// Reveal collapsed groups when using an existing subarea link or a deep link.
function revealProjectGroup(hash) {
  if (!hash || hash === '#') return;
  let target;
  try { target = document.getElementById(decodeURIComponent(hash.slice(1))); }
  catch (_) { return; }
  if (!target) return;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
  requestAnimationFrame(function(){ target.scrollIntoView({block:'start'}); });
}
window.addEventListener('DOMContentLoaded', function(){ revealProjectGroup(location.hash); });
window.addEventListener('hashchange', function(){ revealProjectGroup(location.hash); });
document.addEventListener('click', function(event){
  const link = event.target.closest('.subarea-nav a[href^="#"]');
  if (link) revealProjectGroup(link.getAttribute('href'));
});
