(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=[{category:["Educação"],name:"Pedagogia",url:{Whatsapp:"https://wa.me/",Telegram:"https://web.telegram.org/"},img:"../img/educacao.jpg"},{category:["Gestão e Negócios"],name:"Administração",url:{Whatsapp:"https://wa.me/",Telegram:"https://web.telegram.org/"},img:"../img/gestao.jpg"},{category:["Gestão e Negócios","Jurídico"],name:"Gestão de Serviços Judiciais e Notariais",url:{Whatsapp:"https://wa.me/",Telegram:"https://web.telegram.org/"},img:"../img/juridico.jpg"},{category:["Tecnologia da Informação"],name:"Análise e Desenvolvimento de Sistemas",url:{Whatsapp:"https://wa.me/",Telegram:"https://web.telegram.org/",Discord:"https://discord.com/"},img:"../img/ti.jpg"}],u=({category:o,name:s,url:r,img:i})=>{const e=[],t=o;let a="",l=o.map(c=>c.replaceAll(" ","-")).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();if(r.Whatsapp){const c=`<a href=${r.Whatsapp} class="flex justify-center items-center bg-[#00BB2D] text-white px-2 py-1 rounded hover:bg-[#00BB2D]/70 text-center"><img class='w-10' src="../icons/whatsapp.svg"></a>`;e.push(c)}if(r.Telegram){const c=`<a href=${r.Telegram} class="flex justify-center items-center bg-[#3390ec] text-white px-2 py-1 rounded hover:bg-[#3390ec]/70"><img class='w-10' src="../icons/telegram.svg"></a>`;e.push(c)}if(r.Discord){const c=`<a href=${r.Discord} class="flex justify-center items-center bg-[#5865f2] text-white px-2 py-1 rounded hover:bg-[#5865f2]/70"><img class='w-10' src="../icons/discord.svg"></a>`;e.push(c)}return t.includes("Educação")&&(a='<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3 " src="../icons/book.svg">'),t.includes("Gestão e Negócios")&&(a='<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/business.svg">'),t.includes("Jurídico")&&(a='<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/scale.svg">'),t.includes("Tecnologia da Informação")&&(a='<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/cpu.svg">'),`
            <article class="coursesGroups block max-w-10/12 sm:max-w-1/3 rounded  bg-neutral-200 hover:scale-105 transition-all hover:transition-all ${l}">
              ${a}
                <main class="py-3">
                    <h2 class="mx-10 text-center pb-3 text-[#0C151D] ">
                        ${s}
                    </h2>
                    <figure>
                    <img class="object-cover aspect-16/9" src=${i}>
                    </figure>
                </main>
                <footer class="flex items-stretch justify-center gap-3 p-3">
                ${e.join("")}
                </footer>
            </article>
        `},g=n.map(u).join("");document.querySelector("#app").innerHTML=`
  <section class="">
    <header class="flex flex-col items-center justify-center bg-neutral-200 py-8">
    
    <img class='rounded-full object-contain bg-' src='../icons/logo-gran.png'>
      <h1 class="sm:text-2xl text-xl font-bold text-center text-black py-5">Gran Faculdade - Grupos</h1>
      <nav class="flex justify-center flex-col sm:flex-row items-center gap-3 flex-wrap ">

        <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="todos">
          <img class='w-6' src="../icons/star.svg"> 
          Todos
        </button>

        <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="educacao">
          <img class='w-6' src="../icons/book.svg">
          Educação
        </button>

        <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="gestao-e-negocios">
          <img class='w-6' src="../icons/business.svg">
          Gestão e Negócios
        </button>

        <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="juridico">
            <img class='w-6' src="../icons/scale.svg">
            Jurídico
        </button>

        <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="tecnologia-da-informacao">
          <img class='w-6' src="../icons/cpu.svg">
          Tecnologia da Informação
        </button>
     
      </nav>
    </header>
    <main class="max-w-5xl mx-auto flex flex-wrap flex-col sm:flex-row gap-6 items-center justify-center my-12">
      ${g}
    </main>
  </section>
`;document.querySelectorAll(".btn-filter").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-category");s==="todos"?m():d(s)})});const d=o=>{let s=Array.from(document.querySelectorAll(".coursesGroups")),r=Array.from(document.querySelectorAll(`.${o}`));s.filter(e=>!r.includes(e)).forEach(e=>{e.setAttribute("hidden","")}),r.forEach(e=>{e.removeAttribute("hidden")})},m=()=>{Array.from(document.querySelectorAll(".coursesGroups")).forEach(s=>{s.removeAttribute("hidden")})};
