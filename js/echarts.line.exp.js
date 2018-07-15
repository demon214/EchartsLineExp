var chart;

var EchartsLineExp = function (elementId) {
    chart = echarts.init(document.getElementById(elementId));
    var yValue;
};

EchartsLineExp.prototype = {
    init: function (option) {
        chart.setOption(option);
        return chart;
    },
    onDrag: function (callback) {
        chart.setOption({
            tooltip: {
                trigger: 'axis',
                showContent: true,
                axisPointer: {
                    type: 'cross',
                    axis: 'x',
                    label: {
                        backgroundColor: '#283b56',
                        formatter: function (params) {
                            if (params.seriesData.length === 0) {
                                this.yValue = params.value;
                                var temp = parseFloat(this.yValue);
                                return temp;
                            }
                        }
                    }
                },
                formatter: function (params) {
                    callback(params[0].dataIndex, this.yValue);
                }
            }
        })
    },
    refresh: function (data) {
        setTimeout(function () {
            var option = {
                series: [
                    {
                        id: 'main',
                        data: data,
                        itemStyle: {
                            color: '#ff6347'
                        }
                    }
                ]
            };
            chart.setOption(option);
        }, 1)
    }

};

