import { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { validateEmail } from '../utils/validators';
import Head from 'next/head';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import Toast from '../components/Toast';

export default function Compra() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    quantidade: 1,
    show: 'DJ Code',
    tipoIngresso: 'Pista',
  });

  const [errors, setErrors] = useState<{ nome?: string; email?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const gerarPDF = async () => {
    const doc = new jsPDF('landscape', 'pt', 'a6'); 
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    const primaryColor = '#a855f7';
    const gray = '#f3f4f6';
  
    const numeroIngresso = `#${Math.floor(100000 + Math.random() * 900000)}`;
    const dataCompra = new Date().toLocaleString('pt-BR');
    const dataEvento = '18/08/2025 às 20:30';
    const localEvento = 'Arena TechMusic - Av. das Nações Unidas, 4777 - São Paulo/SP';
  
    // Fundo
    doc.setFillColor(gray);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'F');
  
    // Borda 
    doc.setLineWidth(2);
    doc.setDrawColor(primaryColor);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);
  
    // Sidebar 
    const sidebarWidth = 90;
    const sidebarX = 20;
    const sidebarCenterX = sidebarX + sidebarWidth / 2;
  
    // Logo 
    const logo = new Image();
    logo.src = '/images/favicon.png';
    await new Promise((resolve) => {
      logo.onload = () => {
        const logoWidth = 40;
        const logoHeight = 40;
        const logoX = sidebarCenterX - logoWidth / 2;
        const logoY = 25;
        doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);
        resolve(null);
      };
    });
  
    // QR Code 
    const qrData = `Nome: ${form.nome} | Show: ${form.show} | Ingresso: ${form.tipoIngresso}`;
    const qrCodeDataUrl = await QRCode.toDataURL(qrData);
    const qrSize = 50;
    const qrX = sidebarCenterX - qrSize / 2;
    const qrY = 75;
    doc.addImage(qrCodeDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
  
    // Linha vertical separadora
    const separatorX = sidebarX + sidebarWidth + 10;
    doc.setDrawColor('#d1d5db');
    doc.line(separatorX, 20, separatorX, pageHeight - 20);
  
    // Título 
    doc.setFontSize(18);
    doc.setTextColor(primaryColor);
    doc.text('DEV MUSIC FESTIVAL 2025', pageWidth / 2 + 50, 35, { align: 'center' });
  
    // Conteúdo à direita
    doc.setFontSize(11);
    doc.setTextColor(33, 33, 33);
  
    const contentX = separatorX + 15;
    const contentY = 55;
    const lineGap = 14;
  
    const drawField = (label: string, value: string, line: number) => {
      doc.setFont('normal');
      doc.text(`${label}:`, contentX, contentY + lineGap * line);
      doc.setFont('bold');
      doc.text(value, contentX + 95, contentY + lineGap * line); 
    };
  
    drawField('Nome', form.nome, 0);
    drawField('E-mail', form.email, 1);
    drawField('Show', form.show, 2);
    drawField('Tipo de ingresso', form.tipoIngresso, 3);
    
    const localLines = doc.splitTextToSize(localEvento, 130); 
    doc.setFont('normal');
    doc.text('Local:', contentX, contentY + lineGap * 4);
    doc.setFont('bold');
    doc.text(localLines, contentX + 90, contentY + lineGap * 4); 
    
    const nextLine = 5 + localLines.length;
    drawField('Data do evento', dataEvento, nextLine);
    drawField('Data da compra', dataCompra, nextLine + 1);
    drawField('Número do ingresso', numeroIngresso, nextLine + 2);
  
    // Rodapé
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.setFont('normal');
    doc.text('Este ingresso é pessoal e intransferível. Apresente o QR Code na entrada.', contentX, pageHeight - 25);
  
    doc.save(`Ingresso_${form.nome.replace(/\s/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!form.nome) newErrors.nome = 'Nome obrigatório';
    if (!form.email || !validateEmail(form.email)) newErrors.email = 'E-mail inválido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Definir a mensagem do toast
    setToastMessage(
      `Compra realizada com sucesso para ${form.nome}, ${form.quantidade} ingresso(s) do tipo ${form.tipoIngresso} para o show ${form.show}!`
    );

    // Mostrar o toast
    setShowToast(true);

    // Gerar PDF após exibição do toast
    setTimeout(async () => {
      await gerarPDF();
      setForm({
        nome: '',
        email: '',
        quantidade: 1,
        show: 'DJ Code',
        tipoIngresso: 'Pista',
      });
      setIsLoading(false);
    }, 1200);  // O PDF será gerado após o tempo necessário para o toast aparecer
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

            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-white">Show</label>
            <select
              name="show"
              className="w-full p-2 rounded border mb-4 bg-white dark:bg-gray-800 dark:text-white"
              value={form.show}
              onChange={(e) => setForm({ ...form, show: e.target.value })}
            >
              <option value="DJ Code">DJ Code</option>
              <option value="Banda Stackoverflow">Banda Stackoverflow</option>
              <option value="The Bug Fixers">The Bug Fixers</option>
            </select>

            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-white">Tipo de ingresso</label>
            <select
              name="tipoIngresso"
              className="w-full p-2 rounded border mb-6 bg-white dark:bg-gray-800 dark:text-white"
              value={form.tipoIngresso}
              onChange={(e) => setForm({ ...form, tipoIngresso: e.target.value })}
            >
              <option value="Estudante">Estudante - R$ 50</option>
              <option value="Pista">Pista - R$ 80</option>
              <option value="Camarote">Camarote - R$ 250</option>
              <option value="VIP">VIP - R$ 440</option>
            </select>

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
