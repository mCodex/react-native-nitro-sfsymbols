import { getHostComponent } from 'react-native-nitro-modules';
const NitroSfsymbolsConfig = require('../nitrogen/generated/shared/json/NitroSfsymbolsConfig.json');
import type {
  NitroSfsymbolsMethods,
  NitroSfsymbolsProps,
} from './NitroSfsymbols.nitro';

export const NitroSfsymbolsView = getHostComponent<
  NitroSfsymbolsProps,
  NitroSfsymbolsMethods
>('NitroSfsymbols', () => NitroSfsymbolsConfig);
