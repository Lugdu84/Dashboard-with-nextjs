import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip)

type Props = {}

const BarChart = (props: Props) => {
    const [chartData, setChartData] = useState<any>({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState<any>({})
    
    useEffect(() => {
        setChartData({
            labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
            datasets: [
                {
                    label: "Ventes en €",
                    data: [12400, 8400, 13000, 11500, 9800, 16000, 4300],
                    backgroundColor: "#4F46E5",
                    hoverOffset: 4,
                },
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Revenu quotidien'
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        })


    }, [])
  return (
      <>
          <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto border rounded-lg bg-white">
              <Bar data={chartData} options={chartOptions} />
          </div>
      </>
  )
}

export default BarChart