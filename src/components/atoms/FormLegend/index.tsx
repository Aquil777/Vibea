import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type FormLegendProps = {
  children: ReactNode
}

const FormLegend: React.FC<FormLegendProps> = ({ children }) => {
  return (
    <Box
      as="legend"
      textTransform="uppercase"
      color="accent"
      fontSize="0.8125rem"
      letterSpacing="0.0581rem"
      fontWeight="bold"
      mb="1rem"
    >
      {children}
    </Box>
  )
}

export default FormLegend
