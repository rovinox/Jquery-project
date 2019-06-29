$(()=>{
    const todo = [
        {
            task:"to do tutorial",
            isComplted:false
        },
        {
            task:"take a nap",
            isComplted:true

        }
    ]


    const app ={
        showToDo:()=>{
            let todolistEL = $("#todo-list")
            todolistEL.html("")
            todolistEL.forEach(todo => {
                 todolistEL.append("")
                
            });
        }
    }
})