import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface NitroSfsymbolsProps extends HybridViewProps {
  color: string;
}
export interface NitroSfsymbolsMethods extends HybridViewMethods {}

export type NitroSfsymbols = HybridView<
  NitroSfsymbolsProps,
  NitroSfsymbolsMethods
>;
