<template>
  <header>
    <div class="top-bar">
      <div class="logo-block">
         <img :src="logo" alt="Логотип">
      </div>
      <nav>
        <ul class="main-menu">
          <li class="dropdown-parent">
            <a href="#">Новости</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-right">
                  <div class="dropdown-section">
                    <a href="news.html" class="dropdown-block">
                      <h3>Все новости</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <a href="news_1.html" class="dropdown-block">
                      <h3>Новость 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <a href="news.html" class="dropdown-block">
                      <h3>Новость 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                  </div>
                  <div class="dropdown-section">
                    <a href="news.html" class="dropdown-block">
                      <h3>Новость 4</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <a href="news.html" class="dropdown-block">
                      <h3>Новость 5</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown-parent">
            <a href="#">Инструкции</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-left">
                  <h2>ИНСТРУКЦИИ</h2>
                  <a href="#" class="dropdown-link active">Установка 1</a>
                  <a href="#" class="dropdown-link">Установка 2</a>
                </div>
                <div class="dropdown-right">
                  <div class="dropdown-section">
                    <a href="doc_2.html" class="dropdown-block">
                      <h3>УСТАНОВКА ОБРАЗА</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <a href="doc_2.html" class="dropdown-block">
                      <h3>ШАГ 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <div class="dropdown-block">
                      <h3>ШАГ 5</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                  </div>
                  <div class="dropdown-section">
                    <div class="dropdown-block">
                      <h3>СОЗДАНИЕ ЗАГРУЗОЧНОЙ ФЛЕШКИ</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                    <div class="dropdown-block">
                      <h3>ШАГ 4</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown-parent">
            <a href="#">Проблемы</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-left">
                  <h2>ПРОБЛЕМЫ</h2>
                  <a href="#" class="dropdown-link active">Проблема 1</a>
                  <a href="#" class="dropdown-link">Проблема 2</a>
                </div>
                <div class="dropdown-right">
                  <div class="dropdown-section">
                    <a href="problem_1.html" class="dropdown-block">
                      <h3>###</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <a href="problem_1.html" class="dropdown-block">
                      <h3>###</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </a>
                    <div class="dropdown-block">
                      <h3>###</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                  </div>
                  <div class="dropdown-section">
                    <div class="dropdown-block">
                      <h3>###</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                    <div class="dropdown-block">
                      <h3>###</h3>
                      <p>
                        Lorem ipsum dolor sit amet, maecenas metus tortor,
                        laoreet vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <div style="width: 80px"></div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/arch_logo.png";

export default {
  data() {
    return {
      logo: logo
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
    let dropdownParents = document.querySelectorAll('.dropdown-parent');

    dropdownParents.forEach(function(parent) {
        let dropdownMenu = parent.querySelector('.dropdown-menu');
        let hideTimeout;

        parent.addEventListener('mouseenter', function() {
            if (hideTimeout) clearTimeout(hideTimeout);
            if(dropdownMenu) {
                dropdownMenu.classList.add('active');
            }
        });

        parent.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(function() {
                if(dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
            }, 100);
        });

        dropdownMenu.addEventListener('mouseenter', function() {
            if (hideTimeout) clearTimeout(hideTimeout);
                dropdownMenu.classList.add('active');
            });
            dropdownMenu.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                dropdownMenu.classList.remove('active');
            }, 100);
        });
    });
});
</script>

<style>
body {
  background: #f6f9fc;
  font-family: 'Fira Mono', monospace;
  margin: 0;
  padding: 0;
}

header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  background: #333;
  position: relative;
  z-index: 10;
}

.logo-block img {
  width: 180px;
  margin-right: 16px;
}

nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.main-menu {
  display: flex;
  list-style: none;
  gap: 68px;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  position: relative;
}

.main-menu > li {
  position: relative;
  cursor: pointer;
}

.main-menu a {
  text-decoration: none;
  color: #999;
  padding: 17px 22px;
  transition: color 0.2s, background 0.2s;
  border-radius: 4px;
  display: inline-block;
}

.main-menu > li:hover > a {
  color: #fff;
  background: #444444;
}

h3 {
  color: black;
}

.dropdown-menu {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 95px;
  background: #e8eef2;
  min-height: 200px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  border-radius: 0 0 8px 8px;
  z-index: 999;
  border-top: 3px solid #2299de;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.dropdown-menu-inner {
  display: flex;
  flex-direction: row;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0;
  background: none;
}

.dropdown-menu.active {
  display: block;
  opacity: 1;
  pointer-events: all;
}

.dropdown-left {
  padding: 25px 30px 20px 30px;
  border-right: 2px solid #d3dbe1;
  width: 220px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dropdown-left h2 {
  letter-spacing: 2px;
  margin: 0 0 12px 0;
  font-size: 1.2em;
  font-weight: bold;
}

.dropdown-link {
  display: block;
  margin: 6px 0;
  padding: 2px 0;
  color: #2299de;
  font-size: 1.04em;
  font-weight: 500;
  transition: font-weight 0.15s, color 0.15s;
}

.dropdown-link.active {
  color: #8852f1;
}

.dropdown-right {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 25px 30px 20px 30px;
  flex: 1;
}

.dropdown-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
}

.dropdown-block {
  padding: 12px 15px;
  border-radius: 6px;
  margin-bottom: 0;
}

.dropdown-block:hover {
  background: #dbeaf5;
}

.dropdown-block h3 {
  margin: 0 0 6px 0;
  font-size: 1.04em;
  font-weight: bold;
  letter-spacing: 1px;
}

.dropdown-block p {
  margin: 0;
  font-size: 0.96em;
  color: #333;
}

@media (max-width: 1200px) {
  .dropdown-menu-inner {
    max-width: 990px;
  }
}

@media (max-width: 1000px) {
  .dropdown-menu-inner {
    max-width: 90vw;
    flex-direction: column;
  }
  .dropdown-right {
    flex-direction: column;
    gap: 12px;
  }
}

.container {
  margin-top: 95px;
  width: auto;
  height: 900px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.container .slider .item {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  display: inline-block;
  transition: 0.5s;
  filter: grayscale(100%);
}

.container .slider .item:hover {
  filter: grayscale(0%);
}

.slider .item:nth-child(1),
.slider .item:nth-child(2) {
  top: 0;
  left: 0;
  transform: translate(0, 0);
  border-radius: 0;
  width: 100%;
  height: 100%;
}

.slider .item:nth-child(3) {
  left: 70%;
}

.slider .item:nth-child(3) {
  left: 70%;
  width: 400px;
  height: 500px;
}

.slider .item:nth-child(4) {
  left: calc(70% + 450px);
  opacity: 50%;
  width: 350px;
  height: 450px;
}

.slider .item:nth-child(5) {
  left: calc(70% + 850px);
  opacity: 25%;
  width: 100px;
  height: 200px;
}

.slider .item:nth-child(n + 6) {
  left: calc(70% + 660px);
  opacity: 0;
}

.item .content {
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  color: #eee;
  transform: translate(0, -50%);
  font-family: system-ui;
  display: none;
}

.slider .item:nth-child(2) .content {
  display: block;
}

.content .name {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0;
  animation: animate 1s ease-in-out 1 forwards;
}

.content .des {
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0;
  animation: animate 1s ease-in-out 0.3s 1 forwards;
}

.content button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  opacity: 0;
  animation: animate 1s ease-in-out 0.6s 1 forwards;
}

@keyframes animate {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }

  to {
    opacity: 1;
    transform: translate(0);
    filter: blur(0);
  }
}
</style>
