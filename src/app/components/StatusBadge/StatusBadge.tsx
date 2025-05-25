import React from 'react';
import { cn } from './../../utils';
import { UserStatus } from './../../types';

interface StatusBadgeProps {
  status: UserStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={cn('px-2 py-1 text-xs font-medium rounded-full border', getStatusStyles())}>
      {status}
    </span>
  );
};
