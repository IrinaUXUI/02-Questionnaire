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

const ctx6 = document.getElementById('myChart6').getContext('2d');
const opinions6 = document.getElementById('myChartOpinions6').getContext('2d');

const ctx7 = document.getElementById('myChart7').getContext('2d');
const opinions7 = document.getElementById('myChartOpinions7').getContext('2d');

const ctx8 = document.getElementById('myChart8').getContext('2d');
const opinions8 = document.getElementById('myChartOpinions8').getContext('2d');

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
const myChart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['Трейлър/Тийзър','Жанр, година, награди и сюжет','Актьори и колектив','Мнения на критици','Мнения на други потребители'],
        datasets: [{
            data: [10,14,17,6,4],
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


const myChartOpinions5 = new Chart(opinions5, {
    type: 'bar',
    data: {
        labels: ['Трейлър/Тийзър', 'Жанр, година и сюжет', 'Актьори и информация за колектива', 'Мнения на критици', 'Мнения на други потребители'],
        datasets: [{
            label: 'Няма да я споменавам',
            data: [3, 1, 1, 5, 5],
            backgroundColor: [
                '#FF7300',
            ],
            borderColor: [
                '#FF7300',  
            ],
            borderWidth: 1
        },
        {
            label: 'Слабо ще я засегна',
            data: [3, 4, 2, 6, 5],
            backgroundColor: [
                '#FC49AB', 
            ],
            borderColor: [
                '#FC49AB',  
            ],
            borderWidth: 1
        },
        {
            label: 'Ще я спомена с няколко  думи',
            data: [7, 4, 3, 6, 9],
            backgroundColor: [
                '#64FF00',
            ],
            borderColor: [
                '#64FF00',   
            ],
            borderWidth: 1
        },
         {
            label: 'Ще и отделя няколко реда',
            data: [6, 11, 15, 5, 3],
            backgroundColor: [  
                '#5FE8FF',
            ],
            borderColor: [
                '#5FE8FF',   
            ],
            borderWidth: 1
        },
        {
            label: 'Ще наблегна най-вече на това',
            data: [4,3,2,1,1],
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
/* ROW 5 END*/


/* ROW 6 START*/
const myChart6 = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: ['Биографии на актьорите', 'Биографии на останалите участници', 'Информация от снимачната площадка', 'Информация за продажбите', 'Информация за награди'],
        datasets: [{
            data: [11,11,9,3,14],
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


const myChartOpinions6 = new Chart(opinions6, {
    type: 'bar',
    data: {
        labels: ['Биографии на актьорите', 'Биографии на останалите участници', 'Информация от снимачната площадка', 'Информация за продажбите', 'Информация за награди'],
        datasets: [{
            label: 'Не ме интересува',
            data: [2, 5, 4, 6, 2],
            backgroundColor: [
                '#FF7300',
            ],
            borderColor: [
                '#FF7300',  
            ],
            borderWidth: 1
        },
        {
            label: 'Слабо ме интересува',
            data: [6, 5, 6, 7, 2],
            backgroundColor: [
                '#FC49AB', 
            ],
            borderColor: [
                '#FC49AB',  
            ],
            borderWidth: 1
        },
        {
            label: 'Безразлично ми е',
            data: [4, 2, 4, 7, 5],
            backgroundColor: [
                '#64FF00',
            ],
            borderColor: [
                '#64FF00',   
            ],
            borderWidth: 1
        },
         {
            label: 'Интересува ме',
            data: [7, 10, 8, 2, 8],
            backgroundColor: [  
                '#5FE8FF',
            ],
            borderColor: [
                '#5FE8FF',   
            ],
            borderWidth: 1
        },
        {
            label: 'Силно ме интересува',
            data: [4,1,1,1,6],
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
/* ROW 6 END*/

/* ROW 7 START*/
const myChart7 = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: ['Запазване на коментар', 'Известия на мобилно устройство ', 'Абонамент за тема', 'Лични бележки и/или запазване на информация', 'Възможност за блокиране на потребители'],
        datasets: [{
            data: [10,4,13,7,11],
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


const myChartOpinions7 = new Chart(opinions7, {
    type: 'bar',
    data: {
        labels: ['Запазване на коментар', 'Известия на мобилно устройство ', 'Абонамент за тема', 'Лични бележки/запазване на информация', 'Възможност за блокиране на потребители'],
        datasets: [{
            label: 'Не ме интересува',
            data: [2, 3, 1, 2, 3],
            backgroundColor: [
                '#FF7300',
            ],
            borderColor: [
                '#FF7300',  
            ],
            borderWidth: 1
        },
        {
            label: 'Слабо ме интересува',
            data: [6, 10, 2, 8, 5],
            backgroundColor: [
                '#FC49AB', 
            ],
            borderColor: [
                '#FC49AB',  
            ],
            borderWidth: 1
        },
        {
            label: 'Безразлично ми е',
            data: [5, 6, 7, 6, 4],
            backgroundColor: [
                '#64FF00',
            ],
            borderColor: [
                '#64FF00',   
            ],
            borderWidth: 1
        },
         {
            label: 'Интересува ме',
            data: [8, 2, 10, 4, 8],
            backgroundColor: [  
                '#5FE8FF',
            ],
            borderColor: [
                '#5FE8FF',   
            ],
            borderWidth: 1
        },
        {
            label: 'Силно ме интересува',
            data: [2,2,3,3,3],
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
/* ROW 7 END*/

/* ROW 8 START*/
const myChart8 = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: ['Известия за нови коментари', 'Абониране за нови коментари на потребители', 'Абониране за новини за филми', 'Показване на оценките от други потребители','Възможност да не се показват теми'],
        datasets: [{
            data: [7,7,12,9,9],
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


const myChartOpinions8 = new Chart(opinions8, {
    type: 'bar',
    data: {
        labels: ['Известия за нови коментари', 'Абониране за нови коментари на потребители', 'Абониране за новини за филми', 'Показване на оценките от други потребители','Възможност да не се показват теми'],
        datasets: [{
            label: 'Не ме интересува',
            data: [0, 2, 0, 2, 1],
            backgroundColor: [
                '#FF7300',
            ],
            borderColor: [
                '#FF7300',  
            ],
            borderWidth: 1
        },
        {
            label: 'Слабо ме интересува',
            data: [8, 7, 5, 6, 6],
            backgroundColor: [
                '#FC49AB', 
            ],
            borderColor: [
                '#FC49AB',  
            ],
            borderWidth: 1
        },
        {
            label: 'Безразлично ми е',
            data: [8, 7, 6, 6, 7],
            backgroundColor: [
                '#64FF00',
            ],
            borderColor: [
                '#64FF00',   
            ],
            borderWidth: 1
        },
         {
            label: 'Интересува ме',
            data: [6, 5, 10, 7, 4],
            backgroundColor: [  
                '#5FE8FF',
            ],
            borderColor: [
                '#5FE8FF',   
            ],
            borderWidth: 1
        },
        {
            label: 'Силно ме интересува',
            data: [1,2,2,2,5],
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
/* ROW 8 END*/