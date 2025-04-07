# 🎉 DidliDoo - Event Planner

**DidliDoo** is a revolutionary application to organize events with friends, family, or colleagues.  
Simple, effective, and collaborative — it helps you plan unforgettable moments with the people who matter!

---

## 🚀 The Mission

You've been hired by a *truly disruptive* startup to build a modern front-end interface with the following features:

- 🌱 Display all events, including each participant's availability  
- 🌱 Create a new event  
- 🌱 Add availability to an existing event  
- 🌱 Edit an event's name, description, or author  
- 🌱 Delete an event  
- ✅ Validate inputs before sending them to the API:
  - Required fields must be filled
  - Maximum length: 256 characters
  - Show appropriate error messages below inputs when validation fails

### 🎁 Bonus Feature

- 🌼 Display the best possible date for the event based on everyone's availability
### 🛠️ Error Handling and User Feedback

To ensure a robust user experience, the application includes error handling mechanisms and a dedicated component for displaying errors to users.

#### 1. Utilization of `try/catch` with `fetch`
All API calls are wrapped in `try/catch` blocks to handle potential errors gracefully. This ensures that network issues or unexpected server responses do not crash the application.

#### 2. HTTP Status Management
The application handles various HTTP status codes and displays appropriate messages to the user:
- **404 Not Found**: "The requested resource could not be found."
- **401 Unauthorized**: "You are not authorized to perform this action. Please log in."
- **500 Internal Server Error**: "An unexpected error occurred on the server. Please try again later."
- **Other Errors**: A generic error message is shown for unhandled status codes.

#### 3. Error Display Component
A reusable `Notification` component has been created to display error messages to users. This component ensures consistent styling and behavior across the application.

##### Example Usage:
```jsx
<ErrorNotification message="The requested resource could not be found." />
```

This approach improves the application's resilience and enhances the user experience by providing clear and actionable feedback.


---

## 🗂️ Project Structure
# Structure of the `src/` Folder

## 📁 src
Contains all the source code of the application.

### 📁 assets
Directory generally used to store static files such as images, icons, fonts, etc.  
(Not detailed here as it is not expanded in the project.)

### 📁 components
Contains reusable user interface components.

#### 📁 form
Components related to event management and user interface:
- `AddEvent.js`: Form or component to add an event.
- `AddUser.js`: Component to add a user.
- `DeleteEventModal.js`: Modal window to confirm event deletion.
- `UpdateEvent.js`: Form or component to update an event.
- `cardAllEvent.js`: Displays event cards.
- `Header.js`: Component for the application header.
- `Modal.js`: Generic modal component.
- `Notifications.js`: Handles user notifications.

### 📁 lib
Contains business logic or data management functions (e.g., API calls):
- `deleteEvent.js`: Function to delete an event.
- `fetchEvent.js`: Function to fetch events.
- `postAndPatchData.js`: Function to create or update data via API.

### 📁 ui
Contains CSS style files:
- `buttons.css`: Styles for buttons.
- `cards.css`: Styles for cards (likely for events).
- `footer.css`: Styles for the footer.
- `form.css`: Styles for forms.
- `header.css`: Styles for the header.
- `main.css`: General styles for the main page.
- `modal.css`: Styles for modals.
- `notification.css`: Styles for notifications.

### 📄 main.js
Entry point or main logic of the frontend.

### 📄 style.css
Global stylesheet.

---


---

## 👨‍💻 Made with 💙 by

| Name | GitHub |
|------|--------|
| 🧠 Manu-cj | [@Manu-cj](https://github.com/Manu-cj) |
| 🎨 Antoine Chapon | [@Antoine-chapon](https://github.com/Antoine-chap) |
| 🛠️ Inna Kobets | [@InnaKobets](https://github.com/inna77777) |

---

## ✨ Final Note

> *“If you want to go fast, go alone. If you want to go far, go with DidliDoo.”*  
> — Probably someone on our team

---

💡

