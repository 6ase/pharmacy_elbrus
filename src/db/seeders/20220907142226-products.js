module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Кларитромицин Вертекс капсулы 250 мг 14 шт.',
        desc: 'Страна производитель - Россия. Полусинтетический антибиотик группы макролидов. Подавляет синтез белков в микробной клетке, взаимодействуя с 50S рибосомальной субъединицей бактерий. Действует в основном бактериостатически, а также бактерицидно.',
        img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/9804011.jpg',
        price: 263,
        discount: false,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Абактал таблетки покрытые пленочной оболочкой 400 мг 10 шт',
        desc: 'Страна производитель - Россия. Противомикробное средство группы фторхинолонов широкого спектра действия. Оказывает бактерицидное действие, ингибируя репликацию ДНК бактерий на уровне ДНК-гиразы, оказывает также действие на РНК и синтез белков бактерий.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/990/78/1_dd7e06486841acffbb90e9f957efa62f.png?t=1644847814&_cvc=1662389374',
        price: 999,
        discount: false,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бисептол таблетки 120 мг 20 шт',
        desc: 'Страна производитель - Польша. Является бактерицидным препаратом широкого спектра действия. Угнетает жизнедеятельность кишечной палочки, что приводит к уменьшению синтеза тиамина, рибофлавина, никотиновой кислоты и других витаминов группы В в кишечнике. Продолжительность терапевтического действия составляет 7 ч.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/347/04/resized/450_450_1_e4675e1a00303695e884580410c8aa1d.png?t=1643778955&_cvc=1659687911',
        price: 36,
        discount: false,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нитроксолин Авексима таблетки покрытые пленочной оболочкой 50 мг 50 шт',
        desc: 'Страна производитель - Россия. Инфекционно-воспалительные заболевания преимущественно мочеполовых путей (в т.ч. пиелонефрит, цистит, уретрит, эпидидимит, инфицированная аденома или карцинома предстательной железы), вызванные чувствительными к нитроксолину микроорганизмами. Профилактика инфекционных осложнений при диагностических и лечебных манипуляциях (катетеризация, цистоскопия) в послеоперационном периоде при хирургических вмешательствах на почках и мочеполовых путях.',
        img: 'https://www.vidal.ru/upload/products/20943-nitroxolin-avexima.jpg?v=1658509496',
        price: 440,
        discount: false,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сумамед капсулы 250 мг 6 шт',
        desc: 'Страна производитель - Россия. Бактериостатический антибиотик группы макролидов-азалидов. Обладает широким спектром антимикробного действия. Механизм действия азитромицина связан с подавлением синтеза белка микробной клетки. Связываясь с 50S-субъединицей рибосомы, угнетает пептидтранслоказу на стадии трансляции и подавляет синтез белка, замедляя рост и размножение бактерий. В высоких концентрациях оказывает бактерицидное действие.',
        img: 'https://uteka.ru/media/1024/6/71/6710477d9b6efc46c9b7347cf4c8ae94.jpg',
        price: 457,
        discount: false,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Визанна таблетки 2 мг 84 шт',
        desc: 'Страна производитель - Германия. Действующее вещество - Диеногест (Dienogest). Диеногест связывается с рецепторами прогестерона в матке человека, обладая лишь 10% относительного сродства прогестерона. Несмотря на низкое сродство к рецепторам прогестерона, диеногест характеризуется мощным прогестагенным эффектом in vivo. Диеногест не обладает существенной андрогенной, минералокортикоидной или глюкокортикоидной активностью in vivo. Диеногест воздействует на эндометриоз, путем подавления трофических эффектов эстрогенов в отношении аутопического и эктопического эндометрия, вследствие снижения продукции эстрогенов в яичниках и уменьшения их концентрации в плазме. При продолжительном применении вызывает начальную децидуализацию ткани эндометрия с последующей атрофией эндометриоидных очагов.',
        img: 'https://ovita.ru/upload/element/4800130.jpg',
        price: 12396,
        discount: false,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Норколут таблетки 5 мг 20 шт',
        desc: 'Страна производитель - Венгрия. Норэтистерон является прогестагеном. Вызывает трансформацию слизистой оболочки матки из фазы пролиферации в секреторную, блокирует секрецию гонадотропина в гипофизе, препятствуя созреванию фолликулов и наступлению овуляции.',
        img: 'https://aptstore.ru/upload/iblock/cc6/norkolut-tabletki-5mg-20_detail_8981.jpg',
        price: 154,
        discount: false,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пурегон лиофилизат для инъекций 600 МЕ/0,72 мл',
        desc: 'Страна производитель - Нидерланды. Ановуляция — начинают с ежедневного введения 50–75 МЕ в течение 7 дней, при отсутствии ответа яичников дозу постепенно увеличивают (оптимально ежедневное повышение концентрации эстрадиола в плазме на 40–100%); при достижении доминантным фолликулом диаметра 18 мм или уровня эстрадиола 300–900 пг/мл, Пурегон отменяют и вводят человеческий хорионический гонадотропин. Индукция суперовуляции яичников при проведении экстракорпорального оплодотворения в первые 4 дня — 100–200 МЕ, затем дозу подбирают индивидуально, исходя из реакции яичников; обычно достаточно 75–375 МЕ в день в течение 1–2 нед; при наличии 3 фолликулов диаметром 16–20 мм и концентрации эстрадиола в плазме 300–400 пг/мл/фолликул, конечную фазу созревания фолликула стимулируют человеческим хорионическим гонадотропином; через 34–35 ч проводят аспирацию яйцеклеток.',
        img: 'https://фото.монастырёв.рф/s/gi/prod/00/00/01/72/17/puregon-600x600.JPG',
        price: 11936,
        discount: false,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сегидрин таблетки покрытые оболочкой 60 мг 50 шт',
        desc: 'Страна производитель - Россия. Препарат Сегидрин подавляет рост опухолей, оказывает влияние на ряд биохимических показателей: ингибирует моноаминооксидазную активность, снижает проницаемость мембран клеток и биомембран субклеточных структур, является ингибитором метаболизма ксенобиотиков. Препарат Сегидрин подавляет рост опухолей, оказывает влияние на ряд биохимических показателей: ингибирует моноаминооксидазную активность, снижает проницаемость мембран клеток и биомембран субклеточных структур, является ингибитором метаболизма ксенобиотиков.',
        img: 'https://static2.asna.ru/imgprx/_YFXtAF4EJzkVM_0KYW6a5scXk8mn6Iu2ny6HVvZ83w/rs:fit:324:324:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrLzI5MC8yOTBlZDA4NDY1MmM4NzljZTQ5MmY4Yjg2NWQ4MTQ1Yy8xMTM1MjAuanBn.jpg',
        price: 5440,
        discount: false,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Фемостон мини таблетки покрытые пленочной оболочкой 2.5 мг+0.5 мг 28 шт',
        desc: 'Страна производитель - Нидерланды. Дидрогестерон представляет собой прогестаген, эффективный при приеме внутрь, который полностью обеспечивает наступление фазы секреции в эндометрии, снижая тем самым риск развития гиперплазии эндометрия и/или канцерогенеза, повышающийся на фоне эстрогенов. Дидрогестерон не обладает эстрогенной, андрогенной, анаболической или глюкокортикостероидной активностью.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/113/470/1_d1dab054b34dbab65d562c7ac5a475db.png?t=1650650313&_cvc=1662389374',
        price: 999,
        discount: false,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кагоцел таблетки 12 мг 10 шт',
        desc: 'Страна производитель - Россия. Вызывает образование в организме человека так называемых поздних интерферонов, являющихся смесью альфа и бета интерферонов, обладающих высокой противовирусной активностью. Кагоцел® вызывает продукцию интерферонов практически во всех популяциях клеток, принимающих участие в противовирусном ответе организма: Т- и В-лимфоцитах, макрофагах, гранулоцитах, фибробластах, эндотелиальных клетках. При приеме внутрь одной дозы препарата Кагоцел® титр интерферонов в сыворотке крови достигает максимальных значений через 48 ч. Интерфероновый ответ организма на введение кагоцела характеризуется продолжительной (до 4-5 сут) циркуляцией интерферонов в кровотоке. Динамика накопления интерферонов в кишечнике при приеме препарата внутрь не совпадает с динамикой титров циркулирующих интерферонов. В сыворотке крови продукция интерферонов достигает высоких значений лишь через 48 ч после приема кагоцела, в то время как в кишечнике максимум продукции интерферонов отмечается уже через 4 ч.',
        img: 'https://gorzdrav.org/medias/kagocel-515Wx515H?context=bWFzdGVyfHByb2R1Y3R8MTU4Njk3fGltYWdlL3BuZ3xwcm9kdWN0L2g3Zi9oYzAvODg2MjYxMjQ4ODIyMi5wbmd8NzUzNjIzNzkyNGNiZWJlNmI5NzhiYTU0ZTFiYTFhM2QyNzAzMzVmMjkyMWRjYjlkZmNlYTYxNWNmODEyNDA4Mg',
        price: 288,
        discount: false,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тилорам таблетки 125 мг 10 шт',
        desc: 'Страна производитель - Россия. Лечение и профилактика гриппа, других острых респираторных вирусных инфекций (ОРВИ); лечение вирусных гепатитов А, В и С; лечение герпетической и цитомегаловирусной инфекции; в составе комплексной терапии инфекционно-аллергических и вирусных энцефаломиелитов (рассеянный склероз, лейкоэнцефалит, увеоэнцефалит и др.); в составе комплексной терапии урогенитального и респираторного хламидиоза; в комплексной терапии туберкулеза легких.',
        img: 'https://gorzdrav.org/medias/62029-1.JPG-300Wx300H?context=bWFzdGVyfHByb2R1Y3R8NzE4MjJ8aW1hZ2UvanBlZ3xwcm9kdWN0L2hhYS9oOGQvODgyNjc3ODc0NjkxMC5qcGd8NzNlNWM3Y2I3Zjg1N2M0Njk0ZGVhOWJkZjNiOTI1M2QxMjczMzYwOTgzNzk3ODAyOWUwZDAxMDQ2ODAwN2RkMw',
        price: 962,
        discount: false,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Олумиант таблетки 4 мг 28 шт',
        desc: 'Страна производитель - Россия. Лечение активного ревматоидного артрита умеренной или тяжелой степени у взрослых пациентов с непереносимостью или отсутствием адекватного ответа на лечение одним или несколькими базисными противоревматическими препаратами. Олумиант может применяться в виде монотерапии или в комбинированной терапии с метотрексатом.',
        img: 'https://gorzdrav.org/medias/208370.jpg-515Wx515H?context=bWFzdGVyfHByb2R1Y3R8MzgxODd8aW1hZ2UvanBlZ3xwcm9kdWN0L2gwNi9oMjcvOTc5NTE3ODMzMjE5MC5qcGd8ZDAzYjZlMDJlYjMyYWJiODZiYTkxNGY0N2YyMWZlOTZmMDdjNTAwNWI2ZWJiMTI0N2NmNTg1ZTA5OTc1NTI1NQ',
        price: 45388,
        discount: false,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бронхо-мунал П капсулы 3,5 мг 10 шт',
        desc: 'Страна производитель - Россия. Оказывает иммуностимулирующее действие, усиливая иммунитет против инфекций дыхательных путей. После приема капсулы бактериальный лизат аккумулируется в пейеровых бляшках слизистой оболочки желудочно-кишечного тракта, в частности, расположенных в тонком кишечнике. Антигенпрезентирующие клетки в пейеровых бляшках активируются бактериальным лизатом и впоследствии стимулируют другие типы клеток (В-лимфоциты), отвечающие за специфический иммунитет. ',
        img: 'https://gorzdrav.org/medias/2720.jpg-300Wx300H?context=bWFzdGVyfHByb2R1Y3R8NDA3NTZ8aW1hZ2UvanBlZ3xwcm9kdWN0L2g4OC9oZmQvODgxODE0MDY3NjEyNi5qcGd8NjgxMTNlYTBiNDFiYTM3YWQ2ZmM5MzU5MGQ4MjYyY2E5MTllMzczMGM1MGRkNDdmYTBjYjlhOTEyYTRmYjZlMw',
        price: 602,
        discount: false,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лавомакс таблетки покрытые оболочкой 125 мг 10 шт',
        desc: 'Страна производитель - Россия. Противовирусный и иммуномодулирующий препарат. Лавомакс стимулирует образование в организме α-, -, -интерферонов. В ответ на введение Лавомакса интерферон продуцируется, главным образом, клетками эпителия кишечника, гепатоцитами, T-лимфоцитами и нейтрофилами. После приема препарата внутрь максимум продукции интерферона определяется в последовательности кишечник-печень-кровь через 4-24 ч. Лавомакс обладает иммуномодулирующим и противовирусным действием. Стимулирует стволовые клетки костного мозга, в зависимости от дозы усиливает антителообразование, уменьшает степень иммунодепрессии, восстанавливает соотношение T-хелперы/T-супрессоры. Эффективен против различных вирусных инфекций, в т.ч. против вирусов гриппа, других острых респираторных вирусных инфекций, вирусов гепатита и герпеса, цитомегаловирусов и нейротропных вирусов. Механизм антивирусного действия связан с ингибированием трансляции вирус-специфических белков в инфицированных клетках, в результате этого подавляется репродукция вирусов.',
        img: 'https://gorzdrav.org/medias/17329-515Wx515H?context=bWFzdGVyfHByb2R1Y3R8MzU3NDB8aW1hZ2UvanBlZ3xwcm9kdWN0L2g2My9oMjYvOTUyMzEyMTU1MzQzOC5qcGd8YTlkYWFmN2YyODI5YzliOTJkYTlmYWIzODA5NWI2OTk0NjZiZDVlODBlNWM1YWYyZjk3OTVkMTY0ZDk5MGY2MA',
        price: 780,
        discount: false,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Валерианы экстракт + В6 таблетки 20 мг 50 шт',
        desc: 'Страна производитель - Россия. Средство растительного происхождения. Вызывает умеренно выраженный седативный эффект. Действие обусловлено содержанием эфирного масла, большую часть которого составляет сложный эфир борнеола и изовалериановой кислоты. Седативными свойствами обладают также валепотриаты и алкалоиды - валерин и хотенин. Валериана облегчает наступление естественного сна. Седативный эффект проявляется медленно, но достаточно стабильно. Валериановая кислота и валепотриаты обладают слабым спазмолитическим действием. ',
        img: 'https://vseapteki.ru/cropping/thumbnails/101/61400/phoneMedium_default/',
        price: 78,
        discount: false,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Никоретте таблетки для рассасывания мятные 4 мг 20 шт',
        desc: 'Страна производитель - Швеция. Лечение табачной зависимости путем снижения потребности в никотине и облегчения симптомов «отмены», возникающих при отказе от курения. Таблетки для рассасывания Никоретте® могут применяться: -при полном отказе от курения у пациентов, намеренных бросить курить, -при уменьшении количества выкуриваемых сигарет перед полным отказом от курения, -при оказании содействия курильщикам, не желающим курить или в отсутствие такой возможности, а также в качестве более безопасной альтернативы курению курильщикам и окружающим их лицам. Проведение медицинского консультирования и обеспечение психологической поддержки обычно повышают эффективность терапии.',
        img: 'https://static3.asna.ru/imgprx/UcAeKw-W5CTBY1IDOP_RDkAoPdm0QS6wuFJEayvLu_Q/rs:fit:800:800:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrLzRiMi80YjIxNzk3YmY1NDU4ODljMmFjNGIzYWYwNDNjNjQ2Yi9kZTc4OGU0MjM2ODQ3NjFiYjc0MGM4NjNiNTA2NGMxMC5qcGc.jpg',
        price: 1065,
        discount: false,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Энерион таблетки покрытые оболочкой 200 мг 20 шт',
        desc: 'Страна производитель - Россия. Симптоматическое лечение функциональных астенических состояний при гипо- и авитаминозах, при длительных заболеваниях, после оперативных вмешательств.',
        img: 'https://cdn1.ozone.ru/multimedia/c1000/1027198506.jpg',
        price: 668,
        discount: false,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Золофт таблетки покрытые пленочной оболочкой 50 мг 14 шт',
        desc: 'Страна производитель - Германия. Лечит — депрессии различной этиологии (лечение и профилактика); — обсессивно-компульсивные расстройства (ОКР); — панические расстройства; — посттравматические стрессорные расстройства (ПТСР); — социальная фобия.',
        img: 'https://ozerki.ru/upload/iblock/5a4/5a4873f958b7dbb8a78322e1c2244add.jpg',
        price: 172,
        discount: false,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Аторвастатин таблетки покрытые оболочкой 20 мг 30 шт',
        desc: 'Страна производитель - Россия. Аторвастатии быстро всасывается после приема внутрь: время достижения его максимальпой концентрации (ТСmаx) в плазме крови составляет 1-2 часа. У женщин максимальная концентрация аторвастатина (Сmах) на 20% выше а площадь под кривой "концентрация-время" (AUC) - на 10% ниже чем у мужчин. Степень всасывания и концентрация в плазме крови повышаются пропорционально дозе.',
        img: 'https://vladimir.aptechestvo.ru/upload/iblock/aa7/ov03r92sroqxg60pb1quzaw8go4k9ptq.jpeg',
        price: 460,
        discount: false,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Арбидол максимум 200 мг 10 шт. капсулы',
        desc: 'Страна производитель - Россия. Профилактика и лечение у взрослых и детей с 12 лет: грипп А и В, другие ОРВИ. Комплексная терапия рецидивирующей герпетической инфекции. Профилактика послеоперационных инфекционных осложнений. Комплексная терапия острых кишечных инфекций ротавирусной этиологии у детей стар-ше 12 лет.',
        img: 'https://images.apteka.ru/original_58e729eb-a7d1-484e-a588-acec5c54784b.webp',
        price: 537,
        discount: false,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кагоцел 12 мг 20 шт. таблетки',
        desc: 'Страна производитель - Россия. Препарат Кагоцел применяют у взрослых и детей в возрасте от 3 лет в качестве профилактического и лечебного средства при гриппе и других острых респираторных вирусных инфекциях (ОРВИ), а также как лечебное средство при герпесе у взрослых',
        img: 'https://images.apteka.ru/original_21025a1e-b24d-4d36-b39e-f9fde152bbd6.webp',
        price: 578,
        discount: false,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ингавирин 60 мг 10 шт. капсулы',
        desc: 'Страна производитель - Россия. Лечение гриппа А и В и других острых респираторных вирусных инфекций (аденовирусная инфекция, парагрипп, респираторно-синцитиальная инфекция) у детей от 7 до 17 лет. Профилактика гриппа А и В и других острых респираторных вирусных инфекций у детей от 7 до 17 лет',
        img: 'https://images.apteka.ru/original_3976a96b-e8a5-4d0c-8ac8-814526552cfb.webp',
        price: 640,
        discount: false,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Арпефлю 50 мг 30 шт. таблетки, покрытые пленочной оболочкой',
        desc: 'Страна производитель - Россия. Профилактика и лечение у взрослых и детей: грипп, вызванный вирусами А и В, острые респираторные вирусные инфекции (ОРВИ) (в том числе осложненные бронхитом, пневмонией); вторичные иммунодефицитные состояния. Профилактика и лечение у взрослых и детей: грипп, вызванный вирусами А и В, острые респираторные вирусные инфекции (ОРВИ) (в том числе осложненные бронхитом, пневмонией); вторичные иммунодефицитные состояния. Профилактика послеоперационых инфекционных осложнений и нормализация иммунного статуса у взрослых.',
        img: 'https://images.apteka.ru/original_4162f6ff-4c39-4737-bb9b-62ba5e5b7f7c.webp',
        price: 257,
        discount: false,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Римантадин 50 мг 20 шт. таблетки',
        desc: 'Страна производитель - Россия. Профилактика и раннее лечение гриппа А у взрослых и детей старше 7 лет.',
        img: 'https://images.apteka.ru/original_1c16ecc2-ebc9-4b07-b9ca-746fc02437ff.webp',
        price: 51,
        discount: false,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Диклофенак ретард-акрихин 100 мг 20 шт. таблетки пролонгированные покрытые пленочной оболочкой',
        desc: 'Страна производитель - Россия. Воспалительные заболевания опорно-двигательного аппарата (ревматоидный артрит, псориатический, ювенильный и хронический артрит, анкилозирующий спондилит; подагрический артрит), острый подагрический артрит. Дегенеративные заболевания опорно-двигательного аппарата (деформирующий остеоартроз, остеохондроз). Посттравматические болевые синдромы, сопровождающиеся воспалением, послеоперационные боли, мигрень, почечная колика; первичная альгодисменорея, аднексит, проктит.',
        img: 'https://images.apteka.ru/original_cfc06660-ddfc-4240-ae25-d505a0117151.webp',
        price: 120,
        discount: false,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Вольтарен эмульгель 1% гель для наружного применения 20 гр',
        desc: 'Страна производитель - Россия. Боли в спине при воспалительных и дегенеративных заболеваниях позвоночника (радикулит, остеоартроз, люмбаго, ишиас); боли в суставах (суставы пальцев рук, коленные и др.) при остеоартрозе;  боли в мышцах (вследствие растяжений, перенапряжений, ушибов, травм); воспаление и отечность мягких тканей и суставов вследствие травм и при ревматических заболеваниях (тендовагинит, бурсит, поражения периартикулярных тканей).',
        img: 'https://images.apteka.ru/original_e2a02ce2-4733-4eb2-b39f-cbebff971c3d.webp',
        price: 313,
        discount: false,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пенталгин 4 шт. таблетки, покрытые пленочной оболочкой',
        desc: 'Страна производитель - Россия. Болевой синдром различного генеза, в том числе при болях в суставах, мышцах, радикулите, менструальных болях, невралгиях, зубной и головной болях (в том числе при головной боли, обусловленной спазмом сосудов головного мозга). Болевой синдром, связанный со спазмом гладкой мускулатуры, в том числе при хроническом холецистите, желчнокаменной болезни, постхолецистэктомическом синдроме, почечной колике. Посттравматический и послеоперационный болевой синдром, в том числе сопровождающийся воспалением. Простудные заболевания, сопровождающиеся лихорадочным синдромом (в качестве симптоматической терапии).',
        img: 'https://images.apteka.ru/origin_752789db-a87a-4204-a677-17ac663723ec.webp',
        price: 91,
        discount: false,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Но-шпа форте 80 мг 24 шт. таблетки',
        desc: 'Страна производитель - Россия. Спазмы гладкой мускулатуры при заболеваниях желчевыводящих путей: холецистолитиаз, холангиолитиаз, холецистит, перихолецистит, холангит, папиллит. Спазмы гладкой мускулатуры мочевыводящих путей: нефролитиаз, уретролитиаз, пиелит, цистит, спазмы мочевого пузыря.',
        img: 'https://images.apteka.ru/original_bdd2efe8-ba9c-4ad7-849a-e02a1cd977a2.webp',
        price: 177,
        discount: false,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Некст 400 мг + 200 мг 6 шт. таблетки, покрытые пленочной оболочкой',
        desc: 'Страна производитель - Россия. Комбинированный препарат, оказывает анальгетическое, противовоспалительное и жаропонижающее действие. Парацетамол - ненаркотический анальгетик, оказывает жаропонижающее и обезболивающее действие, обусловленное блокадой циклооксигеназы в центральной нервной системе и воздействием на центры боли и терморегуляции. Ибупрофен - нестероидное противовоспалительное средство, оказывает анальгезирующее, противовоспалительное и жаропонижающее действие, связанное с неселективным подавлением активности циклооксигеназы, регулирующей синтез простагландинов. Компоненты препарата воздействуют как на центральный, так и на периферический механизмы формирования болевого синдрома. Направленное, взаимодополняющее действие двух компонентов оказывает быстрый терапевтический эффект и выраженное анальгезирующее действие.',
        img: 'https://images.apteka.ru/origin_17b56bf2-1634-4f16-8fc6-635e0eabeeab.webp',
        price: 129,
        discount: false,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
