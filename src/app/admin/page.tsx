// src/app/admin/page.tsx
import { redirect } from 'next/navigation';

export default function AdminPage() {
  redirect('/admin/dashboard');
  // Note: redirect() must be called before any JSX is returned.
  // For this reason, it's common to not return any JSX from a component that redirects.
  // However, to satisfy React's component signature, you can return null.
  return null;
}
