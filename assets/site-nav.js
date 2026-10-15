(() => {
  const trigger = document.querySelector('[data-open-nav]');
  if (!trigger || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.id = 'mpa-navigation';
  dialog.className = 'mpa-nav-dialog';
  dialog.setAttribute('aria-labelledby', 'mpa-nav-title');
  dialog.innerHTML = `<div class="mpa-nav-top"><h2 id="mpa-nav-title">Navegación</h2><button class="mpa-menu-close" type="button" autofocus>Cerrar <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>
  <nav class="mpa-nav-grid" aria-label="Navegación principal">
    <div class="mpa-nav-primary"><a href="index.html">Inicio</a><a href="biografia.html">La artista</a><a href="tienda.html">Tienda</a><a href="experiencias.html">Experiencias</a><a href="prensa.html">Prensa</a><a href="index.html#contacto">Contacto</a></div>
    <div class="mpa-nav-secondary">
      <a href="obras.html">Obras de la artista</a><a href="catalogo.html#obras">Ver todas las obras</a>
      <details><summary>Series</summary><div>
        <a href="albores.html">Albores</a><a href="ancestros.html">Ancestros</a><a href="humanidad-compartida.html">Humanidad compartida</a><a href="women.html">Women</a><a href="outside-the-box.html">Outside the Box</a><a href="folklore.html">Folklore</a><a href="metamorfosis.html">Metamorfosis</a><a href="textiles.html">Textiles</a><a href="fragmentos.html">Fragmentos</a><a href="kintsugi.html"><i class="term-kintsugi">Kintsugi</i></a><a href="expansiones.html">Expansiones</a>
      </div></details>
      <a href="objetos.html">Objetos con arte</a><details><summary>Categorías de objetos</summary><div><a href="objetos.html#toallas">Toallas</a><a href="objetos.html#sombrillas">Sombrillas</a><a href="objetos.html#panoletas">Pañoletas</a><a href="regalos-corporativos.html">Regalos corporativos</a></div></details>
      <a href="index.html#encargos">Obra por encargo</a>
      <details><summary>Talleres y experiencias</summary><div><a href="experiencias.html#hojillas">Hojillas y acrílico</a><a href="experiencias.html#mariposas">Taller de mariposas</a><a href="experiencias.html#obra-colectiva">Obra colectiva</a><a href="experiencias.html#kintsugi-individual"><i class="term-kintsugi">Kintsugi</i> individual</a><a href="experiencias.html#kintsugi-colectivo"><i class="term-kintsugi">Kintsugi</i> colectivo</a><a href="experiencias.html#corporativos">Talleres corporativos</a></div></details>
    </div>
  </nav>`;
  document.body.append(dialog);
  trigger.hidden = false;
  trigger.setAttribute('aria-controls', dialog.id);
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', () => {
    dialog.showModal();
    document.documentElement.classList.add('mpa-nav-lock');
    trigger.setAttribute('aria-expanded', 'true');
  });
  const close = () => dialog.close();
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('a[href],button,summary')].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden' && !el.closest('details:not([open]) div'));
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  dialog.querySelector('.mpa-menu-close').addEventListener('click', close);
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right)) close();
    if (event.target.closest('a')) close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('mpa-nav-lock');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus({preventScroll:true});
  });
  const pageName = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  document.querySelectorAll('.mpa-header a,.mpa-nav-dialog a').forEach(a => {
    const url = new URL(a.href);
    if (!url.hash && url.origin === location.origin && url.pathname.split('/').pop().replace(/\.html$/, '') === pageName) a.setAttribute('aria-current','page');
  });
})();
