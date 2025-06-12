
# Binary Updates Guide для Lex Helps

## 🔄 Пошаговый процесс обновления приложения в магазинах

### Шаг 1: Обновите версию в app.json

```json
{
  "expo": {
    "version": "1.1.0",  // ← Увеличьте версию
    "ios": {
      "buildNumber": "1.1.0"  // ← iOS build number
    },
    "android": {
      "versionCode": 2  // ← Android version code (всегда увеличивайте на 1)
    }
  }
}
```

### Шаг 2: Соберите новую версию

```bash
# Для Android
eas build --platform android --profile production

# Для iOS  
eas build --platform ios --profile production

# Для обеих платформ
eas build --platform all --profile production
```

### Шаг 3: Отправьте в магазины

#### Автоматически через EAS:
```bash
# Android
eas submit --platform android --profile production

# iOS
eas submit --platform ios --profile production
```

#### Вручную:
- **Google Play**: Загрузите AAB в Play Console
- **App Store**: Загрузите IPA через App Store Connect или Transporter

### Шаг 4: Заполните Release Notes

#### Для Google Play:
```
Версия 1.1.0
• Добавлена новая функция поиска
• Улучшена производительность
• Исправлены мелкие баги
• Обновлен дизайн профиля
```

#### Для App Store:
```
What's New in Version 1.1.0:
• New search functionality
• Performance improvements  
• Minor bug fixes
• Updated profile design
```

## 📋 Checklist перед отправкой:

### Технический checklist:
- [ ] Версия увеличена в app.json
- [ ] Build number (iOS) и versionCode (Android) увеличены
- [ ] Приложение собрано без ошибок
- [ ] Протестировано на реальных устройствах
- [ ] Проверена совместимость с существующими данными пользователей

### App Store checklist:
- [ ] Скриншоты обновлены (если изменился UI)
- [ ] Описание обновлено
- [ ] Ключевые слова актуальны
- [ ] Соблюдены Apple Guidelines
- [ ] Privacy Policy обновлена (если нужно)

### Google Play checklist:
- [ ] Store listing обновлен
- [ ] Скриншоты актуальны
- [ ] Target SDK version соответствует требованиям
- [ ] Соблюдены Google Play Policy
- [ ] Privacy Policy обновлена (если нужно)

## ⚠️ Важные моменты:

1. **Runtime Version**: При изменении нативных зависимостей обновите runtimeVersion
2. **Breaking Changes**: Убедитесь в обратной совместимости с предыдущими версиями
3. **Database Migrations**: Обработайте миграции данных если нужно
4. **Rollback Plan**: Подготовьте план отката на случай критических багов 