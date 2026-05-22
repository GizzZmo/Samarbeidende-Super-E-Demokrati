document.addEventListener('DOMContentLoaded', () => {
    const data = {
        democraticModels: {
            'Tradisjonelt Representativt Demokrati': {
                prinsipper: 'Representasjon, ansvarlighet, periodiske valg.',
                rolle: 'Velger.',
                fordeler: 'Stabilitet, effektivitet (i teorien), ekspertise hos representanter.',
                utfordringer: 'Borgerapati, elitedominans, lav responsivitet, polarisering.'
            },
            'E-demokrati': {
                prinsipper: 'Transparens, tilgjengelighet, økt deltakelse via IKT.',
                rolle: 'Informasjonsmottaker, sporadisk bidragsyter.',
                fordeler: 'Økt tilgjengelighet til informasjon, potensial for bredere deltakelse.',
                utfordringer: 'Digital kløft, cybersikkerhet, personvern, informasjons-overbelastning.'
            },
            'Samarbeidende E-demokrati': {
                prinsipper: 'Hybrid (direkte/representativt), samarbeid, kollektiv intelligens.',
                rolle: 'Medutvikler, med-evaluator, direkte stemmeberettiget (på saker).',
                fordeler: 'Bedre beslutningskvalitet, økt legitimitet, lærende system.',
                utfordringer: 'Skalerbarhet, kompleksitet, sikring av reell innflytelse.'
            },
            'Deltakende Demokrati': {
                prinsipper: 'Aktiv samfunnsinvolvering, direkte påvirkning, mangfold av stemmer.',
                rolle: 'Aktiv deltaker, med-beslutningstaker (i varierende grad).',
                fordeler: 'Økt engasjement, bedre politikk-relevans, økt transparens.',
                utfordringer: 'Representativitet, ressurskrevende, integrering med formelle systemer.'
            },
            'Samarbeidende Styring (Digitalt)': {
                prinsipper: 'Multi-stakeholder partnerskap, konsensus-orientering, delt problemløsning.',
                rolle: 'Partner, med-produsent av offentlige goder/tjenester.',
                fordeler: 'Mer robuste løsninger på komplekse problemer, økt eierskap.',
                utfordringer: 'Maktubalanser, transaksjonskostnader, treghet i prosesser.'
            },
            'Samarbeidende Super E-Demokrati': {
                prinsipper: 'Radikal inkludering, dypt og kontinuerlig samarbeid, KI-forsterket deliberasjon, likvid deltakelse, systemisk læring.',
                rolle: 'Med-skaper, medeier av prosesser og resultater, kontinuerlig bidragsyter.',
                fordeler: 'Transformativ politikk-kvalitet, høy legitimitet, systemisk innovasjon.',
                utfordringer: 'Ekstrem kompleksitet, etiske dilemmaer (KI, data), betydelige ressursbehov.'
            }
        },
        pathForward: [
            {
                title: 'Juridisk & Politisk Reform',
                icon: '🏛️',
                details: 'Utvikle lovgivning for dyp digital deltakelse, etablere juridisk status for samskapte beslutninger, og sikre personvern. Krever bred politisk konsensus og samsvar med grunnloven.'
            },
            {
                title: 'Institusjonell Kapasitetsbygging',
                icon: '🏢',
                details: 'Rekonfigurere offentlig forvaltning for samarbeid, utvikle nye roller (f.eks. digitale tilretteleggere), og gjennomføre omfattende opplæring. Krever sterkt lederskap og endringsvilje.'
            },
            {
                title: 'Teknologisk Infrastruktur',
                icon: '💻',
                details: 'Bygge sikre, skalerbare og inkluderende e-deltakelsesplattformer, implementere robust digital ID og utvikle etisk KI-styring. Krever høy sikkerhet og store investeringer.'
            },
            {
                title: 'Kulturell Tilpasning & Inkludering',
                icon: '🌍',
                details: 'Fremme en digital "dugnadsånd", bygge bro over den digitale kløften med opplæring, og sikre at alle grupper kan delta. Krever målrettede tiltak og universell utforming.'
            }
        ],
        fundingData: {
            'FoU': [
                { title: 'Nasjonale Offentlige Tilskudd (NFR-type)', desc: 'Direkte støtte til forskning via konkurransebaserte utlysninger. Muliggjør grunnforskning, men kan ha lange prosesser.' },
                { title: 'Internasjonale Samarbeidstilskudd (EU-type)', desc: 'Midler fra f.eks. Horisont Europa. Gir tilgang til større ressurspooler, men er svært konkurranseutsatt.' }
            ],
            'Pilotering': [
                { title: 'Målrettede Innovasjonsfond (Stimulab-type)', desc: 'Offentlige midler øremerket for eksperimentering, som fremmer risikotaking og praktiske løsninger.' },
                { title: 'Offentlig-Privat Partnerskap (OPP)', desc: 'Samarbeidsavtaler som mobiliserer privat kapital og ekspertise, men krever komplekse kontrakter.' },
                { title: 'Filantropi / Sivilsamfunns-tilskudd', desc: 'Fleksibel finansiering fra stiftelser for grasrotinitiativer, men ofte kortsiktig og uforutsigbar.' }
            ],
            'Oppskalering': [
                { title: 'Offentlig-Privat Partnerskap (OPP)', desc: 'Samarbeidsavtaler som mobiliserer privat kapital og ekspertise, men krever komplekse kontrakter.' },
                { title: 'Deltakende Budsjettering', desc: 'Lar borgere bestemme bruk av midler. Øker eierskap, men kan være tidkrevende.' },
                { title: 'Folkefinansiering (Crowdfunding)', desc: 'Innsamling fra mange små bidragsytere. Demokratiserer finansiering, men er usikkert for store systemer.' }
            ]
        }
    };

    const challengesCanvas = document.getElementById('challengesChart');
    const fundingCanvas = document.getElementById('fundingChart');
    if (challengesCanvas && typeof Chart !== 'undefined') {
        const challengesCtx = challengesCanvas.getContext('2d');
        new Chart(challengesCtx, {
            type: 'radar',
            data: {
                labels: ['Tillitskrise', 'Polarisering', 'Fremmedgjøring', 'Ulikhet', 'Desinformasjon'],
                datasets: [{
                    label: 'Demokratiske Utfordringer',
                    data: [8, 9, 7, 8, 9],
                    backgroundColor: 'rgba(163, 126, 99, 0.2)',
                    borderColor: 'rgba(163, 126, 99, 1)',
                    pointBackgroundColor: 'rgba(163, 126, 99, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(163, 126, 99, 1)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                        grid: { color: 'rgba(0, 0, 0, 0.1)' },
                        pointLabels: { font: { size: 12 }, color: '#383838' },
                        ticks: {
                            backdropColor: 'transparent',
                            color: '#6b7280',
                            stepSize: 2
                        },
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    const modelsControls = document.getElementById('models-controls');
    const modelsDisplay = document.getElementById('models-display');

    function displayModel(modelName) {
        const model = data.democraticModels[modelName];
        modelsDisplay.innerHTML = `
            <div class="fade-in">
                <h4 class="text-xl font-bold text-[#A37E63] mb-3">${modelName}</h4>
                <div class="grid md:grid-cols-2 gap-4 text-left">
                    <div><strong class="font-semibold text-gray-800">Prinsipper:</strong><p class="text-gray-600">${model.prinsipper}</p></div>
                    <div><strong class="font-semibold text-gray-800">Borgerens rolle:</strong><p class="text-gray-600">${model.rolle}</p></div>
                    <div><strong class="font-semibold text-gray-800">Fordeler:</strong><p class="text-gray-600">${model.fordeler}</p></div>
                    <div><strong class="font-semibold text-gray-800">Utfordringer:</strong><p class="text-gray-600">${model.utfordringer}</p></div>
                </div>
            </div>
        `;
    }

    function setActiveModelButton(activeLabel) {
        document.querySelectorAll('#models-controls button').forEach((btn) => {
            const active = btn.dataset.model === activeLabel;
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            btn.classList.toggle('bg-[#A37E63]', active);
            btn.classList.toggle('text-white', active);
            btn.classList.toggle('bg-white', !active);
            btn.classList.toggle('text-gray-700', !active);
            btn.classList.toggle('hover:bg-gray-100', !active);
        });
    }

    Object.keys(data.democraticModels).forEach((modelName, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.model = modelName;
        button.textContent = modelName;
        button.className = 'px-3 py-2 text-sm rounded-md transition-colors duration-200';
        button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
        button.onclick = () => {
            displayModel(modelName);
            setActiveModelButton(modelName);
        };
        modelsControls.appendChild(button);
    });
    const firstModel = Object.keys(data.democraticModels)[0];
    displayModel(firstModel);
    setActiveModelButton(firstModel);

    const pathContainer = document.querySelector('#path-container .flex');
    const pathDetails = document.getElementById('path-details');
    data.pathForward.forEach((step) => {
        const stepElement = document.createElement('button');
        stepElement.type = 'button';
        stepElement.className = 'relative flex flex-col items-center group p-2';
        stepElement.setAttribute('aria-controls', 'path-details');
        stepElement.setAttribute('aria-label', `Vis detaljer for ${step.title}`);
        stepElement.innerHTML = `
            <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full text-xl md:text-2xl transition-all duration-300 group-hover:border-[#A37E63] group-hover:scale-110">
                ${step.icon}
            </div>
            <p class="mt-2 text-xs md:text-sm font-semibold text-center text-gray-600 transition-colors duration-300 group-hover:text-[#A37E63]">${step.title}</p>
        `;
        stepElement.onclick = () => {
            pathDetails.innerHTML = `<div class="fade-in text-center"><h4 class="text-lg font-bold text-gray-800 mb-2">${step.title}</h4><p class="text-gray-600">${step.details}</p></div>`;
        };
        pathContainer.appendChild(stepElement);
    });

    const fundingDetailsContainer = document.getElementById('funding-details');
    const fundingPhaseControls = document.getElementById('funding-phase-controls');
    const fundingPhases = ['FoU', 'Pilotering', 'Oppskalering'];

    function displayFundingDetails(phase) {
        fundingDetailsContainer.innerHTML = '';
        const items = data.fundingData[phase] || [];
        items.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-lg shadow-sm border border-gray-200 fade-in';
            card.innerHTML = `
                <h4 class="font-bold text-gray-800">${item.title}</h4>
                <p class="text-sm text-gray-600">${item.desc}</p>
            `;
            fundingDetailsContainer.appendChild(card);
        });
        if (items.length === 0) {
            fundingDetailsContainer.innerHTML = '<p class="text-center text-gray-500">Velg et segment i diagrammet.</p>';
        }

        document.querySelectorAll('#funding-phase-controls button').forEach((btn) => {
            const active = btn.dataset.phase === phase;
            btn.classList.toggle('bg-[#A37E63]', active);
            btn.classList.toggle('text-white', active);
            btn.classList.toggle('bg-white', !active);
            btn.classList.toggle('text-gray-700', !active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    fundingPhases.forEach((phase) => {
        const phaseButton = document.createElement('button');
        phaseButton.type = 'button';
        phaseButton.dataset.phase = phase;
        phaseButton.className = 'px-3 py-2 text-sm rounded-md border border-gray-200';
        phaseButton.textContent = phase;
        phaseButton.setAttribute('aria-pressed', 'false');
        phaseButton.onclick = () => displayFundingDetails(phase);
        fundingPhaseControls.appendChild(phaseButton);
    });

    let fundingChart = null;
    if (fundingCanvas && typeof Chart !== 'undefined') {
        const fundingCtx = fundingCanvas.getContext('2d');
        fundingChart = new Chart(fundingCtx, {
            type: 'doughnut',
            data: {
                labels: fundingPhases,
                datasets: [{
                    data: [20, 40, 40],
                    backgroundColor: ['#D6C2B6', '#A37E63', '#685145'],
                    hoverBackgroundColor: ['#C4B0A4', '#8F6C53', '#524037'],
                    borderColor: '#FDFBF8',
                    borderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: { size: 14 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label;
                            }
                        }
                    }
                }
            }
        });

        fundingCanvas.onclick = (evt) => {
            const activePoints = fundingChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
            if (activePoints.length) {
                const firstPoint = activePoints[0];
                const label = fundingChart.data.labels[firstPoint.index];
                displayFundingDetails(label);
            }
        };
    }
    displayFundingDetails('FoU');

    const navLinks = document.querySelectorAll('.nav-link');
    const sectionIds = Array.from(document.querySelectorAll('main section[id]')).map((section) => section.id);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLinks.forEach((link) => {
                    const active = link.getAttribute('href') === `#${currentId}`;
                    link.classList.toggle('active', active);
                    link.setAttribute('aria-current', active ? 'page' : 'false');
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }
    });
});
