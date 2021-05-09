
import Chart from 'react-apexcharts';

function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true, //as barras serão horizontais
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
            //categorias das barras: que são os nomes das pessoas que aparecerão no canto
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
                //quais as séries: os valores        
            }
        ]
    };

    return (
        <Chart
        options={{ ...options, xaxis: mockData.labels}}
        series= {mockData.series}
        type= "bar"
        height= "240"
        />

    );   
}

export default BarChart;