/**
 * Function to request notification permission from the user.
 */
function requestNotificationPermission () {
  // Check if the Notification API is available in the browser
  if (!('Notification' in window)) {
    alert('Your browser does not support notifications.')
    console.error('Notification API is not supported in this browser.')
    return
  }

  // Request permission for notifications
  Notification.requestPermission()
    .then(permission => {
      console.log('Notification permission status:', permission)
      if (permission === 'granted') {
        // Permission granted: Show a notification
        console.log('Notification permission granted.')
        showNotification() // Call the function to display a notification
      } else if (permission === 'denied') {
        // Permission denied: Inform the user
        alert('You denied notification permissions.')
        console.warn('Notification permission denied.')
      } else {
        // Permission dismissed: Handle accordingly
        console.info('Notification permission was dismissed.')
      }
    })
    .catch(error => {
      console.error('Error requesting notification permission:', error)
    })
}

/**
 * Function to display a sample notification.
 */
function showNotification () {
  // Notification options
  const notificationOptions = {
    body: 'This is a test notification. Enjoy experimenting with notifications!',
    icon: 'https://via.placeholder.com/150', // Replace with a valid image URL
    requireInteraction: true // Notification will stay until dismissed
  }

  try {
    // Create and display the notification
    const notification = new Notification(
      'Hello from Notifications!',
      notificationOptions
    )

    // Add a click event listener to the notification
    notification.onclick = () => {
      window.focus() // Bring the browser window into focus
      alert('You clicked the notification!')
      console.log('Notification clicked!')
    }

    // Notification successfully displayed
    console.log('Notification displayed successfully.')
  } catch (error) {
    console.error('Error displaying notification:', error)
    alert(
      'Failed to display the notification. Please check your browser settings.'
    )
  }
}

// Attach an event listener to the button to handle click events
document.getElementById('notifyBtn').addEventListener('click', () => {
  // Check if notification permissions are already granted
  if (Notification.permission === 'granted') {
    // Permission already granted: Show the notification
    console.log(
      'Notification permission already granted. Displaying notification...'
    )
    showNotification()
  } else {
    // Permission not granted: Request permission
    console.log('Requesting notification permission...')
    requestNotificationPermission()
  }
})
