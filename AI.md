---
name: chartjs-pie
description: A customizable pie/donut chart component using Chart.js library
keywords: chart, pie, donut, data visualization, Chart.js, analytics
---

#### chartjs-pie

A versatile chart component that creates pie or donut charts using Chart.js. It supports both advanced data configuration modes, with extensive customization options for appearance and behavior.

1. Properties:
- dataType: string - Sets the configuration mode. **CRITICAL** Always set to "advanced".
- labels: binded<string[]> - X-axis labels. Mandatory.
- datasets: binded<object[]> - Dataset objects with label, backgroundColor, borderColor, data keys. Mandatory.
- options: binded<object> - Advanced chart options. Mandatory.
- dataXField: string - Field name for categories
- dataXFieldProperty: string - Nested property for category field
- dataOrderBy: string ("default" | "x" | "y") - Data sorting field
- dataDirection: string ("ASC" | "DESC") - Sorting direction
- dataXEmpty: boolean - Include empty values
- yAxis: string ("item-count" | "field-summary") - Value calculation method
- dataYField: string - Field name for values
- dataYFieldProperty: string - Nested property for value field
- aggregate: string ("distinct" | "value" | "sum" | "average" | "median" | "min" | "max") - Aggregation method
- colors: array - Custom colors for chart segments

2. Events:
- chart:click: Triggered when clicking on the chart
- position: {x: number, y: number}
- points: [{label: string, value: number, index: number, datasetIndex: number}]

3. Exemple:
<elements>
{"uid":"chart-pie-element","tag":"chartjs-pie","name":"User Engagement Chart","props":{"default":{"yAxis":"item-count","labels":{"wwJavascript":"```return Object.keys(variables['__VAR_LABELS__'])```"},"options":{"wwJavascript":"```return { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "right", labels: { padding: 20, font: { size: 14 } } }, }};```"},"dataType":"advanced","datasets":{"wwFormula":"```[ { "label": "Users", "backgroundColor": [ "#3b82f6", "#ef4444", "#22c55e", "#f59e0b" ], "borderColor": "#ffffff", "data": Object.values(variables['__VAR_DATA__']) } ]```"},"isLegend":true,"aggregate":"distinct","dataXEmpty":false,"dataOrderBy":"default","displayType":"pie","dataDirection":"ASC","legendPosition":"top","legendAlignement":"center"}},"styles":{"default":{"height":"300px","minWidth":"0px"}}}
</elements>

Optionnaly, if user needs labels directly in graph, you can update and use datalabels in options javascript object :

"options":{"wwJavascript":"return { ..., datalabels: { color: "white", font: { weight: "bold", size: 14 }, formatter: function (value, ctx) { const dataArray = ctx.chart.data.datasets[0].data; if (!Array.isArray(dataArray)) { return dataArray }; const total = dataArray.reduce((a, b) => a + b, 0); const percentage = ((value / total) * 100).toFixed(1); return ctx.chart.data.labels[ctx.dataIndex] + ": " + percentage + "%"; }, }, ... }" }

4. Note: 
- To make graph responsive: First, always set these options : responsive: true and maintainAspectRatio: false, Second, set min-width: 0px to direct parent container.
- Additionally to native chartjs options, chartjs-plugin-datalabels is available, so you can use datalabels. This is optionnal, let user choose to display labels or not.
- **IMPORTANT** labels, datasets, options and data properties HAVE TO BE BINDED data