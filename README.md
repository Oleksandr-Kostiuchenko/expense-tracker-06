## Проєкт: "Expense Tracker" – трекер витрат

📌 **Короткий опис:**  
Цей застосунок допоможе користувачам відстежувати свої витрати та доходи. Він дозволяє додавати транзакції, категоризувати їх, переглядати історію та аналізувати фінансовий баланс.

---

## **Технічне завдання (ТЗ)**

### 🔹 **Основний функціонал:**

✅ **Додавання транзакцій**

- Користувач вводить назву, суму та вибирає категорію (наприклад, "Їжа", "Транспорт", "Зарплата").
- Можливість вибору між "доходом" і "витратою".
- Використання `nanoid` для унікальних ID.

✅ **Видалення транзакцій**

- Користувач може видалити транзакцію з історії.

✅ **Категоризація та фільтри**

- Можливість перегляду витрат та доходів окремо.
- Фільтр за категоріями (наприклад, показати лише "Транспорт").

✅ **Загальний баланс**

- Відображення загальної суми доходів, витрат та балансу.

✅ **Збереження даних**

- Використання `redux-persist` для збереження даних у `localStorage`.

---

### 🔹 **Технології та інструменти:**

✅ **React + Redux Toolkit**  
✅ **Immer для оновлення стану**  
✅ **Redux Persist** для збереження транзакцій  
✅ **CSS-модулі** для стилізації

---

### 🔹 **Redux Store**

- **`transactionsSlice.js`** – зберігає масив транзакцій (додавання, видалення).
- **`filterSlice.js`** – зберігає поточний фільтр (за типом або категорією).
- **`store.js`** – об’єднує всі слайси та підключає `redux-persist`.

---

### 🔹 **Компоненти**

🟢 **`App`** – основний компонент.  
🟢 **`TransactionForm`** – форма для додавання транзакцій.  
🟢 **`TransactionList`** – відображає список транзакцій.  
🟢 **`TransactionItem`** – окремий елемент списку (видалення).  
🟢 **`Balance`** – відображає баланс користувача.  
🟢 **`Filters`** – кнопки для фільтрації транзакцій.

---

💡 **Що можна покращити:**  
✅ Додати React Router для поділу на сторінки (наприклад ФІЛЬТР(Всі, витрати, затрати), Форма додавана(збереження введенего в query сайту)

Головна, Аналітика, Налаштування)

✅ Додати графіки (наприклад, recharts або chart.js).
✅ Реалізувати авторизацію (Firebase або JWT).
✅ Додати темну тему.
