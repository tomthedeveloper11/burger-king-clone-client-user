import Swal from 'sweetalert2'
import { FETCH_ITEMS, FETCH_ITEMS_BY_ID, SET_ISLOADING } from './actionTypes'

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true))

    fetch('https://burger-king-clone.herokuapp.com/customers/items')
      .then(async (res) => {
        const data = await res.json()

        if (!res.ok) {
          const error = (data && data.message) || res.statusText
          return Promise.reject(error)
        }

        return data
      })
      .then((result) => {
        setTimeout(() => {
          dispatch(setIsLoading(false))
          dispatch(setItems(result))
        }, 2000)
      })
      .catch((err) => {
        dispatch(setIsLoading(false))

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err,
        })
      })
  }
}

export const fetchItemById = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true))

    fetch('https://burger-king-clone.herokuapp.com/customers/items/' + id)
      .then(async (res) => {
        const data = await res.json()

        if (!res.ok) {
          const error = (data && data.message) || res.statusText
          return Promise.reject(error)
        }

        return data
      })
      .then((result) => {
        setTimeout(() => {
          dispatch(setIsLoading(false))
          dispatch(setItemById(result))
        }, 2000)
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err,
        })
      })
  }
}

export const setItems = (payload) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS, payload })
  }
}

export const setIsLoading = (payload) => {
  return (dispatch) => {
    dispatch({ type: SET_ISLOADING, payload})
  }
}

export const setItemById = (payload) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_BY_ID, payload })
  }
}
