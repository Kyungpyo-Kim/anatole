function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const nav = document.querySelector('nav');
  if (navbarBurgers.length < 1) return;
  navbarBurgers.forEach((navbarBurger) => {
    navbarBurger.addEventListener('click', () => {
      navbarBurger.classList.toggle('nav--active');
      nav.classList.toggle('nav--active');
    });
  });
  
  var list = document.getElementById(
      "taxonomy_cloud-contents-ul"
  );
  var nodes = list.children, i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while(i < nodes.length)
  {
      list.appendChild(nodes[i]);
      ++i;
  }
});
