const data = [
    {
        id: 0,
        title: "Бешбармак",
        groups: ['Горячее', 'Молочное', 'Прочее'],
        needs: ['1 средняя луковица', '1/2 пачки макарон', "200 гр. творога", "Зеленый лук, укроп", "Подсолнечное масло", "Соль"],
        steps: ['1. Макароны варим в подсоленой воде', '2. Мелко нарзенный лук обжариваем в большом количестве масла до золотистого цвета', 
        '3. Убираем лук, в оставшемся масле немного обжариваем макароны', "4. Добавляем лук, творог, порезанную зелень и перемешиваем"],
        comments: ''
    },
    {
        id: 1,
        title: "Запеченая курица с капустой",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['600 гр. куринных бедер', '600 гр. капусты', "1 большая морковь", "1 большой сладкий перец или большое яблоко",
    "2-3 зубчика чеснока", "Соль, специи", "Укроп", "Пакет для запекания"],
        steps: ['1. Разогреть духовку до 190С', '2. Натереть курицу специями и солью', '3. Нашинковать капусту, порезать лук полу-кольцами',
    "4.Натереть морковку на крупной терке", "5.Натереть яблоко на мелкой терке или порезать перец соломкой", "6.Сложить все овощи в пакет, добавить соль и специи, очень хорошо потрясти", 
"7.Выложить курицу на овощи, завязать пакет. Сделать в пакете несколько проколов ножом или вилкой", "8.Положить пакет в форму для запекания и выпекать 50-60 мин.", 
"9.За 10 минут до готовность разрезать пакет, чтобы курица подрумянилась"],
        comments: ''
    },
    {
        id: 2,
        title: "Творожные шарики",
        groups: ['Белок', 'Молочное', 'Сладкое'],
        needs: ['800 гр. творога от 9% жирности', '100 гр. изюма', "1 упаковка ванилина", "2 ст.л. цедры апельсина", "1 пачка рисовой муки или детской рисовой кашки",
    "250 гр. сахара", "200 гр. кокосовой стружки"],
        steps: ["1. Замочить изюм в горячей воде на 15 мин.", 
        '2. Все, кроме стружки смешать (творог с сахаром со временем дадут воду, так что норм)', 
        '3. Из однородной массы сделать шарики, обвалять их в стружке', 
        '4. Поставить шарики в холодильник на 1,5 часа'],
        comments: ''
    },
    {
        id: 3,
        title: "Куринный плов",
        groups: ['Горячее', 'Белок', "Каши"],
        needs: ['500 гр. куринного филе', '1 морковь', "1,5 стакана риса", "6 зубчиков чеснока", "Куркума, зира, соль, черный и красный перец", "Масло для жарки"],
        steps: ['1. Режем филе кубиками и маринуем в парцах', '2. Трем морковь на крупной терке, мелко режем лук', '3. Обжариваем лук, добавляем к нему морковь в очень глубокой сковороде',
    "4. Когда лук будет золотистого цвета, добавляем в сковороду филе, немного обжариваем", "5. Засыпаем сверху промытый рис, разравниваем так, чтобы все мясо было под слоем риса",
"6. Осторожно выливаем 2 стакана воды, чтобы не размыть рис", "7. Через 10 минут дбавляем куркуму, зиру и соль. Перемешиваем так, чтобы не разбить слой риса",
"8. За пять минут до готовности риса втыкаем в разные места очищенные и разрезанные надвое зубчики чеснока"],
        comments: ''
    },
    {
        id: 4,
        title: "Кето-салат",
        groups: ['Салаты', 'Белок', 'Овощи'],
        needs: ['2 больших огурца', '1 банка консервированного филе тунца', "2 яйца", "1/2  авокадо", "3 листа салата", "Оливковое масло или масло от тунца"],
        steps: ['1. Отваривать яйца 10 минут', '2. Все помыть, почистить яйца, все порезать', '3. Все смешать и заправить маслом'],
        comments: ''
    },
    {
        id: 5,
        title: "Омлет с крабовыми палочками",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['1. 1/2 упаковки крабовых палочек', '2 помидора', "6 яиц", "Немного молока"],
        steps: ['1. Снимаем с крабовых палочек упаковку, режем кубиками', '2. Режем кубиками помидоры', '3. Слегка обжариваем помидоры на сковороде. Когда они дадут сок, добавляем крабовые палочки',
    "4. Заливаем яйцами, взбитыми вилкой с молоком, и следим, чтобы омлет не подгорел снизу"],
        comments: ''
    },
    {
        id: 6,
        title: "Морковные котлеты",
        groups: ['Горячее', 'Белок', 'Овощи'],
        needs: ['2 больших моркови', '2 яйца', "Немного муки или манки", "Черный и красный перец, соль", "Масло для жарки"],
        steps: ['1. Трем морковь на крупной терке', '2. Смешиваем в "тесто" с яйцами, специями и мукой/манкой', '3. Выкладываем ложкой что-то вроде оладушек на разогретую сковороду',
    "4. Обжариваем с обеих сторон до коричневой корочки"],
        comments: ''
    },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // },
    // {
    //     id: 1,
    //     title: "Салат 2",
    //     groups: ['Горячее', 'Молочное', 'Овощи'],
    //     needs: ['100 гр. помидора', '1 огурец'],
    //     steps: ['1. Все помыть', '2. Порезать', '3. Кушать'],
    //     comments: ''
    // }
]

export default data;