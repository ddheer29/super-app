import Svg, {Path} from 'react-native-svg';

const ShoppingCartIcon = () => (
  <Svg width={50} height={50} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6.5 2H2L3.5 7M3.5 7L5 16H19L20.5 7M3.5 7H20.5M15 11V5M9 11V5"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 20C14 21.1046 14.8954 22 16 22C17.1046 22 18 21.1046 18 20"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ShoppingCartIcon;
