import { ReactNode, createContext, useEffect, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

type ContextProps = {
  isCartModalOpen: boolean
  onCartModalOpen: () => void
  onCartModalClose: () => void
  isCheckoutModalOpen: boolean
  onCheckoutModalOpen: () => void
  onCheckoutModalClose: () => void
}

const initialState: ContextProps = {
  isCartModalOpen: false,
  onCartModalOpen: () => undefined,
  onCartModalClose: () => undefined,
  isCheckoutModalOpen: false,
  onCheckoutModalOpen: () => undefined,
  onCheckoutModalClose: () => undefined,
}

const ModalContext = createContext<ContextProps>(initialState)

export const useModal = (): ContextProps => useContext(ModalContext)

type ModalProviderProps = {
  children: ReactNode
}

const ModalContextProvider = ({ children }: ModalProviderProps): JSX.Element => {
  const {
    isOpen: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure()

  const {
    isOpen: isCheckoutModalOpen,
    onOpen: onCheckoutModalOpen,
    onClose: onCheckoutModalClose,
  } = useDisclosure()

  useEffect(() => {
    document.body.style.overflowY =
      isCartModalOpen || isCheckoutModalOpen ? 'hidden' : 'initial'
  }, [isCartModalOpen, isCheckoutModalOpen])

  return (
    <ModalContext.Provider
      value={{
        isCartModalOpen,
        onCartModalOpen,
        onCartModalClose,
        isCheckoutModalOpen,
        onCheckoutModalOpen,
        onCheckoutModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
