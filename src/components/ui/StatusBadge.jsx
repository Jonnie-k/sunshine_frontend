import { Clock, CheckCircle, XCircle } from 'lucide-react'

const config = {
  pending:  { cls: 'badge-pending',  Icon: Clock,       label: 'Pending'  },
  approved: { cls: 'badge-approved', Icon: CheckCircle, label: 'Approved' },
  rejected: { cls: 'badge-rejected', Icon: XCircle,     label: 'Rejected' },
}

export default function StatusBadge({ status }) {
  const { cls, Icon, label } = config[status] ?? config.pending
  return (
    <span className={cls}>
      <Icon size={11} />
      {label}
    </span>
  )
}