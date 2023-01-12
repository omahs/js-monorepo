import { IconProps, Icon } from '@chakra-ui/react';

export const StakingRewardsIcon = ({
  width = '36px',
  height = '36px',
  color = 'white',
  ...props
}: IconProps) => (
  <Icon width={width} height={height} viewBox="0 0 36 36" fill="none" color={color} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3395 5.57324C10.3284 5.57324 9.50875 6.39289 9.50875 7.40398V11.254H7.0368C6.02571 11.254 5.20605 12.0737 5.20605 13.0848V17.2343C5.20605 18.2454 6.02571 19.0651 7.0368 19.0651H9.96807V22.6168C8.98936 22.6535 8.2072 23.4585 8.2072 24.4462V28.5958C8.2072 29.6069 9.02685 30.4265 10.0379 30.4265H27.2027C28.2138 30.4265 29.0334 29.6069 29.0334 28.5958V24.7445C30.0121 24.7077 30.7943 23.9027 30.7943 22.915V18.7655C30.7943 17.7544 29.9746 16.9347 28.9636 16.9347H26.0323V13.3843H28.5042C29.5153 13.3843 30.335 12.5646 30.335 11.5535V7.40398C30.335 6.39289 29.5153 5.57324 28.5042 5.57324H11.3395ZM11.639 11.254V7.70352H28.2047V11.254H11.639ZM7.33634 13.3843V16.9348H11.7865L11.7988 16.9347H23.902V13.3843H7.33634ZM12.0984 22.6155V19.0651H24.2015L24.2139 19.065H28.664V22.6155H12.0984ZM10.3375 28.2962V24.7458H26.9031V28.2962H10.3375Z"
      fill="currentColor"
    />
  </Icon>
);
