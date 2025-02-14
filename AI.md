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
{"uid":"chart_element","tag":"chartjs-pie","name":"User Engagement Pie Chart","props":{"default":{"dataType":"advanced","labels":{"__wwtype":"js","code":"```return Object.keys(variables['__VAR_LABELS__'])```"},"datasets":{"__wwtype":"js","code":"```return [{"label":"Users","backgroundColor":["#3b82f6","#ef4444","#22c55e","#f59e0b"],"borderColor":"#ffffff","data":Object.values(variables['__VAR_DATA__'])}]```"},"options":{"__wwtype":"js","code":"```return {"responsive":true,"maintainAspectRatio":false,"plugins":{"legend":{"position":"right","labels":{"padding":20}},"title":{"display":false}},"layout":{"padding":0}}```"}}},"styles":{"default":{"height":"300px","minWidth":"0px"}}}
</elements>

4. Note: 
- To make graph responsive: First, always set these options : responsive: true and maintainAspectRatio: false, Second, set min-width: 0px to direct parent container.
- **IMPORTANT** labels, datasets, options and data properties HAVE TO BE BINDED data