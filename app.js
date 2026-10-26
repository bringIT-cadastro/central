// Substitua a função renderizarBiblioteca no seu app.js por esta versão:

function renderizarBiblioteca(dados, container) {
  if (dados.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-gray-500">Nenhum registro encontrado na Biblioteca.</div>`;
    return;
  }

  let html = `<div class="space-y-4 max-w-5xl">`;

  dados.forEach((item, index) => {
    html += `
      <div class="bg-white border rounded-xl overflow-hidden shadow-sm hover:border-[#00ACFF] transition">
        <!-- Cabeçalho Expansível (Accordion) -->
        <button onclick="toggleAccordion(${index})" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-left transition">
          <div class="flex items-center space-x-3">
            <span class="px-2.5 py-1 text-xs font-bold rounded bg-sky-100 text-[#00ACFF] uppercase tracking-wide">
              ${item.categoria || 'Geral'}
            </span>
            <span class="font-bold text-[#1C275C] text-base">${item.titulo}</span>
          </div>
          <i id="icon-${index}" class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
        </button>

        <!-- Conteúdo Expansível -->
        <div id="content-${index}" class="accordion-content p-5 border-t bg-white space-y-4">
          <!-- Detalhes da Atividade -->
          <div>
            <h4 class="text-xs font-bold uppercase text-gray-400 mb-1 tracking-wider">Descrição & Detalhes</h4>
            <p class="text-sm text-gray-700 leading-relaxed">${item.detalhes}</p>
          </div>

          <!-- Atalhos para Bases Utilizadas -->
          ${item.materiais && item.materiais.length > 0 ? `
            <div>
              <h4 class="text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-file-excel text-green-600"></i> Bases Utilizadas & Planilhas
              </h4>
              <div class="flex flex-wrap gap-2">
                ${item.materiais.map(mat => `
                  <a href="${mat.url}" target="_blank" 
                     class="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-800 border border-green-200 rounded-lg text-xs font-semibold hover:bg-green-100 hover:border-green-300 transition shadow-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square text-green-600"></i>
                    <span>${mat.nome}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Atalhos para Tutoriais -->
          ${item.tutoriais && item.tutoriais.length > 0 ? `
            <div>
              <h4 class="text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-book text-[#00ACFF]"></i> Tutoriais & Procedimentos
              </h4>
              <div class="flex flex-wrap gap-2">
                ${item.tutoriais.map(tut => `
                  <a href="${tut.url}" target="_blank" 
                     class="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 text-[#1C275C] border border-sky-200 rounded-lg text-xs font-semibold hover:bg-sky-100 hover:border-sky-300 transition shadow-sm">
                    <i class="fa-solid fa-circle-play text-[#00ACFF]"></i>
                    <span>${tut.nome}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}