<template>
    <footer>
        <div class="footerCon">
            <div class="socialIcons">
                <a href="#" @click.prevent="openQR('github')"><i class="fa-brands fa-github"></i></a>
                <a href="#" @click.prevent="openQR('youtube')"><i class="fa-brands fa-youtube"></i></a>
            </div>

            <div v-if="showQR" class="qr-modal" @click="closeQR">
                <div class="qr-content" @click.stop>
                    <img :src="currentQR" alt="QR Code" class="qr-image">
                    <button @click="closeQR" class="qr-close">×</button>
                </div>
            </div>

            <div class="footerNav">
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="news.html">Новости</a></li>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </div>
        </div>
        <div class="footerBot">
            <p>Copyright&copy; 2025</p>
        </div>
    </footer>
</template>

<script>
import githubQR from '@/assets/github-qr.png';
import youtubeQR from '@/assets/youtube-qr.png';

export default {
  data() {
    return {
      showQR: false,
      currentQR: '',
      qrCodes: {
        github: githubQR,
        youtube: youtubeQR
      }
    }
  },
  methods: {
    openQR(platform) {
      this.currentQR = this.qrCodes[platform];
      this.showQR = true;
    },
    closeQR() {
      this.showQR = false;
    }
  }
}
</script>

<style>
@import "@/assets/styles/footer.css";
</style>
