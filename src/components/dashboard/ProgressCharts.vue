<template>
    <div>
        <h3>진척률</h3>
        <v-card>
            <div id="chartBar" />
        </v-card>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { projectList } from '../../data/mockdb';

let barChart;

export default {
    name: 'ProgressCharts',
    components: {},
    data() {
        return {};
    },
    computed: {
        // 완료
        compData() {
            const arrData = [
                [0, 0, 'main'], // 메인
                [0, 0, 'reserve'], // 예약
                [0, 0, 'customer'], // 고객센터
                [0, 0, 'member'], // 회원
                [0, 0, 'user-infomation'], // 이용안내
                [0, 0, 'car'], // 차량목록
                [0, 0, 'mypage'], // 마이페이지
            ];

            projectList.filter((el) => {
                arrData.map((arrEl, index) => {
                    if (el.type === arrData[index][2]) {
                        arrData[index][0] += 1;
                        if (el.working === '완료') {
                            arrData[index][1] += 1;
                        }
                    }
                });
            });

            arrData.map(
                (el, index) =>
                    (arrData[index] = parseInt(
                        (arrData[index][1] / arrData[index][0]) * 100,
                        10,
                    )),
            );

            return arrData;
        },

        // 진행예정
        wokingData() {
            const ingData = [];
            this.compData.map((el) => ingData.push(100 - el));
            return ingData;
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
            const chartDom = document.getElementById('chartBar');
            barChart = echarts.init(chartDom);

            if (barChart != null && barChart != '' && barChart != undefined) {
                barChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
            }

            barChart = echarts.init(chartDom);

            let option;
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
                    },
                },
                textStyle: {
                    fontFamily: 'GmarketSansMedium',
                },
                title: {
                    show: true,
                    text: `전체 진행률: ${this.sum()} %`,
                    textStyle: {
                        fontSize: 15,
                    },
                    top: 10,
                    right: 50,
                    textAlign: 'left',
                },
                legend: {
                    data: ['완료', '진행예정'],
                    top: 25,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    max: 100,
                    axisLabel: {
                        show: true,
                        formatter: function (value) {
                            return `${value} %`;
                        },
                    },
                },
                axisPointer: {
                    value: 50,
                    snap: true,
                    triggerTooltip: false,
                    lineStyle: {
                        color: '#000',
                        width: 1,
                    },
                    label: {
                        show: true,
                        formatter: function (params) {
                            return `${params.value} %`;
                        },
                        backgroundColor: '#7581BD',
                    },
                    handle: {
                        show: true,
                        color: '#7581BD',
                        icon: 'none',
                    },
                },
                yAxis: {
                    type: 'category',
                    data: [
                        '메인',
                        '예약',
                        '고객센터',
                        '회원',
                        '이용안내',
                        '차량목록',
                        '마이페이지',
                    ],
                },
                series: [
                    {
                        name: '완료',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                        },
                        emphasis: {
                            focus: 'series',
                        },
                        smooth: true,
                        symbol: 'circle',
                        showSymbol: false,
                        color: ['#017EFA'],
                        lineStyle: {
                            color: '#017EFA',
                        },
                        data: this.compData,
                    },
                    {
                        name: '진행예정',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                        },
                        emphasis: {
                            focus: 'series',
                        },
                        smooth: true,
                        symbol: 'circle',
                        showSymbol: false,
                        color: ['#4caf50'],
                        lineStyle: {
                            color: '#4caf50',
                        },
                        data: this.wokingData,
                    },
                ],
            };

            option && barChart.setOption(option);
            this.barChart = barChart;
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            barChart.resize();
        },

        // 총 매출
        sum() {
            const sum = this.compData.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
            );
            return parseInt(sum / this.compData.length, 10);
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
            #chartBar {
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
