import "./style.css";
import groups from "./groups.json";
import { Card } from "./card";

const listGroups = groups.map(Card).join("");

document.querySelector("#app").innerHTML = `
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
      ${listGroups}
    </main>
  </section>
`;
// Adicionando eventos de clique aos botões
document.querySelectorAll(".btn-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const dataCategory = button.getAttribute("data-category");
    if (dataCategory === "todos") {
      exibirTodos();
    } else {
      filterCourse(dataCategory);
    }
  });
});

const filterCourse = (filterCategory) => {
  let allCourses = Array.from(document.querySelectorAll(".coursesGroups"));
  let coursesFiltred = Array.from(
    document.querySelectorAll(`.${filterCategory}`)
  );

  let unfiltredCourses = allCourses.filter(
    (item) => !coursesFiltred.includes(item)
  );

  unfiltredCourses.forEach((course) => {
    course.setAttribute("hidden", "");
  });

  coursesFiltred.forEach((course) => {
    course.removeAttribute("hidden");
  });
};

const exibirTodos = () => {
  let allCourses = Array.from(document.querySelectorAll(".coursesGroups"));
  allCourses.forEach((course) => {
    course.removeAttribute("hidden");
  });
};
