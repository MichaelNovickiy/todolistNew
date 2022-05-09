const initialState = {}

export function stateReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'one':
            return {state}
        case 'two':
            return {state}
        default:
            return state
    }
}

export const ACone = () => {
    return {
        type: 'one',
    }
}
export const ACtwo = () => {
    return {
        type: 'two',
    }
}
