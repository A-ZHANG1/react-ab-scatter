import React from 'react'
import * as d3 from 'd3'
// import throttle from 'lodash.throttle';

const width = 1000
const height = 600

const Viz = ({ data }) => {
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
        .force('center', d3.forceCenter(width / 2, height / 2))
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
        console.log('ticked')
        console.log(svg)
        circles
          .attr('cx', function (d) {
            console.log(`d lo: ${JSON.stringify(d)},  ${fociA}`)
            let x
            current === 'Model1' ? (x = fociA[d.idx].x) : (x = fociB[d.idx].x)
            return x
          })
          .attr('cy', function (d) {
            let y
            current === 'Model1' ? (y = fociA[d.idx].y) : (y = fociB[d.idx].y)
            return y
          })
      })

      simulation.alpha(0)
    },
    [current]
  )

  React.useEffect(() => {
    const xScale = d3.scaleLinear().range([0, width])
    console.log(xScale)
    const yScale = d3.scaleLinear().range([0, height])
    // todo: calc xScale and yScale from data
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    const svg = d3
      .select(containerRef.current)
      .attr('id', 'the_SVG_ID')
      .attr('width', width)
      .attr('height', height)

    svg.append('g').attr('class', 'axis').call(xAxis)
    svg.append('g').attr('class', 'axis').call(yAxis)
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
