<template>
    <div>
        привет я страница заказов
    </div>
</template>

<script>
export default {
    layout: 'profile',
    middleware: ['user-auth']
}
</script>