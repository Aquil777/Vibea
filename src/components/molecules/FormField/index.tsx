import { forwardRef } from 'react'
import {
  Box,
  Input,
  InputProps,
  Text,
  Flex,
  ResponsiveValue,
} from '@chakra-ui/react'

type FormFieldProps = {
  label: string
  errors?: { message?: string }
  gridArea?: ResponsiveValue<string>
} & InputProps

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const { label, errors, gridArea, ...inputProps } = props

  return (
    <Box gridArea={gridArea}>
      <Flex justify="space-between" align="center">
        <Box
          as="label"
          fontSize="0.75rem"
          fontWeight="bold"
          htmlFor={inputProps.id}
          display="inline-block"
          mb={2}
          color={errors ? 'inputError' : 'black'}
        >
          {label}
        </Box>
        {errors?.message && (
          <Text aria-live="polite" color="inputError" fontSize="0.75rem" mb={2}>
            {errors.message}
          </Text>
        )}
      </Flex>
      <Input
        ref={ref}
        border="1px solid"
        borderColor={errors ? 'inputError' : 'inputBorder'}
        {...inputProps}
      />
    </Box>
  )
})

FormField.displayName = 'FormField'

export default FormField
