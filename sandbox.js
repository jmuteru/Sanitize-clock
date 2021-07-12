const clock = document.querySelector('.clock');

// get time func
const tick = ()=>{
        const now = new Date();
        const hours = now.getHours();
        const mins = now.getMinutes();
        const secs = now.getSeconds();

        const addHtml = `
        <span>${hours}</span> :
        <span>${mins}</span>  :
        <span>${secs}</span>  
        
        
        `;

        clock.innerHTML = addHtml;
};

// call tick() after every 1000 miliseconds
setInterval(tick,1000);