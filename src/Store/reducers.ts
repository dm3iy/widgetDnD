import {ArrayOfDashBoars, Dashboard} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';
import uniqid from "uniqid";
import {getCurrentItem, findObjectKeyByNameWidget} from "../Components/helpersDnD";


//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {

        case actions.ADD_NEW_WIDGET_LIST: {
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    const id: string = uniqid()
                    return {
                        ...item,
                        orderedWidgetList: [...item.orderedWidgetList, id], //<= тут будет вставляться айди из сервера
                        dataWidget: {
                            ...item.dataWidget,
                            [id]: { //<= тут будет вставляться айди из сервера
                                name: action.payload,
                                widgets: [],
                            }
                        }
                    }
                } else return item;
            })
        }

        case actions.CHANGE_WIDGET_LIST_ORDER: {
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    return {...item, orderedWidgetList: action.payload}
                } else return item;
            })
        }

        case actions.CHANGE_WIDGETS_ORDER: {
            return state.map((item: Dashboard) => {
                if (item.idDashBoard === action.id) {
                    return {...item, dataWidget: action.payload}
                } else return item;
            })
        }

        case actions.ADD_NEW_WIDGET: {
            //тут надо решить, откуда берутся данные для нового виджета //+айди с сервера
            let el = getCurrentItem(action.payload.typeWidget, uniqid(), {
                title: 'Добавленный В',
                value: '11.11',
                type: 'asteroid',
                time: Date.now(),
                typeData: 'nNew',
            });

            // @ts-ignore
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    const key: string = findObjectKeyByNameWidget(item.dataWidget, action.payload.destination);

                    return {
                        ...item, dataWidget: {
                            ...item.dataWidget, [key]: {
                                ...item.dataWidget[key], widgets: [...item.dataWidget[key].widgets, el]
                            }
                        }
                    }
                } else return item;
            })
        }


        default:
            return state;
    }
}

export default dashboardReducer;