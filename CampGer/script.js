let dados = null;
let nivel = 'modalidades';
let modalidadeAtual = null;
let jogoAtual = null;

const conteudo = document.getElementById('conteudo');
const caminho = document.getElementById('caminho');
const sidebarClipes = document.getElementById('sidebar-clipes');

// ===== CARREGAR DADOS =====
fetch('dados.json')
    .then(res => {
        if (!res.ok) throw new Error('dados.json não encontrado');
        return res.json();
    })
    .then(data => {
        dados = data;
        renderizar();
        atualizarSidebar();
    })
    .catch(err => {
        conteudo.innerHTML = `<p style="color:#c0392b;">❌ Erro: ${err.message}</p>`;
    });

// ===== FUNÇÕES DE NAVEGAÇÃO =====
window.clicarModalidade = function(id) {
    modalidadeAtual = id;
    nivel = 'jogos';
    renderizar();
};

window.clicarJogo = function(id) {
    jogoAtual = id;
    nivel = 'clipes';
    renderizar();
};

window.voltarNivel = function(nivelDestino) {
    if (nivelDestino === 'modalidades') {
        nivel = 'modalidades';
        modalidadeAtual = null;
        jogoAtual = null;
    } else if (nivelDestino === 'jogos') {
        nivel = 'jogos';
        jogoAtual = null;
    } else if (nivelDestino === 'anterior') {
        if (nivel === 'clipes') {
            nivel = 'jogos';
            jogoAtual = null;
        } else if (nivel === 'jogos') {
            nivel = 'modalidades';
            modalidadeAtual = null;
        }
    }
    renderizar();
};

// ===== ATUALIZAR SIDEBAR =====
function atualizarSidebar() {
    if (!dados) return;

    let todosClipes = [];
    dados.modalidades.forEach(m => {
        m.jogos.forEach(j => {
            j.clipes.forEach(c => {
                todosClipes.push({
                    titulo: c.titulo,
                    link: c.link,
                    id: c.id || c.titulo.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
                });
            });
        });
    });

    const clipesAleatorios = todosClipes
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);

    let html = '';
    clipesAleatorios.forEach(clipe => {
        html += `
            <div class="sidebar-clipe">
                <a href="player.html?id=${clipe.id}" target="_blank">${clipe.titulo}</a>
            </div>
        `;
    });

    if (clipesAleatorios.length === 0) {
        html = '<p style="font-size:0.8rem;color:#7f8c8d;">Nenhum clipe disponível.</p>';
    }

    sidebarClipes.innerHTML = html;
}

// ===== RENDERIZAR =====
function renderizar() {
    if (!dados) return;

    let html = '';
    let breadHtml = '';

    // --- BREADCRUMB ---
    if (nivel === 'modalidades') {
        breadHtml = `<span class="atual">Início</span>`;
    } else if (nivel === 'jogos') {
        const m = dados.modalidades.find(x => x.id === modalidadeAtual);
        breadHtml = `
            <span class="link voltar" onclick="voltarNivel('anterior')">←</span>
            <span class="link" onclick="voltarNivel('modalidades')">Início</span>
            <span class="sep">—</span>
            <span class="atual">${m ? m.nome : '?'}</span>
        `;
    } else if (nivel === 'clipes') {
        const m = dados.modalidades.find(x => x.id === modalidadeAtual);
        const j = m ? m.jogos.find(x => x.id === jogoAtual) : null;
        breadHtml = `
            <span class="link voltar" onclick="voltarNivel('anterior')">←</span>
            <span class="link" onclick="voltarNivel('modalidades')">Início</span>
            <span class="sep">—</span>
            <span class="link" onclick="voltarNivel('jogos')">${m ? m.nome : '?'}</span>
            <span class="sep">—</span>
            <span class="atual">${j ? j.nome : '?'}</span>
        `;
    }
    caminho.innerHTML = breadHtml;

    // --- CONTEÚDO ---
    if (nivel === 'modalidades') {
        html += `<div class="grid">`;
        dados.modalidades.forEach(m => {
            html += `<div class="item" onclick="clicarModalidade('${m.id}')">
                        <span class="icon">${m.icone}</span>
                        <div class="nome">${m.nome}</div>
                        <div class="desc">${m.desc}</div>
                    </div>`;
        });
        html += `</div>`;
    } else if (nivel === 'jogos') {
        const m = dados.modalidades.find(x => x.id === modalidadeAtual);
        if (!m) {
            html += `<p style="color:#c0392b;">Modalidade não encontrada.</p>`;
        } else {
            html += `<div class="grid">`;
            m.jogos.forEach(j => {
                html += `<div class="item" onclick="clicarJogo('${j.id}')">
                            <span class="icon">${j.icone}</span>
                            <div class="nome">${j.nome}</div>
                            <div class="desc">${j.clipes.length} clipes</div>
                        </div>`;
            });
            html += `</div>`;
        }
    } else if (nivel === 'clipes') {
        const m = dados.modalidades.find(x => x.id === modalidadeAtual);
        if (!m) {
            html += `<p style="color:#c0392b;">Modalidade não encontrada.</p>`;
        } else {
            const j = m.jogos.find(x => x.id === jogoAtual);
            if (!j) {
                html += `<p style="color:#c0392b;">Jogo não encontrado.</p>`;
            } else if (j.clipes.length === 0) {
                html += `<p style="color:#7f8c8d;">Nenhum clipe disponível.</p>`;
            } else {
                html += `<div class="clipe-grid">`;
                j.clipes.forEach(clipe => {
                    // Gerar ID do clipe baseado no título
                    const clipeId = clipe.id || clipe.titulo.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                    html += `
                        <a href="player.html?id=${clipeId}" class="clipe-card">
                            <div class="img-wrapper">
                                <img src="${clipe.capa}" alt="${clipe.titulo}" loading="lazy" onerror="this.style.display='none'">
                            </div>
                            <div class="info">
                                <div class="titulo">${clipe.titulo}</div>
                                <div class="jogo">${j.nome}</div>
                            </div>
                        </a>
                    `;
                });
                html += `</div>`;
            }
        }
    }

    conteudo.innerHTML = html;
}

// Iniciar
document.addEventListener('DOMContentLoaded', function() {
    if (dados) {
        renderizar();
        atualizarSidebar();
    }
});