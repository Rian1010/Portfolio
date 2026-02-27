import VATOverview from './img/VAT-Overview.png';

export const detailsPages = {
    "1": {
        contentEN: [
            { type: 'h1', text: 'Blaues Gut' },
            { type: 'paragraph', text: 'Test'},
            { type: 'image', src: VATOverview, class: 'vat-overview'}
        ],
        contentDE: [
            { type: 'h1', text: 'Blaues Gut'},
            { type: 'paragraph', text: 'Test'},
            { type: 'image', src: VATOverview, class: 'vat-overview'}
        ]
    },
    "2": {
        contentEN: [
            { type: 'h1', text: 'Knowledge Platform'},
            { type: 'paragraph', text: 'Test'},
            { type: 'image', class: 'vat-overview'}
        ],
        contentDE: [
            { type: 'h1', text: 'Wissensplatform (WiPla)'},
            { type: 'paragraph', text: 'Test'},
            { type: 'image', class: 'vat-overview'}
        ]
    },
}