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
    comments: 'На 1 порцию. Размеры сыра и хлеба должны примерно совпадать'
  },
  {
    id: 13,
    title: "Шакшука",
    groups: ['Горячее', 'Белок', 'Овощи'],
    needs: ["6 яиц", '??? гр. помидоров', '1 горсть свежих листьев базилика', "2 ст.л. оливкового масла", "6 зубчиков чеснока", "1/2 ч.л. черного и красного перцев"],
    steps: ['На холодной сковороде смешать оливковое масло, чеснок, базилик и варить на слабом огне, иногда помешивая', 'Добавить нарезанные кубиками помидоры, довести до кипения',
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
  }
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
