import {WidgetMap, Dashboard, ArrayOfDashBoars} from "../Components/types";

const dataWidget: WidgetMap = {
    'Dat4ik': [
        {
            id: '234234',
            type: 'Widget2',
            content: {
                title: 'Освещение. Автоматы',
                value: true,
                time: '17 сентября 13:20'
            }
        },
        {
            id: '234ss234',
            type: 'Widget1',
            content: {
                title: 'CO2',
                value: '426.0',
                type: 'leaf',
                time: Date.now(),
                typeData: 'ppm',
            }
        },
        {
            id: '234ccx2234',
            type: 'Widget3',
            content: {
                title: 'Темература',
                value: 1,
                type: 'celsia'
            }
        },
    ],
    'Крутой датчик': [
        {
            id: '234s2s234',
            type: 'Widget1',
            content: {
                title: 'Шум',
                value: '123.99',
                type: 'asteroid',
                time: Date.now(),
                typeData: 'ppm',
            }
        },
        {
            id: '23433234',
            type: 'Widget2',
            content: {
                title: 'Освещение. Автоматы',
                value: false,
                time: '17 сентября 13:20'
            }
        },
        {
            id: '234cc44x2234',
            type: 'Widget3',
            content: {
                title: 'Темература',
                value: 99,
                type: 'celsia'
            }
        },
    ],
}

const dashBoard1: Dashboard = {
    nameOfOffice: 'Оффис на Фаберже',
    idDashBoard: 'hjg123jhg123',
    orderedWidgetList: [],
    dataWidget: dataWidget
}

export const arrayOfDashBoars: ArrayOfDashBoars = [
    dashBoard1,
]