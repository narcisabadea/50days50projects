const projects = [
  {
    name: "expanding cards",
    url: "/Day%201%20-%20expanding%20cards/",
  },
  {
    name: "progress stepper",
    url: "/Day%202%20-%20stepper/",
  },
  {
    name: "rotating navigation",
    url: "/Day%203%20-%20rotating%20navigation/",
  },
  {
    name: "hidden search widget",
    url: "/Day%204%20-%20hidden%20search%20widget/",
  },
  {
    name: "blurry loading",
    url: "/Day%205%20-%20blurry%20loading/",
  },
  {
    name: "scroll animation",
    url: "/Day%206%20-%20scroll%20animation/",
  },
  {
    url: "/Day%207%20-%20split%20landing%20page/",
    name: "split landing page",
  },
  {
    url: "/Day%208%20-%20form%20wave%20animation/",
    name: "form wave animation",
  },
  {
    url: "/Day%209%20-%20sound%20board/",
    name: "zound board",
  },
  {
    url: "/Day%2010%20-%20inspirational%20quotes/",
    name: "inspirational quotes",
  },
  {
    url: "/Day%2011%20-%20event%20key%20codes/",
    name: "event key codes",
  },
  {
    url: "/Day%2012%20-%20FAQ%20collapse/",
    name: "FAQ collapse",
  },
  {
    url: "/Day%2013%20-%20choise%20picker/",
    name: "Choise picker",
  },
  {
    url: "/Day%2014%20-%20animated%20navigation/",
    name: "Animated navigation",
  },
  {
    url: "/Day%2015%20-%20increment%20counter/",
    name: "Increment counter",
  },
  {
    url: "/Day%2016%20-%20drink%20water/",
    name: "Drink water",
  },
  {
    url: "/Day%2017%20-%20movie%20layout/",
    name: "Movie layout",
  },
  {
    url: "/Day%2018%20-%20background%20slider/",
    name: "Background slider",
  },
  {
    url: "/Day%2019%20-%20theme%20clock/",
    name: "Theme clock",
  },
  {
    url: "/Day%2020%20-%20button%20ripple%20effect/",
    name: "Button ripple effect",
  },
  {
    url: "/Day%2021%20-%20drag%20and%20drop/",
    name: "Drag and drop",
  },
  {
    url: "/Day%2022%20-%20drawing%20app/",
    name: "Drawing app",
  },
  {
    url: "/Day%2023%20-%20kinetic%20css%20loader/",
    name: "Kinetic css loader app",
  },
  {
    url: "/Day%2024%20-%20content%20placeholder/",
    name: "Content placeholder",
  },
  {
    url: "/Day%2025%20-%20sticky%20navbar/",
    name: "Sticky navbar",
  },
  {
    url: "/Day%2026%20-%20double%20vertical%20slider/",
    name: "Double vertical slider",
  },
  {
    url: "/Day%2027%20-%20toast%20notification/",
    name: "Toast notification",
  },
  {
    url: "/Day%2028%20-%20github%20profiles/",
    name: "Github profiles",
  },
  {
    url: "/Day%2029%20-%20double%20heart%20click/",
    name: "Double heart click",
  },
  {
    url: "/Day%2030%20-%20auto%20text%20effect/",
    name: "Auto text effect",
  },
  {
    url: "/Day%2031%20-%20password%20generator/",
    name: "Password generator",
  },
  {
    url: "/Day%2032%20-%20fast%20checkboxes/",
    name: "Fast checkboxes",
  },
  {
    url: "/Day%2033%20-%20notes%20app/",
    name: "Notes app",
  },
  {
    url: "/Day%2034%20-%20animated%20countdown/",
    name: "Animated countdown",
  },
  {
    url: "/Day%2035%20-%20image%20carousel/",
    name: "Image carousel",
  },
  {
    url: "/Day%2036%20-%20hoverboard/",
    name: "Hoverboard",
  },
  {
    url: "/Day%2037%20-%20pokedex/",
    name: "Pokedex",
  },
  {
    url: "/Day%2038%20-%20mobile%20tab%20navigation/",
    name: "Mobile tab navigation",
  },
  {
    url: "/Day%2039%20-%20password%20strength/",
    name: "Password strength",
  },
  {
    url: "/Day%2040%20-%203D%20background%20boxes/",
    name: "3D background boxes",
  },
  {
    url: "/Day%2041%20-%20verify%20account%20UI/",
    name: "Verify account UI",
  },
  {
    url: "/Day%2042%20-%20live%20user%20filter/",
    name: "Live user filter",
  },
  {
    url: "/Day%2043%20-%20feedback%20UI%20design/",
    name: "Feedback UI design",
  },

  {
    url: "/Day%2044%20-%20custom%20range%20slider/",
    name: "Custom range slider",
  },
  {
    url: "/Day%2045%20-%20netflix%20navigation/",
    name: "Netflix navigation",
  },
  {
    url: "/Day%2046%20-%20quiz%20app/",
    name: "Quiz app",
  },
  {
    url: "/Day%2047%20-%20testimonial%20box%20switcher/",
    name: "Testimonial box switcher",
  },
  {
    url: "/Day%2048%20-%20random%20image%20feed/",
    name: "Random image feed",
  },
  {
    url: "/Day%2049%20-%20todo%20list/",
    name: "Todo list",
  },
  {
    url: "/Day%2050%20-%20insect%20catch%20game/",
    name: "Insect catch game",
  },
];

const showProjects = () => {
  projects.forEach((project) => {
    const { name, url } = project;

    const projectEl = document.createElement("div");
    const link = url + "index.html";

    projectEl.innerHTML = `
        <div class="project">
            <a href=${link}>
                <img src="${url + "ss.png"}" alt="${name}">
            </a>
        </div>
    `;
    main.appendChild(projectEl);
  });
};

showProjects();
