
# Push Notification Demo

This project demonstrates how to implement push notifications in a web application using **pure JavaScript** and the **Notification API**. The application requests notification permissions from the user and displays a sample notification with a title, message, and an icon.

---

## Features

1. **Notification Permission Handling**:
   - Requests user permission to show notifications.
   - Handles all possible responses: granted, denied, and dismissed.

2. **Custom Notifications**:
   - Displays notifications with customizable options such as title, body, and icon.
   - Includes `requireInteraction` to keep the notification until dismissed.

3. **Click Interaction**:
   - Adds an event listener to handle user clicks on the notification.

4. **Compatibility Check**:
   - Ensures the browser supports the Notification API before proceeding.

---

## How It Works

1. User clicks the **Show Notification** button.
2. The app checks if notifications are supported in the browser.
3. If notifications are supported:
   - If permission is already granted:
     - Displays the notification directly.
   - If permission is not yet granted:
     - Prompts the user to allow or block notifications.
4. If the user clicks on the notification, the browser window is focused, and an alert is displayed.

---

## Prerequisites

- A modern browser that supports the Notification API (e.g., Chrome, Firefox, Edge).
- A local or live web server (e.g., XAMPP, Live Server, or Python HTTP server).
- HTTPS is required if testing outside of `localhost`.

---

## Setup

1. Clone or download the project:
   ```bash
   git clone https://github.com/your-username/push-notification-demo.git
   cd push-notification-demo
   ```

2. Place the project in your server directory:
   - For **XAMPP**: Move the folder to `C:\xampp\htdocs`.
   - For **Live Server** (VS Code): Open the folder and use the **Live Server** extension.

3. Start your server:
   - **XAMPP**: Access via `http://localhost/push-notification-demo/index.html`.
   - **Live Server**: Automatically serves the file and opens the browser.

4. Open the project in a browser.

---

## Usage

1. **Launch the Application**:
   - Open the browser and navigate to the URL where the project is hosted.

2. **Click the Button**:
   - Click the **Show Notification** button.
   - If prompted, allow notifications in the browser.

3. **Interact with the Notification**:
   - Click the displayed notification to trigger a browser alert and focus the window.

---

## Code Structure

### **HTML File**: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Push Notification Demo</title>
</head>
<body>
    <h1>Push Notification Demo</h1>
    <p>Click the button below to request permission for notifications and display a sample notification.</p>
    <button id="notifyBtn">Show Notification</button>

    <script src="script.js"></script>
</body>
</html>
```

### **JavaScript File**: `script.js`

```javascript
/**
 * Function to request notification permission from the user.
 */
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('Your browser does not support notifications.');
        console.error('Notification API is not supported in this browser.');
        return;
    }

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            showNotification();
        } else if (permission === 'denied') {
            alert('You denied notification permissions.');
        }
    }).catch((error) => {
        console.error('Error requesting notification permission:', error);
    });
}

/**
 * Function to display a notification.
 */
function showNotification() {
    const notificationOptions = {
        body: 'This is a test notification. Enjoy experimenting with notifications!',
        icon: 'https://via.placeholder.com/150',
        requireInteraction: true,
    };

    try {
        const notification = new Notification('Hello from Notifications!', notificationOptions);
        notification.onclick = () => {
            window.focus();
            alert('You clicked the notification!');
        };
    } catch (error) {
        console.error('Error displaying notification:', error);
    }
}

// Attach button click event
document.getElementById('notifyBtn').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        showNotification();
    } else {
        requestNotificationPermission();
    }
});
```

---

## Browser Support

The Notification API is supported in most modern browsers:

| Browser       | Supported Versions |
|---------------|--------------------|
| **Chrome**    | 22+               |
| **Firefox**   | 22+               |
| **Edge**      | 17+               |
| **Safari**    | Partial Support   |
| **Opera**     | 25+               |

> **Note**: Notifications may not work in `file://` protocol. Use a local or live server for testing.

---

## Troubleshooting

- **No Notifications Appear**:
  - Ensure the page is served using `http://localhost` or `https://`.
  - Check browser settings to confirm notifications are enabled for your site.

- **Permission Denied**:
  - Clear browser notification permissions for your site and reload the page.

- **Browser Does Not Support Notifications**:
  - Update to the latest version of a supported browser.

---

## Demo

If you’re hosting this project online, provide a demo link here.

Example:  
[Live Demo](https://example.com/push-notification-demo)

---

## License

This project is licensed under the [MIT License](LICENSE).
