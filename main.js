    const ctx = document.getElementById('myChart').getContext('2d');
    var slider = document.getElementById("myRange");
    var pricelist = [];
    var output = document.getElementById("value");
    var bundle = document.getElementById("bundle");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    output.innerHTML = slider.value + ' $'; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
var Slidervalues = [1000,1500,3000,4500,4750,5500,7250,8600,9350,10350,13100,15850,18600,20350,25700];
slider.oninput = function(){
    output.innerHTML = Slidervalues[this.value];
};
slider.oninput();

    option1.addEventListener('change', function() {
    if (this.checked) {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] += 1500
            console.log(Slidervalues[i])
        }
        slider.oninput();
        myChart.data.datasets[0].data[19]=1;
        myChart.update();
        updateBundle();
    } else {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] -= 1500
        }
        slider.oninput();
        myChart.data.datasets[0].data[19]=0;
        myChart.update();
        updateBundle();
    }
  });

  option2.addEventListener('change', function() {
    if (this.checked) {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] += 1500
        }
        slider.oninput();
        myChart.data.datasets[0].data[20]=1;
        myChart.update();
        updateBundle();

    } else {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] -= 1500
        }
        slider.oninput();
        myChart.data.datasets[0].data[20]=0;
            myChart.update();
            updateBundle();

    }
  });
  option3.addEventListener('change', function() {
    if (this.checked) {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] += 2000
        }
        slider.oninput();
        myChart.data.datasets[0].data[21]=1;
        myChart.update();
        updateBundle();

    } else {
        for(var i = 0;i<Slidervalues.length;i++){
            Slidervalues[i] -= 2000
        }
        slider.oninput();
        myChart.data.datasets[0].data[21]=0;
            myChart.update();
            updateBundle();

    }
  });

    let myChart = new Chart(ctx,{
    
      type:'pie',
      data: {
        labels: ['Social Media Management : Daily Posts', 'Social Media Management : Publishing & Engagement','Social Media Management : Unique Designs ',
        'Social Media Promoting : Creating ads','Social Media Promoting : Lead generation',' Social Media Promoting : Persona profile - Reporting Conversion',
        'Internal SEO','External SEO : Google analytics service','External SEO : Ranking Keywords','External SEO : Monthly Advanced Report',
        'Advanced SEO : E-Commerce Leads','Advanced SEO : Reputation Management','Advanced SEO : Press Release Management',
        'Web Development - Basic 10 Pages','Web Development - Pro  50 Pages','Web Development - Advanced 100 Page',
        'Content Marketing: Basic  10 Pages','Content Marketing: Pro  20 Pages','Content Marketing: Advanced : 10 Pages, High-end design',
        'Social Media Branding : Name - logo - Identity - Content','Social Media Branding : Vision & Mission - Creating profile','Social Media Branding : Optimize profiles & Linking with social media'
    ],
        datasets : [
          {
            data : [1],
            backgroundColor:['#FFF2EB', '#FFE5D6', '#FFD8C2'
        ,'#FFCBAD','#FFBE99','#FFB185'
        ,'#FFA570','#FF985C','#FF8B47',
        '#FF7E33','#FF711F','#FF640A',
        '#F55A00','#E05200','#ffa089',
        '#ffe5b4','#CC4B00',
        '#A33C00','#CC4B00',
        '#00ff00','#d0ff14','#a7fc00'],
            borderWidth:2,
            hoverBackgroundColor:'#05A28D',
            hoverBorderColor:'white',
            hoverBorderWidth:8,
            
          }
        ]
      },
      options: {
        legend: {
           display: false,
           position:'bottom',
           
        }
        
      }
    
    });
    slider.addEventListener('change',e =>{
        switch(slider.value){
            case '0':
                pricelist = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();
                break;
            case '1':
                pricelist = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();
            break;
            case '2':
                pricelist = [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();
            break;
            case '3':
                pricelist = [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '4':
                pricelist = [1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '5':
                pricelist = [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '6':
                pricelist = [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '7':
                pricelist = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '8':
                pricelist = [1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '9':
                pricelist = [1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '10':
                pricelist = [1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '11':
                pricelist = [1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '12':
                pricelist = [1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '13':
                pricelist = [1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1]
                updateChartData(pricelist);
                updateBundle();

            break;
            case '14':
                pricelist = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1]
                updateChartData(pricelist);
                updateBundle();

            break;
            default:
        }
    })
    const updateBundle = ()=>{
        var labelsText= ''
        for(var i = 0 ;i<myChart.data.datasets[0].data.length;i++){
            if(myChart.data.datasets[0].data[i] != 0 && myChart.data.datasets[0].data[i] != undefined){
                labelsText += myChart.data.labels[i] + '<br/>';
            }
        }
        
        bundle.innerHTML = labelsText;
    }
    const oneTimeUpdate = (num) =>{
        if(num == 1){
            myChart.data.datasets[0].data[19]=1;
            myChart.update();
        }else if(num == 2){
            myChart.data.datasets[0].data[20]=1;
            myChart.update();
        }else{
            myChart.data.datasets[0].data[21]=1;
            myChart.update();
        }
    }
    const updateChartData = (input)=>{
        var arrayLength = input.length;
        for(var i = 0;i< arrayLength; i++){
            myChart.data.datasets[0].data[i] = input[i];
            myChart.update();
        }
    }
    $(".flip").click(function(){
        $(this).parents(".card").toggleClass("flipped");
      });