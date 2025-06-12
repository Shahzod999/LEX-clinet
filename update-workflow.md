# OTA Update Workflow для Lex Helps

## Шаги для быстрого обновления:

### 1. Внесите изменения в код
```bash
# Например, исправили баг в компоненте
git add .
git commit -m "fix: исправлен баг авторизации"
```

### 2. Отправьте OTA обновление
```bash
# Для production
eas update --channel production --message "v1.0.1: Исправлен баг авторизации"

# Для тестирования сначала
eas update --channel preview --message "v1.0.1-beta: Тестовое исправление"
```

### 3. Проверьте статус обновления
```bash
eas update:list --channel production
```

### 4. При необходимости откатите
```bash
eas update:rollback --channel production
```

## Автоматический workflow (GitHub Actions)

```yaml
name: OTA Update
on:
  push:
    branches: [main]
    paths: ['client/**']

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g eas-cli
      - run: eas update --auto --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
``` 