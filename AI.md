---
name: chartjs-pie
description: A customizable pie/donut chart component using Chart.js library
keywords: chart, pie, donut, data visualization, Chart.js, analytics
---

#### chartjs-pie

A versatile chart component that creates pie or donut charts using Chart.js. It supports both guided and advanced data configuration modes, with extensive customization options for appearance and behavior.

Properties:
- displayType: string ("pie" | "doughnut") - Determines the chart type
- isLegend: boolean - Controls legend visibility
- legendPosition: string ("top" | "bottom" | "left" | "right") - Sets legend position
- legendAlignement: string ("start" | "center" | "end") - Controls legend alignment
- legendSize: string (px) - Sets legend font size
- legendColor: string - Defines legend text color
- dataType: string ("guided" | "advanced") - Sets the configuration mode
- labels: array - Chart labels (advanced mode)
- datasets: array - Chart datasets configuration (advanced mode)
- options: object - Chart.js configuration options
- data: array - Data collection for guided mode
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

Events:
- chart:click: Triggered when clicking on the chart
  - position: {x: number, y: number}
  - points: [{label: string, value: number, index: number, datasetIndex: number}]

Example:
```json
{
  "tag": "chartjs-pie",
  "props": {
    "default": {
      "displayType": "pie",
      "isLegend": true,
      "legendPosition": "right",
      "legendAlignement": "center",
      "legendSize": "12px",
      "dataType": "advanced",
      "labels": ["Category A", "Category B", "Category C"],
      "datasets": [{
        "label": "Dataset 1",
        "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"],
        "data": [30, 50, 20]
      }],
      "options": {
        "responsive": true,
        "plugins": {
          "legend": {
            "display": true,
            "position": "right"
          }
        }
      }
    }
  }
}
```
