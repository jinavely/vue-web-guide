<template>
    <div>
        <h4>마당 계정</h4>
        <ol class="mt-4">
            <li>ㄴㅁㅇㄹ</li>
            <li>
                마당 완료 후 외부망 접근 신청
                <p>
                    https://ucloud.lguplus.co.kr/ ➡ Management ➡ 서비스신청 ➡
                    기타
                </p>
            </li>
            <li>보안 교육 시청</li>
        </ol>

        <v-skeleton-loader type="article" v-if="!show"></v-skeleton-loader>
        <ul v-else>
            <li v-for="item in list" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Settings',
    data() {
        return {
            show: false,
            list: ['사과', '바나나', '감자'],
        };
    },
    mounted() {
        this.aaa();
    },
    methods: {
        aaa() {
            setTimeout(() => {
                this.show = true;
            }, 3000);
        },
    },
};
</script>
<style lang="scss" scoped></style>
