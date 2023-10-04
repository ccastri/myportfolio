import React, { useState, useEffect, useRef } from 'react';
import { Doughnut,  } from 'react-chartjs-2';
import { Chart, registerables  } from 'chart.js';
Chart.register(...registerables)

interface ICircularProgressBar {
  items : string | string[];
}
type ChartRefType = Chart<'doughnut'> | null;

const CircularProgressBar = () => {
  const [tsProgress, setTsProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);

  const chartRef = useRef<ChartRefType|null>(null); // Reference to the chart instance

  useEffect(() => {
    const tsInterval = setInterval(() => {
      if (tsProgress < 25) {
        setTsProgress(tsProgress + 1);
      } else {
        clearInterval(tsInterval);
      }
    }, 30);

    const jsInterval = setInterval(() => {
      if (jsProgress < 25) {
        setJsProgress(jsProgress + 1);
      } else {
        clearInterval(jsInterval);
      }
    }, 30);

    const pythonInterval = setInterval(() => {
      if (pythonProgress < 50) {
        setPythonProgress(pythonProgress + 1);
      } else {
        clearInterval(pythonInterval);
      }
    }, 30);

    return () => {
      clearInterval(tsInterval);
      clearInterval(jsInterval);
      clearInterval(pythonInterval);
    };
  }, [tsProgress, jsProgress, pythonProgress]);

  useEffect(() => {
    // Create or update the chart
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [tsProgress, jsProgress, pythonProgress];
      chartRef.current.update();
    } else {
      const canvas = document.getElementById('chart-canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['TypeScript', 'JavaScript', 'Python'],
          datasets: [
            {
              data: [tsProgress, jsProgress, pythonProgress],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: '50%',
          rotation: 0,
          circumference: 360,
           plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  // Show only the label (context.label)
                  return context.label;
                },
              },
            },
          },
          animation: {
            animateRotate: true,
            animateScale: true,
          },
        },
      });
    }
  }, [tsProgress, jsProgress, pythonProgress]);

  return (
    <div className='h-auto'>
      <h2>Conocimientos en programacion</h2>
      <canvas id='chart-canvas'></canvas>
    </div>
  );
};

export default CircularProgressBar;
