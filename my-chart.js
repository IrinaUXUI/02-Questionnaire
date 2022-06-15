const ctx1 = document.getElementById('myChart1').getContext('2d');
const opinions1 = document.getElementById('myChartOpinions1').getContext('2d');

const ctx2 = document.getElementById('myChart2').getContext('2d');
const opinions2 = document.getElementById('myChartOpinions2').getContext('2d');

const ctx3 = document.getElementById('myChart3').getContext('2d');
const opinions3 = document.getElementById('myChartOpinions3').getContext('2d');

const ctx4 = document.getElementById('myChart4').getContext('2d');
const opinions4 = document.getElementById('myChartOpinions4').getContext('2d');

const ctx5 = document.getElementById('myChart5').getContext('2d');
const opinions5 = document.getElementById('myChartOpinions5').getContext('2d');

/* ROW 1 START*/
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['% Под 18 години','% от 19 до 34 години','% от 35 до 50 години','% от 51 до 65 години','% над 65 години'],
        datasets: [{
            data: [13, 30.4, 34.8,17.4,4.3],
            backgroundColor: [
                '#E7FF00',
                '#FC49AB',
                '#5FE8FF',
                '#FF7300',
                '#64FF00',
            ],
            borderColor: [
                '#E7FF00',
                '#FC49AB',
                '#5FE8FF',
                '#FF7300',
                '#64FF00',
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius:0.2
        }],
        
    },
    options: {
        responsive:true,
        
    }
});

const myChartOpinions1 = new Chart(opinions1, {
    type: 'bar',
    data: {
        labels: ['Столица', 'Голям град', 'Среден по големина град', 'Малък град', 'Село'],
        datasets: [{
            label: 'Брой на респондентите',
            data: [12, 4, 4, 2, 0],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,

        scales: {
            y: {
                ticks:{
                    color:'#D9D9D9' /*changes color of y axis */
                },
                beginAtZero: true,               
            },
            x:{
                ticks:{
                    color:[/*changes color of x axis */                  
                        '#FF7300',
                        '#FC49AB',
                        '#64FF00',
                        '#5FE8FF',
                        '#E7FF00',
                    ]
                },
            }
        }
        
    }
   
});
/* ROW 1 END*/

/* ROW 2 START*/
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['% с настолен компютър','% с преносим компютър','% с таблет', '% с смартфон','% с нетбук/Ултрабук'],
        datasets: [{
            data: [34.8,30.4,17.4,17.4,0],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius:0.2
        }],
        
    },
    options: {
        responsive:true,
        
    }
});

const myChartOpinions2 = new Chart(opinions2, {
    type: 'bar',
    data: {
        labels: ['По-рядко от веднъж месечно', 'Веднъж месечно', '2-3 пъти на месец', 'Всяка седмица', 'Всеки ден'],
        datasets: [{
            label: 'Брой гледащи',
            data: [2, 3, 6, 9, 3],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,

        scales: {
            y: {
                ticks:{
                    color:'#D9D9D9' /*changes color of y axis */
                },
                beginAtZero: true,               
            },
            x:{
                ticks:{
                    color:[/*changes color of x axis */                  
                        '#FF7300',
                        '#FC49AB',
                        '#64FF00',
                        '#5FE8FF',
                        '#E7FF00',
                    ]
                },
            }
        }
        
    }
   
});
/* ROW 2 END*/

/* ROW 3 START*/
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Водещи дневник','Обсъждащи с приятели','Обсъждащи с колеги', 'Обсъждащи със семейството','Обсъждащи в Интернет'],
        datasets: [{
            data: [0,9,4,6,2],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius:0.2
        }],
        
    },
    options: {
        responsive:true,
        
    }
});


const myChartOpinions3 = new Chart(opinions3, {
    type: 'bar',
    data: {
        labels: ['Място да споделя мислите си за филма', 'Група хора, с които мога да обсъждам', 'Информация, която мога да коментирам на място', 'Информационен бюлетин с възможност за коментари', 'Награди, които могат да се спечелят'],
        datasets: [{
            label: 'Избрали тази опция',
            data: [3, 5, 1, 1, 1],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,

        scales: {
            y: {
                ticks:{
                    color:'#D9D9D9' /*changes color of y axis */
                },
                beginAtZero: true,               
            },
            x:{
                ticks:{
                    color:[/*changes color of x axis */                  
                        '#FF7300',
                        '#FC49AB',
                        '#64FF00',
                        '#5FE8FF',
                        '#E7FF00',
                    ]
                },
            }
        }
        
    }
   
});
/* ROW 4 END*/


/* ROW 4 START*/
const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Актьорите','Сюжетът','Критиката', 'Продуцентите и режисьорите','Клюките'],
        datasets: [{
            data: [20,19,4,6,3],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius:0.2
        }],
        
    },
    options: {
        responsive:true,
        
    }
});


const myChartOpinions4 = new Chart(opinions4, {
    type: 'bar',
    data: {
        labels: ['Актьорите', 'Сюжетът', 'Критиката', 'Продуцентите и режисьорите', 'Клюките'],
        datasets: [{
            label: 'Изобщо не е важна',
            data: [1, 0, 8, 7, 12],
            backgroundColor: [
                '#FF7300',
            ],
            borderColor: [
                '#FF7300',  
            ],
            borderWidth: 1
        },
        {
            label: 'Маловажна',
            data: [1, 2, 5, 5, 1],
            backgroundColor: [
                '#FC49AB', 
            ],
            borderColor: [
                '#FC49AB',  
            ],
            borderWidth: 1
        },
        {
            label: 'Нито важна, нито неважна',
            data: [1, 2, 6, 5, 7],
            backgroundColor: [
                '#64FF00',
            ],
            borderColor: [
                '#64FF00',   
            ],
            borderWidth: 1
        },
         {
            label: 'Важна',
            data: [8, 6, 3, 3, 2],
            backgroundColor: [  
                '#5FE8FF',
            ],
            borderColor: [
                '#5FE8FF',   
            ],
            borderWidth: 1
        },
        {
            label: 'Изключително важна',
            data: [12,13,1,3,1],
            backgroundColor: [    
                '#E7FF00',
            ],
            borderColor: [
                '#E7FF00',
            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive:true,

        scales: {
            y: {
                stacked: true,
                ticks:{
                    color:'#D9D9D9' /*changes color of y axis */
                },
                beginAtZero: true,               
            },
            x:{
                stacked: true,
                ticks:{
                    color:[/*changes color of x axis */                  
                        '#FF7300',
                        '#FC49AB',
                        '#64FF00',
                        '#5FE8FF',
                        '#E7FF00',
                    ]
                },
            }
        }
        
    }
   
});
/* ROW 4 END*/


/* ROW 5 START*/

/* ROW 5 END*/