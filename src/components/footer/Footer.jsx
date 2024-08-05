import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold mb-2">Visualização de Heatmap</p>
        <p className="text-sm mb-4">© {currentYear} Heatmap - Todos os direitos reservados.</p>
        <p className="text-sm mb-4">Acesse minhas redes:</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/amayararocha/" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={32} weight='light' />
          </a>
          <a href="https://github.com/amayararocha/" target="_blank" rel="noopener noreferrer">
            <GithubLogo size={32} weight='light' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
