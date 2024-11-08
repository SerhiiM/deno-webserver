import { JSX } from "preact";

import { Chart } from "https://deno.land/x/fresh_charts/mod.ts";

export function PieChart() {
    return (
        <Chart
            type="pie"
            data={{
                labels: [
                    "Red 30%",
                    "Blue 20%",
                    "Yellow 50%",
                ],
                datasets: [{
                    label: "My First Dataset",
                    data: [300, 50, 100],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 4,
                }],
            }}
        />
    );
}
