<template>
    <div class="chart-container" style="position: relative">
        <canvas class="chartjs-pie"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    props: {
        content: { type: Object, required: true },
    },
    data() {
        this.chartInstance = null;
        return this.chartInstance;
    },
    computed: {
        config() {
            return {
                type: 'pie',
                data: {
                    labels: this.content.labels,
                    datasets: this.content.datasets,
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: this.content.legendPosition,
                            labels: { usePointStyle: true },
                        },
                    },
                },
            };
        },
    },
    watch: {
        config() {
            if (
                this.chartInstance &&
                this.content.labels &&
                this.content.labels.length &&
                this.content.datasets &&
                this.content.datasets.length
            ) {
                this.chartInstance.data.labels = this.content.labels;
                this.chartInstance.data.datasets = this.content.datasets;
                this.chartInstance.update();
            }
        },
        'content.legendPosition'() {
            this.chartInstance.options.plugins.legend.position = this.content.legendPosition;
            this.chartInstance.update();
        },
        'content.legendAlignement'() {
            this.chartInstance.options.plugins.legend.align = this.content.legendAlignement;
            this.chartInstance.update();
        },
        'content.axis'() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
        'content.stacked'() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
    },
    mounted() {
        this.initChart();
    },
    beforeUnmount() {
        this.chartInstance.destroy();
    },
    methods: {
        initChart() {
            const element = this.$el.querySelector('.chartjs-pie');
            this.chartInstance = new Chart(element, this.config);
        },
    },
};
</script>

<style lang="scss" scoped>
.chart-container {
    width: inherit;
    height: inherit;
    #chartjs-pie {
        width: 100% !important;
        height: 100% !important;
    }
}
</style>
