import { TaskContext } from "@/context/taskContext";
import { useContext } from "react";
import { Chart } from "react-google-charts";


const PieChart = () => {

    const { tasks } = useContext(TaskContext);


    const lowPriorityTasks = tasks.filter((task) => task.priority === "LOW");
    const mediumPriorityTasks = tasks.filter((task) => task.priority === "MEDIUM");
    const highPriorityTasks = tasks.filter((task) => task.priority === "HIGH");


    return (
        <div className="w-full">
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Priority', 'Number of Tasks'],
                    ['Low', lowPriorityTasks.length],
                    ['Medium', mediumPriorityTasks.length],
                    ['High', highPriorityTasks.length],

                ]}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default PieChart;