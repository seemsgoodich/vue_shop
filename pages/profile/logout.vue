<template>
    <div>
        выходим нахуй)
    </div>
</template>

<script>
export default {
    layout: 'profile',
    middleware: ['user-auth'],
    beforeCreate() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/signin?message=logout')
    }
}
</script>