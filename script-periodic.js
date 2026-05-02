/**
 * @license GPLv3
 * Interactive Periodic Table - Kajotte-Studio (2020-2026)
 * Full 118 Elements + Wikipedia Integration
 * SECURE VERSION: Clipboard API & Clean Window Management
 * https://kajotte-studio.com/docs
 */
(function() {
    const lang = document.currentScript.getAttribute('data-lang') || 'pl';
    const container = document.getElementById(`periodic-table-${lang}`);

    const elements = [
        {"n":1,"s":"H","pl":"Wodór","en":"Hydrogen","x":1,"y":1,"m":1.008,"cat":"nonmetal"},
        {"n":2,"s":"He","pl":"Hel","en":"Helium","x":18,"y":1,"m":4.002,"cat":"noble-gas"},
        {"n":3,"s":"Li","pl":"Lit","en":"Lithium","x":1,"y":2,"m":6.94,"cat":"alkali"},
        {"n":4,"s":"Be","pl":"Beryl","en":"Beryllium","x":2,"y":2,"m":9.012,"cat":"alkaline"},
        {"n":5,"s":"B","pl":"Bor","en":"Boron","x":13,"y":2,"m":10.81,"cat":"metalloid"},
        {"n":6,"s":"C","pl":"Węgiel","en":"Carbon","x":14,"y":2,"m":12.011,"cat":"nonmetal"},
        {"n":7,"s":"N","pl":"Azot","en":"Nitrogen","x":15,"y":2,"m":14.007,"cat":"nonmetal"},
        {"n":8,"s":"O","pl":"Tlen","en":"Oxygen","x":16,"y":2,"m":15.999,"cat":"nonmetal"},
        {"n":9,"s":"F","pl":"Fluor","en":"Fluorine","x":17,"y":2,"m":18.998,"cat":"halogen"},
        {"n":10,"s":"Ne","pl":"Neon","en":"Neon","x":18,"y":2,"m":20.18,"cat":"noble-gas"},
        {"n":11,"s":"Na","pl":"Sód","en":"Sodium","x":1,"y":3,"m":22.99,"cat":"alkali"},
        {"n":12,"s":"Mg","pl":"Magnez","en":"Magnesium","x":2,"y":3,"m":24.305,"cat":"alkaline"},
        {"n":13,"s":"Al","pl":"Glin","en":"Aluminum","x":13,"y":3,"m":26.982,"cat":"post-trans"},
        {"n":14,"s":"Si","pl":"Krzem","en":"Silicon","x":14,"y":3,"m":28.085,"cat":"metalloid"},
        {"n":15,"s":"P","pl":"Fosfor","en":"Phosphorus","x":15,"y":3,"m":30.974,"cat":"nonmetal"},
        {"n":16,"s":"S","pl":"Siarka","en":"Sulfur","x":16,"y":3,"m":32.06,"cat":"nonmetal"},
        {"n":17,"s":"Cl","pl":"Chlor","en":"Chlorine","x":17,"y":3,"m":35.45,"cat":"halogen"},
        {"n":18,"s":"Ar","pl":"Argon","en":"Argon","x":18,"y":3,"m":39.948,"cat":"noble-gas"},
        {"n":19,"s":"K","pl":"Potas","en":"Potassium","x":1,"y":4,"m":39.098,"cat":"alkali"},
        {"n":20,"s":"Ca","pl":"Wapń","en":"Calcium","x":2,"y":4,"m":40.078,"cat":"alkaline"},
        {"n":21,"s":"Sc","pl":"Skand","en":"Scandium","x":3,"y":4,"m":44.956,"cat":"trans"},
        {"n":22,"s":"Ti","pl":"Tytan","en":"Titanium","x":4,"y":4,"m":47.867,"cat":"trans"},
        {"n":23,"s":"V","pl":"Wanad","en":"Vanadium","x":5,"y":4,"m":50.942,"cat":"trans"},
        {"n":24,"s":"Cr","pl":"Chrom","en":"Chromium","x":6,"y":4,"m":51.996,"cat":"trans"},
        {"n":25,"s":"Mn","pl":"Mangan","en":"Manganese","x":7,"y":4,"m":54.938,"cat":"trans"},
        {"n":26,"s":"Fe","pl":"Żelazo","en":"Iron","x":8,"y":4,"m":55.845,"cat":"trans"},
        {"n":27,"s":"Co","pl":"Kobalt","en":"Cobalt","x":9,"y":4,"m":58.933,"cat":"trans"},
        {"n":28,"s":"Ni","pl":"Nikiel","en":"Nickel","x":10,"y":4,"m":58.693,"cat":"trans"},
        {"n":29,"s":"Cu","pl":"Miedź","en":"Copper","x":11,"y":4,"m":63.546,"cat":"trans"},
        {"n":30,"s":"Zn","pl":"Cynk","en":"Zinc","x":12,"y":4,"m":65.38,"cat":"trans"},
        {"n":31,"s":"Ga","pl":"Gal","en":"Gallium","x":13,"y":4,"m":69.723,"cat":"post-trans"},
        {"n":32,"s":"Ge","pl":"German","en":"Germanium","x":14,"y":4,"m":72.63,"cat":"metalloid"},
        {"n":33,"s":"As","pl":"Arsen","en":"Arsenic","x":15,"y":4,"m":74.922,"cat":"metalloid"},
        {"n":34,"s":"Se","pl":"Selen","en":"Selenium","x":16,"y":4,"m":78.971,"cat":"nonmetal"},
        {"n":35,"s":"Br","pl":"Brom","en":"Bromine","x":17,"y":4,"m":79.904,"cat":"halogen"},
        {"n":36,"s":"Kr","pl":"Krypton","en":"Krypton","x":18,"y":4,"m":83.798,"cat":"noble-gas"},
        {"n":37,"s":"Rb","pl":"Rubid","en":"Rubidium","x":1,"y":5,"m":85.468,"cat":"alkali"},
        {"n":38,"s":"Sr","pl":"Stront","en":"Strontium","x":2,"y":5,"m":87.62,"cat":"alkaline"},
        {"n":39,"s":"Y","pl":"Itr","en":"Yttrium","x":3,"y":5,"m":88.906,"cat":"trans"},
        {"n":40,"s":"Zr","pl":"Cyrkon","en":"Zirconium","x":4,"y":5,"m":91.224,"cat":"trans"},
        {"n":41,"s":"Nb","pl":"Niob","en":"Niobium","x":5,"y":5,"m":92.906,"cat":"trans"},
        {"n":42,"s":"Mo","pl":"Molibden","en":"Molybdenum","x":6,"y":5,"m":95.95,"cat":"trans"},
        {"n":43,"s":"Tc","pl":"Technet","en":"Technetium","x":7,"y":5,"m":98,"cat":"trans"},
        {"n":44,"s":"Ru","pl":"Ruten","en":"Ruthenium","x":8,"y":5,"m":101.07,"cat":"trans"},
        {"n":45,"s":"Rh","pl":"Rod","en":"Rhodium","x":9,"y":5,"m":102.91,"cat":"trans"},
        {"n":46,"s":"Pd","pl":"Pallad","en":"Palladium","x":10,"y":5,"m":106.42,"cat":"trans"},
        {"n":47,"s":"Ag","pl":"Srebro","en":"Silver","x":11,"y":5,"m":107.87,"cat":"trans"},
        {"n":48,"s":"Cd","pl":"Kadm","en":"Cadmium","x":12,"y":5,"m":112.41,"cat":"trans"},
        {"n":49,"s":"In","pl":"Ind","en":"Indium","x":13,"y":5,"m":114.82,"cat":"post-trans"},
        {"n":50,"s":"Sn","pl":"Cyna","en":"Tin","x":14,"y":5,"m":118.71,"cat":"post-trans"},
        {"n":51,"s":"Sb","pl":"Antymon","en":"Antimony","x":15,"y":5,"m":121.76,"cat":"metalloid"},
        {"n":52,"s":"Te","pl":"Tellur","en":"Tellurium","x":16,"y":5,"m":127.6,"cat":"metalloid"},
        {"n":53,"s":"I","pl":"Jod","en":"Iodine","x":17,"y":5,"m":126.9,"cat":"halogen"},
        {"n":54,"s":"Xe","pl":"Ksenon","en":"Xenon","x":18,"y":5,"m":131.29,"cat":"noble-gas"},
        {"n":55,"s":"Cs","pl":"Cez","en":"Cesium","x":1,"y":6,"m":132.91,"cat":"alkali"},
        {"n":56,"s":"Ba","pl":"Bar","en":"Barium","x":2,"y":6,"m":137.33,"cat":"alkaline"},
        {"n":57,"s":"La","pl":"Lantan","en":"Lanthanum","x":4,"y":9,"m":138.91,"cat":"lanthanide"},
        {"n":58,"s":"Ce","pl":"Cer","en":"Cerium","x":5,"y":9,"m":140.12,"cat":"lanthanide"},
        {"n":59,"s":"Pr","pl":"Prazeodym","en":"Praseodymium","x":6,"y":9,"m":140.91,"cat":"lanthanide"},
        {"n":60,"s":"Nd","pl":"Neodym","en":"Neodymium","x":7,"y":9,"m":144.24,"cat":"lanthanide"},
        {"n":61,"s":"Pm","pl":"Promet","en":"Promethium","x":8,"y":9,"m":145,"cat":"lanthanide"},
        {"n":62,"s":"Sm","pl":"Samar","en":"Samarium","x":9,"y":9,"m":150.36,"cat":"lanthanide"},
        {"n":63,"s":"Eu","pl":"Europ","en":"Europium","x":10,"y":9,"m":151.96,"cat":"lanthanide"},
        {"n":64,"s":"Gd","pl":"Gadolin","en":"Gadolinium","x":11,"y":9,"m":157.25,"cat":"lanthanide"},
        {"n":65,"s":"Tb","pl":"Terb","en":"Terbium","x":12,"y":9,"m":158.93,"cat":"lanthanide"},
        {"n":66,"s":"Dy","pl":"Dysproz","en":"Dysprosium","x":13,"y":9,"m":162.5,"cat":"lanthanide"},
        {"n":67,"s":"Ho","pl":"Holm","en":"Holmium","x":14,"y":9,"m":164.93,"cat":"lanthanide"},
        {"n":68,"s":"Er","pl":"Erb","en":"Erbium","x":15,"y":9,"m":167.26,"cat":"lanthanide"},
        {"n":69,"s":"Tm","pl":"Tul","en":"Thulium","x":16,"y":9,"m":168.93,"cat":"lanthanide"},
        {"n":70,"s":"Yb","pl":"Iterb","en":"Ytterbium","x":17,"y":9,"m":173.05,"cat":"lanthanide"},
        {"n":71,"s":"Lu","pl":"Lutet","en":"Lutetium","x":18,"y":9,"m":174.97,"cat":"lanthanide"},
        {"n":72,"s":"Hf","pl":"Hafn","en":"Hafnium","x":4,"y":6,"m":178.49,"cat":"trans"},
        {"n":73,"s":"Ta","pl":"Tantal","en":"Tantalum","x":5,"y":6,"m":180.95,"cat":"trans"},
        {"n":74,"s":"W","pl":"Wolfram","en":"Tungsten","x":6,"y":6,"m":183.84,"cat":"trans"},
        {"n":75,"s":"Re","pl":"Ren","en":"Rhenium","x":7,"y":6,"m":186.21,"cat":"trans"},
        {"n":76,"s":"Os","pl":"Osm","en":"Osmium","x":8,"y":6,"m":190.23,"cat":"trans"},
        {"n":77,"s":"Ir","pl":"Iryd","en":"Iridium","x":9,"y":6,"m":192.22,"cat":"trans"},
        {"n":78,"s":"Pt","pl":"Platyna","en":"Platinum","x":10,"y":6,"m":195.08,"cat":"trans"},
        {"n":79,"s":"Au","pl":"Złoto","en":"Gold","x":11,"y":6,"m":196.97,"cat":"trans"},
        {"n":80,"s":"Hg","pl":"Rtęć","en":"Mercury","x":12,"y":6,"m":200.59,"cat":"trans"},
        {"n":81,"s":"Tl","pl":"Tal","en":"Thallium","x":13,"y":6,"m":204.38,"cat":"post-trans"},
        {"n":82,"s":"Pb","pl":"Ołów","en":"Lead","x":14,"y":6,"m":207.2,"cat":"post-trans"},
        {"n":83,"s":"Bi","pl":"Bizmut","en":"Bismuth","x":15,"y":6,"m":208.98,"cat":"post-trans"},
        {"n":84,"s":"Po","pl":"Polon","en":"Polonium","x":16,"y":6,"m":209,"cat":"post-trans"},
        {"n":85,"s":"At","pl":"Astat","en":"Astatine","x":17,"y":6,"m":210,"cat":"metalloid"},
        {"n":86,"s":"Rn","pl":"Radon","en":"Radon","x":18,"y":6,"m":222,"cat":"noble-gas"},
        {"n":87,"s":"Fr","pl":"Frans","en":"Francium","x":1,"y":7,"m":223,"cat":"alkali"},
        {"n":88,"s":"Ra","pl":"Rad","en":"Radium","x":2,"y":7,"m":226,"cat":"alkaline"},
        {"n":89,"s":"Ac","pl":"Aktyn","en":"Actinium","x":4,"y":10,"m":227,"cat":"actinide"},
        {"n":90,"s":"Th","pl":"Tor","en":"Thorium","x":5,"y":10,"m":232.04,"cat":"actinide"},
        {"n":91,"s":"Pa","pl":"Protaktyn","en":"Protactinium","x":6,"y":10,"m":231.04,"cat":"actinide"},
        {"n":92,"s":"U","pl":"Uran","en":"Uranium","x":7,"y":10,"m":238.03,"cat":"actinide"},
        {"n":93,"s":"Np","pl":"Neptun","en":"Neptunium","x":8,"y":10,"m":237,"cat":"actinide"},
        {"n":94,"s":"Pu","pl":"Pluton","en":"Plutonium","x":9,"y":10,"m":244,"cat":"actinide"},
        {"n":95,"s":"Am","pl":"Ameryk","en":"Americium","x":10,"y":10,"m":243,"cat":"actinide"},
        {"n":96,"s":"Cm","pl":"Kiur","en":"Curium","x":11,"y":10,"m":247,"cat":"actinide"},
        {"n":97,"s":"Bk","pl":"Berkel","en":"Berkelium","x":12,"y":10,"m":247,"cat":"actinide"},
        {"n":98,"s":"Cf","pl":"Kaliforn","en":"Californium","x":13,"y":10,"m":251,"cat":"actinide"},
        {"n":99,"s":"Es","pl":"Einstein","en":"Einsteinium","x":14,"y":10,"m":252,"cat":"actinide"},
        {"n":100,"s":"Fm","pl":"Ferm","en":"Fermium","x":15,"y":10,"m":257,"cat":"actinide"},
        {"n":101,"s":"Md","pl":"Mendelew","en":"Mendelevium","x":16,"y":10,"m":258,"cat":"actinide"},
        {"n":102,"s":"No","pl":"Nobel","en":"Nobelium","x":17,"y":10,"m":259,"cat":"actinide"},
        {"n":103,"s":"Lr","pl":"Lorens","en":"Lawrencium","x":18,"y":10,"m":262,"cat":"actinide"},
        {"n":104,"s":"Rf","pl":"Rutherford","en":"Rutherfordium","x":4,"y":7,"m":267,"cat":"trans"},
        {"n":105,"s":"Db","pl":"Dubn","en":"Dubnium","x":5,"y":7,"m":268,"cat":"trans"},
        {"n":106,"s":"Sg","pl":"Seaborg","en":"Seaborgium","x":6,"y":7,"m":271,"cat":"trans"},
        {"n":107,"s":"Bh","pl":"Bohr","en":"Bohrium","x":7,"y":7,"m":270,"cat":"trans"},
        {"n":108,"s":"Hs","pl":"Has","en":"Hassium","x":8,"y":7,"m":277,"cat":"trans"},
        {"n":109,"s":"Mt","pl":"Meitner","en":"Meitnerium","x":9,"y":7,"m":276,"cat":"trans"},
        {"n":110,"s":"Ds","pl":"Darmsztadt","en":"Darmstadtium","x":10,"y":7,"m":281,"cat":"trans"},
        {"n":111,"s":"Rg","pl":"Roentgen","en":"Roentgenium","x":11,"y":7,"m":280,"cat":"trans"},
        {"n":112,"s":"Cn","pl":"Copernicium","en":"Copernicium","x":12,"y":7,"m":285,"cat":"trans"},
        {"n":113,"s":"Nh","pl":"Nihon","en":"Nihonium","x":13,"y":7,"m":284,"cat":"post-trans"},
        {"n":114,"s":"Fl","pl":"Flerow","en":"Flerovium","x":14,"y":7,"m":289,"cat":"post-trans"},
        {"n":115,"s":"Mc","pl":"Moskow","en":"Moscovium","x":15,"y":7,"m":288,"cat":"post-trans"},
        {"n":116,"s":"Lv","pl":"Livermor","en":"Livermorium","x":16,"y":7,"m":293,"cat":"post-trans"},
        {"n":117,"s":"Ts","pl":"Tenness","en":"Tennessine","x":17,"y":7,"m":294,"cat":"halogen"},
        {"n":118,"s":"Og","pl":"Oganeson","en":"Oganesson","x":18,"y":7,"m":294,"cat":"noble-gas"}
    ];

    const labels = {
        pl: { 
            num: "Liczba atomowa: ", mass: "Masa atomowa: ", wiki: "Wikipedia", 
            copy: "Kopiuj masę", copied: "Skopiowano!", calc: "Otwórz kalkulator", unit: " u" 
        },
        en: { 
            num: "Atomic number: ", mass: "Atomic mass: ", wiki: "Wikipedia", 
            copy: "Copy mass", copied: "Copied!", calc: "Open calculator", unit: " u" 
        }
    };

    function secureCopy(text, btn) {
        const textArea = document.createElement("textarea");
        textArea.value = String(text);
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            if (document.execCommand('copy')) {
                const originalText = btn.textContent;
                btn.textContent = labels[lang].copied;
                btn.classList.add('success');
                setTimeout(() => { 
                    btn.textContent = originalText; 
                    btn.classList.remove('success');
                }, 1500);
            }
        } catch (err) {
            console.error('Błąd kopiowania:', err);
        }
        document.body.removeChild(textArea);
    }

    function showModal(el) {
        const oldModal = document.querySelector('.periodic-modal');
        if (oldModal) oldModal.remove();

        const modal = document.createElement('div');
        modal.className = 'periodic-modal';
        const content = document.createElement('div');
        content.className = 'modal-content';

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.textContent = '×';
        closeBtn.addEventListener('click', () => modal.remove());

        const nameStr = lang === 'pl' ? el.pl : el.en;
        const header = document.createElement('h2');
        header.textContent = nameStr;

        const details = document.createElement('div');
        details.className = 'modal-details';

        const createP = (label, value) => {
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = label;
            p.appendChild(strong);
            p.appendChild(document.createTextNode(' ' + value));
            return p;
        };

        details.appendChild(createP('Symbol:', el.s));
        details.appendChild(createP(labels[lang].num, el.n));
        details.appendChild(createP(labels[lang].mass, el.m + labels[lang].unit));

        // 1. PRZYCISK KOPIOWANIA
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = labels[lang].copy;
        copyBtn.addEventListener('click', () => secureCopy(el.m, copyBtn));

        // 2. PRZYCISK POWROTU DO KALKULATORA (Nawigacja)
        const calcBtn = document.createElement('button');
        calcBtn.className = 'transfer-btn'; // Używamy tej samej klasy dla spójnego stylu
        calcBtn.textContent = labels[lang].calc;
        calcBtn.addEventListener('click', () => {
            const url = lang === 'pl' ? 'index_kalk_pl.html' : 'index_kalk_en.html';
            window.open(url, '_blank', 'noopener,noreferrer');
        });

        // 3. LINK DO WIKIPEDII
        const wikiLink = document.createElement('a');
        wikiLink.className = 'wiki-link';
        wikiLink.target = '_blank';
        wikiLink.rel = 'noopener noreferrer';
        wikiLink.textContent = labels[lang].wiki;
        wikiLink.href = `https://${lang}.wikipedia.org/wiki/${nameStr}`;

        content.append(closeBtn, header, details, copyBtn, calcBtn, wikiLink);
        modal.appendChild(content);
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
        document.body.appendChild(modal);
    }

    function render() {
        if (!container) return;
        container.textContent = ''; 
        elements.forEach(el => {
            const card = document.createElement('div');
            card.className = `el-card cat-${el.cat}`;
            card.style.gridColumn = el.x;
            card.style.gridRow = el.y;
            const num = document.createElement('span');
            num.className = 'el-num';
            num.textContent = el.n;
            const sym = document.createElement('span');
            sym.className = 'el-sym';
            sym.textContent = el.s;
            card.append(num, sym);
            card.addEventListener('click', () => showModal(el));
            container.appendChild(card);
        });
    }

    render();
})();