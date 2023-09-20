// service-worker.js

self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'notification-icon.png', // Replace with your notification icon URL
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
