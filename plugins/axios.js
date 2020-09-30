export default function ({$axios, redirect, store}) {

    $axios.onError(error => {
        if (error.response) {
            if (error.response.status === 401) {
                redirect('/signin?message=session')
                store.commit('auth/clearToken')
            }

            if (error.response.status === 500) {
                console.error('server 500 error')
            }
        }
    })
}