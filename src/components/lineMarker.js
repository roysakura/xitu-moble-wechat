/**
 * Created by THINK on 2017/9/15.
 */
import {Line,mixins } from 'vue-chartjs'

export default Line.extend({
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options);
  },

  watch: {
    options () {
      this._chart.destroy();
      this.renderChart(this.data, this.options);
    },
    data () {
      this._chart.destroy();
      this.renderChart(this.data, this.options);
    }
  }
})
