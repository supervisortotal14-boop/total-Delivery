// ===== PEGAR ESTO ARRIBA DE TODO en tu sw.js (sin borrar lo que ya tenés) =====
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_PROYECTO.firebaseapp.com',
  projectId: 'TU_PROYECTO',
  messagingSenderId: 'TU_SENDER_ID',
  appId: 'TU_APP_ID'
});
firebase.messaging(); // muestra solas las notificaciones en segundo plano

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return clients.openWindow('./');
  }));
});
// ===== FIN DEL BLOQUE =====
