const data = [
    {
        id: 0,
        title: "Бешбармак",
        groups: ['Горячее', 'Молочное', 'Прочее'],
        needs: ['1 средняя луковица', '1/2 пачки макарон', "200 гр. творога", "Зеленый лук, укроп", "Подсолнечное масло", "Соль"],
        steps: ['Макароны варим в подсоленой воде', 'Мелко нарзенный лук обжариваем в большом количестве масла до золотистого цвета',
            'Убираем лук, в оставшемся масле немного обжариваем макароны', "Добавляем лук, творог, порезанную зелень и перемешиваем"],
        comments: ''
    },
    {
        id: 1,
        title: "Запеченая курица с капустой",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['600 гр. куринных бедер', '600 гр. капусты', "1 большая морковь", "1 большой сладкий перец или большое яблоко",
            "2-3 зубчика чеснока", "Соль, специи", "Укроп", "Пакет для запекания"],
        steps: ['Разогреть духовку до 190С', 'Натереть курицу специями и солью', 'Нашинковать капусту, порезать лук полу-кольцами',
            "Натереть морковку на крупной терке", "Натереть яблоко на мелкой терке или порезать перец соломкой", "Сложить все овощи в пакет, добавить соль и специи, очень хорошо потрясти",
            "Выложить курицу на овощи, завязать пакет. Сделать в пакете несколько проколов ножом или вилкой", "Положить пакет в форму для запекания и выпекать 50-60 мин.",
            "За 10 минут до готовность разрезать пакет, чтобы курица подрумянилась"],
        comments: ''
    },
    {
        id: 2,
        title: "Творожные шарики",
        groups: ['Белок', 'Молочное', 'Сладкое'],
        needs: ['800 гр. творога от 9% жирности', '100 гр. изюма', "1 упаковка ванилина", "2 ст.л. цедры апельсина", "1 пачка рисовой муки или детской рисовой кашки",
            "250 гр. сахара", "200 гр. кокосовой стружки"],
        steps: ["Замочить изюм в горячей воде на 15 мин.",
            'Все, кроме стружки смешать (творог с сахаром со временем дадут воду, так что норм)',
            'Из однородной массы сделать шарики, обвалять их в стружке',
            'Поставить шарики в холодильник на 1,5 часа'],
        comments: ''
    },
    {
        id: 3,
        title: "Куринный плов",
        groups: ['Горячее', 'Белок', "Каши"],
        needs: ['500 гр. куринного филе', '1 морковь', "1,5 стакана риса", "6 зубчиков чеснока", "Куркума, зира, соль, черный и красный перец", "Масло для жарки"],
        steps: ['Режем филе кубиками и маринуем в перцах', 'Трем морковь на крупной терке, мелко режем лук', 'Обжариваем лук в очень глубокой сковороде, добавляем к нему морковь',
            "Когда лук будет золотистого цвета, добавляем в сковороду филе, немного обжариваем", "Засыпаем сверху промытый рис, разравниваем так, чтобы все мясо было под слоем риса",
            "Осторожно выливаем 2 стакана воды, чтобы не размыть рис", "Через 10 минут дбавляем куркуму, зиру и соль. Перемешиваем так, чтобы не разбить слой риса",
            "За пять минут до готовности риса втыкаем в разные места очищенные и разрезанные надвое зубчики чеснока"],
        comments: ''
    },
    {
        id: 4,
        title: "Кето-салат",
        groups: ['Салаты', 'Белок', 'Овощи', "Рыба"],
        needs: ['2 больших огурца', '1 банка консервированного филе тунца', "2 яйца", "1/2  авокадо", "3 листа салата", "Оливковое масло или масло от тунца"],
        steps: ['Отваривать яйца 10 минут', 'Все помыть, почистить яйца, все порезать', 'Все смешать и заправить маслом'],
        comments: ''
    },
    {
        id: 5,
        title: "Омлет с крабовыми палочками",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['1/2 упаковки крабовых палочек', '2 помидора', "6 яиц", "Немного молока"],
        steps: ['Снимаем с крабовых палочек упаковку, режем кубиками', 'Режем кубиками помидоры', 'Слегка обжариваем помидоры на сковороде. Когда они дадут сок, добавляем крабовые палочки',
            "Заливаем яйцами, взбитыми вилкой с молоком, и следим, чтобы омлет не подгорел снизу"],
        comments: ''
    },
    {
        id: 6,
        title: "Морковные котлеты",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['2 больших моркови', '2 яйца', "Немного муки или манки", "Черный и красный перец, соль", "Масло для жарки"],
        steps: ['Трем морковь на крупной терке', 'Смешиваем в "тесто" с яйцами, специями и мукой/манкой', 'Выкладываем ложкой что-то вроде оладушек на разогретую сковороду',
            "Обжариваем с обеих сторон до коричневой корочки"],
        comments: ''
    },
    {
        id: 7,
        title: "Блинчики",
        groups: ['Горячее', 'Молочное', 'Сладкое', "Белок"],
        needs: ['1,5 ст. муки', '1 ст. почти кипящей воды', "1 ст. молока", "1/3 ст. сахара", "Щепотка ванильного сахара", "Масло для жарки", "3 яйца"],
        steps: ['Взбить яйца с молоком, сахаром и ванильным сахаром', 'Взбивая, всыпать муку и влить горячую воду', 'Влить в тесто немного масла для жарки',
            "На разогретую блинную сковородку наливаем 1 раз масло для жарки", "Наливаем почти полный (зависит размеров) половник теста на сковородку и бастро распределяем",
            "Переворачиваем, когда подрумянятся края блинчика"],
        comments: ''
    },
    {
        id: 8,
        title: "Курица для шашлыка в минералке с кетчупом",
        groups: ['Горячее', 'Белок'],
        needs: ['1 кг куринного филе', '0.5 минеральной газированной воды', "1 луковица", "Соль, черный перец", "Кетчуп"],
        steps: ['Режем лук полу-кольцами, кладем в ПЛАСТИКОВУЮ (металл может окислиться) емкость. Давим руками или ложкой, чтоб вышел сок, заливаем миналкой так, чтобы покрыть лук',
            'Режем филе кубиками примерно 3х3см', 'Доваляем к луку, туда же сыпем соль и перец, добавляем кетчуп', "Заливаем минералкой, чтобы покрыло все филе и оставляем под прессом в холодильнике на 40 минут"],
        comments: ''
    },
    {
        id: 9,
        title: "Пельмени с молоком",
        groups: ['Горячее', 'Молочное', 'Белок'],
        needs: ['500 гр. пельменей', '1 ст. молока'],
        steps: ['Жарим пельмени на сковороде до образования корочки', 'Заливаем молоком и тушим несколько минут'],
        comments: ''
    },
    {
        id: 10,
        title: "Творожная запеканка",
        groups: ['Горячее', 'Молочное', 'Сладкое', "Белок"],
        needs: ['500 гр. творога', '4 яйца', "2 ст.л. сахара", "Ваниль, корица по вкусу", "6 ст.л. муки", "Масло для жарки", "200 гр. свежей или замороженной ягоды (голубика/вишня/малина)"],
        steps: ['Отделить белки от желтков.', 'Взбить белки до образования устойчевых пиков', 'Желтки перемешать с творогом, сахаром, специями и мукой',
            "Добавить к творгу взбитые белки и ягоду", "Смазать форму маслом, выложить смесь, поставить в предварительно разогретую духовку на 25 минут",
            "Готовность - запеканка твердая и румяная сверху"],
        comments: ''
    },
    {
        id: 11,
        title: "Омлет от Тони",
        groups: ['Горячее', 'Молочное', 'Белок', "Овощи"],
        needs: ['5 яиц', '150 гр. йогурта без добавок и сахара', "2 ст.л. муки", "50 гр. тертого сыра", "1 большой помидор", "1/2 банки оливок без косточки", "Укроп", "Масло для жарки"],
        steps: ['Взбить яйца с йогуртом, мукой и измельченным укропом', 'Вылить на сковороду, посыпать тертым сыром', 'Запекать под крышкой',
            "Когда поверхность начнет схватываться, украсить кружочками помидора и разрезанными оливками"],
        comments: ''
    },
    {
        id: 12,
        title: "Жареный сыр",
        groups: ['Горячее', 'Молочное', 'Овощи'],
        needs: ['1 пластк сыра', '1 кусочек хлеба'],
        steps: ['Разогреть сковороду без масла', 'Положить пластк сыра и накрыть его хлебом', 'Поправлять растекующийся сыр, налепляя его на края хлеба'],
        comments: 'Размеры сыра и хлеба должны примерно совпадать'
    },
    {
        id: 13,
        title: "Шакшука",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ["6 яиц", '750 гр. помидоров', '1 горсть свежих листьев базилика', "2 ст.л. оливкового масла", "6 зубчиков чеснока", "1/2 ч.л. черного и красного перцев"],
        steps: ['На холодной сковороде смешать оливковое масло, чеснок, базилик и варить на слабом огне, иногда помешивая', 'Добавить нарезанные кубиками помидоры, довести до кипения, добавить специи',
            'Варить примерно 10 минут, помешивая, на слабом огне', "Разбить в сковородку яйца и подождать, пока они стабилизируются"],
        comments: ''
    },
    {
        id: 14,
        title: "Махакамский гарнир",
        groups: ['Горячее', 'Белок', 'Каши'],
        needs: ['300 гр. замроженного нута', '1 батат', "1 ст. риса", "??? Соевый соус", "??? Петрушка"],
        steps: ['Сврить рис до полуготовности', 'Порезать батат кубиками, добавить к рису, перемешать', 'Через пару минут добавить нут, перемешать',
            "За пару минут до готовности влить соевый соус и насыпать порезанную петрешку, перемешать", "Дать настояться 20 минут"],
        comments: ''
    },
    {
        id: 15,
        title: " Курица с черносливом",
        groups: ['Горячее', 'Белок'],
        needs: ['800 гр. куринных бедер', '150 гр. сметаны любой жирности', "1/2 ст. чернолива без косточки", "Масло для жарки", "1 ст. воды", "Соль"],
        steps: ['Промыть и замочить чернослив', 'Обжарить курицу, залить водой и оставить тушиться. Посолить', 'Через 5 минут добавить порезанный на четверти чернослив',
            "Когда курица будет готова, залить сметаной и перемешать. Оставить тушиться в сметане на 3 минуты"],
        comments: ''
    },
    {
        id: 16,
        title: "Аромат лета",
        groups: ['Салаты', 'Овощи', "Белок"],
        needs: ['1 авокадо', '2 куринных филе', " 1-2 огрурца", "Лимонный сок", "1 зубчик чеснока", "Укроп", "Соль", "2 ст.л. сметаны"],
        steps: ['Отварить куринное филе', 'Порезать овощи и чеснок, сбрызнуть лимонным соком, добавить порезанный укроп',
            'Отваренное филе порезать кубиками или порвать руками, добавить к овощам. Посолить по вкусу, перемешать'],
        comments: ''
    },
    {
        id: 17,
        title: "Теплый салат с фасолью",
        groups: ['Горячее', 'Салаты', 'Овощи', "Белок"],
        needs: ['400 гр. куринного филе', '400 гр. стручковой фасоли', "250 гр. помидоров черри", "1 большой болгарский перец", "3 зубчика чеснока", "Соевый соус", "Масло для жарки"],
        steps: ['Отварить куринное филе, поджарить фасоль до образования корочки', 'Порезать овощи и чеснок', 'Порезать или порвать руками отвернное филе, добавить к овощам, заправить соевым соусом'],
        comments: ''
    },
    {
        id: 18,
        title: "Запеченая курица с овощами",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['курица', 'картошка', "морковь", "перец", "специи", "1/2 ст. воды"],
        steps: ['Порезать овощи, сложить в емкость для запекания, залить водой, посолить, перемешать', 'Выложить сверху натертую специями и солью курицу',
            'Запечатать сверху форму фольгой', "Запекать до готовности курицы и картошки"],
        comments: 'Нужна фольга'
    },
    {
        id: 19,
        title: "Галушки",
        groups: ['Горячее', 'Белок', 'Молочное'],
        needs: ['600 гр. творога', '3 яйца', "1 ст. муки", "1/2 ст. сахара", "Соль"],
        steps: ['Взбить в миске яйца с сахаром до образования пены', 'Растереть в миску творог, добавить муку, замешать', 'Вылепить из творожного теста дилнные колбаски и разрезать их на дольки',
            "Варить в подсоленой воде до всплытия и еще 5 минут"],
        comments: ''
    },
    {
        id: 20,
        title: "Окрошка",
        groups: ['Прочее', 'Белок', 'Овощи'],
        needs: ['6 яиц', '3 крупные картофелины', "4 огурца", "500 гр. вареной колбасы", "200 гр. редиски", "Квас/сыворотка/минеральная вода по вкусу", "Соль", "Майонез"],
        steps: ['Сварить картошку и яйца вкрутую', 'Порезать кубиками огурцы, добавить порезанные картушку и яйца. Посолить', 'Заправить по вкусу или не заправлять вообще'],
        comments: ''
    },
    {
        id: 21,
        title: "Рамен",
        groups: ['Горячее', 'Белок', 'Прочее'],
        needs: ['1 большая морковка', '3 редиски', "70 мл соевого соуса", "Укроп", "1 ст.л. имбиря",
            "0.5 кг курицы", "4 яйца", "200 гр. спагетти или лапши", "2 л. воды", "Чеснок", "Соль, перец по вкусу"],
        steps: ['Варим куринный бульон, убираем курицу', 'Добавляем в бульон морковку, редиску и чеснок',
            'Когда они будут почти готовы, добавляем спагетти', "Когда почти готовы спагетти добавляем соевый соус, имбирь, соль, перец, возвращаем курицу в бульон",
            "Параллельно варим яйца вкрутую", "Чистим яйца, режем вдоль на половники. Кладем в тарелку к рамену. Посыпаем укропом"],
        comments: ''
    },
    {
        id: 22,
        title: "Ленивые хачапури",
        groups: ['Горячее', 'Белок', 'Прочее'],
        needs: ['100 гр. муки', '1 яйцо', "50 мл. молока", "150 гр. сыра", "1 ст.л. сахара", "Масло для жарки"],
        steps: ['Взбить яйцо с сахаром  и мукой', 'Натереть сыр и добавить его в тесто', 'Добавить молоко для лучшего перемешивания и хорошо перемешать',
            "Выложить на смазанную сковороду и разровнять вилкой или ложкой (сыр даст жир для жарки, когда нагреется)", "Жарить до золотистой корочки, перевернуть и пожарить снова, не добавляя масла"],
        comments: 'Расчет на 1 порцию. Хорошей идеей будет добавить сухие прованские травы трямо в тесто'
    },
    {
        id: 23,
        title: "Масурдал",
        groups: ['Горячее', 'Молочное', 'Овощи'],
        needs: ['1 большой помидор', '1 большая морковь', "220 гр. красной чечевицы", "Сухой имбирь, куркума, зира, перец чили, соль по 1 чайной ложке",
            "3 зубчика чеснока", "350 мл. 10%-ных сливок", "Масло для жарки"],
        steps: ['Чечевица варится долго, так что варим ее первой в подсоленой воде и ждем примерно 15 минут после того, как закипит вода',
            'Режем лук кубиками, обжариваем, убираем со сковроды', 'Доливаем масло на сковороду, высыпаем специи, перемешиваем, даем им обжариться',
            "Возвращаем ображеный лук, добавляем натертуя на крупной терке морковь", "Когда смесь поджарится, перекладываем ее в кастрюлю к чечевице",
            "Режем помидор кубиками, доавляем к чечевице", "Когда помидор и чечевица разварятся, но не до каши, снимаем с огня и наливаем сливки"],
        comments: 'Нужно полторы литра воды'
    },
    {
        id: 24,
        title: "Гречка на воде",
        groups: ['Горячее', 'Каши'],
        needs: ['1 ст. крупы ', '2 ст. воды', "Соль"],
        steps: ['Ставим воду, солим ее, промываем крупу', 'Насыпаем крупу', 'Пробуем для определения готовности'],
        comments: ''
    },
    {
        id: 25,
        title: "Рис на воде",
        groups: ['Горячее', 'Каши'],
        needs: ['1 ст. крупы ', '2 ст. воды', "Соль"],
        steps: ['Ставим воду, солим ее, промываем крупу', 'Насыпаем крупу', 'Пробуем для определения готовности'],
        comments: ''
    },
    {
        id: 26,
        title: "Манка на молоке",
        groups: ['Горячее', 'Каши', 'Молочное'],
        needs: ['1 ст. манной крупы', '1.5 ст. молока', "1.5 ст. воды", "3 ст.л. сахара", "Сливочное масло"],
        steps: ['Ополаскиваем кастрюлю холодной водой, чтобы молоко не прикипало. Наливаем воду, молоко, добавляем сахар', 'Когда почти начнет кипеть, тонкой струйкой, помешивая, крупу', 'Постоянно помешивая, ждем, когда каша будет в полуготовности и добавляем кусочек масла', "Все время помешивая, доводим до готовости"],
        comments: ''
    },
    {
        id: 27,
        title: "Овсянка на молоке",
        groups: ['Горячее', 'Каши', 'Молочное'],
        needs: ['1 ст. овсянки', '2 ст. воды', "1 ст. молока", "3 ст.л. сахара", "Сливочное масло"],
        steps: ['Ополаскиваем кастрюлю холодной водой, чтобы молоко не прикипало. Наливаем воду, молоко, добавляем сахар',
            'Ждем, пока закипит. Помешивая, всыпаем крупу', 'Варим на маленьком огне (а то дно подгорит) до готовности, постоянно помешивая. Добавлем кусочек сливочного масла и перемешиваем'],
        comments: ''
    },
    {
        id: 28,
        title: "Блины",
        groups: ['Горячее', 'Белок', 'Молочное', 'Сладкое'],
        needs: ['1,5 ст. муки', '3 ст. молока', "3 яйца", "3 ст.л. сахара", "3 ст.л. растительного масла"],
        steps: ["Взбить яйца с сахаром до крепкой пены (я взбиваю в блндере)",
            "Добавить 1 ст. молока, перемешать",
            "Просеять муку, по 2-3 ложки добавить в смесь",
            "Перемешать до исчезновения комочков и добавить оставшееся молоко. Перемешать и влить масло",
            "Еще раз хорошенько взбить и тесто готово для выпекания",
            "Выпекать как обычно с обеих сторон на раскаленной сковороде"],
        comments: ''
    },
    {
        id: 29,
        title: "Печеные яблоки",
        groups: ['Горячее', 'Сладкое', 'Овощи'],
        needs: ['1 яблоко', 'Молотая корица', "Микроволновка или духовка"],
        steps: ['Яблоко помыть, сделать надрезы на коруже или проколы вилкой.', 'Запекать до мягкости', 'Посыпать корицей по вкусу.'],
        comments: 'По желанию можно вырезать серединку из яблока.'
    },
    {
        id: 30,
        title: "Масурдал",
        groups: ['Горячее', 'Овощи', 'Белок'],
        needs: ['250 гр. красной чечевицы', '1 луковица', "1 морковь", "1 помидор",
            "3 зубчика чеснока", "50 гр. 20% сливки", "1.2л воды",
            "Тертый имбирь", "Перец чили", "Куркума", "Соль", "Укроп"
        ],
        steps: ['Поставить чечевицу вариться.',
            'Сделать зажарку: Для этого на сковороде разогреем масло, добавим туда все специи - куркуму, чили и тертый имбирь. Немного подержать их на сковороде, интенсивно помешивая.',
            'Мелко нерзать лук, чеснок, нетереть морковь. Добавить в сковороду к специям. Обжарить всё вместе.',
            "Очистить от кожуры помидор : сделать несколько надрезов на основании и на кончике и бросить в кипяток (например, к чечевице). Через минуту шкурка сама слезет — главное, не передержать томат в кипятке — иначе превратится в кашу раньше времени. Очищенный помидор порезать кубиком.",
            "Добавить содержимое сковороды в суп. Периодически помешивая, оставить дал на небольшом огне на 10-15 минут. Выключить огонь и влить сливки.",
            "Посыпать порезанным укропом."
        ],
        comments: ''
    },
    {
        id: 31,
        title: "Суп-пюре",
        groups: ['Горячее', 'Овощи'],
        needs: ['500 гр. картошки', '250 гр. моркови', "1 луковица", "3 зубчика чеснока", "1 л. бульона", "Соль, перец", "Укроп", "Сухирики(по желанию)", "Масло для жарки"],
        steps: ['Почистить овощи, мелко порезать.',
            'Поставить картошку вариться, лук и морковь обжарить',
            'Добавить содержимое сковороды к картошке, добавить специи. Варить до готовности овощей.',
            "Взбить содержимое кастрюли блендером до однородной массы.",
            "Подавать с укропом и сухариками."
        ],
        comments: 'Нужен блендер.'
    },
    {
        id: 32,
        title: "Молочный суп",
        groups: ['Горячее', 'Белок', 'Молочное', 'Сладкое'],
        needs: ['2 стакана воды', '2 стакана молока', '300 гр. вермишели', '2 ст.л. сахара'],
        steps: ['Сполоснуть кастрюлю холодной водой, чтобы молоко не пригорало. Залить воду и молоко.',
            'Добавить сахар, перемешать',
            'Добавить вермишеть. Постоянно помешивать, чтобы вермишель не слиплась. Варить до готовности'],
        comments: ''
    }
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Белок', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['Все помыть', 'Порезать', 'Кушать'],
    //     comments: ''
    // }
]

export default data;
