export const Card = ({ category, name, url, img }) => {
  const buttons = [];
  const categoryBadge = category;
  let newCategoryBadge = "";
  
  let categoryClass = category
    .map((item) => item.replaceAll(" ", "-"))
    .join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  if (url.Whatsapp) {
    const btn = `<a href=${url.Whatsapp} class="flex justify-center items-center bg-[#00BB2D] text-white px-2 py-1 rounded hover:bg-[#00BB2D]/70 text-center"><img class='w-10' src="../icons/whatsapp.svg"></a>`;
    buttons.push(btn);
  }
  if (url.Telegram) {
    const btn = `<a href=${url.Telegram} class="flex justify-center items-center bg-[#3390ec] text-white px-2 py-1 rounded hover:bg-[#3390ec]/70"><img class='w-10' src="../icons/telegram.svg"></a>`;
    buttons.push(btn);
  }
  if (url.Discord) {
    const btn = `<a href=${url.Discord} class="flex justify-center items-center bg-[#5865f2] text-white px-2 py-1 rounded hover:bg-[#5865f2]/70"><img class='w-10' src="../icons/discord.svg"></a>`;
    buttons.push(btn);
  }

  if (categoryBadge.includes("Educação")) {
    newCategoryBadge = `<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3 " src="../icons/book.svg">`;
  }
  if (categoryBadge.includes("Gestão e Negócios")) {
    newCategoryBadge = `<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/business.svg">`;
  }
  if (categoryBadge.includes("Jurídico")) {
    newCategoryBadge = `<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/scale.svg">`;
  }
  if (categoryBadge.includes("Tecnologia da Informação")) {
    newCategoryBadge = `<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="../icons/cpu.svg">`;
  }


  
  return `
            <article class="coursesGroups block max-w-10/12 sm:max-w-1/3 rounded  bg-neutral-200 hover:scale-105 transition-all hover:transition-all ${categoryClass}">
              ${newCategoryBadge}
                <main class="py-3">
                    <h2 class="mx-10 text-center pb-3 text-[#0C151D] ">
                        ${name}
                    </h2>
                    <figure>
                    <img class="object-cover aspect-16/9" src=${img}>
                    </figure>
                </main>
                <footer class="flex items-stretch justify-center gap-3 p-3">
                ${buttons.join("")}
                </footer>
            </article>
        `;
};
