import React, {useState} from 'react'
import { SubAccount, User } from '@prisma/client'
import { UserWithPermissionsAndSubAccounts } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

type Props = {
    id: string | null
    type: 'agency' | 'subaccount'
    userData?: Partial<User>
    subAccounts?: SubAccount[]
  }

const UserDetails  = ({ id, type, subAccounts, userData }: Props) => {
    const [subAccountPermissions, setSubAccountsPermissions] =
    useState<UserWithPermissionsAndSubAccounts | null>(null)

    const { data, setClose } = useModal()
    const [roleState, setRoleState] = useState('')
    const [loadingPermissions, setLoadingPermissions] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

  return (
    <div>UserDetails </div>
  )
}

export default UserDetails 