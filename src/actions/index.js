export const addAd = (id, createdAt, title, description, updatedAt, image) => {
    return {
        type: 'ADD_AD',
        id,
        createdAt,
        title,
        description,
        updatedAt,
        image
    }
}

export const changeAd = (id, createdAt, title, description, updatedAt, image) => {
    return {
        type: 'CHANGE_AD',
        id,
        createdAt,
        title,
        description,
        updatedAt,
        image
    }
}

export const deleteAd = (id) => {
    return {
        type: 'DELETE_AD',
        id
    }
}