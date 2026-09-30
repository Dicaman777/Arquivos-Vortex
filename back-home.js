(() => {
    const scriptUrl = document.currentScript?.src;
    if (!scriptUrl || !document.body) return;

    const button = document.createElement('a');
    button.className = 'back-home-button';
    button.href = new URL('index.html', scriptUrl).href;
    button.setAttribute('aria-label', 'Voltar para o in\u00edcio do Arquivo V\u00f3rtex');

    const image = document.createElement('img');
    image.src = 'https://images.steamusercontent.com/ugc/1852682144161831068/57018EE5D3385F6993064080813648E0DEF6014F/';
    image.alt = '';
    button.append(image);

    const styles = document.createElement('style');
    styles.textContent = `
        .back-home-button {
            position: fixed;
            right: 16px;
            bottom: 16px;
            z-index: 10000;
            display: block;
            width: 44px;
            height: 44px;
            margin: 0;
            padding: 0;
            border: 0;
            line-height: 0;
        }

        .back-home-button img {
            display: block;
            width: 44px;
            height: 44px;
            object-fit: cover;
        }

        .back-home-button:focus-visible {
            outline: 2px solid #f3ca45;
            outline-offset: 3px;
        }

        @media (max-width: 480px) {
            .back-home-button {
                right: 12px;
                bottom: 12px;
            }
        }
    `;

    document.head.append(styles);
    document.body.append(button);
})();