export const development = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'ecommerce_development',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  sync: process.env.DB_MODEL_SYNC || false,
  define: {
    underscored: true,
    charset: 'utf8mb4',
    dialectOptions: {
      collate: 'utf8mb4_general_ci',
    },
    timestamps: true,
  },
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: false,
  },
  logging: console.log,
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_data',
  migrationStorageTableName: 'sequelize_meta',
};

export const test = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'ecommerce_test',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  sync: process.env.DB_MODEL_SYNC || false,
  define: {
    underscored: true,
    charset: 'utf8mb4',
    dialectOptions: {
      collate: 'utf8mb4_general_ci',
    },
    timestamps: true,
  },
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: false,
  },
  logging: false,
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_data',
  migrationStorageTableName: 'sequelize_meta',
  autoLoadModels: true,
  retry: {
    max: 0,
  },
};

export const production = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  sync: false,
  define: {
    underscored: true,
    charset: 'utf8mb4',
    dialectOptions: {
      collate: 'utf8mb4_general_ci',
    },
    timestamps: true,
  },
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: false,
  },
  logging: false,
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_data',
  migrationStorageTableName: 'sequelize_meta',
};
