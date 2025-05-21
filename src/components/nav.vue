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
                  <p class="dropdown-link" :class="{ active: activeInstallTab === 'archinstall' }"
                    @click.prevent="setActiveInstallTab('archinstall')">
                    Archinstall (простой способ)
                  </p>
                  <p class="dropdown-link" :class="{ active: activeInstallTab === 'manual' }"
                    @click.prevent="setActiveInstallTab('manual')">
                    Ручная установка
                  </p>
                </div>
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr v-for="(row, rowIndex) in currentInstallRows" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                            class="dropdown-cell-container"
                            :class="{ 'empty-cell': !cell }">
                          <a v-if="cell" :href="cell.link" class="dropdown-cell">
                            <strong class="dropdown-title">{{ cell.title }}</strong>
                            <span class="dropdown-desc">{{ cell.desc }}</span>
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
                  <p class="dropdown-link" :class="{ active: activeProblemsTab === 'common' }"
                    @click.prevent="setActiveProblemsTab('common')">
                    Частые проблемы
                  </p>
                  <p class="dropdown-link" :class="{ active: activeProblemsTab === 'rare' }"
                    @click.prevent="setActiveProblemsTab('rare')">
                    Редкие проблемы
                  </p>
                </div>
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr v-for="(row, rowIndex) in currentProblemsRows" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                            class="dropdown-cell-container"
                            :class="{ 'empty-cell': !cell }">
                          <a v-if="cell" :href="cell.link" class="dropdown-cell">
                            <strong class="dropdown-title">{{ cell.title }}</strong>
                            <span class="dropdown-desc">{{ cell.desc }}</span>
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
            <p>Контакты</p>
            <div class="dropdown-menu">
              <div class="dropdown-menu-inner">
                <div class="dropdown-right">
                  <table class="dropdown-table">
                    <tbody>
                      <tr>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">Полезные ссылки</strong>
                            <span class="dropdown-desc">Нажмите, чтобы перейти на страницу с полезными ссылками</span>
                          </a>
                        </td>
                        <td class="dropdown-cell-container">
                          <a href="news.html" class="dropdown-cell">
                            <strong class="dropdown-title">О проекте</strong>
                            <span class="dropdown-desc">Нажмите, чтобы перейти на страницу с информацией о проекте</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/arch_logo.svg";
import "@/scripts/nav.js";

export default {
  data() {
    return {
      mobileMenuOpen: false,
      logo: logo,
      activeProblemsTab: 'common',
      activeInstallTab: 'archinstall',
      installData: {
        archinstall: [
          [
            {
              title: "ШАГ 1: Подготовка",
              desc: "Скачайте образ Arch Linux и создайте загрузочную флешку",
              link: "install_archinstall_1.html"
            },
            {
              title: "ШАГ 2: Загрузка",
              desc: "Загрузитесь с флешки и запустите archinstall",
              link: "install_archinstall_2.html"
            }
          ],
          [
            {
              title: "ШАГ 3: Настройка",
              desc: "Выберите параметры установки в интерактивном меню",
              link: "install_archinstall_3.html"
            },
            {
              title: "ШАГ 4: Завершение",
              desc: "Дождитесь окончания установки и перезагрузитесь",
              link: "install_archinstall_4.html"
            }
          ]
        ],
        manual: [
          [
            {
              title: "ШАГ 1: Разметка диска",
              desc: "Создайте разделы с помощью fdisk или cfdisk",
              link: "install_manual_1.html"
            },
            {
              title: "ШАГ 2: Форматирование",
              desc: "Отформатируйте разделы и создайте файловые системы",
              link: "install_manual_2.html"
            }
          ],
          [
            {
              title: "ШАГ 3: Монтирование",
              desc: "Смонтируйте разделы и установите базовую систему",
              link: "install_manual_3.html"
            },
            {
              title: "ШАГ 4: Настройка",
              desc: "Настройте систему, установите загрузчик и пользователя",
              link: "install_manual_4.html"
            }
          ]
        ]
      },

      problemsData: {
        common: [
          [
            {
              title: "Проблема с загрузкой",
              desc: "Частая проблема при загрузке системы после установки",
              link: "problem_1.html"
            },
            {
              title: "Проблема с сетью",
              desc: "Типичные проблемы с подключением к интернету",
              link: "problem_1.html"
            }
          ],
          [
            {
              title: "Проблема с драйверами",
              desc: "Решение распространенных проблем с драйверами",
              link: "problem_1.html"
            },
            {
              title: "Проблема с пакетами",
              desc: "Частые ошибки при установке пакетов",
              link: "problem_1.html"
            }
          ],
          [
            {
              title: "Другие проблемы",
              desc: "Разные часто встречающиеся проблемы",
              link: "problem_1.html"
            },
            null
          ]
        ],
        rare: [
          [
            {
              title: "Редкая проблема с ядром",
              desc: "Специфические проблемы с ядром Linux",
              link: "problem_rare_1.html"
            },
            {
              title: "Проблема с оборудованием",
              desc: "Необычные проблемы с определенным железом",
              link: "problem_rare_1.html"
            }
          ],
          [
            {
              title: "Экзотические ошибки",
              desc: "Очень редкие и странные ошибки",
              link: "problem_rare_1.html"
            },
            {
              title: "Проблемы с AUR",
              desc: "Сложные случаи с AUR помощниками",
              link: "problem_rare_1.html"
            }
          ],
          [
            {
              title: "Другие редкие проблемы",
              desc: "Прочие нечасто встречающиеся ситуации",
              link: "problem_rare_1.html"
            },
            null
          ]
        ]
      }
    }
  },
  computed: {
    currentProblemsRows() {
      return this.problemsData[this.activeProblemsTab];
    },

    currentInstallRows() {
      return this.installData[this.activeInstallTab];
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    setActiveProblemsTab(tab) {
      this.activeProblemsTab = tab;
    },
    setActiveInstallTab(tab) {
      this.activeInstallTab = tab;
    }
  }
}
</script>

<style>
@import "@/assets/styles/nav.css";
</style>
