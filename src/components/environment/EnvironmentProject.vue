<template>
    <div class="contents">
        <h3>프로젝트 환경</h3>
        <v-simple-table class="elevation-1">
            <colgroup>
                <col style="width: 30%" />
                <col style="width: 70%" />
            </colgroup>
            <thead>
                <tr>
                    <th class="text-left">제목</th>
                    <th class="text-left">내용</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <th>{{ item.name }}</th>
                    <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    name: 'EnvironmentProject',
    data() {
        return {
            // table
            desserts: [
                {
                    name: '문서 및 버전',
                    calories: 'HTML5, CSS3',
                },
                {
                    name: '인코딩',
                    calories: 'UTF-8',
                },
                {
                    name: '유형',
                    calories: 'PC',
                },
                {
                    name: 'PC 웹 호환성',
                    calories: 'chrome, firefox, Microsoft Edge',
                },
                {
                    name: 'Mobile 웹 호환성',
                    calories: '없음',
                },
                {
                    name: '웹 접근성',
                    calories: '기본',
                },
                {
                    name: '해상도 기준 / 디자인 너비',
                    calories: '1920px / 1200px',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.contents {
    h3 {
        margin-bottom: 10px;
    }
    .v-data-table {
        table {
            thead {
                th {
                    background: #eee;
                }
            }
        }
    }

    // dark mode
    .theme--dark {
        &.v-data-table {
            table {
                thead {
                    th {
                        background: #000;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
