import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = (props) => {
    const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...datapointValues)

    return (<div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />)}
    </div>)
}

export default Chart