export default {
    editor: {
        label: {
            fr: 'Chart - Bar',
            en: 'Chart - Bar',
        },
        icon: 'fontawesome/regular/chart-bar',
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
        // axis: {
        //     label: { en: 'Axis', fr: 'Axis' },
        //     type: 'BigIconRadioGroup',
        //     options: {
        //         choices: [
        //             { icon: 'align-bottom', value: 'x', label: 'X' },
        //             { icon: 'align-left', value: 'y', label: 'Y' },
        //         ],
        //     },
        //     bindable: true,
        //     responsive: true,
        //     defaultValue: 'x',
        // },
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
            defaultValue: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah', 'Bespin', 'Endor', 'Hoth'],
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
