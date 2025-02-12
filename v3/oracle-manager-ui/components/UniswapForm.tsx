import { Input, Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ORACLE_NODE_TYPES } from '../utils/constants';
import { Node } from '../utils/types';

export const UniswapForm: FC<{
  tokenOne: string;
  tokenTwo: string;
  pool: string;
  secondsAgo: number;
  node?: Node;
  getValuesFromForm: (tokenOne: string, tokenTwo: string, pool: string, secondsAgo: number) => void;
}> = ({ tokenOne, tokenTwo, pool, secondsAgo, getValuesFromForm }) => {
  const { register, watch, getValues } = useForm({
    defaultValues: { tokenOne, tokenTwo, pool, secondsAgo },
  });

  useEffect(() => {
    // eslint-disable-next-line
    getValuesFromForm(
      getValues('tokenOne'),
      getValues('tokenTwo'),
      getValues('pool'),
      getValues('secondsAgo')
    );
    // eslint-disable-next-line
  }, [watch()]);
  return (
    <>
      <Text>{ORACLE_NODE_TYPES[6].parameters[0].name}</Text>
      <Input {...register('tokenOne')} placeholder={ORACLE_NODE_TYPES[6].parameters[0].name} />
      <Text>{ORACLE_NODE_TYPES[6].parameters[1].name}</Text>
      <Input {...register('tokenTwo')} placeholder={ORACLE_NODE_TYPES[6].parameters[1].name} />
      <Text>{ORACLE_NODE_TYPES[6].parameters[2].name}</Text>
      <Input {...register('pool')} placeholder={ORACLE_NODE_TYPES[6].parameters[2].name} />
      <Text>{ORACLE_NODE_TYPES[6].parameters[3].name}</Text>
      <Input
        {...register('secondsAgo', { valueAsNumber: true })}
        placeholder={ORACLE_NODE_TYPES[6].parameters[3].name}
        type="number"
      />
    </>
  );
};
