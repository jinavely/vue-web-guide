<template>
    <div>
        <h3>페이지 수</h3>
        <v-card>
            <div id="chartPie" />
        </v-card>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { projectList } from '../../data/mockdb';

let pieChart;

export default {
    name: 'TotalPageCharts',
    components: {},
    data() {
        return {};
    },
    computed: {
        pageData() {
            const pageData = [
                { value: 0, name: 'main' },
                { value: 0, name: 'reserve' },
                { value: 0, name: 'customer' },
                { value: 0, name: 'member' },
                { value: 0, name: 'user-infomation' },
                { value: 0, name: 'car' },
                { value: 0, name: 'mypage' },
            ];

            projectList.filter((el) => {
                pageData.map((arrEl, index) => {
                    if (el.type === arrEl.name) {
                        pageData[index].value += 1;
                    }
                });
            });

            pageData.map((arrEl) => {
                switch (arrEl.name) {
                    case 'main':
                        arrEl.name = '메인';
                        break;
                    case 'reserve':
                        arrEl.name = '예약';
                        break;
                    case 'customer':
                        arrEl.name = '고객센터';
                        break;
                    case 'member':
                        arrEl.name = '회원';
                        break;
                    case 'user-infomation':
                        arrEl.name = '이용안내';
                        break;
                    case 'car':
                        arrEl.name = '차량목록';
                        break;
                    case 'mypage':
                        arrEl.name = '마이페이지';
                        break;
                }
            });

            return pageData;
        },
    },
    mounted() {
        this.chartFnctn();

        window.addEventListener('resize', this.handleChartResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleChartResize);
    },
    methods: {
        // Charts
        chartFnctn() {
            const chartDom = document.getElementById('chartPie');
            pieChart = echarts.init(chartDom);

            if (pieChart != null && pieChart != '' && pieChart != undefined) {
                pieChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
            }

            pieChart = echarts.init(chartDom);

            let option;
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b0}: {c0} Page',
                },
                textStyle: {
                    fontFamily: 'GmarketSansMedium',
                },
                legend: {
                    top: '3%',
                    left: 'center',
                },
                title: {
                    show: true,
                    text: `전체 페이지 수: ${this.totalPage()} Page`,
                    textStyle: {
                        fontSize: 12,
                    },
                    bottom: 10,
                    left: 20,
                    textAlign: 'left',
                },
                series: [
                    {
                        name: '페이지 수',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: this.pageData,
                    },
                ],
            };

            option && pieChart.setOption(option);
            this.pieChart = pieChart;
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            pieChart.resize();
        },

        // 총 페이지 수
        totalPage() {
            return projectList.length;
        },
    },
};
</script>

<style lang="scss" scoped>
.contents {
    h3 {
        margin: 0 0 10px 0;
    }
    .v-sheet.v-card {
        position: relative;

        ::v-deep {
            #chartPie {
                width: 100%;
                height: 400px;

                > div {
                    max-width: 100%;
                }

                canvas {
                    max-width: 100%;
                    border-radius: 12px;
                }
            }
        }
    }
}
</style>
