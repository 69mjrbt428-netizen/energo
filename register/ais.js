// 1. БЕТТЕРДІ АУЫСТЫРУ (NAVIGATION)
function openPage(pageName) {
    // Барлық беттерді жасыру
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active-page');
    });

    // Барлық меню батырмаларының активтілігін алып тастау
    document.querySelectorAll('.menu-item').forEach(btn => {
        btn.classList.remove('active');
    });

    // Таңдалған бет пен менюді белсенді ету
    document.getElementById('page-' + pageName).classList.add('active-page');
    document.getElementById('menu-' + pageName).classList.add('active');
}

// 2. САБАҚ КЕСТЕСІ ДЕРЕКТЕРІ
const scheduleData = {
    mon: [
        { num: 1, time: "08:30 - 09:50", subject: "Веб-дизайн (Figma/HTML)", room: "304" },
        { num: 2, time: "10:00 - 11:20", subject: "JavaScript бағдарламалау", room: "308" },
        { num: 3, time: "11:30 - 12:50", subject: "Дене шынықтыру", room: "Спортзал" }
    ],
    tue: [
        { num: 1, time: "08:30 - 09:50", subject: "Деректер қоры (MySQL)", room: "302" },
        { num: 2, time: "10:00 - 11:20", subject: "Операциялық жүйелер", room: "210" }
    ],
    wed: [
        { num: 1, time: "08:30 - 09:50", subject: "PHP & Backend негіздері", room: "304" },
        { num: 2, time: "10:00 - 11:20", subject: "Компьютерлік желілер", room: "305" }
    ],
    thu: [
        { num: 1, time: "08:30 - 09:50", subject: "Алгоритмдеу", room: "308" },
        { num: 2, time: "10:00 - 11:20", subject: "Веб-дизайн практикасы", room: "304" }
    ],
    fri: [
        { num: 1, time: "08:30 - 09:50", subject: "Киберқауіпсіздік", room: "201" },
        { num: 2, time: "10:00 - 11:20", subject: "IT Стартап", room: "401" }
    ]
};

function switchDay(day, element) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    const tbody = document.getElementById('schedule-rows');
    tbody.innerHTML = '';

    scheduleData[day].forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.num}</td>
                <td>${item.time}</td>
                <td><strong>${item.subject}</strong></td>
                <td>${item.room} каб.</td>
            </tr>
        `;
    });
}

// 3. 23 СТУДЕНТ ТІЗІМІ
const students = [
    "Абдрахманов Алихан", "Аманжол Аружан", "Аскаров Нұрсұлтан", 
    "Әлібек Дәулет", "Бақытжанова Айдана", "Болатбеков Санжар", 
    "Ғаниұлы Мәди", "Дәулетбаев Ерасыл", "Ержанова Динара", 
    "Жұмабек Айбек", "Ибрагимов Темірлан", "Қайратов Бекзат", 
    "Маратов Әділ", "Мусина Мадина", "Нұрланов Азамат", 
    "Оспанов Арман", "Рахымжанов Ильяс", "Сәдуақас Жансая", 
    "Серіков Б Cron", "Төлегенов Данияр", "Уәлихан Асқар", 
    "Шарипов Руслан", "Ысқақова Томирис"
];

function loadStudents() {
    const container = document.getElementById('users-list');
    container.innerHTML = '';

    students.forEach((name, index) => {
        container.innerHTML += `
            <div class="user-card">
                <div class="user-num">${index + 1}</div>
                <div>
                    <div style="font-weight: 600; font-size: 0.9rem;">${name}</div>
                    <small style="color: #64748b;">Студент</small>
                </div>
            </div>
        `;
    });
}

// ІСКЕ ҚОСУ
window.onload = function() {
    switchDay('mon', document.querySelector('.tab-btn'));
    loadStudents();
};