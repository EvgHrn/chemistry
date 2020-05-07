export const categories = [
    "Основные понятия",
    "Неорганические соединения",
    "Строение атома",
    "Химическая связь",
    "Скорость химической реакции",
    "Растворы",
    "Окислительно-восстановительные реакции",
    "Металлы",
    "Щелочный и щёлочноземельные металлы",
    "Алюминий",
    "Железо",
    "Водород и кислород",
    "Углерод и кремний",
    "Азот и фосфор",
    "Сера",
    "Галогены"
  ];

export const getLessons = (category: string) => {
    const lessons = [
        {
            category: "Основные понятия",
            lessons: [
              "Химические явления",
                "Вещество и его строение",
              "Простые и сложные вещества",
              "Валентность"
            ]
        },
    ];

    const result = lessons.find((obj) => obj.category === category);

    if(result) {
        return result.lessons;
    }

    return [];
};