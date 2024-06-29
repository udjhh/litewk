### LiteWK

Первый (после ApiDog) альтернативный Web-клиент для VK. Написан без использования фреймворков на почти чистом JS, используются библиотеки jQuery, Moment.js и Twemoji.js.

Для использования нужен токен от VK API. Сайт сохраняет его в localStorage и не отправляет третьим лицам, но не забывай о XSS-уязвимостях. 

Если вы почувствовали, что ваш токен украли, отключите приложение, с которого вы получали токен, в настройках VK, либо в VK ID > "Безопасность и вход" нажмите "Завершить другие сеансы".

В [VKAPI.md](VKAPI.md) написано о незадокументированных свойствах/методах VK API, полученных во время разработки. В будущем может быть неактуально.

По всем вопросам пишите в Discord: `seveneightiest`

Автор обложки репозитория: `priwetvsem` (Discord)

### Скриншоты

Смотрите [здесь](screenshots/Screenshots.md).

### Задачи

- [x] AJAX-роутинг (25.05.2024)
- [ ] Улучшение дизайна (типо пиксели получше рассчитать чтоб ровно было)
- [ ] Перевести все иконки в svg
- [x] Поддержка капчи (26.05.2024)
- [x] Кнопка "наверх", впоследствии "назад" (03.06.2024)
- [ ] Использовать `execute` для оптимизации
- [x] Проверка ссылок (19.06.2024)

#### Авторизация

- [x] Возможность добавления больше одного аккаунта (27.05.2024)
- [x] Вход/выход (15.05.2024)

#### Настройки

- [x] Собственный CSS и JS (17.05.24)
- [x] Выбор формата даты (17.05.24)
- [x] Настройка левого меню (перемещение, добавление, удаление элементов) (15.06.2024)
- [x] Выбор языка (21.05.2024)
- [x] Выбор аккаунтов (22.05.2024)
- [x] Отладка (18.05.2024)
- [x] Твики интерфейса (31.05.2024)

#### Страница пользователя

##### Информация о пользователе

Страница пользователя выполнена в стиле vk 2006-2022

- [x] **Личная информация**
- [x] Имя, Фамилия, Отчество (никнейм), Девичья фамилия (14.05.2024)
- [x] Статус (14.05.2024)
- [x] Семейное положение + человек в нём (16.05.2024)
- [x] Родной город (14.05.2024)
- [x] Владение языками (14.05.2024)
- [ ] ~~Дата регистрации~~
- [x] Родственники (20.05.2024)
- [x] **Контакты**
- [x] Страна (26.05.2024)
- [x] Мобильный телефон, дополнительный телефон, Skype, личный сайт (26.05.2024)
- [x] **Интересы** (24.05.2024)
- [x] **Образование** (26.05.2024)
- [x] **Карьера** (26.05.2024)
- [x] **Военная служба** (26.05.2024)
- [x] **Жизненная позиция** (26.05.2024)
- [x] **Счётчики** (14.05.2024)
- [x] Значок у имени (20.05.2024)

##### Действия с профилем

- [x] Добавить в закладки (19.05.2024)
- [x] Дружба (17.05.2024)
- [x] Чёрный список (17.05.2024)
- [x] Убрать из ленты новостей (24.05.2024)
- [x] Подписаться/отписать на/от обновления/обновлений (01.06.2024)
- [ ] Оставить в подписчиках
- [ ] Репорт

##### Редактирование профиля

- [ ] Смена аватара
- [ ] Смена миниатюры
- [ ] Смена обложки
- [ ] Смена имени/фамилии/п-пола (под вопросом из-за VK ID)
- [ ] Смена статуса
- [ ] Смена семейного положения
- [ ] Смена владения языками
- [ ] Смена родственников (под вопросом, вероятно нельзя изменить через API)
- [ ] Смена контактов (под вопросом)
- [ ] Смена интересов (под вопросом)
- [ ] Смена образования (под вопросом)
- [ ] Смена карьеры (под вопросом)
- [ ] Смена военной службы (под вопросом)
- [ ] Смена жизненной позиции (под вопросом)

#### Страница группы

##### Информация о группе
- [x] Название, описание, статус, прочая информация, шапка, аватарка (29.05.2024)
- [ ] Вики-страница
- [ ] **Действия**
- [x] Вступление (17.06.2024)
- [ ] Репорт
- [x] Добавление в закладки (17.06.2024)
- [ ] ~~"Рекомендовать друзьям"~~ (видимо, эту кнопку удалили)
- [ ] "Пригласить друзей"
- [ ] Поддержка встреч (пойду/возможно пойду)
- [ ] Поддержка закрытых групп (подать заявку/отменить заявку)
- [ ] Поддержка отображения нахождения чёрного списка группы
- [ ] История группы (дата создания, изменение имени)

#### Стена

- [x] Вкладки (все посты, владельца страницы, чужие посты, архивированные) (23.05.2024)
- [x] Отдельная страница со стеной (29.05.2024)
- [x] Отдельная страница с постом (28.05.2024)
- [x] Поиск по стене (20.05.2024)
- [x] Сортировка "сначала старые" (как в Kate Mobile) (29.05.2024)
- [x] Пагинатор (31.05.2024)

##### Пост

- [x] Шаблон поста (19.05.2024)
- [ ] "Показать полностью"
- [ ] **Действия с постом**
- [x] Лайк (реакции?) (19.05.2024)
- [ ] Репост
- [ ] Аттачменты при репосте
- [x] Удаление/восстановление (19.05.2024)
- [x] Архивирование/разархивирование (24.05.2024)
- [x] Добавление/удаление в закладки (19.05.2024)
- [x] Прикрепление/открепление (19.05.2024)
- [x] Отключение/включение комментариев (19.05.2024)
- [ ] Редактирование
- [ ] Репорт
- [x] **Аттачменты** (17.05.2024)
- [x] Фотография (17.05.2024)
- [x] Видео (17.05.2024)
- [ ] Аудио
- [x] Документ (17.05.2024)
- [ ] Опрос
- [ ] Заметка
- [ ] Статья
- [ ] Стикер
- [ ] ВК-Клип
- [ ] Товар
- [x] Граффити (старые) (23.06.2024)
- [ ] Вики-страница
- [x] Ссылка (24.06.2024)
- [ ] Аудио-плейлист
- [ ] Фотоальбом
- [ ] "Masonry layout"
- [x] Адаптация аттачментов. К примеру, если у поста всего одно фото, отображать его шире, или если у поста только видео, отображать его плеер. То же самое с документами-гифами.
- [x] **Дополнительные поля постов**
- [x] Подпись автора (29.05.2024)
- [x] Число просмотров (20.05.2024)
- [x] "Рекламный пост" (31.05.2024)
- [x] Источник поста (29.05.2024)
- [x] Удалил страницу (16.05.2024)
- [x] Обновил фотографию (29.05.2024)
- [x] Написал на сайте (16.06.2024)
- [x] Геолокация (23.06.2024)

#### Viewer'ы

- [ ] **Фото**
- [x] Собственно (03.06.2024)
- [ ] Комментарии
- [ ] Лайки комменты действия
- [ ] Переключения между фото (только я не знаю как сделать то переключение как в ВК)
- [ ] **Видео**
- [x] Собственно
- [ ] Комментарии
- [ ] Лайки комменты действия
- [ ] **Документ**
- [ ] Собственно
- [ ] "Добавить к себе"

##### Комментарии

- [x] Шаблон комментария (02.06.2024)
- [x] Выбор сортировки комментариев (20.06.2024)
- [ ] **Действия**
- [x] Лайк (03.06.2024)
- [ ] Репост
- [ ] Удаление
- [ ] Редактирование
- [ ] Репорт
- [x] Ветка комментариев (03.06.2024)
- [x] "OP" (02.06.2024)

#### Новости

- [x] Новости. (03.06.2024)
- [x] "Умная лента" (04.06.2024)
- [x] Вкладки новостей (photo, photo_tag, friend, note, video, audio, all) (22.06.2024)
- [x] `return_banned` (21.06.2024)
- [x] Рекомендации (04.06.2024)
- [x] "Не показывать в ленте" (23.06.2024)
- [x] Блокировка источников в новостях (16.05.2024)
- [x] Списки новостей (22.06.2024)

#### Списки новостей

- [ ] Редактирование
- [ ] Создание

#### Друзья

- [x] Все друзья (25.06.2024)
- [x] Друзья онлайн (27.06.2024)
- [x] Поиск по друзьям (28.06.2024)
- [x] Мало взаимодействуете? (27.06.2024)
- [x] Общие с человеком друзья (28.06.2024)
- [ ] Смена сортировки
- [ ] **Списки друзей**
- [x] Просмотр (28.06.2024)
- [ ] Отображение
- [ ] Создание
- [ ] Редактирование
- [x] **Заявки в друзья**
- [x] Исходящие (27.06.2024)
- [x] Входящие (27.06.2024)

#### Список групп

- [x] Все группы (28.06.2024)
- [x] Управляемые  (28.06.2024)
- [x] Встречи (28.06.2024)
- [ ] Вкладки встреч (сегодня, на этой неделе, все)
- [ ] Календарь встреч
- [x] Рекомендуемые (28.06.2024)
- [ ] Поиск среди групп пользователя (метод не найден)
- [x] Недавние группы
- [x] Очистка недавних групп (28.06.2024)
