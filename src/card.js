export const Card = ({ category, name, url, img }) => {
  // Verifica se todos os valores obrigatórios estão presentes
  if (!category || !name || !url || !img) {
      console.error("Erro: Todos os argumentos são obrigatórios.");
      return null; // Se algum valor faltar, retorna null
  }

  // Mapeia as categorias para ícones correspondentes
  const categoryBadgeMap = {
    "Educação": "../icons/book.svg",
    "Gestão e Negócios": "../icons/business.svg",
    "Jurídico": "../icons/scale.svg",
    "Tecnologia da Informação": "../icons/cpu.svg",
    "Geral": "../icons/message.svg"
  };

  // Formata as categorias para uso em classes CSS (remover acentuação, substituir espaços por hífens e converter para minúsculas)
  const categoryClass = category
    .map(item => item.replaceAll(" ", "-")) // Substitui espaços por hífens
    .join(" ") // Junta as categorias em uma string
    .normalize("NFD") // Normaliza para separar caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .toLowerCase(); // Converte para minúsculas

  // Função para renderizar um botão de plataforma com o ícone correspondente
  const renderButton = (platform, url, icon) => {
    return url ? `<a href="${url}" class="flex justify-center items-center bg-${platform.color} text-white px-2 py-1 rounded text-center"><img class='w-10' src="${icon}"></a>` : '';
  };

  // Gera os botões para WhatsApp, Telegram e Discord
  const buttons = [
    { platform: { name: 'Whatsapp', color: 'whatsapp' }, url: url.Whatsapp, icon: '../icons/whatsapp.svg' },
    { platform: { name: 'Telegram', color: 'telegram' }, url: url.Telegram, icon: '../icons/telegram.svg' },
    { platform: { name: 'Discord', color: 'discord' }, url: url.Discord, icon: '../icons/discord.svg' }
  ].map(({ platform, url, icon }) => {
    if (Array.isArray(url)) {
      // Se 'url' for um array, renderiza múltiplos botões
      return url.map(singleUrl => renderButton(platform, singleUrl, icon)).join(''); 
    } else {
      // Caso contrário, renderiza um único botão
      return renderButton(platform, url, icon); 
    }
  }).join(''); // Junta todos os botões gerados em uma string

  // Cria o ícone da categoria correspondente, se houver
  const newCategoryBadge = Object.entries(categoryBadgeMap)
    .filter(([key]) => category.includes(key)) // Filtra as categorias presentes
    .map(([, icon]) => `<img class="bg-[#DF303F] p-3 rounded-full absolute -mt-3 -ml-3" src="${icon}">`) // Cria o ícone
    .join(''); // Junta os ícones em uma string

  // Retorna o HTML do card com todas as informações, incluindo categorias, nome, imagem e botões de plataformas
  return `
    <article class="coursesGroups flex flex-col rounded bg-neutral-200 hover:scale-105 transition-all duration-500 ease-in-out ${categoryClass}">
      ${newCategoryBadge} 
      <header class="py-3 flex-1 flex justify-center items-center">
        <h2 class="mx-10 text-center text-[#0C151D]">${name}</h2> 
      </header>
      <main class="pb-3">
        <figure>
          <img class="object-cover aspect-16/9" src="${img}">
        </figure>
      </main>
      <footer class="flex items-stretch justify-center gap-3 p-3">
        ${buttons} 
      </footer>
    </article>
  `;
};
