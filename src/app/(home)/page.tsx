import ConvertForm from '@/app/(home)/(components)/Convert.form';
import Mode from '@/app/(home)/(components)/Mode';

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col p-6">
      <Mode />
      <ConvertForm />
    </main>
  );
}
