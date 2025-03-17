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
  { category: "gestao-e-negocios", icon: "../icons/business.svg", label: "Gestão e Negócios" },
  { category: "juridico", icon: "../icons/scale.svg", label: "Jurídico" },
  { category: "tecnologia-da-informacao", icon: "../icons/cpu.svg", label: "Tecnologia da Informação" }
].map(({ category, icon, label }) => createFilterButton(category, icon, label)).join("");

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
  <section class="w-screen min-w-[200px]">
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
  const coursesFiltered = Array.from(document.querySelectorAll(`.${filterCategory}`));

  allCourses.forEach(course => {
    course.hidden = !coursesFiltered.includes(course);
  });
};

// Função para exibir todos os cursos
const exibirTodos = () => {
  const allCourses = Array.from(document.querySelectorAll(".coursesGroups"));
  allCourses.forEach(course => {
    course.hidden = false;
  });
};