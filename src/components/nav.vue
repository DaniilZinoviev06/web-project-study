<template>
  <header>
    <div class="top-bar">
      <div class="logo-block">
        <img :src="logo" alt="Логотип">
      </div>
      <button
        class="mobile-menu-toggle"
        @click="toggleMobileMenu"
        aria-label="Меню"
        aria-expanded="mobileMenuOpen"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <nav :class="{ 'mobile-visible': mobileMenuOpen }">
        <ul class="main-menu">
          <li class="dropdown-parent">
            <p>Новости</p>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">Все новости</strong>
                            <span class="dropdown-desc">Нажмите, чтобы перейти на страницу с новостями</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">Arch Linux официально переходит на Zstd по умолчанию для сжатия пакетов</strong>
                            <span class="dropdown-desc">Разработчики Arch Linux объявили, что все новые пакеты теперь будут сжиматься с помощью алгоритма Zstd вместо XZ</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="news_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Вышел Arch Linux 2024.06.01</strong>
                            <span class="dropdown-desc">Появился обновленный установочный образ Arch Linux 2024.06.01</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">Pacman 6.1 получил новые функции</strong>
                            <span class="dropdown-desc">Последняя версия пакетного менеджера Pacman (6.1) принесла улучшенную обработку зависимостей, более быстрые операции обновления и новые опции для работы с AUR-помощниками</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">Arch Linux тестирует Wayland по умолчанию в некоторых DE</strong>
                            <span class="dropdown-desc">В рамках подготовки к будущему переходу на Wayland, Arch Linux начал тестировать сеансы Wayland в качестве стандартного варианта для окружений рабочего стола</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container empty-cell"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown-parent">
            <p>Инструкции</p>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-left">
                  <span class="dropdown-category">ИНСТРУКЦИИ</span>
                  <a href="#" class="dropdown-link active">Установка 1</a>
                  <a href="#" class="dropdown-link">Установка 2</a>
                </div>
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">УСТАНОВКА ОБРАЗА</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">СОЗДАНИЕ ЗАГРУЗОЧНОЙ ФЛЕШКИ</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">ШАГ 3</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">ШАГ 4</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">ШАГ 5</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="doc_2.html" class="dropdown-cell">
                            <strong class="dropdown-title">ШАГ 6</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown-parent">
            <p>Проблемы</p>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-left">
                  <span class="dropdown-category">ПРОБЛЕМЫ</span>
                  <a href="#" class="dropdown-link active">Проблема 1</a>
                  <a href="#" class="dropdown-link">Проблема 2</a>
                </div>
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="problem_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Проблема с загрузкой</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="problem_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Проблема с сетью</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="problem_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Проблема с драйверами</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="problem_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Проблема с пакетами</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="problem_1.html" class="dropdown-cell">
                            <strong class="dropdown-title">Другие проблемы</strong>
                            <span class="dropdown-desc">Lorem ipsum dolor sit amet, maecenas metus tortor, laoreet vitae.</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container empty-cell"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>

          <li><p>Контакты</p></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/arch_logo.png";

export default {
  data() {
    return {
      mobileMenuOpen: false,
      logo: logo
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
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

<style lang="css">
@import "@/assets/styles/nav.css";
</style>
