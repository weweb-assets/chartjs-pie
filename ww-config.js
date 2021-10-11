export default {
    editor: {
        label: {
            fr: 'Chart - Pie',
            en: 'Chart - Pie',
        },
        icon: 'fontawesome/solid/chart-pie',
    },
    properties: {
        legendPosition: {
            label: {
                en: 'Legend position',
                fr: 'Legend position',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'top', label: { en: 'Top' } },
                    { value: 'bottom', label: { en: 'Bottom' } },
                    { value: 'left', label: { en: 'Left' } },
                    { value: 'right', label: { en: 'Right' } },
                ],
            },
            bindable: true,
            responsive: true,
            defaultValue: 'top',
        },
        labels: {
            label: {
                en: 'Labels',
                fr: 'Labels',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart labels' },
            },
            responsive: true,
            section: 'settings',
            bindable: 'list',
            defaultValue: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah'],
        },
        datasets: {
            label: {
                en: 'Datasets',
                fr: 'Datasets',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart Datasets' },
            },
            responsive: true,
            section: 'settings',
            bindable: 'list',
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: ['#055B90', '#69C3FA', '#099AF2', '#E2F3FE'],
                    data: [100.0, 5.0, 70.0, 20.0],
                },
            ],
        },
    },
};
