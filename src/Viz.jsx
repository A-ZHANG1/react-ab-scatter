import React from 'react'
import * as d3 from 'd3'
import { calculateScale } from './util.js'
import mockData from '../example/src/mockData.js'

const Viz = ({
  data,
  X_TRANSFORM = 100,
  Y_TRANSFORM = 20,
  WIDTH = 1000,
  HEIGHT = 600
}) => {
  const [current, setCurrent] = React.useState('Model1')
  const [nodes] = React.useState(data.nodes)
  const [fociA] = React.useState(data.metricsA)
  const [fociB] = React.useState(data.metricsB)
  const containerRef = React.useRef(null)

  const updateDiagram = React.useCallback(
    (svg) => {
      const simulation = d3
        .forceSimulation()
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2))
        .force('cx', d3.forceX())
        .force('cy', d3.forceY())

      d3.select(containerRef.current).selectAll('circle').remove()

      const color = ['#ffd034', '#f0f32f']

      const circles = svg
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', (d) => d.group * 10)
        .style('fill', function (d) {
          return color[d.group - 1]
        })
      // .call(circle => circle.append("title")
      // .text(d => [d.id, d.idx].join("\n")));
      circles
        .append('text')
        .attr('dx', function (d) {
          return -2
        })
        .text(function (d) {
          return 'd.id'
        })

      simulation.on('tick', function () {
        // console.log('ticked')
        // console.log(svg)
        circles
          .attr('cx', function (d) {
            let x
            current === 'Model1'
              ? (x = fociA[d.idx].x + X_TRANSFORM)
              : (x = fociB[d.idx].x + X_TRANSFORM)
            return x
          })
          .attr('cy', function (d) {
            let y
            current === 'Model1'
              ? (y = fociA[d.idx].y + Y_TRANSFORM)
              : (y = fociB[d.idx].y + Y_TRANSFORM)
            return y
          })
      })

      simulation.alpha(0)
    },
    [current]
  )

  React.useEffect(() => {
    const xScale = d3
      .scaleLinear()
      // input between [lowerbound, upperbound]
      .domain(calculateScale(mockData, 'x'))
      // mapped to outpSut between [lowerbound, upperbound]
      .range([0, WIDTH])
    const yScale = d3
      .scaleLinear()
      .domain(calculateScale(mockData, 'y'))
      .range([0, HEIGHT])
    const xAxis = d3.axisTop().scale(xScale)
    const yAxis = d3.axisLeft().scale(yScale)
    const svg = d3
      .select(containerRef.current)
      .attr('id', 'the_SVG_ID')
      .attr('width', WIDTH)
      .attr('height', HEIGHT)

    svg
      .append('g')
      .attr('transform', 'translate(' + X_TRANSFORM + ',' + HEIGHT + ')')
      .call(xAxis)
    svg
      .append('g')
      .attr('transform', 'translate(' + X_TRANSFORM + ',' + Y_TRANSFORM + ')')
      .call(yAxis)
    updateDiagram(svg)
  }, [updateDiagram])

  const handleButton1Click = (e) => {
    setCurrent('Model1')
  }

  const handleButton2Click = (e) => {
    setCurrent('Model2')
  }

  return (
    <div>
      <button onClick={handleButton1Click}>Model1</button>
      <button onClick={handleButton2Click}>Model2</button>
      <svg id='content' ref={containerRef}>
        <g transform='translate(0, 100)' />
      </svg>
    </div>
  )
}

export default Viz
