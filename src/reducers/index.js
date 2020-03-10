
const ads = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AD':
            return [
                ...state,
                {
                    id: action.id,
                    createdAt: action.createdAt,
                    title: action.title,
                    description: action.description,
                    updateAt: action.updatedAt,
                    image: action.image
                }
            ]

        case 'CHANGE_AD':
            return state.map(elem => {
                if (elem.id === action.id) {
                    return {
                        id: elem.id,
                        createdAt: elem.createdAt,
                        title: action.title,
                        description: action.description,
                        updateAt: action.updatedAt,
                        image: action.image
                    }
                } else return elem;
            })

        case 'DELETE_AD':
            return state.filter((elem) => {
                if (elem.id === action.id) {
                    return false;
                } else return true;
            })

        default:
            return state;
    }
}

export default ads;