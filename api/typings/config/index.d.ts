// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import { EggAppConfig } from 'egg';
import ExportConfigDefault from '../../config/config.default';
import ExportConfig from '../../config/config';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type Config = typeof ExportConfig;
type NewEggAppConfig = ConfigDefault & Config;
declare module 'egg' {
  interface EggAppConfig extends NewEggAppConfig { }
}