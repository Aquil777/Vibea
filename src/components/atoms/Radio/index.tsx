import { Box, Center, useCheckbox, UseCheckboxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type CheckboxProps = UseCheckboxProps & {
  children: ReactNode
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const { children, ...checkboxProps } = props

  const { getInputProps, getCheckboxProps, getLabelProps } =
    useCheckbox(checkboxProps)

  const input = getInputProps()
  const checkbox = getCheckboxProps()
  const label = getLabelProps()

  return (
    <Box
      as="label"
      {...label}
      border="1px solid"
      borderColor="inputBorder"
      py="1rem"
      borderRadius="0.5rem"
      fontWeight="bold"
      fontSize="0.875rem"
      display="block"
      pl="3.25rem"
      position="relative"
      mb="1rem"
      cursor="pointer"
      sx={{
        'input:checked + div::after': {
          transform: 'scale(1)',
        },
        '&:focus-within': {
          borderColor: 'accent',
        },
      }}
    >
      <input {...input} />
      <Center
        {...checkbox}
        width="20px"
        height="20px"
        border="1px solid"
        borderColor="inputBorder"
        borderRadius="0.5rem" // quadrado, muda para "50%" para círculo
        position="absolute"
        left="1rem"
        _after={{
          content: "''",
          position: 'absolute',
          bg: 'accent',
          width: '10px',
          height: '10px',
          borderRadius: '0.5rem',
          transform: 'scale(0)',
          transition: 'transform 0.3s linear',
        }}
      />
      {children}
    </Box>
  )
}

export default Checkbox
