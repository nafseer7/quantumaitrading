'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface TeamMemberAvatarProps {
  name: string;
  imageUrl: string;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

export default function TeamMemberAvatar({ name, imageUrl }: TeamMemberAvatarProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);

  if (imageError) {
    return (
      <div className="aspect-square relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white/80">{initials}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="aspect-square relative bg-gradient-to-br from-blue-500/20 to-purple-500/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <User className="w-20 h-20 text-white/20" />
      </div>
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover relative z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImageError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
    </div>
  );
} 