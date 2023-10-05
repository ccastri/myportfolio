import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { useInView } from 'react-intersection-observer';

interface ICircularProgressBarProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
    bgColors: string[];
  };
}

type ChartRefType = Chart | null;

const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({ title, data }) => {
  const { labels, values, bgColors } = data;
  const chartRef = useRef<ChartRefType | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView, entry] = useInView(); // Capture entry to check if it's out of the viewport

  useEffect(() => {
    if (inView) {
      if (!isAnimated || (entry && entry.isIntersecting)) {
        setIsAnimated(true);

        const canvas = document.getElementById(`chart-canvas-${title.replace(/\s/g, '')}`) as HTMLCanvasElement;
        if (canvas) {
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          if (chartRef.current) {
            chartRef.current!.data.datasets![0].data = values;
            chartRef.current.update();
          } else {
            chartRef.current = new Chart(ctx, {
              type: 'doughnut',
              data: {
                labels,
                datasets: [
                  {
                    data: values,
                    backgroundColor: bgColors,
                    borderWidth: 0,
                  },
                ],
              },
              options: {
                cutoutPercentage: 50,
                rotation: -0.5 * Math.PI,
                circumference: 2 * Math.PI,
                plugins: {
                  legend: {
                    display: true,
                  },
                },
                animation: {
                  animateRotate: true,
                  animateScale: true,
                },
              },
            });
          }
        }
      }
    } else {
      setIsAnimated(false); // Reset animation when out of viewport
    }
  }, [values, labels, bgColors, title, inView, isAnimated, entry]);

  return (
    <div className='h-auto' ref={ref}>
      <h2>{title}</h2>
      <canvas id={`chart-canvas-${title.replace(/\s/g, '')}`}></canvas>
    </div>
  );
};

export default CircularProgressBar;
