const fs = require('fs');
const path = require('path');

// Определяем структуру проекта
const structure = {
  src: {
    application: {
      commands: {
        "send-email-notification.command.ts": "",
        "send-sms-notification.command.ts": "",
        handlers: {
          "send-email-notification.handler.ts": "",
          "send-sms-notification.handler.ts": ""
        }
      },
      queries: {
        "get-notification-status.query.ts": "",
        handlers: {
          "get-notification-status.handler.ts": ""
        }
      }
    },
    domain: {
      entities: {
        "notification.entity.ts": "",
        "notification-status.enum.ts": ""
      },
      repositories: {
        "notification.repository.interface.ts": ""
      }
    },
    infrastructure: {
      database: {
        "notification.repository.ts": ""
      },
      messaging: {
        "email-producer.ts": "",
        "sms-producer.ts": "",
        consumers: {
          "email-consumer.ts": "",
          "sms-consumer.ts": ""
        }
      },
      logging: {
        "logger.service.ts": ""
      }
    },
    interfaces: {
      controllers: {
        "notification.controller.ts": ""
      },
      dto: {
        "create-notification.dto.ts": "",
        "notification-response.dto.ts": ""
      }
    },
    "main.ts": ""
  }
};

// Функция для создания структуры файлов и папок
function createStructure(basePath, structure) {
  Object.entries(structure).forEach(([name, content]) => {
    const targetPath = path.join(basePath, name);
    if (typeof content === 'object') {
      // Если это объект, создаём директорию и рекурсивно создаём содержимое
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      createStructure(targetPath, content);
    } else {
      // Если это файл, создаём его
      fs.writeFileSync(targetPath, content);
    }
  });
}

// Указываем базовый путь для проекта
const basePath = path.resolve(__dirname, 'notification-service');

// Создаём структуру проекта
createStructure(basePath, structure);

console.log(`Структура создана в директории: ${basePath}`);
