if(!window.langs) {
    langs = []
}

window.langs.push({
    'lang_info': {
        'native_name': 'Русский',
        'eng_name': 'Russian',
        'author': 'litewk',
        'short_name': 'ru',
        'flag': '0px 0px',
    },

    'prepositions': {
        'for_rus_preposition': 'на',
        'on_rus_preposition': 'за',
        'another_on_rus_preposition': 'в',
    },

    'main_page': {
        'hello_text': ``,
    },

    'navigation': {
        'my_page': 'Моя Страница',
        'my_news': 'Новости',
        'my_friends': 'Друзья',
        'my_groups': 'Группы',
        'my_messages': 'Сообщения',
        'my_photos': 'Фотографии',
        'my_audios': 'Аудиозаписи',
        'my_videos': 'Видеозаписи',
        'my_faves': 'Закладки',
        'my_notifications': 'Уведомления',
        'my_search': 'Поиск',
        'my_documents': 'Документы',
        'my_notes': 'Заметки',
        'my_wikipages': 'Вики-страницы',
        'my_settings': 'Настройки',
        'logout': 'Выйти',
        'go_to_vk': 'Перейти в vk.com',
        'authorize': 'Авторизация',
        'edit_info': 'Редактировать',
        
        'debug': 'Отладка',
        'documentation': 'Документация',

        'to_up': 'Наверх',
        'come_back': 'Назад',
        'to_back': 'Вернуться',

        'suspicious_link': 'Ссылка, по мнению ВК, подозрительная. <br> Всё равно хочешь перейти?',
        'not_found_shortcode': 'По данному шорткоду ничего не найдено. Хочешь перейти в ВК?',
        'all': 'Все',
        'no_account': 'Без аккаунта',
        'add_account': 'Добавить аккаунт',
        'loading': 'Загрузка...',
    },

    'common': {
        'show_next': 'Показать полностью...',
        'report': 'Пожаловаться',
    },

    'reports': {
        'report': 'Пожаловаться',
        'additional_comment_desc': 'Опишите причину жалобы',
        'additional_comments': 'Комментарий (необязательно)',
        'report_user_desc': 'Что вам кажется недопустимым на странице $1?',
        'report_club_desc': 'Что вам кажется недопустимым в этой группе?',
        'report_post_desc': 'Что вам кажется недопустимым в этом материале?',
        'report_was_sent': 'Жалоба была отправлена.',
        'report_was_not_sent': 'Произошла ошибка при отправке жалобы.',

        'spam': 'Спам',
        'fraud': 'Мошенничество',
        'insult': 'Оскорбления',
        'adversiment': 'Реклама',
        'porner': 'Откровенное изображение',
        'cpu': 'ЦП',
        'extremism': 'Экстремизм',
        'violence': 'Насилие',
        'drugs': 'Наркотики',
        'adult_materials': 'Материалы для взрослых',
        'insult_single': 'Оскорбление',
        'suicide_commits': 'Призывы к суициду',
        'deception': 'Обман',
    },

    'pagination': {
        'show_more': 'Листать далее',
    },

    'time': {
        'month_1_gen': 'января',
        'month_2_gen': 'февраля',
        'month_3_gen': 'марта',
        'month_4_gen': 'апреля',
        'month_5_gen': 'мая',
        'month_6_gen': 'июня',
        'month_7_gen': 'июля',
        'month_8_gen': 'августа',
        'month_9_gen': 'сентября',
        'month_10_gen': 'октября',
        'month_11_gen': 'ноября',
        'month_12_gen': 'декабря',
        'date_formatted_default_year_time': '$1.$2.$3 в $4:$5',
        'date_formatted_default_no_year': '$1.$2 в $3:$4',
        'date_formatted_default_seconds_year_time': '$1.$2.$3 в $4:$5:$6',
        'date_formatted_default_seconds_no_year_time': '$1.$2 в $3:$4:$5',
        'date_formatted_default_seconds_no_year': '$1.$2 в $3',
        'date_formatted_month': '$1 $2 $3 г. в $4',
        'date_formatted_month_no_year': '$1 $2 в $3',
        'age_zero': '0 лет',
        'age_one': '$1 год',
        'age_few': '$1 года',
        'age_other': '$1 лет',
    },

    'settings': {
        'settings': 'Настройки',
        'settings_tweaks': 'CSS',
        'settings_navigation': 'Навигация',
        'settings_ui': 'Внешний вид',
        'settings_ux': 'Общие',
        'settings_auth': 'Авторизация',
        'settings_language': 'Язык',
        'settings_themes': 'Темы оформления',
        'settings_accounts': 'Аккаунты',
        'settings_debug': 'Отладка',
        'settings_about': 'О сайте',
        'please_enter': 'вводи',

        'settings_common': 'Общие',
        'settings_content': 'Контент',
        'reset_settings': 'Сбросить настройки',
        'reset_settings_action': 'Сброс настроек',
        'reset_settings_action_description': 'Уверен, что хочешь сбросить настройки?',
    },

    'settings_ui': {
        'settings_custom_css': 'Настройки CSS',
        'settings_custom_css_description': 'Настройки внешнего вида, которые можно поменять через CSS',

        'settings_custom_js': 'Собственный JS',
        'settings_custom_js_tip': 'Применится после перезагрузки страницы.',

        'settings_ui': 'Внешний вид',
        'settings_ui_tweaks': 'Твики',
        'settings_ui_left_menu': 'Меню навигации',
        'settings_ui_left_authorize': 'Авторизуйся.',

        'settings_ui_left_reset_default': 'Сбросить',
        'settings_ui_left_over': 'Готово',
        'settings_ui_left_add': 'Добавить',
        'settings_ui_left_menu_start_edit': 'Начать редактирование',
        'settings_ui_left_menu_stop_edit': 'Закончить редактирование',
        'settings_ui_left_delete': 'Удалить',
        'settings_ui_left_up': 'Вверх',
        'settings_ui_left_down': 'Вниз',

        'settings_ui_left_click_tip': 'Нажми по элементу в меню, чтобы отредактировать его.',
        'settings_ui_left_text': 'Надпись',
        'settings_ui_left_href': 'Ссылка',
        'settings_ui_left_anchor': 'Якорь',
        'settings_ui_left_new_page': 'Открывать в новой вкладке',
        'settings_ui_left_disabled': 'Отключён',
        'settings_ui_left_hidden': 'Скрыт',
        'settings_ui_left_type': 'Тип',
        'settings_ui_left_type_link': 'Пункт меню',
        'settings_ui_left_type_footer_link': 'Футер',

        'settings_ui_i18n_tip': `Для использования локализированной строки в начале пиши "_".`,
        'settings_ui_anchor_tip': `Отвечает за счётчик у пункта меню.`,

        'themes': 'Темы оформления',
        'css_settings': 'Кастомный CSS',
        'install_theme': 'Установить',
        'from_author': 'от $1',

        'users_section': 'Пользователи',
        'page_section': 'Сайт',
    },

    'settings_ui_tweaks': {
        'vk_like_padding': 'Расширить страницу на всю ширину монитора',
        'transitions_everywhere': 'Сладко дунул',
        'round_avatars': 'Круглые аватарки',
        'highlight_friends': 'Подсвечивать друзей зелёным цветом',
        'hide_onliner': `Скрыть отображение статуса "онлайн" у записей и комментариев`,

        'hide_counters': 'Скрыть счётчики в меню навигации',
        'hide_image_status': 'Скрывать графические статусы',
        'colors': 'Цвета',
        'accent_color': 'Акцентный цвет',
        'header_color': 'Цвет шапки',
        'background_color': 'Цвет фона',
    },
    
    'settings_ux': {
        'settings_ux_date_format': 'Вид даты',
        'settings_ux_date_format_default': 'DD.MM.YYYY в HH:MM',
        'settings_ux_date_format_default_seconds': 'DD.MM.YYYY в HH:MM:SS',
        'settings_ux_date_format_day_month': 'DD mmmm ?(YYYY г.) в HH:MM',
        'settings_ux_date_format_day_month_seconds': 'DD mmmm ?(YYYY г.) в HH:MM:SS',

        'settings_ux_online_status': 'Пробуждение в онлайн',
        'settings_ux_online_status': 'Пробуждение в онлайн',
        'settings_ux_send_online_none': 'Не пробуждать аккаунт в онлайн',
        'settings_ux_send_online_method_call': 'Пробуждать при любом действии',
        'settings_ux_send_online_timeout': 'Пробуждать каждые 5 минут',
        'settings_ux_send_online_warn': 'Некоторые действия (создание поста, отправка сообщения) пробудят твой аккаунт в онлайн вне зависимости от настройки.',

        'settings_ux_scrolling': 'Скроллинг',
        'settings_ux_scrolling_save_progress': 'Сохранять прогресс прокрутки в URL',
        'settings_ux_scrolling_auto': 'Автопрокрутка',
        'settings_ux_update_paginators': 'Обновлять пагинатор при подгрузке следующей страницы',
        'settings_ux_previous_page_deletion': 'Удалять предыдущую страницу при прогрузке следующей',

        'settings_ux_site_menu': 'Меню сайта',
        'settings_ux_navigation': 'Навигация',
        'settings_ux_navigation_better_my_page': `Вместо "Моя Страница" показывать имя профиля`,
        'settings_ux_navigation_hide_back': `Скрывать кнопку "Назад"`,
        'settings_ux_navigation_save_pages': `Сохранение и загрузка ранее посещённых страниц (работает нестабильно)`,
        'settings_ux_navigation_away_enable': 'Проверять ссылки на небезопасность',
        'settings_ux_navigation_update_counters': 'Обновлять счётчики в меню',
        'settings_ux_navigation_live_notifications': 'То, что не работает',
        'settings_ux_navigation_edit': 'Редактировать',
        'settings_ux_header_name': 'Текст в шапке сайта',

        'settings_ux_posts_settings': 'Записи и комментарии',
        'settings_ux_content_settings_comment_sort_default': 'Сортировка комментариев',

        'settings_ux_content_settings': 'Текст',

        'settings_ux_content_settings_format_emojis': 'Заменять текстовые эмодзи на Twemoji',
        'settings_ux_content_settings_show_lottie_stickers': 'Анимированные стикеры',
        'settings_ux_content_shortify_text': `Сокращение текста до "Показать полностью"`,
        
        'settings_ux_user': 'Профиль пользователя',
        'settings_ux_user_friends_block_sort': 'Сортировка друзей в блоке:',
        'settings_ux_user_friends_block_sort_rating': 'По общительности',
        'settings_ux_user_friends_block_sort_random': 'Случайно',
        'settings_ux_user_show_register': 'Показывать дату регистрации',

        'settings_ux_cover': 'Обложки',

        'settings_ux_cover_on_up': 'Показывать обложку над страницей',
        'settings_ux_cover_from_name': 'Показывать обложку над именем',
        'settings_ux_cover_background': 'Показывать обложку на фоне информации',
        'settings_ux_cover_body_background': 'Показывать обложку на фоне страницы',
        'settings_ux_cover_no': 'Не показывать обложку',

        'settings_ux_proxy': 'Прокси',
        'settings_ux_proxy_url': 'Ссылка на прокси',
        'settings_ux_proxy_useragent': 'Замена UserAgent',
        'settings_ux_use_proxy': 'Использовать прокси для всех запросов',

        'settings_ux_lang': 'Язык',

        'settings_ux_others': 'Прочее',
        'settings_ux_use_execute': 'Использовать execute (рекомендуется)',
        'settings_ux_hide_waterfall': 'Скрыть лоадер',

        'settings_ux_about': 'О сайте',
        'settings_ux_about_last_update': 'Последнее обновление: $1',
    },

    'settings_language': {
        'applying_language_tip': 'Для применения языка перезагрузи страницу.',
        'lang_author': 'Автор',

        'change_language': 'Выбор языка',
        'change_language_verb': 'Изменить',
    },

    'settings_accounts': {
        'accounts_count_zero': '$1 аккаунтов',
        'accounts_count_one': '$1 аккаунт',
        'accounts_count_few': '$1 аккаунта',
        'accounts_count_other': '$1 аккаунтов',
        'accounts_logout': 'Выйти',
        'accounts_add': 'Добавить',
        'accounts_set_default': 'Войти',

        'edit': 'Локальное редактирование',
        'delete': 'Удалить',
        'sure_deleting': 'Действительно хочешь удалить аккаунт отсюда?',
        'revoke_token': 'Отозвать токен',
    },

    'settings_about': {
        'settings_about_authors': 'Разработчики',
        'settings_about_main_code': 'Основной код',
        'settings_about_cover': 'Обложка',
        'settings_api_vk': 'VK API',
    },

    'debug': {
        'debug': 'Отладка',
        'settings_cache': 'Кэш и LocalStorage',
        'settings_cache_cities': 'Кэш городов',
        'settings_cache_groups': 'Кэш групп',
        'settings_localstorage_download': 'Экспорт LocalStorage',
        'settings_localstorage_import': 'Импорт LocalStorage',
        'settings_localstorage_enter': 'Ввeди содержимое LocalStorage',

        'settings_cache_indexeddb': 'IndexedDB',
        'settings_cache_indexeddb_clear': 'Очистить IndexedDB',
        'settings_cache_indexeddb_clear_warning': 'Уверен, что хочешь это сделать?)',
        'settings_cache_indexeddb_clear_notif': 'IndexedDB очищен.',

        'settings_api_test': 'Запуск методов API',
        'settings_method_name': 'Метод API',
        'settings_method_params': 'Параметры к API (в формате JSON)',
        'settings_method_result': 'Результат будет выведен здесь',
        'settings_method_process_errors': 'Необработанный результат',
        'settings_method_api_module': 'Модуль API',

        'settings_method_api_module_default': 'Текущий аккаунт',
        'settings_method_api_module_anonymous': 'Анонимный',
        'settings_method_api_module_anonymous_docs': 'Анонимный | Документация',
        'settings_method_api_module_no_token': 'Без токена',

        'settings_method_send': 'Отправить',
        'settings_method_clear': 'Очистить',
        'settings_method_unspacify': 'Убрать пробелы',

        'settings_routing': 'Роутинг',
        'settings_restart_app': 'Перезапустить приложение',

        'api': 'VK API',
        'sandbox': 'Песочница',
        'cache': 'Кэш',
        'router': 'Роутинг',
        'others': 'Прочее',
        'goto_route': 'Перейти по пути',
    },

    'messagebox': {
        'close': 'Закрыть',
        'cancel': 'Отмена',
        'enter': 'Ввести',
        'hide': 'Скрыть',
        'save': 'Сохранить',
        'send': 'Отправить',
        'restore': 'Восстановить',
        'comeback': 'Вернуться',
        'apply': 'Применить',
        'warning': 'Предупреждение',

        'yes': 'Да',
        'no': 'Нет',
        'loading_shy': 'загружаю...',
    },

    'auth': {
        'path_to_api': 'Путь к API',
        'vk_api_token': 'Токен VK API',
        'vk_api_get_token': `Получить токен VK API ты можешь на сайте <a href="https://vkhost.github.io/" target='_blank'>vkhost.github.io</a>, следуя инструкциям, данным на нём.`,
        'vk_api_info_token': `Сайт хранит токен локально и не передаёт его третьим лицам, однако не исключены XSS-уязвимости.<br> Если вы почувствовали, что ваш токен украли, отключите приложение с авторизацией в <a href='https://vk.com/settings?act=apps' target='_blank'>настройках VK</a>, либо в VK ID > "Безопасность и вход" нажмите "Завершить другие сеансы".`,
        'vk_api_info_recommend': 'Рекомендую использовать первое приложение из списка.',
        'auth': 'Авторизоваться',
        'login': 'Логин',
        'password': 'Пароль',

        'auth_choose_app': 'Приложение авторизации',
        'auth_oauth_link': 'Ссылка авторизации',
        'auth_api_url': 'Ссылка к VK API',
        'auth_enter_token': 'Введи токен',
        'auth_enter_token_desc': 'Введи токен, полученный из вкладки OAuth.',

        'by_token': 'Токен',

        'auth_enter_login_also': `
        <ul>
            <li>Безпарольная авторизация не поддерживается, и 2FA тоже.</li>
            <li> Так же, если переусердствовать, твою страницу могут заморозить из-за "Подозрительной активности".</li>
            <li>С большой вероятностью появится ошибка "Access token has expired", потому что user agent не тот.</li>
            <li>А ещё, тебе придётся копировать токен вручную из-за ограничений CORS. Так что лучше используй OAuth.</li>
        </ul>`,
        
        'auth_enter_login': `
        <ul>
            <li>Безпарольная авторизация не поддерживается, и 2FA тоже.</li>
            <li>С большой вероятностью появится ошибка "Access token has expired", потому что user agent не тот.</li>
            <li>Так же, если переусердствовать, твою страницу могут заморозить из-за "Подозрительной активности". Так что лучше используй OAuth.</li>
        </ul>
        `,

        'copy_token_from_address': `
        <ul>
            <li>После нажатия на "Авторизоваться" тебя перекинет на страницу авторизации, где тебе нужно нажать "Разрешить".</li>
            <li>На новой странице скопируй токен: он находится между 'access_token=' и '&expires_in'.</li>
            <li>После этого вернись на сайт и вставь токен в поле.</li>
        </ul>`,
        'auth_token_description': `
        <ul>
            <li>Токен ты можешь получить во вкладке <a href="#login/oauth">OAuth</a>.</li>
        </ul>
        `,
        'auth_app_vk_calls': 'Звонки ВКонтакте',
        'auth_app_vk_com': 'vk.com (не рекомендую)',

        'straight_auth': 'По логину',
        'edit_account_note': 'Имя изменится только для данного клиента.',
        'optional': 'Опционально',
    },

    'user_page': {
        'profile': 'Профиль',
        'edit_page': 'Редактировать',

        'user_avatar': 'Аватар пользователя',

        'page_of_deceased': 'Страница покойного человека',
        'has_verification': 'Имеет галочку',
        'has_verification_esia': 'Подтвердил документы?',
        'has_verification_phone': 'Подтвердил номер телефона?',
        'has_indexing': 'Индексируется в поисковиках',
        'is_closed': 'Закрыт ли профиль',
        
        'first_name': 'Имя',
        'last_name': 'Фамилия',

        'user_no': 'Нет',
        'user_yes': `Да`,
        'hidden': 'скрыт',
        'online': 'В сети',
        'no_status': 'Нет статуса',

        'info': 'Информация',
        'personal_info': 'Личная информация',
        'profile_info': 'Информация о профиле',

        'show_more_info': 'Показать подробную информацию',
        'hide_more_info': 'Скрыть подробную информацию',
        
        'came_on_site': 'заходил(а)',
        'came_on_site_male': 'заходил',
        'came_on_site_female': 'заходила',
        'sex': 'Пол',
        'male': 'мужской',
        'female': 'женский',
        'birthdate': 'День рождения',
        "register_date": 'Дата регистрации',
        'marital_status': 'Семейное положение',
        'contacts': 'Контакты',
        'interests': 'Интересы',
        'career': 'Карьера',
        'life_position': 'Жизненная позиция',
        'education': 'Образование',
        'relatives': 'Родственники',
        'military': 'Военная служба',
        'counters': 'Счётчики',
        'page_link': 'Короткая ссылка',
        'known_languages': 'Владеет языками',
        'known_languages_pov': 'Владение языками',
        
        'show_more_information': 'Показать больше информации',
        'hide_more_information': 'Скрыть подробную информации',
        
        'job_post': 'Должность',
        'job_year_start': 'Год начала работы',
        'job_year_end': 'Год окончания работы',
        'job_city': 'Город',

        'political_views': 'Полит. предпочтения',
        'worldview': 'Мировозрение',
        'main_in_life': 'Главное в жизни',
        'main_in_people': 'Главное в людях',
        'attitude_towards_smoking': 'Отношение к курению',
        'attitude_towards_alcohol': 'Отношение к алкоголю',
        'inspired_by': 'Вдохновляют',

        'activities': 'Деятельность',
        'fav_music': 'Любимая музыка',
        'fav_films': 'Любимые фильмы',
        'fav_tv': 'Любимые телешоу',
        'fav_books': 'Любимые книги',
        'fav_games': 'Любимые игры',
        'fav_quotes': 'Любимые цитаты',

        'country': 'Страна',
        'city': 'Город',
        'hometown': 'Родной город',
        'mobile_phone': 'Мобильный телефон',
        'additional_phone': 'Дополнительный телефон',
        'personal_site': 'Личный сайт',

        'hide_from_feed': 'Скрыть из ленты',
        'unhide_from_feed': 'Показывать в ленте',

        'subscribe_to_new': 'Подписаться на новости',
        'unsubscribe_to_new': 'Отписаться от новостей',

        'school': 'Школа',
        'school_name': 'Название',
        'school_start_year': 'Год начала обучения',
        'school_end_year': 'Год окончания обучения',
        'school_graduation_year': 'Год выпуска',
        'school_speciality': 'Специализация',
        'school_class': 'Класс',

        'university': 'ВУЗ',
        'university_faculty': 'Факультет',
        'university_chair': 'Специальность',
        'education_form': 'Форма обучения',
        'education_status': 'Статус',

        'relatives': 'Родственники',
        'relative_child': 'Сын/дочь',
        'relative_sibling': 'Брат/сестра',
        'relative_parent': 'Отец/мать',
        'relative_grandparent': 'Дедушка/бабушка',
        'relative_grandchild': 'Внук/внучка',

        'relative_child_male': 'Сын',
        'relative_child_female': 'Дочь',
        
        'relative_sibling_male': 'Брат',
        'relative_sibling_female': 'Сестра',

        'relative_parent_male': 'Отец',
        'relative_parent_female': 'Мать',

        'relative_grandparent_male': 'Дедушка',
        'relative_grandparent_female': 'Бабушка',

        'relative_grandchild_male': 'Внук',
        'relative_grandchild_female': 'Внучка',

        'military_unit': 'Воинская часть',
        'military_year_start': 'Год начала службы',
        'military_year_end': 'Год окончания службы',

        'create_message': 'Написать сообщение',
        'list_friends': 'Посмотреть друзей',

        'go_to_user_page': 'перейти к странице',
        'error_getting_registration_date': 'Не удалось получить.',

        'cover': 'Обложка',
        'admined_groups': 'Администрируемые группы',
        'admined_groups_loading': 'Загрузка...',
        'admined_groups_not_found': 'Администрируемых групп не обнаружено.',
    },

    'relation': {
        'not_picked': 'Не указано',
        'not_picked_small': 'Неважно',

        'female_single': 'не замужем',
        'male_single': 'не женат',
        'meets_with': 'встречаюсь',
        'with_rus_preposition': 'с',
        'female_engaged': 'помолвлена',
        'male_engaged': 'помолвлен',
        'female_married': 'замужем',
        'male_married': 'женат',
        'relations_complicated': 'всё сложно',
        'active_search': 'в активном поиске',
        'female_inlove': 'влюблена',
        'male_inlove': 'влюблён',
        'in_a_civil_marriage': 'в гражданском браке',

        'single': 'Не женат/не замужем',
        'meets': 'Есть друг/есть подруга',
        'engaged': 'Помолвлен(а)',
        'married': 'Женат/замужем',
        'complicated': 'Всё сложно',
        'active': 'В активном поиске',
        'inlove': 'Влюблён/влюблена',
    },

    'political_views': {
        'communistic_views': 'Коммунистические',
        'socialistic_views': 'Социалистические',
        'moderate_views': 'Умеренные',
        'liberal_views': 'Либеральные',
        'conservative_views': 'Консервативные',
        'monarchic_views': 'Монархические',
        'ultraconservative_views': 'Ультраконсервативные',
        'indifferent_views': 'Безразличные',
        'libertarian_views': 'Либертарианские',
        'centrist_views': 'Центристские',
    },

    'attitudes': {
        'strongly_negative_views': 'Резко негативное',
        'negative_views': 'Негативное',
        'compromise_views': 'Компромиссное',
        'neutral_views': 'Нейтральное',
        'positive_views': 'Положительное',
    },

    'life_opinion': {
        'family_and_kids': 'Семья и дети',
        'career_and_money': 'Карьера и деньги',
        'entertainment_and_rest': 'Развлечения и отдых',
        'science_and_investigation': 'Наука и исследования',
        'self_development': 'Саморазвитие',
        'world_imporement': 'Совершенствование мира',
        'beauty_and_art': 'Красота и искусство',
        'fame_and_influence': 'Слава и влияние',

        'mind_and_creativity': 'Ум и креативность',
        'kindness_and_honestness': 'Доброта и честность',
        'beautiness_and_health': 'Красота и здоровье',
        'authority_and_richness': 'Власть и богатство',
        'courage_and_tenacity': 'Смелость и упорство',
        'humor_and_life_loving': 'Юмор и жизнелюбие',
    },

    'counters': {
        'albums_count': 'Альбомов',
        'albums_count_zero': '$1 альбомов',
        'albums_count_one': '$1 альбом',
        'albums_count_few': '$1 альбома',
        'albums_count_other': '$1 альбомов',

        'articles_count': 'Статей',
        'articles_count_zero': '$1 статей',
        'articles_count_one': '$1 статья',
        'articles_count_few': '$1 статьи',
        'articles_count_other': '$1 статей',

        'audios_count': 'Аудиозаписи',
        'audios_count_zero': '$1 аудиозаписей',
        'audios_count_one': '$1 аудиозапись',
        'audios_count_few': '$1 аудиозаписи',
        'audios_count_other': '$1 аудиозаписей',

        'badges_count_zero': '$1 значков',
        'badges_count_one': '$1 значок',
        'badges_count_few': '$1 значка',
        'badges_count_other': '$1 значков',

        'clips_count': 'Клипов',
        'clips_count_zero': '$1 вк-клипов',
        'clips_count_one': '$1 вк-клип',
        'clips_count_few': '$1 вк-клипа',
        'clips_count_other': '$1 вк-клипов',

        'friends': 'Друзей',
        'friends_count_zero': '$1 друзей',
        'friends_count_one': '$1 друг',
        'friends_count_few': '$1 друга',
        'friends_count_other': '$1 друзей',
        
        'online_friends': 'Друзья в сети',
        'online_friends_count_zero': '$1 друзей в сети',
        'online_friends_count_one': '$1 друг в сети',
        'online_friends_count_few': '$1 друга в сети',
        'online_friends_count_other': '$1 друзей в сети',

        'mutual_friends': 'Общие друзей',
        'mutual_friends_count_zero': '$1 общих друзей',
        'mutual_friends_count_one': '$1 общий друг',
        'mutual_friends_count_few': '$1 общих друга',
        'mutual_friends_count_other': '$1 общих друзей',

        'gifts_count': 'Подарков',
        'gifts_count_zero': '$1 подарков',
        'gifts_count_one': '$1 подарок',
        'gifts_count_few': '$1 подарка',
        'gifts_count_other': '$1 подарков',
        
        'groups_count': 'Групп',
        'groups_count_zero': '$1 групп',
        'groups_count_one': '$1 группа',
        'groups_count_few': '$1 группы',
        'groups_count_other': '$1 групп',

        'interesting_pages_count_zero': '$1 подписок',
        'interesting_pages_count_one': '$1 подписка',
        'interesting_pages_count_few': '$1 подписки',
        'interesting_pages_count_other': '$1 подписок',
        
        'photos_count': 'Фотографий',
        'photos_count_zero': '$1 фотографий',
        'photos_count_one': '$1 фотография',
        'photos_count_few': '$1 фотографии',
        'photos_count_other': '$1 фотографий',

        'topics_count': 'Обсуждений',
        'topics_count_zero': '$1 обсуждений',
        'topics_count_one': '$1 обсуждение',
        'topics_count_few': '$1 обсуждения',
        'topics_count_other': '$1 обсуждений',

        'posts_on_wall_count': 'Записей',
        'posts_on_wall_count_zero': '$1 записей',
        'posts_on_wall_count_one': '$1 запись',
        'posts_on_wall_count_few': '$1 записи',
        'posts_on_wall_count_other': '$1 записей',
        
        'subscriptions_count': 'Подписчиков',
        'subscriptions_counter_zero': '$1 подписчиков',
        'subscriptions_counter_one': '$1 подписчик',
        'subscriptions_counter_few': '$1 подписчика',
        'subscriptions_counter_other': '$1 подписчиков',
                
        'video_playlists_count_zero': '$1 видеоальбомов',
        'video_playlists_count_one': '$1 видеоальбом',
        'video_playlists_count_few': '$1 видеоальбома',
        'video_playlists_count_other': '$1 видеоальбомов',
        
        'videos': 'Видео',
        'added_videos_count_zero': '$1 видеозаписей',
        'added_videos_count_one': '$1 видеозаписей',
        'added_videos_count_few': '$1 видеозаписи',
        'added_videos_count_other': '$1 видеозаписей',
        
        'followers_count': 'Подписчиков',
        'followers_count_zero': '$1 подписчиков',
        'followers_count_one': '$1 подписчик',
        'followers_count_few': '$1 подписчика',
        'followers_count_other': '$1 подписчиков',

        'messages_count_zero': '$1 сообщений',
        'messages_count_one': '$1 сообщение',
        'messages_count_few': '$1 сообщения',
        'messages_count_other': '$1 сообщений',

        'docs_count_zero': '$1 документов',
        'docs_count_one': '$1 документ',
        'docs_count_few': '$1 документа',
        'docs_count_other': '$1 документов',

        'votes_count_zero': '$1 голосов',
        'votes_count_one': '$1 голос',
        'votes_count_few': '$1 голоса',
        'votes_count_other': '$1 голосов',
    },

    'faves': {
        'add_to_faves': 'Добавить в закладки',
        'remove_from_faves': 'Удалить из закладок', 
    },

    'blacklist': {
        'add_to_blacklist': 'Добавить в чёрный список',
        'remove_from_blacklist': 'Удалить из чёрного списка',
    },

    'users_relations': {
        'send_message': 'Написать сообщение',
        'start_friendship': 'Добавить в друзья',
        'subscribe': 'Подписаться',
        'cancel_friendship': 'Отменить заявку',
        'unsubscribe': 'Отписаться',
        'decline_friendship': 'Отклонить заявку',
        'accept_friendship': 'Принять заявку',
        'destroy_friendship': 'Удалить из друзей',

        'block_user': 'Заблокировать пользователя',
    },

    'online_types': {
        'online_from_mobile_version': 'с m.vk.com',
        'online_from_iphone': 'с iPhone',
        'online_from_ipad': 'с iPad',
        'online_from_android': 'с Android',
        'online_from_wp': 'с Windows Phone',
        'online_from_wten': 'с Windows 10',
        'online_from_web': 'с веб-версии',
        'online_is_hidden': 'Онлайн скрыт',
        'now_online': 'Онлайн',
    },

    'groups': {
        'groups': 'Группы',
        'club': 'Группа',

        'main_info': 'Основная информация',
        'is_closed': 'Группа закрыта?',
        'activity': 'Тематика',
        'description': 'Описание',
        'city': 'Город',

        'subscribe': 'Подписаться',
        'unsubscribe': 'Отписаться',
        'send_request': 'Подать заявку',
        'cancel_request': 'Отменить заявку',
        'recomend_to_friends': 'Рекомендовать друзьям',
        'invite_friends': 'Пригласить друзей',
        'age_limits': 'Возрастные ограничения',

        'all_groups': 'Все группы',
        'managed_groups': 'Управляемые',
        'events': 'События',
        'recommended': 'Рекомендуемое',
        'recent': 'Недавние',

        'managed_groups_title': 'Управляемые группы',
        'events_title': 'Ваши события',
        'recommended_title': 'Рекомендуемое вам',
        'recent_title': 'Недавно посещённые вами группы',

        'clear_recents': 'Очистить',
        'followers': 'Подписчики',
        'followers_friends': 'Подписчики из друзей',
        'contacts': 'Контакты',
        'links': 'Ссылки',

        'topics': 'Обсуждения',
        'last_from_user_time': `Последнее от <a href="$1">$2</a> $3`,

        'show_history_block': 'Показать историю группы',
        'hide_history_block': 'Скрыть историю группы',
        'public_page': 'Публичная страница',
        'similar_groups': 'Похожие группы',
    },

    'groups_history': {
        'groups_history_create': 'Группа создана',
        'groups_history_name_change': `Название изменено на "$1"`,
        'groups_history_namechange_one': 'Название изменено $1 раз',
        'groups_history_namechange_few': 'Название изменено $1 раза',
        'groups_history_namechange_other': 'Название изменено $1 раз',
    },

    'wall': {
        'wall': 'Стена',

        'pinned': 'закреплено',
        'search': 'Поиск',
        'edit_post': 'Редактировать',
        'delete_post': 'Удалить запись',
        'archive_post': 'Архивировать запись',
        'unarchive_post': 'Убрать из архива',
        'pin_post': 'Закрепить запись',
        'unpin_post': 'Открепить запись',
        'disable_comments_post': 'Отключить комментарии',
        'enable_comments_post': 'Включить комментарии',
        'report_post': 'Пожаловаться на запись',
        'fave_post': 'Добавить в закладки',
        'unfave_post': 'Убрать из закладок',
        'go_to_vk': 'Перейти в ВК',
        'not_interesting': 'Не интересно',
        'geo': 'Геолокация',

        'all_posts': 'Все записи',
        'owner_posts': 'Свои записи',
        'others_posts': 'Чужие записи',
        'archived_posts': 'Архивированные записи',
        'suggests_posts': 'Предложенные записи',
        'postponed_posts': 'Отложенные записи',
        'search_posts': 'Поиск записей',
        'post_has_deleted': `Запись удалена. <a href='javascript:void(0)' id='_postRestore'>Восстановить?</a>`,
        'post_has_archived': `Запись была архивирована. <a href='javascript:void(0)' id='_postArchiveAction' data-ref='1' data-type='1'>Вернуть?</a>`,
        'post_has_unarchived': `Запись была возвращена из архива. <a href='javascript:void(0)' id='_postArchiveAction' data-ref='1' data-type='0'>Архивировать?</a>`,
        'post_has_ignored': `Запись была убрана из ленты. <a href='javascript:void(0)' id='_toggleInteressness' data-val='1' data-type='$1'>Отменить?</a>`,
        
        'no_posts_in_tab': 'Запись не обнаружена.',
        'no_posts_in_search': 'По запросу ничего не найдено.',
        'no_comments': 'Комментариев нет.',
        'posts_invert': 'Инвертировать',

        'post': 'Запись',
        'post_on_wall': 'Запись на стене',
        'post_from': 'Запись от $1',
        'updated_photo': 'обновлено фото',
        'updated_photo_group': 'обновили фото',
        'updated_photo_user_male': 'обновил фото',
        'updated_photo_user_female': 'обновила фото',

        'updated_status_user_male': 'обновил статус',
        'updated_status_user_female': 'обновила статус',

        'deleted_page_male': 'удалил страницу со словами:',
        'deleted_page_female': 'удалила страницу со словами:',

        'deleted_page_silently_male': 'молча удалил страницу.',
        'deleted_page_silently_female': 'молча удалила страницу.',

        'left_status_male': 'оставил комментарий на странице',
        'left_status_female': 'оставил комментарий на странице',
        
        'author': 'Автор',
        'source': 'Источник',
        'is_ad': 'Рекламная запись',

        'comments_count_zero': 'Нет комментариев',
        'comments_count_one': '$1 комментарий',
        'comments_count_few': '$1 комментария',
        'comments_count_other': '$1 комментариев',
        
        'comments_count_with_threads_zero': 'Нет комментариев',
        'comments_count_with_threads_one': '$1 комментарий ($2 всего)',
        'comments_count_with_threads_few': '$1 комментария ($2 всего)',
        'comments_count_with_threads_other': '$1 комментариев ($2 всего)',
        
        'thread_count_zero': 'Нет ответов',
        'thread_count_one': '$1 ответ',
        'thread_count_few': '$1 ответа',
        'thread_count_other': '$1 ответов',

        'show_next_comments': 'Показать следующие комментарии',
        'show_next_comments_count': 'Показать следующие 10 комментариев',
        'reply_to_comment': `<span>ответ на <a href='$1'>комментарий</a></span>`,

        'sort_new_first': 'Сначала новые',
        'sort_old_first': 'Сначала старые',
        'sort_interesting_first': 'Сначала интересные',

        'wall_of_x': 'Стена $1',
        'follow_link': 'Перейти по ссылке',
        'untitled_link': 'Безымянная ссылка',
        'in_reply_of_post': 'в ответ на запись',
        'middle_click_like_tip': 'Нажми правой кнопкой мыши, чтобы открыть остальные реакции.',
    },

    'polls': {
        'poll': 'Опрос',
        'anonymous_poll': 'Анонимный опрос',
        'public_poll': 'Публичный опрос',
        'ends_x': 'завершится $1',
        'ended': 'завершился $1',
        'many_variants': 'много вариантов',
        'cant_revote': 'нельзя переголосовать',
        'created': 'создан $1',
        'vote_verb': 'Проголосовать',
        'unvote_verb': 'Отменить голос',

        'vote_as_first': 'Проголосуйте первым!',
        'votes_count_zero': '$1 проголосовавших',
        'votes_count_one': '$1 проголосовавший',
        'votes_count_few': '$1 проголосовавших',
        'votes_count_other': '$1 проголосовавших',

        'only_from_friends': 'Только от друзей',
    },

    'newsfeed': {
        'newsfeed': 'Новости',
        'section_default': 'Новое',
        'section_smart_feed': 'Интересное',
        'section_recommend': 'Рекомендации',
        'section_friends': 'Друзья',
        'section_only_friends': 'Именно друзья',

        'newsfeed_refresh': 'Обновить новости',
        'newsfeed_params': 'Параметры новостей',
        'newsfeed_list': 'Список новостей',
        'newsfeed_lists': 'Списки новостей',
        'newsfeed_return_banned': 'Скрытые записи',

        'newsfeed_type': 'Тип новостей',
        'newsfeed_type_all': 'Все новости',
        'newsfeed_type_posts': 'Записи',
        'newsfeed_type_photo': 'Фотографии',
        'newsfeed_type_photo_tags': 'Отметки на фотографиях',
        'newsfeed_type_wall_photo': 'Новые фото',
        'newsfeed_type_friends': 'Друзья',
        'newsfeed_type_note': 'Заметки (устаревшие)',
        'newsfeed_type_audio': 'Аудиозаписи',
        'newsfeed_type_video': 'Видео',
        'newsfeed_type_clips': 'Клипы',

        'added_photos': 'добавлены фото',
        'added_videos': 'добавлены видео',
        'tagged_on_photos': 'отмечен на фото',
        'added_audios': 'добавил аудиозаписи',

        'hide_source_from_feed': 'Скрыть из ленты',
        'hide_source_from_feed_on_week': 'Скрыть из ленты на неделю',
    },

    'photos': {
        'photo': 'Фотография',
        'photo_from': 'Фотография от $1',
        'photos': 'Фотографии',
        'albums': 'Альбомы',
        'album': 'Альбом',

        'graffiti': 'Граффити',
        'attached_link': 'Превью ссылки',
    },

    'videos': {
        'video': 'Видеозапись',
        'videos': 'Видео',

        'views_count_zero': 'Нет просмотров',
        'views_count_one': '$1 просмотр',
        'views_count_few': '$1 просмотра',
        'views_count_other': '$1 просмотров',
    },

    'captcha': {
        'enter_captcha': 'Введи капчу',
        'enter_captcha_there': 'Введи сюда капчу.',
    },

    'image_status': {
        'name': 'Статус',
        'get_status': 'Получить статус',
    },

    'subscriptions': {
        'subscriptions': 'Подписки',
        'subscriptions_of_x': 'Подписки $1',
    },

    'friends': {
        'friends': 'Друзья',
        'friends_online': 'Друзья онлайн',
        'subscriptions': 'Подписки',
        'came_last': 'был в сети',

        'all_friends': 'Все друзья',
        'users_friends': 'Друзья пользователя',
        'online_friends': 'Друзья онлайн',
        'friends_requests': 'Заявки',
        'recomended_friends': 'Рекомендуемые',
        'cleanup_friends': 'Редко взаимодействуете',
        'mutual_friends': 'Общие друзья',

        'incoming_requests': 'Входящие заявки',
        'outcoming_requests': 'Исходящие заявки',
        
        'incoming': 'Входящие',
        'outcoming': 'Исходящие',
        'followers': 'Подписчики',

        'search_friends': 'Поиск',
        'search_friends_longer': 'Поиск друзей',
        'friends_lists': 'Списки друзей',
        'friends_list': 'Список друзей',
    },

    'bookmarks': {
        'notif_object_faved': 'Объект был добавлен в закладки.',
        'notif_user_faved': 'Пользователь был добавлен в закладки.',
        'notif_club_faved': 'Группа была добавлена в закладки.',
        'notif_post_faved': 'Запись была добавлена в закладки.',
        'notif_link_faved': 'Ссылка была добавлена в закладки.',

        'bookmarks': 'Закладки',
        'mark_as_viewed': 'Пометить прочитанными',

        'all_bookmarks': 'Контент',
        'pages_bookmarks': 'Страницы',
        'user_bookmarks': 'Пользователи',
        'group_bookmarks': 'Группы',
        'post_bookmarks': 'Записи',
        'article_bookmarks': 'Статьи',
        'link_bookmarks': 'Ссылки',
        'podcast_bookmarks': 'Подкасты',
        'video_bookmarks': 'Видео',
        'game_bookmarks': 'Игры',

        'content_bookmarks_title': 'Контент | Закладки',
        'pages_bookmarks_title': 'Страницы | Закладки',
        'user_bookmarks_title': 'Пользователи | Закладки',
        'group_bookmarks_title': 'Группы | Закладки',
        'post_bookmarks_title': 'Записи | Закладки',
        'article_bookmarks_title': 'Статьи | Закладки',
        'link_bookmarks_title': 'Ссылки | Закладки',
        'podcast_bookmarks_title': 'Подкасты | Закладки',
        'video_bookmarks_title': 'Видео | Закладки',
        'game_bookmarks_title': 'Игры | Закладки',

        'tags': 'Теги',
        'search_by_loaded_bookmarks': 'Поиск по прогруженным закладкам',
    },

    'search': {
        'search': 'Поиск',

        'search_all_section': 'Всё',
        'search_users_section': 'Пользователи',
        'search_groups_section': 'Группы',
        'search_posts_section': 'Записи',
        'search_audios_section': 'Аудиозаписи',
        'search_videos_section': 'Видеозаписи',
        'search_photos_section': 'Фотографии',
        'search_docs_section': 'Документы',
        'search_games_section': 'Игры',

        'params_search': 'Параметры поиска',
        'search_params_user_city': 'Город',
        'search_params_user_city_id': 'ID города',
        'search_params_user_age': 'Возраст',
        'search_params_user_from': 'От',
        'search_params_user_to': 'До',
        'search_params_user_birthday': 'День рождения',
        'search_params_user_gender': 'Пол',
        'search_params_user_gender_any': 'Неважно',
        'search_params_user_gender_male': 'Мужской',
        'search_params_user_gender_female': 'Женский',
        'search_params_user_hometown': 'Родной город',
        'search_params_user_additional': 'Дополнительно',
        'search_params_user_has_photo': 'С фотографией',
        'search_params_user_has_online': 'В сети',
        'search_params_user_relation': 'Семейное положение',
        'search_params_user_sort': 'Порядок',
        'search_params_user_sort_popularity': 'По популярности',
        'search_params_user_sort_regdate': 'Под дате регистрации',

        'search_params_group_type': 'Тип группы',
        'search_params_group_type_group': 'Группа',
        'search_params_group_type_page': 'Паблик',
        'search_params_group_type_event': 'Событие',
        'search_params_group_additional': 'Дополнительно',
        'search_params_group_future': 'Предстоящее событие',
        'search_params_group_sort_relevant': 'По релевантности',
        'search_params_group_sort_subs': 'По подписчикам',

        'search_params_posts_attachments': 'Вложения',
        'search_params_posts_type': 'Тип',
        'search_params_posts_from': 'Автор',
        'search_params_posts_link': 'Содержит ссылку',
        'search_params_posts_exclude': 'Исключить слова',
        'search_params_posts_likes': 'Отметки "Нравятся"',
        'search_params_posts_show_trash': 'Показывать спам',
        
        'search_params_posts_likes_not_lesser': 'Не меньше $1',
        'search_params_posts_likes_any': 'Любое количество',

        'search_params_posts_attachments_not_select': 'Неважно',
        'search_params_posts_attachments_photo': 'Фотография',
        'search_params_posts_attachments_video': 'Видеозапись',
        'search_params_posts_attachments_audio': 'Аудиозапись',
        'search_params_posts_attachments_graffiti': 'Граффити',
        'search_params_posts_attachments_note': 'Заметка',
        'search_params_posts_attachments_poll': 'Опрос',
        'search_params_posts_attachments_link': 'Ссылка',
        'search_params_posts_attachments_file': 'Документ',
        'search_params_posts_attachments_album': 'Фотоальбом',
        'search_params_posts_attachments_article': 'Статья',
        'search_params_posts_attachments_wikipage': 'Вики-страница',
        'search_params_posts_attachments_none': 'Без вложений',

        'search_params_posts_type_none': 'Любые записи',
        'search_params_posts_type_copies': 'Только копии',
        'search_params_posts_type_replies': 'Только ответы',

        'search_params_posts_from_any': 'Любой',
        'search_params_posts_from_owner': 'Владелец стены',

        'search_params_docs_mine': 'Искать в своих',
        'search_params_docs_type': 'Тип документов',
        'search_params_docs_type_none': 'Неважно',
        'search_params_docs_tags': `Теги`,
        'search_params_docs_tags_csv': `Теги, разделённые через запятую`,
    },

    'gifts': {
        'gifts': 'Подарки',
        'gifts_of_x': 'Подарки $1',
    },

    'user_page_edit': {
        'edit_page': 'Редактирование страницы',
        'edit_page_main': 'Редактирование страницы: основная информация',
        'edit_page_blacklist': 'Редактирование страницы: ЧС',
        'edit_page_privacy': 'Редактирование страницы: Приватность',
        'edit_page_notifications': 'Редактирование страницы: Уведомления',
        
        'main_info': 'Основное',
        'blacklist': 'Чёрный список',
        'privacy': 'Приватность',
        'notifications': 'Уведомления',

        'accounts_in_bl_zero': '$1 аккаунтов в чёрном списке',
        'accounts_in_bl_one': '$1 аккаунт в чёрном списке',
        'accounts_in_bl_few': '$1 аккаунта в чёрном списке',
        'accounts_in_bl_other': '$1 аккаунтов в чёрном списке',

        'remove_from_blacklist': 'Убрать из списка',
        'search_by_blacklist': 'Поиск по чёрному списку',
        'add': 'Добавить',
        'add_to_bl': 'Добавление в чёрный список',
        'add_to_bl_desc': 'Напиши ссылку на страницу, которую хочешь заблокировать.',
        
        'search_bl': 'Поиск',
        'bl_enter_search': 'Введи ссылку',
        'want_to_block': 'Хочешь заблокировать этого пользователя?',
    },

    'docs': {
        'docs': 'Документы',
        'doc': 'Документ',
        'gif': 'Гифка',

        'all_docs': 'Все документы',
        'download_file': 'Скачать файл',
        'save_to_self': 'Сохранить к себе',
        'title': 'Название',
        'size': 'Размер',
        'ext': 'Расширение',
        'date': 'Дата загрузки',
        'type': 'Тип',
        'tags': 'Теги',
        'uploader': 'Загрузивший',
        'added': 'Добавлено.',

        'doc_type_text': 'Текстовый документ',
        'doc_type_archive': 'Архив',
        'doc_type_gif': 'GIF',
        'doc_type_image': 'Изображение',
        'doc_type_audio': 'Аудио',
        'doc_type_video': 'Видео',
        'doc_type_book': 'Книга',
        'doc_type_unknown': 'Неизвестный',
        'doc_type_any': 'Другой',
        'edit': 'Редактирование',

        'private_file': 'Личный файл',
        'study_file': 'Учебный файл',
        'book_file': 'Книга',
        'another_file': 'Другой файл',

        'search_by_document': 'Поиск по документам',
    },

    'size': {
        'kb': 'КБ', // сосать вроде там было
        'mb': 'МБ',
        'gb': 'ГБ',
        'pb': 'ПБ',
        'eb': 'ЕБ',
        'zb': 'ЗБ',
        'yb': 'ЙБ',
    },

    'notifications': {
        'notifications': 'Уведомления',
        'viewed': 'Просмотрено',
    },

    'notes': {
        'notes': 'Заметки',
        'note': 'Заметка',

        'all_notes': 'Все заметки',
        'friends_notes': 'Заметки друзей',
    },

    'likes': {
        'list_of_likers': 'Список лайкнувших',
        'list_of_likers_type_post': 'Запись',
        'list_of_likers_type_comment': 'Комментарий',
        'list_of_likers_type_photo': 'Фотография',
        'list_of_likers_type_video': 'Видео',
        'list_of_likers_type_note': 'Заметка',
        'list_of_likers_type_photo_comment': 'Комментарий к фото',
        'list_of_likers_type_video_comment': 'Комментарий к видео',
        'list_of_likers_type_topic_sitepage': 'Виджет',

        'likes_tab': 'Лайкнувшие',
        'reposts_tab': 'Поделившиеся',
    },

    'documentations': {
        'documentation': 'Документация',
        'original_documentation': 'Оригинал',

        'main_menu': 'Документация',
        'params': 'Параметры',
        'param': 'Параметр',
        'api_menu': 'API',
        'community_menu': 'Сообщество',
        'code': 'Код',
        'message': 'Сообщение',
        'description': 'Описание',
        'method': 'Метод',
        'result': 'Результат',
        'linked_versions': 'Связанные версии',
        'version': 'Версия',
        'error_codes': 'Коды ошибок',
        'need_rights': 'Права доступа',
        'need_rights_verb': 'Требуются права доступа: ',
        'required_param': 'Обязательный параметр',
        'execute_method': 'Выполнить метод',
        'execute': 'Выполнить',

        'result_will_be_here': 'Результат будет выведен здесь.',
        'affect_methods': 'Влияет на методы',
        'search_by_documentation': 'Поиск по документации',
        'search_by_documentation_results': 'Результаты поиска',
        'search_by_documentation_results_desc_zero': 'По запросу «$2» найдено $1 результатов',
        'search_by_documentation_results_desc_one': 'По запросу «$2» найден $1 результат',
        'search_by_documentation_results_desc_few': 'По запросу «$2» найдено $1 результата',
        'search_by_documentation_results_desc_other': 'По запросу «$2» найдено $1 результатов',
        'show_more': 'Показать далее',

        'search_by_query': 'Поиск по запросу "$1"',
        'section': 'Секция',
        'state': 'Состояние',
    },

    'errors': {
        'error': 'Ошибка',
        'not_all_fields_filled': 'Не все поля заполнены',
        'token_is_valid': 'Токен валидный. Вы будете перенаправлены на страницу через 5 секунд',
        'vk_api_error': 'VK API says: $1',
        'post_not_found': 'Запись не найдена.',

        'post_access_denied': 'Нет доступа к записи.',
        'not_all_fields': 'Не все поля введены',
        'profile_not_found': `Страница удалена либо ещё не создана.`,
        'group_not_found': `Запрашиваемая группа не найдена.`,
        'wall_not_found': 'Нет доступа к стене.',
        
        'not_authorized': 'Ты не авторизовался.',
        'error_getting_wall': 'Ошибка при выполнении метода. Текст: $1',
        'error_getting_news': 'Ошибка при получении новостей. Текст: $1',

        'template_insert_failed': `Вставка шаблона не удалась по причине "$1". Расскажи разработчику.`,
        'friends_not_found': 'Друзей не найдено.',
        'friends_online_not_found': 'Друзей в онлайне не найдено.',
        'followers_not_found': 'Подписчиков не найдено.',
        'unable_to_add_acc': 'Не удалось добавить аккаунт.',
        'groups_not_found': 'Группы не найдены',

        'bookmarks_all_not_found': 'Никаких закладок не найдено.',
        'could_not_draw_page': 'Не удалось отобразить страницу. Текст ошибки:',
        'network_error': 'Ошибка подключения',

        'friends_get_error': 'Друзей не найдено.',
        'friends_get_online_error': 'Друзей в сети не найдено.',
        'friends_search_error': 'Друзей по данному запросу не найдено.',
        'friends_incoming_error': 'Вам не отправляли заявок в друзья.',
        'friends_outcoming_error': 'Вы не отправляли заявок в друзья',
        'friends_suggestions_error': 'Нечего предложить.',
        'friends_followers_error': 'Подписчиков не найдено.',
        'friends_mutual_error': 'Общих друзей не найдено.',
        'friends_list_error': 'Друзей в списке не найдено.',

        'groups_get_error': 'Групп не найдено.',
        'groups_managed_error': 'Групп с правами администратора не найдено.',
        'groups_events_error': 'Событий не найдено.',
        'groups_recommend_error': 'Хз.',
        'groups_recents_error': 'Недавних групп не найдено.',

        'search_not_found': 'По запросу ничего не найдено.',
        'search_wall_not_found': 'По запросу ничего не найдено.',
        'no_account_with_id': 'Аккаунта с таким индексом не найдено.',
        'this_is_not_user': 'Это не пользователь.',
        'not_found_user': 'Пользователя по ссылке не найдено.',
        'cannot_block_yourself': 'Нельзя заблокировать себя.',
        'blacklisted_by_me': 'Пользователь уже заблокирован.',

        'user_has_been_banned': 'Пользователь был заблокирован.',
        'caused_by_rkn': 'Данный материал заблокирован на территории Российской Федерации согласно требованию Генеральной прокуратуры Российской Федерации от 24.02.2022 № 27-31-2020/Ид2145-22.',
        'user_has_been_deleted': 'Страница удалена её владельцем.',

        'page_has_blocked': 'Страница была заморожена',
        'page_has_blocked_desc': `VK заморозил вашу страницу. Для восстановления перейдите по <a target='_blank' href='$1'>этой ссылке</a>.`,
        
        'docs_cant_user': 'Нельзя посмотреть документы другого пользователя.',
        'docs_not_found': 'Документы не найдены.',
        'error_downloading_file': 'Скачать файл не получится из-за ограничений браузера. Использовать allorigins?',
        'docs_load_error': `Не получится отобразить данный документ. <a target='_blank' href='$1'>Посмотреть в VK</a>`,
        'doc_not_found': 'Документ не найден.',
        'photo_not_found': 'Фото не найдено.',

        'notifications_old_error': 'Похоже, ты используешь токен, который не поддерживает новый формат уведомлений. Лучше авторизуйся через другое приложение.',
        'error_getting_notifs': 'Ошибка получения уведомлений. Текст: $1',
        'notes_cant_club': 'У группы не может быть заметок.',
        'not_es_found': 'Заметок не найдено.',
        'note_not_found': 'Заметка не найдена.',
        'account_login_error': 'Ошибка входа в аккаунт',
        'account_login_error_desc': 'Не удалось войти в аккаунт.<br>Подробности: $1',

        'wall_empty_posts': 'На стене нет ни одной записи.',
        'tab_empty_posts': 'В этой вкладке нет записей.',
        'poll_not_found': 'Опрос не найден.',
        'poll_is_anonymous': 'Данный опрос анонимен.',
        'no_voters_poll': 'За данный вариант никто не проголосовал.',
        'poll_no_voted': 'Чтобы посмотреть результаты опроса, проголосуйте.',
        'no_comments': 'Комментариев нет.',

        'notif_object_not_faved': 'Ошибка при добавлении объекта в закладки.',
        'documentations_proxy_error': 'Документация доступна только с прокси-сервером.',
        'documentation_page_not_found': 'Такая страница документации не найдена.',
        'page_floodcontrolled': 'Возникла ошибка "Flood control". Попробуйте зайти позже.',
        'not_found_default': 'Не найдено элементов по этому запросу',
        'broken_controller': 'Данный раздел сломан. Вернись обратно.',
    },
})
