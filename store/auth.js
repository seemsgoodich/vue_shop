import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    async login({dispatch}, formData) {
        try {
            const {data: {theresponsecode}} = await this.$axios.post('https://me.gwm.dev/api/auth/signin', formData);

            if (theresponsecode === 0) {
                const token = $cookies.get('TheShop');
                console.log(token);
    
                dispatch('setToken', token)
                this.$router.push('/?message=successful')
            } else if (theresponsecode === 110) {
                this.$router.push('/?message=logged')
            }

        } catch (e) {
            // commit('setError', e, {root: true})
            return 'неправильный логин или пароль'
        }
    },
    async signup({dispatch}, formData){
        try {
            const {data: {theresponsecode}} = await this.$axios.post('https://me.gwm.dev/api/auth/signup', formData);

            if (theresponsecode === 0) {
                const token = $cookies.get('TheShop');
                console.log(token);
    
                dispatch('setToken', token)
                this.$router.push('/?message=signupCompleted')
            } else if (theresponsecode === 110) {
                this.$router.push('/?message=logged')
            }

        } catch (e) {
            // commit('setError', e, {root: true})
            return 'такой пользователь уже зарегестрирован'
        }
    },
    setToken({commit}, token) {
        commit('setToken', token)

        if (!Cookies.get('TheShop')) {
            Cookies.set('TheShop', token)
        }
    },  
    async logout({commit}) {
        commit('clearToken')
        await this.$axios.post('https://me.gwm.dev/api/auth/logout')

        Cookies.remove('TheShop')
    },
    autoLogin({dispatch}) {
        const cookieStr = process.browser
            ? document.cookie
            : this.app.context.req.headers.cookie

        if (cookieStr) {
            const token = cookieStr.split('=')[1]
            dispatch('setToken', token)
        }
    }
}

export const getters = {
    isAuthenticated: state => !!state.token,
    token: state => state.token
}
