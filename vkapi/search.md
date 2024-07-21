#### Поиск по постам

Глобальный поиск — `newsfeed.search`
Поиск по стене — `wall.search`. Будем называть его "Локальный".

##### Операторы:

|Оператор|Назначение|Где работает?|Пример|
|--|--|--|--|
|`has:{type}`|Ищет посты, содержащие вложения определённого типа. Таблица с типами находится ниже.|Глобальный и локальный поиск|комедия has:video|
|`type:copy`|Ищет посты с репостом.|Глобальный и локальный поиск|сделайте репост type:copy|
|`type:reply`|Ищет комментарии.|Локальный поиск|прокомментировал type:reply|
|`url:{url}`|Поиск постов, содержащих определённый URL|Глобальный и локальный поиск|url:https://vk.com/profile.php|
|`domain:{domain}`|Поиск постов, содержащих URL с определённым доменом.|Глобальный и локальный поиск|domain:github.com|
|`-{word}`|Поиск постов, в которых не будет определённого слова. Оператор можно комбинировать с `has`.|Глобальный поиск|музыка -рок|
|`likes:{10/100/1000}`|Ищет посты с определённым числом лайков. Можно вписать значения 10, 100 и 1000, другие будут игнорироваться|Глобальный поиск. В локальном работает странно.|последняя цифра лайка likes:1000|
|`rate:{rate}`|`Rate` — вероятно, внутреннее значение вк, определяющее, является ли пост спамом или нет. При `rate:10` будут возвращаться спамовые посты с тегами.|Глобальный поиск|-|


##### Типы прикреплений

|Тип|Описание|
|--|--|
|`photo`|Фотография.|
|`video`|Видеозапись.|
|`audio`|Аудиозапись.|
|`doc`|Документ (aka файл).|
|`poll`|Опрос.|
|`link`|Прикреплённая ссылка.|
|`album`|Фотоальбом. Видеоальбом и аудиоальбом, кстати, нельзя прикрепить как фотоальбом.|
|`article`|Статья.|
|`page`|Вики-страница. Сейчас на смену им пришли статьи.|
|`graffiti`|Граффити. Отдельная от фото сущность. Их [можно было создать](http://vk.com/graffiti.php?act=draw&to_id=0) до 16 января 2013 года, после этого они стали сохраняться как обычные фотографии в отдельный альбом. В 2024 вообще убрали рисовалку из меню прикрепления поста. <br><br>Сейчас граффити можно прикрепить к комментарию с помощью манипуляций с разделом "Документы".|
|`note`|Заметка (из скрытого раздела мои заметки)|
|`none`|Без прикреплений.|