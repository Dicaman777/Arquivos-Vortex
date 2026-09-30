(() => {
    const scriptUrl = document.currentScript?.src;
    if (!scriptUrl || !document.body) return;

    const button = document.createElement('a');
    button.className = 'back-home-button';
    button.href = new URL('index.html', scriptUrl).href;
    button.textContent = '\u2190 In\u00edcio';
    button.setAttribute('aria-label', 'Voltar para o in\u00edcio do Arquivo V\u00f3rtex');

    const styles = document.createElement('style');
    styles.textContent = `
        .back-home-button {
            position: fixed;
            right: 16px;
            bottom: 16px;
            z-index: 10000;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0 16px;
            color: #fff;
            background: #161d2b;
            border: 1px solid #7b8ba7;
            border-radius: 6px;
            font: 600 14px/1.2 'Segoe UI', sans-serif;
            text-decoration: none;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
            transition: background-color 0.15s ease, transform 0.15s ease;
        }

        .back-home-button:hover {
            background: #29364d;
            transform: translateY(-2px);
        }

        .back-home-button:focus-visible {
            outline: 3px solid #f3ca45;
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