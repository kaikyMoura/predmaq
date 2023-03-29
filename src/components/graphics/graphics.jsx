//import MachineData from "../../dados/predictive_maintenance.csv";
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

function GraficoA() {
    const [charData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(async () => {
        Papa.parse(MachineData, {
            download: false,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            delimiter: "",
            complete: ((result) => {
               console.log(result) 
            })
        })
    },[])

    return (
        <div>
            <h1>COMPONENTE TESTE</h1>    
        </div>
    );
}

export default GraficoA;