import "./style.css";
import groups from "./groups.json";
import { Card } from "./card";

// Função para criar os botões de filtro
const createFilterButton = (category, icon, label) => {
  return `
    <button class="btn-filter flex justify-start items-center text-start gap-3 bg-[#DF303F] w-10/12 sm:w-auto px-3 py-2 rounded hover:cursor-pointer hover:bg-[#DF303F]/80" data-category="${category}">
      <img class='w-6' src="${icon}">
      ${label}
    </button>
  `;
};

// Lista de categorias e seus ícones
const filterButtons = [
  { category: "todos", icon: "../icons/star.svg", label: "Todos" },
  { category: "geral", icon: "../icons/message.svg", label: "Geral" },
  { category: "educacao", icon: "../icons/book.svg", label: "Educação" },
  {
    category: "gestao-e-negocios",
    icon: "../icons/business.svg",
    label: "Gestão e Negócios",
  },
  { category: "juridico", icon: "../icons/scale.svg", label: "Jurídico" },
  {
    category: "tecnologia-da-informacao",
    icon: "../icons/cpu.svg",
    label: "Tecnologia da Informação",
  },
]
  .map(({ category, icon, label }) => createFilterButton(category, icon, label))
  .join("");

// Renderizando os grupos
groups.sort((a, b) => {
  // Primeiro, verifica se "Geral" está na categoria do grupo
  const isAGeneral = a.category.includes("Geral");
  const isBGeneral = b.category.includes("Geral");

  // Se ambos ou nenhum for "Geral", faz a ordenação alfabética
  if (isAGeneral === isBGeneral) {
    return a.name.localeCompare(b.name);
  }

  // Se um deles for "Geral", coloca o grupo "Geral" primeiro
  return isAGeneral ? -1 : 1;
});
console.log(groups);

const listGroups = groups.map(Card).join("");

// Montando o HTML
document.querySelector("#app").innerHTML = `
  <section class="min-w-[200px]">
    <header class="container-full flex flex-col items-center justify-center px-3 bg-neutral-200 py-8">
      <img class='rounded-full object-contain' src='../icons/logo-gran.png'>
      <h1 class="sm:text-2xl text-xl font-bold text-center text-black py-5">Gran Faculdade - Grupos</h1>
      <nav class="flex justify-center flex-col sm:flex-row sm:w-auto w-full items-center gap-3 flex-wrap">
        ${filterButtons}
      </nav>
    </header>
    <main class="container px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-12">
      ${listGroups}
    </main>
    <footer class="w-full text-center py-4 bg-[#0C151D] border-t border-gray-700">
      <a href="https://github.com/victorstochero/gran-links" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 text-gray-400 hover:text-white" >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        Código no GitHub
      </a>
      <p> Feito com ❤️ por <a href="https://victors.dev" target="_blank" rel="noopener" class="text-gray-400 hover:text-white">Victor Stochero</a> e comunidade do Gran Faculdade</p>
    </footer>
  </section>
`;

// Adicionando eventos de clique aos botões
document.querySelectorAll(".btn-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const dataCategory = button.getAttribute("data-category");
    dataCategory === "todos" ? exibirTodos() : filterCourse(dataCategory);
  });
});

// Função para filtrar cursos
const filterCourse = (filterCategory) => {
  const allCourses = Array.from(document.querySelectorAll(".coursesGroups"));
  const coursesFiltered = Array.from(
    document.querySelectorAll(`.${filterCategory}`)
  );

  allCourses.forEach((course) => {
    course.hidden = !coursesFiltered.includes(course);
  });
};

// Função para exibir todos os cursos
const exibirTodos = () => {
  const allCourses = Array.from(document.querySelectorAll(".coursesGroups"));
  allCourses.forEach((course) => {
    course.hidden = false;
  });
};
