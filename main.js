
    const cases = document.querySelector('.coronavirus-input');
    const deaths = document.querySelector('.deaths-input');
    const recovered = document.querySelector('.recovered-input');
    
    const ctx = document.getElementById('myChart').getContext('2d');
    var slider = document.getElementById("myRange");
    var pricelist = [];
    var output = document.getElementById("value");
    output.innerHTML = slider.value + ' $'; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + ' $';
}
    let myChart = new Chart(ctx,{
    
      type:'pie',
      data: {
        labels: ['Internal SEO', 'External SEO','Advanced SEO','Social Media Branding',
        'Social Media Managment','Social Media Promoting',
        'Content Marketing','Web Design','E-Commerce','Integration'],
        datasets : [
          {
            data : [0,0,0,0,0,0,0,0,0,0],
            backgroundColor:['#2adece', '#dd3b79', '#ff766b'
        ,'#FFFF00','#808080','#c25fd9'
        ,'#5ec367','#990000','#FFFFCC','#0000FF'],
            borderWidth:2,
            hoverBackgroundColor:'blue',
            hoverBorderColor:'white',
            hoverBorderWidth:8,
            
          }
        ]
      },
      options: {
        tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgb(255, 0, 0)'
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#543453';
                }
            }
        },
        legend: {
           display: true,
           position:'right'
        }
        
      }
    
    });
    console.log(recovered);
    slider.addEventListener('change',e =>{
        switch(slider.value){
            case '0':
                pricelist = [0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                break;
            case '200':
                pricelist = [100,100,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
            break;
            case '400':
                pricelist = [150,150,100,0,0,0,0,0,0,0]
                updateChartData(pricelist);
            break;
            case '600':
                pricelist = [150,200,150,100,0,0,0,0,0,0]
                updateChartData(pricelist);
            break;
            case '800':
                pricelist = [250,250,200,75,75,0,0,0,0,0]
                updateChartData(pricelist);
            break;
            case '1000':
                pricelist = [200,200,300,100,100,50,50,0,0,0]
                updateChartData(pricelist);
            break;
            case '1200':
                pricelist = [200,150,150,100,75,50,50,50,25,25]
                updateChartData(pricelist);
            break;
            default:
        }
    })

    const updateChartData = (input)=>{
        console.log(input);
        var arrayLength = input.length;
        for(var i = 0;i< arrayLength; i++){
            myChart.data.datasets[0].data[i] = input[i];
            myChart.update();
        }
    }
    