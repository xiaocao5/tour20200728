<template>
  <div ref="wrapper" class="detail-wrapper">
    <div class="content-detail clearfix">
      <banner></banner>
      <ticket></ticket>
      <one-day-tour></one-day-tour>
    </div>
    <city-header :styleObj="styleObj" :showBack="showBack"></city-header>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import CityHeader from './components/CityHeader';
import Banner from './components/Banner';
import Ticket from './components/Ticket';
import OneDayTour from './components/OneDayTour';
export default {
  name: 'detail',
  components: {
    CityHeader,
    Banner,
    Ticket,
    OneDayTour
  },
  data () {
    return {
      scroll: null,
      styleObj: {
        opacity: 0
      },
      showBack: true
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3
    });
    this.scroll.on('scroll', (pos) => {
      console.log(pos.y);
      if (pos.y < -1) {
        this.showBack = false;
      } else {
        this.showBack = true;
      }
      this.styleObj.opacity = pos.y / -150;
    })
  }
}
</script>

<style lang="stylus" scoped>
.detail-wrapper
  position absolute;
  left 0;
  right 0;
  top 0;
  bottom 0;
  overflow hidden;
  .content-detail
    height 30rem;
</style>