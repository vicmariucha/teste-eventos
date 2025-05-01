import { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { validateEmail } from '../utils/validators';
import Head from 'next/head';
import Toast from '../components/Toast';

export default function Compra() {
  const [form, setForm] = useState({ nome: '', email: '', quantidade: 1 });
  const [errors, setErrors] = useState<{ nome?: string; email?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!form.nome) newErrors.nome = 'Nome obrigatório';
    if (!form.email || !validateEmail(form.email)) newErrors.email = 'E-mail inválido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage(`Compra realizada com sucesso para ${form.nome}, ${form.quantidade} ingresso(s)!`);
      setForm({ nome: '', email: '', quantidade: 1 });
      setShowToast(true);
    }, 1200);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <Layout>
      <Head>
        <title>Compra de Ingressos | Dev Music Festival</title>
        <meta name="description" content="Formulário para compra de ingressos" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full dark:bg-purple-900 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Finalizar compra</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome completo"
              name="nome"
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
              error={errors.nome}
            />
            <Input
              label="E-mail"
              name="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              error={errors.email}
            />
            <Input
              label="Quantidade de ingressos"
              name="quantidade"
              type="number"
              min={1}
              value={form.quantidade}
              onChange={e => setForm({ ...form, quantidade: Number(e.target.value) })}
            />
            <Button type="submit" isLoading={isLoading}>
              Finalizar compra
            </Button>
          </form>
        </div>
      </div>

      {showToast && (
        <Toast message={toastMessage} onClose={handleCloseToast} />
      )}
    </Layout>
  );
}
