// ================================================================
// 1. DEFINIÇÃO DOS DADOS
// ================================================================

// --- REGRAS REMODELADAS (nova versão) ---
const regrasAtuais = [
    { texto: "<strong>Regra 0:</strong> Não existe regras, porém FATOS que sempre irão existir" },
    { texto: "<strong>Regra 1:</strong> NÃO pense em entrar fóruns de assuntos sem restrições" },
    { texto: "<strong>Regra 2:</strong> NÃO entre em um fórum de assuntos sem restrições" },
    { texto: "<strong>Regra 3:</strong> Todos são anônimos até que a justiça vá atrás" },
    { texto: "<strong>Regra 4:</strong> Pessoas anônimas não tem dó ser irritadas" },
    { texto: "<strong>Regra 5:</strong> Não irrite Pessoas anônimas" },
    { texto: "<strong>Regra 6:</strong> Pessoas anônimas podem ser monstros horríveis de idolatria que não ligam pra nada" },
    { texto: "<strong>Regra 7:</strong> Pessoas anônimas podem ser super gente boa que se importam com o próximo" },
    { texto: "<strong>Regra 8:</strong> Não discute com pessoas online, é um desperdício de tempo" },
    { texto: "<strong>Regra 9:</strong> Nunca veja Gore/Porno/Casa de apostas, isso vicia" },
    { texto: "<strong>Regra 10:</strong> Em um diálogo com alguém online, ninguém liga se seu cachorro morreu até que você seja famoso ou alguém sensato lhe dê pêsames" },
    { texto: "<strong>Regra 11:</strong> Um erro que você cometeu online será lembrado quando você for famoso assim arruinando sua carreira em 99% dos casos" },
    { texto: "<strong>Regra 12:</strong> Quanto mais tentar, mais irritado os outros ficarão não importa o quê seja" },
    { texto: "<strong>Regra 13:</strong> Você sempre pode falar Não para alguém anônimo" },
    { texto: "<strong>Regra 14:</strong> Não brigue com trolls, pois a derrota deles é a própria vitória dos mesmos." },
    { texto: "<strong>Regra 15:</strong> Tudo pode ser considerado resenha/piada em um grupo de amigos" },
    { texto: "<strong>Regra 16:</strong> Qualquer coisa pode virar meme mundial, Literalmente", nota: "Literalmente" },
    { texto: "<strong>Regra 17:</strong> Sua vergonha é a resenha de outro" },
    { texto: "<strong>Regra 18:</strong> Vergonha do outro é a sua resenha" },
    { texto: "<strong>Regra 19:</strong> Nada é para ser levado a sério" },
    { texto: "<strong>Regra 20:</strong> Conteúdo original é original antes de ser tornar tratado" },
    { texto: "<strong>Regra 21:</strong> Tudo que você comprar digitalmente não é seu" },
    { texto: "<strong>Regra 22:</strong> Se comprar não é comprar, Piratear não é Roubar" },
    { texto: "<strong>Regra 23:</strong> Pirataria sempre existiu e nunca pararar de existir" },
    { texto: "<strong>Regra 24:</strong> Se tem paleta de mais de 1 cor diferente, toca bad Apple" },
    { texto: "<strong>Regra 25:</strong> Tem sistema, roda doom" },
    { texto: "<strong>Regra 26:</strong> Se sai som, toca megalovania" },
    { texto: "<strong>Regra 27:</strong> Todo tópico online poderá fazer você como errado mesmo sendo sobre amar bebês" },
    { texto: "<strong>Regra 28:</strong> Errar Pronome = Morte" },
    { texto: "<strong>Regra 29:</strong> Sua namorada online do Ceará quase sempre será um gordo pedo" },
    { texto: "<strong>Regra 30:</strong> Algo sempre será fetiche de alguém" },
    { texto: "<strong>Regra 31:</strong> Fetiche = Você é estranho" },
    { texto: "<strong>Regra 32:</strong> Uma fandom online sempre será uma bolha que irá lhe prender", nota: "só se vive várias fandoms / experimenta coisas novas quem tem mente aberta" },
    { texto: "<strong>Regra 33:</strong> Não se render as Big Techs" },
    { texto: "<strong>Regra 34:</strong> Se existe, tem versão NSFW", nota: "NSFW = Nudes em geral" },
    { texto: "<strong>Regra 35:</strong> Deep web não é só ilegalidade, moradores de países fechados usam para acessar sites do dia a dia ilegais do local de onde elas estão" },
    { texto: "<strong>Regra 36:</strong> Dark Web = Você é criminoso" },
    { texto: "<strong>Regra 37:</strong> Nunca esteriótipe nada, quase nada é esteriotipavel" },
    { texto: "<strong>Regra 38:</strong> Seja cianofobico", nota: "no among us" },
    { texto: "<strong>Regra 39:</strong> Sua religião não importa apenas se for o tópico da conversa" },
    { texto: "<strong>Regra 40:</strong> Se um macumbeiro saísse soltando a palavra de Exu pelas ruas, você se incomodaria?", nota: "sim, incomodaria" },
    { texto: "<strong>Regra 41:</strong> Pense antes de escrever" },
    { texto: "<strong>Regra 42:</strong> Todos odeiam conteúdo de IA" },
    { texto: "<strong>Regra 43:</strong> Algo sempre irá vazar de alguma empresa" },
    { texto: "<strong>Regra 44:</strong> Todos cairão em um Rick roll um dia" }
];

// --- REGRAS ORIGINAIS (versão clássica do 4chan, com 63 regras) ---
const regrasOriginais = [
    { texto: "<strong>Regra 0:</strong> Na verdade, você pode não seguir as regras. Mas o moderador também pode querer bani-lo." },
    { texto: "<strong>Regra 1:</strong> Não se fala do /b/." },
    { texto: "<strong>Regra 2:</strong> NÃO se fala do /b/.", nota: "As duas primeiras regras fazem alusão direta ao Clube da Luta" },
    { texto: "<strong>Regra 3:</strong> Nós somos Anônimos." },
    { texto: "<strong>Regra 4:</strong> Anônimo é Legião." },
    { texto: "<strong>Regra 5:</strong> Anônimo nunca perdoa." },
    { texto: "<strong>Regra 6:</strong> Anônimos podem ser monstros horríveis, insensíveis e que não se importam com porra nenhuma." },
    { texto: "<strong>Regra 7:</strong> Anônimos sempre entregam o pedido.", nota: "Sim meu amigo os Anonymous, nasceram do 4chan para o mundo" },
    { texto: "<strong>Regra 8:</strong> Não há regras bem definidas para postagens." },
    { texto: "<strong>Regra 9:</strong> Tampouco há regras bem definidas de moderação - aprecie seu ban." },
    { texto: "<strong>Regra 10:</strong> Se você gosta de algum site rival... NÃO GOSTE." },
    { texto: "<strong>Regra 11:</strong> Todos os seus argumentos cuidadosamente selecionados podem ser facilmente ignorados e copiados." },
    { texto: "<strong>Regra 12:</strong> Tudo o que você disser pode ser e será usado contra você." },
    { texto: "<strong>Regra 13:</strong> Qualquer coisa que você disser pode ser modificado - consertado." },
    { texto: "<strong>Regra 14:</strong> Não brigue com trolls, pois eles sempre vencem." },
    { texto: "<strong>Regra 15:</strong> Quanto mais você tentar, maior o fracasso." },
    { texto: "<strong>Regra 16:</strong> Se fracassar em proporções épicas, pode se tornar até um fracasso vitorioso." },
    { texto: "<strong>Regra 17:</strong> Todo WIN eventualmente vira um FAIL." },
    { texto: "<strong>Regra 18:</strong> Tudo o que pode ser rotulado pode ser odiado." },
    { texto: "<strong>Regra 19:</strong> Quanto mais você odeia algo, mais forte esse algo se torna." },
    { texto: "<strong>Regra 20:</strong> Nada é para ser levado a sério.", nota: "Os três tópicos acima caracterizam os haters. Tudo na internet pode ser amado ou odiado, e amado e odiado ao mesmo tempo também. Não interessa o quão maravilhosa seja alguma coisa, sempre existirão pessoas que vão odiar, e você deve conviver com isso" },
    { texto: "<strong>Regra 21:</strong> Conteúdo original é original por apenas alguns segundos antes de se tornar velho." },
    { texto: "<strong>Regra 22:</strong> Copiar e colar existe para aniquilar cada pedacinho de criatividade." },
    { texto: "<strong>Regra 23:</strong> Copiar e colar existe para aniquilar cada pedacinho de criatividade." },
    { texto: "<strong>Regra 24:</strong> Todo repost é sempre um repost de um repost." },
    { texto: "<strong>Regra 25:</strong> A relação com o tópico original diminui a cada post." },
    { texto: "<strong>Regra 26:</strong> Qualquer tópico pode facilmente se tornar algo completamente diferente." },
    { texto: "<strong>Regra 27:</strong> Sempre questione a orientação sexual de uma pessoa sem um motivo real." },
    { texto: "<strong>Regra 28:</strong> Sempre questione o sexo de uma pessoa - no pior caso, é um homem." },
    { texto: "<strong>Regra 29:</strong> Não existem mulheres nem crianças na internet. Elas são homens gordos disfarçados, e as crianças são agentes do FBI prontos para pegar um pedófilo desavisado." },
    { texto: "<strong>Regra 30:</strong> TITS or GTFO (Caia fora) - a escolha é sua." },
    { texto: "<strong>Regra 31:</strong> Você deve ter fotos para provar suas afirmações.", nota: "A regra 30 é uma das mais conhecidas da internet, e usa argumentos anteriores para se firmar. Se só existem homens na internet, e você se diz ser uma mulher, ou você deverá provar com uma foto dos seus peitos, ou todos continuarão achando que você é homem." },
    { texto: "<strong>Regra 32:</strong> Observe-nos mais - nunca é o suficiente." },
    { texto: "<strong>Regra 33:</strong> NÃO há mulheres na internet." },
    { texto: "<strong>Regra 34:</strong> Se uma coisa existir, há pornografia dela. Sem exceções." },
    { texto: "<strong>Regra 35:</strong> Se não for possível encontrar pornografia de algo, será feito." },
    { texto: "<strong>Regra 36:</strong> Não importa o que seja, sempre será o fetiche de alguém. Sem exceções.", nota: "A regra 34 é a grande responsável pela viralização da lista de regras. Se de fato, alguma coisa existe, existe também uma versão pornográfica desta mesma coisa. E se ainda não tem uma versão pornográfica, em breve terá. Há quem diga que essa regra pode ser aplicada não só na internet, mas em qualquer âmbito onde haja a presença de vida inteligente." },
    { texto: "<strong>Regra 37:</strong> Anônimo NÃO perdoa." },
    { texto: "<strong>Regra 38:</strong> Desu não é engraçado." },
    { texto: "<strong>Regra 39:</strong> É um bolo delicioso. Você deve comê-lo." },
    { texto: "<strong>Regra 40:</strong> É uma cilada deliciosa. Você deve comê-la." },
    { texto: "<strong>Regra 41:</strong> O /b/ está uma merda hoje.", nota: "O seu sub-fórum 'Random' é, de longe, a sua característica mais popular e notória. Conhecido como '/b/', possui pouquíssimas regras sobre o conteúdo postado." },
    { texto: "<strong>Regra 42:</strong> O pinto entra aqui." },
    { texto: "<strong>Regra 43:</strong> Eles vão trazer Snacks de volta antes de Jesus.", nota: "Em alguns lugares aparece apenas 'eles não vão trazer snacks de volta', mas o sentido é (quase) o mesmo, dependendo de suas crenças. Snacks é um tipo de biscoito americano popular nos anos 90" },
    { texto: "<strong>Regra 44:</strong> Você nunca fará sexo." },
    { texto: "<strong>Regra 45:</strong> ????", nota: "Essa regra nunca deve ser mencionada ou simplesmente não existe" },
    { texto: "<strong>Regra 46:</strong> PROFIT!!!", nota: "Isso é uma referência ao Décimo sétimo episódio, da segunda temporada do South Park (gnomos) onde o terceiro passo é obter lucros" },
    { texto: "<strong>Regra 47:</strong> Sempre haverá algo ainda mais grotesco do que você já viu." },
    { texto: "<strong>Regra 48:</strong> Você não pode dividir por zero (justamente porque a calculadora diz isso)." },
    { texto: "<strong>Regra 49:</strong> Não há limites verdadeiros para nada aqui - nem mesmo o céu." },
    { texto: "<strong>Regra 50:</strong> CAPSLOCK É PILOTO AUTOMÁTICO PARA SER 'LEGAL'." },
    { texto: "<strong>Regra 51:</strong> MESMO COM PILOTO AUTOMÁTICO VOCÊ AINDA DEVE DIRIGIR." },
    { texto: "<strong>Regra 52:</strong> Nada é sagrado." },
    { texto: "<strong>Regra 53:</strong> Quanto mais linda e pura alguma coisa é - maior a satisfação de corrompê-la." },
    { texto: "<strong>Regra 54:</strong> Até mesmo um comentário positivo sobre coisas japonesas pode tornar você um weeaboo.", nota: 'Para entender melhor: <a href="http://pt.wikihow.com/N%C3%A3o-se-Tornar-um-Weeaboo" target="_blank">http://pt.wikihow.com/N%C3%A3o-se-Tornar-um-Weeaboo</a>' },
    { texto: "<strong>Regra 55:</strong> Se você vir um leão, você deve entrar no carro." },
    { texto: "<strong>Regra 56:</strong> Sempre existe pornografia furry de algo.", nota: "Furry é uma cultura relacionada a personagens ficcionais que apresentam características antropomórficas, assim apresentando personalidade e características humanas" },
    { texto: "<strong>Regra 57:</strong> A piscina está sempre fechada." },
    { texto: "<strong>Regra 58:</strong> Tudo já foi crackeado e pirateado. Sem exceções." },
    { texto: "<strong>Regra 59:</strong> O pedobear vai te pegar!", nota: "É um meme que se tornou popular através do imageboard do 4chan. Como o nome sugere ('pedo' é abreviação de 'pedófilo'), ele é retratado como um urso pedófilo. É um conceito usado para zombar pedófilos. A imagem do urso tem sido comparada a isca usada para atrair as crianças." },
    { texto: "<strong>Regra 60:</strong> Sempre existe uma versão mulher de um personagem homem.", nota: "A menos que esse personagem seja tão feminino que uma versão feminina dele não faria diferença nenhuma." },
    { texto: "<strong>Regra 61:</strong> Você será banido, mesmo sem ter um cadastro." },
    { texto: "<strong>Regra 62:</strong> Dica para os newfags: NUNCA SERÃO." }
];

// ================================================================
// 2. LÓGICA DE RENDERIZAÇÃO
// ================================================================

let versaoAtual = 'atual'; // 'atual' ou 'original'

function renderizar(versao) {
    const lista = document.getElementById('rules-list');
    const label = document.getElementById('versao-label');
    const toggleLink = document.getElementById('toggle-link');
    const toggleFooter = document.getElementById('toggle-footer');
    const countSpan = document.getElementById('count');

    let dados;
    if (versao === 'original') {
        dados = regrasOriginais;
        label.textContent = 'Versão original do 4chan';
        toggleLink.textContent = '🔄 Refeita / Remodelada (versão atualizada)';
        toggleFooter.textContent = 'Ver versão atualizada';
        versaoAtual = 'original';
    } else {
        dados = regrasAtuais;
        label.textContent = 'Versão remodelada / refeita para a atualidade';
        toggleLink.textContent = '🔗 Regras originais (clássica)';
        toggleFooter.textContent = 'Ver versão original';
        versaoAtual = 'atual';
    }

    let html = '';
    dados.forEach(function(item) {
        html += '<li>';
        html += '<p>' + item.texto + '</p>';
        if (item.nota) {
            html += '<p class="note">' + item.nota + '</p>';
        }
        html += '</li>';
    });

    lista.innerHTML = html;
    countSpan.textContent = dados.length;
}

// ================================================================
// 3. EVENTOS DE TOGGLE
// ================================================================

function toggleVersao() {
    if (versaoAtual === 'atual') {
        renderizar('original');
    } else {
        renderizar('atual');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle-link').addEventListener('click', toggleVersao);
    document.getElementById('toggle-footer').addEventListener('click', toggleVersao);
    renderizar('atual');
});