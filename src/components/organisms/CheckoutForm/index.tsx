import { forwardRef } from 'react'
import {
  Box,
  Input,
  InputProps,
  Text,
  Flex,
  ResponsiveValue,
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

type FormFieldProps = InputProps & {
  label: string
  errors?: FieldError
  gridArea?: ResponsiveValue<string>
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errors, gridArea, id, ...inputProps }, ref) => {
    const errorMessage = errors?.message

    return (
      <Box gridArea={gridArea}>
        <Flex justify="space-between">
          <Box
            as="label"
            fontSize="0.75rem"
            fontWeight="bold"
            htmlFor={id || label}
            mb={2}
            color={errors ? 'inputError' : 'black'}
            display="inline-block"
          >
            {label}
          </Box>
          {errorMessage && (
            <Text aria-live="polite" color="inputError" fontSize="0.75rem" mb={2}>
              {errorMessage}
            </Text>
          )}
        </Flex>
        <Input
          id={id || label}
          ref={ref}
          border="1px solid"
          borderColor={errors ? 'inputError' : 'inputBorder'}
          aria-invalid={errors ? true : undefined}
          {...inputProps}
        />
      </Box>
    )
  }
)

FormField.displayName = 'FormField'

export default FormField