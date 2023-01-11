{
    const tasks = [
        {
            content: "zjeść śniadanie",
            done: true,
        },
        {
            content: "zrobić pracę domową",
            done: false,
        },
        {
            content: "założyć majtki",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>
            `;
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
        
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            }
                tasks.push({
                    content: newTaskContent,
                });
            }
        })
    }

    init();
}