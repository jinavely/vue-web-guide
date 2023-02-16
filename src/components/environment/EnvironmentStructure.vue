<template>
    <div class="contents">
        <h3>파일 / 폴더 규칙</h3>
        <v-simple-table class="elevation-1">
            <colgroup>
                <col style="width: 15%" />
                <col style="width: 15%" />
                <col style="width: 30%" />
                <col style="width: 40%" />
            </colgroup>
            <thead>
                <tr>
                    <th class="text-left">분류 폴더</th>
                    <th class="text-left">서브 폴더</th>
                    <th class="text-left">파일 이름</th>
                    <th class="text-left">설명</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td>{{ item.depth1 }}</td>
                    <td>{{ item.depth2 }}</td>
                    <td>{{ item.filename }}</td>
                    <td>{{ item.description }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    name: 'EnvironmentStructure',
    data() {
        return {
            // table
            desserts: [
                {
                    depth1: 'api',
                    depth2: '-',
                    filename: 'index.js',
                    description: '기본 페이지',
                },
                {
                    depth1: 'assets',
                    depth2: 'images',
                    filename: '*',
                    description: '이미지 저장 폴더',
                },
                {
                    depth1: '-',
                    depth2: 'scss',
                    filename: 'reset.scss, common.scss, _index.scss',
                    description: 'css 모음 폴더',
                },
                {
                    depth1: 'components',
                    depth2: 'common, folders',
                    filename: '-',
                    description:
                        '공통 컴포넌트 및 카테고리별 컴포넌트(container포함)',
                },
                {
                    depth1: 'data',
                    depth2: '-',
                    filename: 'mockdb.json',
                    description: 'mockup data',
                },
                {
                    depth1: 'layouts',
                    depth2: 'default, etc',
                    filename: '-',
                    description: '레이아웃 분리',
                },
                {
                    depth1: 'pages',
                    depth2: '*',
                    filename: '*',
                    description: '각각 메인 페이지',
                },
                {
                    depth1: 'plugins',
                    depth2: '-',
                    filename: '*',
                    description: '라이브러리 플러그인 셋팅',
                },
                {
                    depth1: 'router',
                    depth2: '-',
                    filename: 'index.js',
                    description: '페이지 라우팅',
                },
                {
                    depth1: 'store',
                    depth2: '-',
                    filename: '*',
                    description: 'vuex data 상태관리',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.contents {
    h3 {
        margin: 20px 0 10px 0;
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
