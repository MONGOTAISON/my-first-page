import { 
  AiBranch, 
  TimelineMilestone, 
  QuizQuestion, 
  GlossaryTerm, 
  EvolutionEra, 
  AiPioneer, 
  TrinityPillar 
} from '../types/ai';

export const ORIGINS_STORY = {
  hook: 'La IA no nació con ChatGPT ni con Silicon Valley. Es la culminación de 300 años de matemáticas, filosofía y el sueño humano de dotar de mente a la materia.',
  philosophicalRoots: 'Desde los mitos griegos de Talos (el gigante de bronce autómata) y las reglas de deducción lógica de Aristóteles, la humanidad soñaba con mecanizar el razonamiento. En el siglo XVII, Gottfried Leibniz propuso un "alfabeto de pensamientos humanos" y construyó una calculadora mecánica bajo el lema: "Calculemos en lugar de discutir".',
  lovelaceInsight: 'En 1843, Ada Lovelace escribió el primer algoritmo para la Máquina Analítica de Charles Babbage. Lovelace formuló la advertencia más lúcida sobre la IA un siglo antes de que existieran las computadoras: "La máquina analítica no tiene pretensiones de originar nada por sí misma. Puede hacer cualquier cosa que sepamos cómo ordenarle que realice".',
  turingMoment: 'En 1950, tras descifrar la máquina Enigma nazi con computación electromecánica, Alan Turing publicó el paper histórico "Computing Machinery and Intelligence". En lugar de debatir filosóficamente qué es la conciencia, Turing propuso una prueba pragmática: si un evaluador humano no puede distinguir si habla con una máquina o con una persona en un chat a ciegas, la máquina debe considerarse inteligente.',
  dartmouthGenesis: 'El bautismo oficial ocurrió en el verano de 1956 en la Conferencia de Dartmouth (New Hampshire). Cuatro jóvenes científicos (John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon) redactaron una propuesta audaz: sostenían que un grupo de 10 hombres durante 2 meses lograría simular todos los aspectos del pensamiento humano en una computadora. Aunque pecaron de optimismo ingenuo, crearon formalmente la disciplina y la bautizaron para siempre como "Inteligencia Artificial".'
};

export const EVOLUTION_ERAS: EvolutionEra[] = [
  {
    id: 'era-simbolica',
    name: '1. La Edad de Oro de la IA Simbólica (GOFAI)',
    period: '1950 - 1974',
    theme: 'Lógica pura, demostración de teoremas y reglas manuales',
    summary: 'Los primeros pioneros creyeron que la inteligencia consistía en manipular símbolos y reglas formales. Crearon programas para jugar damas, resolver problemas de geometría y demostrar teoremas matemáticos.',
    howItWorked: 'Los humanos escribían explícitamente todas las reglas: "SI es ave Y vuela ENTONCES tiene plumas". El computador recorría árboles de decisiones como laberintos lógicos (búsqueda en espacio de estados).',
    keyMilestones: [
      '1956: Logic Theorist, considerado el primer programa de IA de la historia.',
      '1957: Frank Rosenblatt crea el "Perceptrón", el primer modelo de red neuronal física de una sola capa.',
      '1966: ELIZA simula ser una psicoterapeuta y engaña a personas con reglas simples de texto.'
    ],
    limitations: 'Incapaz de lidiar con la incertidumbre, el mundo real o el ruido. Cuando un problema se complicaba un poco, el número de posibilidades explotaba exponencialmente (la temida "explosión combinatoria").',
    hardwareReality: 'Computadoras del tamaño de habitaciones enteras con apenas unos pocos kilobytes de memoria RAM y procesadores a frecuencias de kilohertz.',
    famousQuote: 'En menos de diez años, la mayoría de los problemas de la IA estarán resueltos. — Marvin Minsky (1967, predicción fallida).'
  },
  {
    id: 'primer-invierno',
    name: '2. El Primer Invierno de la IA',
    period: '1974 - 1980',
    theme: 'Frustración, promesas rotas y congelamiento de fondos',
    summary: 'Tras dos décadas prometiendo que las computadoras traducirían idiomas en semanas o tendrían conciencia general en meses, las máquinas fallaban estrepitosamente en tareas que hasta un niño de 3 años hacía sin esfuerzo.',
    howItWorked: 'En 1969, Marvin Minsky y Seymour Papert publicaron el libro "Perceptrons", demostrando matemáticamente que el perceptrón simple no podía ni siquiera resolver la función lógica XOR. El pesimismo paralizó la investigación en redes neuronales por más de una década.',
    keyMilestones: [
      '1969: Publicación del demoledor libro "Perceptrons".',
      '1973: El célebre "Informe Lighthill" en el Reino Unido declara que la IA no produjo nada de valor real.',
      '1974: La agencia militar estadounidense DARPA corta drásticamente el 80% de los fondos a la IA.'
    ],
    limitations: 'Las computadoras eran 10 millones de veces más lentas que las actuales y carecían de memoria para almacenar diccionarios o datos reales.',
    hardwareReality: 'Falta crítica de transistores y ausencia absoluta de datos digitalizados en el mundo.',
    famousQuote: 'En ninguna parte del mundo existe una máquina capaz de igualar la comprensión del lenguaje de un infante. — Informe Lighthill (1973).'
  },
  {
    id: 'sistemas-expertos',
    name: '3. El Renacimiento de los Sistemas Expertos',
    period: '1980 - 1987',
    theme: 'Conocimiento corporativo codificado y hardware LISP',
    summary: 'La IA se reinventó como una herramienta práctica para corporaciones: en lugar de buscar una inteligencia universal, construyeron "Sistemas Expertos" para un nicho ultraconcreto (diagnosticar enfermedades infecciosas, detectar fallos en pozos petroleros).',
    howItWorked: 'Ingenieros del conocimiento entrevistaban durante meses a médicos o geólogos para extraer 5,000 reglas "IF-THEN" e introducirlas en un motor de inferencia.',
    keyMilestones: [
      '1980: Surge XCON en Digital Equipment Corporation (DEC), ahorrando a la empresa $40 millones anuales en configuración de servidores.',
      '1982: Japón lanza el ambicioso proyecto multimillonario "Quinta Generación de Computadoras".',
      '1986: Geoffrey Hinton y colegas popularizan el algoritmo de Retropropagación (Backpropagation) para entrenar redes de múltiples capas.'
    ],
    limitations: 'Eran sistemas "quebradizos" (brittle): si una situación variaba un 1% de las reglas previstas, daban respuestas catastróficas. Actualizar manualmente 10,000 reglas era inviable.',
    hardwareReality: 'Nacieron empresas de hardware especializado ("Máquinas LISP") con precios de más de $100,000 dólares por estación de trabajo.',
    famousQuote: 'El conocimiento específico vence al razonamiento general. — Edward Feigenbaum.'
  },
  {
    id: 'segundo-invierno',
    name: '4. El Segundo Invierno y el Colapso LISP',
    period: '1987 - 1993',
    theme: 'Llegada de las PCs de escritorio y muerte de las máquinas caras',
    summary: 'Las computadoras personales genéricas (con chips Intel de Apple e IBM) se volvieron más rápidas y baratas que las costosas máquinas de IA. El mercado de sistemas expertos se desplomó de la noche a la mañana.',
    howItWorked: 'Cientos de startups quebraron. La palabra "Inteligencia Artificial" se convirtió en un término tabú: los científicos no podían usarla en sus solicitudes de financiamiento y la cambiaron por "Informática médica", "Control adaptativo" o "Sistemas cognitivos".',
    keyMilestones: [
      '1987: Colapso repentino del mercado de hardware para IA.',
      '1991: El proyecto japonés de Quinta Generación termina sin lograr sus metas principales.',
      '1992: DARPA retira nuevamente fondos estratégicos a programas de razonamiento.'
    ],
    limitations: 'Falta de conexión empírica con datos reales. Se confiaba en la opinión de humanos en vez de medir la realidad objetiva con estadísticas.',
    hardwareReality: 'Transición hacia la arquitectura x86 convencional y primeras tarjetas de sonido y gráficos rudimentarios.',
  },
  {
    id: 'era-estadistica',
    name: '5. La Revolución de los Datos y la Probabilidad',
    period: '1993 - 2011',
    theme: 'Adiós a las reglas humanas, bienvenida a la estadística y el Machine Learning',
    summary: 'Los científicos abandonaron la idea de enseñar reglas fijas y adoptaron las matemáticas probabilísticas: en lugar de decirle al computador qué es un gato, le entregan millones de números y dejan que la estadística encuentre la frontera óptima.',
    howItWorked: 'Surgimiento de Support Vector Machines (SVM), Redes Bayesianas, Random Forests y Descenso de Gradiente. La llegada de Internet y la web empezó a generar por primera vez en la historia humana montañas de datos digitales.',
    keyMilestones: [
      '1997: Deep Blue vence al campeón mundial de ajedrez Garry Kasparov calculando 200 millones de jugadas por segundo.',
      '1998: Yann LeCun desarrolla LeNet-5, la primera red convolucional para leer cheques bancarios manuscritos.',
      '2009: Fei-Fei Li lanza ImageNet, una gigantesca base de datos de 14 millones de imágenes etiquetadas que lo cambiaría todo.',
      '2011: Watson de IBM gana en el programa de televisión "Jeopardy!" procesando enciclopedias enteras.'
    ],
    limitations: 'Las redes neuronales aún no podían entrenarse a gran escala con muchas capas porque los procesadores estándar (CPUs) tardaban meses en calcular los gradientes.',
    hardwareReality: 'Computación en cluster, nacimiento de la nube y primeras GPUs pensadas para videojuegos 3D que pronto salvarían a la IA.',
  },
  {
    id: 'era-deep-learning',
    name: '6. El Big Bang del Deep Learning y las GPUs',
    period: '2012 - 2020',
    theme: 'Redes neuronales profundas + GPUs masivas + ImageNet',
    summary: 'El momento en que la IA superó a los humanos en visión y juegos complejos. El trío de científicos Geoffrey Hinton, Yann LeCun y Yoshua Bengio demostró que con suficiente hardware y datos, las redes neuronales profundas superaban a cualquier algoritmo tradicional.',
    howItWorked: 'Las GPUs (diseñadas para renderizar triángulos de videojuegos) resultaron ser perfectas para multiplicar matrices de números en paralelo. Las redes aprendían rasgos por sí mismas: bordes en la capa 1, texturas en la capa 2, rostros completos en la capa 3.',
    keyMilestones: [
      '2012: AlexNet gana la competencia ImageNet reduciendo el error a la mitad; el mundo despierta.',
      '2016: AlphaGo de Google DeepMind vence a Lee Sedol 4-1 en Go, un juego con más posiciones que átomos en el universo.',
      '2017: Investigadores de Google publican "Attention Is All You Need", introduciendo la arquitectura Transformer.',
      '2018: Hinton, LeCun y Bengio ganan el Premio Turing (el "Nobel" de la informática).'
    ],
    limitations: 'Cajas negras difíciles de interpretar. Necesidad insaciable de millones de datos etiquetados a mano.',
    hardwareReality: 'Centros de datos repletos de tarjetas NVIDIA Tesla y primeras unidades Tensor (TPUs) de Google.',
  },
  {
    id: 'era-generativa',
    name: '7. La Era Generativa, LLMs y Agentes Autónomos',
    period: '2020 - Actualidad',
    theme: 'Lenguaje universal, multimodalidad nativa, razonamiento y agentes',
    summary: 'La IA dejó de ser una herramienta de clasificación especializada para convertirse en un motor de cognición general. Los modelos no solo leen, sino que escriben código, generan arte fotográfico, razonan paso a paso y ejecutan herramientas en el mundo real.',
    howItWorked: 'Modelos de lenguaje masivos preentrenados con casi todo el texto de Internet para predecir el siguiente token mediante auto-atención. Posterior alineación con retroalimentación humana (RLHF) y razonamiento por cadenas de pensamiento (CoT).',
    keyMilestones: [
      '2020: GPT-3 demuestra capacidades emergentes de redacción y lógica zero-shot con 175,000 millones de parámetros.',
      '2022: ChatGPT alcanza 100 millones de usuarios en dos meses. Difusión (Stable Diffusion, Midjourney) transforma el arte digital.',
      '2023-2024: Modelos multimodales nativos (Gemini, Claude 3.5, GPT-4o) procesan audio, video y código en tiempo real.',
      '2025-2026: Agentes autónomos capaces de programar aplicaciones completas, investigar en la web y automatizar flujos de trabajo científicos.'
    ],
    limitations: 'Alucinaciones estadísticas, consumo energético monumental de los centros de datos, dilemas de derechos de autor y riesgos de desinformación.',
    hardwareReality: 'Clusters de cómputo con más de 100,000 GPUs H100/Blackwell consumiendo cientos de megavatios.',
    famousQuote: 'No estamos programando computadoras; estamos domesticando una nueva clase de mente estadística.'
  }
];

export const AI_PIONEERS: AiPioneer[] = [
  {
    id: 'turing',
    name: 'Alan Turing',
    years: '1912 - 1954',
    role: 'Padre Teórico de la Computación y la IA',
    famousFor: 'El Test de Turing y la Máquina de Turing Universal',
    breakthrough: 'Descifró el código Enigma en Bletchley Park y propuso en 1950 que el pensamiento mecánico debe evaluarse por la capacidad de imitar la conversación humana.',
    funFact: 'Fue un corredor de maratón de nivel olímpico; solía correr 65 kilómetros entre su laboratorio y Londres.'
  },
  {
    id: 'lovelace',
    name: 'Ada Lovelace',
    years: '1815 - 1852',
    role: 'Primera Programadora de la Historia',
    famousFor: 'Anticipó la IA un siglo antes de los transistores',
    breakthrough: 'Comprendió que las máquinas de Babbage no solo manipulaban números, sino que podían componer música o procesar símbolos si se les daban las reglas adecuadas.',
    funFact: 'Hija del célebre poeta Lord Byron; su madre la obligó a estudiar matemáticas para alejarla de la poesía.'
  },
  {
    id: 'mccarthy',
    name: 'John McCarthy',
    years: '1927 - 2011',
    role: 'Padrino del término "Inteligencia Artificial"',
    famousFor: 'Organizador de Dartmouth 1956 y creador del lenguaje LISP',
    breakthrough: 'Inventó la computación de tiempo compartido (que permitió la nube actual) y el lenguaje LISP, que dominó la investigación de IA durante 30 años.',
    funFact: 'Acuñó el nombre "Inteligencia Artificial" para distinguir la nueva disciplina de la cibernética tradicional de Norbert Wiener.'
  },
  {
    id: 'hinton',
    name: 'Geoffrey Hinton',
    years: '1947 - Presente',
    role: 'Padrino del Deep Learning (Premio Turing & Nobel de Física)',
    famousFor: 'Pionero obstinado de las redes neuronales cuando nadie creía en ellas',
    breakthrough: 'Popularizó la retropropagación (Backpropagation) y codiseñó AlexNet en 2012, detonando la revolución actual del aprendizaje profundo.',
    funFact: 'Bisnieto de George Boole (el creador del álgebra booleana en la que se basan todos los ordenadores).'
  },
  {
    id: 'lecun',
    name: 'Yann LeCun',
    years: '1960 - Presente',
    role: 'Pionero de la Visión Artificial y Redes Convolucionales',
    famousFor: 'Creador de LeNet y de las Redes Convolucionales (CNN)',
    breakthrough: 'Inspirándose en la corteza visual de los mamíferos, creó las redes convolucionales que leían cheques bancarios en los 90 y hoy guían autos autónomos.',
    funFact: 'Fue el primer director de investigación de IA en Meta (FAIR) y defiende apasionadamente los modelos de código abierto.'
  },
  {
    id: 'vaswani',
    name: 'Ashish Vaswani',
    years: '1986 - Presente',
    role: 'Co-creador de la Arquitectura Transformer',
    famousFor: 'Autor principal del paper "Attention Is All You Need" (2017)',
    breakthrough: 'Reemplazó el procesamiento de texto palabra por palabra con mecanismos de auto-atención paralela, el invento sobre el que corren GPT, Gemini y Claude.',
    funFact: 'El título "Attention Is All You Need" fue sugerido como broma inspirada en la canción de los Beatles "All You Need Is Love".'
  }
];

export const TRINITY_PILLARS: TrinityPillar[] = [
  {
    id: 'compute',
    title: 'Pilar 1: Cómputo Paralelo (Hardware)',
    subtitle: 'La transición de CPUs secuenciales a clústeres masivos de GPUs/TPUs',
    pastState: '1956: IBM 704 ejecutaba ~40,000 instrucciones por segundo. Cada operación costaba cientos de dólares.',
    todayState: '2026: Un solo chip acelerador NVIDIA H100 ejecuta más de 2,000 billones de operaciones por segundo (FLOPS).',
    multiplier: '50,000,000,000x más potencia de cálculo',
    impactExplanation: 'Las redes neuronales no funcionaban en los años 80 simplemente porque tardaban décadas en procesar datos. Cuando las tarjetas gráficas de videojuegos se adaptaron al cálculo de matrices, el tiempo de entrenamiento bajó de 10 años a 3 días.'
  },
  {
    id: 'data',
    title: 'Pilar 2: El Océano de Big Data Digital',
    subtitle: 'De disquetes de 1.44 MB a casi todo el conocimiento digitalizado',
    pastState: '1980: Un conjunto de datos grande tenía 500 muestras manuscritas etiquetadas con lápiz.',
    todayState: '2026: Los modelos de frontera se entrenan con más de 15 billones de tokens (libros, artículos, código de GitHub, foros y transcripciones).',
    multiplier: '10,000,000x más datos disponibles',
    impactExplanation: 'Un algoritmo sin datos es como un cerebro brillante en una habitación vacía a oscuras. La expansión de Internet, los smartphones y las redes sociales crearon el combustible masivo que el Machine Learning necesitaba para generalizar patrones.'
  },
  {
    id: 'algorithms',
    title: 'Pilar 3: Algoritmos Escalables y Transformers',
    subtitle: 'De reglas rígidas a arquitecturas de auto-atención auto-escalables',
    pastState: '1960: Sistemas basados en lógica deductiva fija que colapsaban al encontrar contradicciones.',
    todayState: '2026: Arquitecturas Transformers con auto-atención multi-cabeza y optimizadores estocásticos (AdamW).',
    multiplier: 'Leyes de escalado descubiertas (Scaling Laws)',
    impactExplanation: 'Antes, aumentar el tamaño del modelo no garantizaba mejores resultados (se estancaba el error). Los Transformers tienen la propiedad milagrosa de que cuanto más cómputo y datos les das, mejor razonan, sin techo visible aún.'
  }
];

export const AI_BRANCHES: AiBranch[] = [
  {
    id: 'machine-learning',
    title: 'Machine Learning (Aprendizaje Automático)',
    category: 'ml',
    categoryLabel: 'Fundamento Estadístico',
    summary: {
      principiante: 'En lugar de programar reglas fijas paso a paso, le mostramos a la computadora miles de ejemplos para que ella misma descubra los patrones.',
      intermedio: 'Modelos estadísticos supervisados, no supervisados y por refuerzo que ajustan parámetros numéricos para minimizar una función de pérdida con datos históricos.',
      avanzado: 'Optimización no lineal y convergencia probabilística. Incluye regresiones regulares (Ridge/Lasso), árboles ensamblados (XGBoost), SVM y clustering multivariado sobre espacios vectoriales de alta dimensión.'
    },
    keyMechanisms: ['Supervisado y No Supervisado', 'Descenso de Gradiente', 'Validación Cruzada', 'Extracción de Características'],
    realWorldApplications: ['Filtros anti-spam de correo', 'Sistemas de recomendación (Netflix, Spotify)', 'Detección de fraude financiero'],
    demoType: 'code',
    demoPrompt: 'Entrada: [Monto: $4,500, Ubicación: Extranjero, Hora: 03:15 AM, Historial previo: Local]',
    demoResult: 'Predicción del modelo: 94.8% Probabilidad de Fraude → Acción: Bloqueo preventivo y alerta SMS al usuario.',
    image: '/src/assets/images/ai_machine_learning_1792461739611.jpg'
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning (Redes Neuronales Profundas)',
    category: 'dl',
    categoryLabel: 'Arquitecturas Neuronales',
    summary: {
      principiante: 'Estructuras de software inspiradas en el cerebro humano organizadas en capas que aprenden conceptos simples en las primeras capas y conceptos complejos en las profundas.',
      intermedio: 'Redes neuronales artificiales de múltiples capas ocultas capaces de realizar aprendizaje de representaciones jerárquicas automáticas sin ingeniería manual de rasgos.',
      avanzado: 'Diferenciación automática end-to-end con tensores. Ajuste de pesos vía Backpropagation, optimizadores estocásticos (AdamW) y regularización de desvanecimiento de gradiente (normas de capas, residual skip connections).'
    },
    keyMechanisms: ['Capas Ocultas Profundas', 'Retropropagación (Backprop)', 'Conexiones Residuales (ResNets)', 'Funciones de Activación'],
    realWorldApplications: ['Reconocimiento de voz en tiempo real', 'Conducción asistida de vehículos', 'Predicción de estructura de proteínas (AlphaFold)'],
    demoType: 'text',
    demoPrompt: 'Capa 1: Detecta bordes y contrastes → Capa 2: Reconoce texturas y curvas → Capa 3: Ensambla partes faciales',
    demoResult: 'Capa de Salida: Identificación del sujeto con 99.2% de certeza en 12 milisegundos.',
    image: '/src/assets/images/hero_ai_network_1792461738877.jpg'
  },
  {
    id: 'computer-vision',
    title: 'Visión Computacional',
    category: 'cv',
    categoryLabel: 'Percepción Visual',
    summary: {
      principiante: 'Permite que las máquinas interpreten el mundo visual: reconocer objetos, personas, texto y movimiento en fotografías y videos.',
      intermedio: 'Procesamiento digital de matrices de píxeles mediante redes neuronales convolucionales (CNN) y Vision Transformers para segmentación y detección de objetos.',
      avanzado: 'Extracción de filtros convolucionales espacialmente invariantes, segmentación semántica a nivel de píxel (U-Net, SAM), estimación de pose 3D y reconstrucción mediante Gaussian Splatting.'
    },
    keyMechanisms: ['Convolución 2D/3D', 'Bounding Boxes & Anchors', 'Segmentación Semántica', 'Vision Transformers (ViT)'],
    realWorldApplications: ['Diagnóstico por imagen médica (radiografías)', 'Vehículos autónomos (Tesla, Waymo)', 'Control de calidad en líneas de ensamblaje'],
    demoType: 'vision',
    demoPrompt: 'Imagen de entrada: Captura de tráfico urbano en cruce peatonal',
    demoResult: 'Objetos segmentados: 12 Peatones [0.98], 4 Automóviles [0.99], 1 Semáforo Rojo [0.96] a 24 metros de distancia.',
    image: '/src/assets/images/ai_computer_vision_1792461739678.jpg'
  },
  {
    id: 'nlp-llms',
    title: 'NLP & Grandes Modelos de Lenguaje (LLMs)',
    category: 'nlp',
    categoryLabel: 'Lenguaje y Razonamiento',
    summary: {
      principiante: 'Tecnologías que permiten a las computadoras leer, escribir, resumir y conversar en idiomas humanos con una fluidez asombrosa.',
      intermedio: 'Modelos probabilísticos basados en la arquitectura Transformer que predicen la distribución del siguiente token condicionada por billones de parámetros de texto previo.',
      avanzado: 'Mecanismos de auto-atención multi-cabeza (Q, K, V), capas de embeddings posicionales (RoPE), alineación post-entrenamiento (RLHF, DPO) y técnicas de inferencia como KV-cache.'
    },
    keyMechanisms: ['Atención Multi-Cabeza', 'Tokenización Byte-Pair', 'Embeddings Vectoriales', 'Alineación RLHF/DPO'],
    realWorldApplications: ['Asistentes de código y redacción', 'Traducción simultánea neural', 'Motores de búsqueda semántica y RAG empresarial'],
    demoType: 'text',
    demoPrompt: 'Consulta: "Explica la fotosíntesis en una frase apta para un niño de 8 años"',
    demoResult: 'Respuesta generada: "Es la forma mágica en que las plantas cocinan su propio alimento usando la luz del sol, agua y aire."',
  },
  {
    id: 'generative-ai',
    title: 'IA Generativa (Imagen, Audio y Vídeo)',
    category: 'generative',
    categoryLabel: 'Síntesis Creativa',
    summary: {
      principiante: 'Sistemas que no solo analizan datos existentes, sino que crean contenido nuevo: ilustraciones, música, videos y voz humana sintetizada.',
      intermedio: 'Modelos de difusión latente y redes generativas antagónicas (GAN) que transforman ruido gaussiano aleatorio en representaciones multimedia coherentes guiadas por texto.',
      avanzado: 'Procesos de difusión directa e inversa sobre variedades latentes continuas gobernadas por ecuaciones diferenciales estocásticas (SDEs) con condicionamiento cross-attention.'
    },
    keyMechanisms: ['Modelos de Difusión', 'Espacio Latente (VAE)', 'Cross-Attention Multimodal', 'Denoising Iterativo'],
    realWorldApplications: ['Generación de arte conceptual y diseño industrial', 'Doblaje y clonación de voz realista', 'Efectos visuales cinematográficos automatizados'],
    demoType: 'vision',
    demoPrompt: 'Prompt: "Vista aérea de una estación científica en la Antártida bajo la aurora austral, estilo hiperrealista"',
    demoResult: 'Síntesis completada: Imagen generada de 1024x1024 a partir de 30 pasos de desruidizado en espacio latente.',
  },
  {
    id: 'robotics-agents',
    title: 'Robótica y Agentes Autónomos',
    category: 'robotics',
    categoryLabel: 'Interacción con el Mundo Físico',
    summary: {
      principiante: 'Cerebros artificiales conectados a cuerpos mecánicos o sistemas digitales capaces de tomar decisiones y realizar acciones para cumplir un objetivo.',
      intermedio: 'Agentes equipados con percepción sensorial, bucles de retroalimentación de control dinámico, planificación de trayectorias y uso de herramientas externas.',
      avanzado: 'Modelos de política visomotora (VLA - Vision-Language-Action), aprendizaje por refuerzo profundo con recompensas intrínsecas (PPO/SAC) y cinemática inversa adaptativa en tiempo real.'
    },
    keyMechanisms: ['Bucle Percepción-Acción', 'Planificación con Búsqueda MCTS', 'Uso Autónomo de Herramientas', 'Control Cinemático Adaptativo'],
    realWorldApplications: ['Brazos robóticos en cirugía de precisión', 'Logística de almacenes inteligentes', 'Drones de rescate y exploración planetaria'],
    demoType: 'robotics',
    demoPrompt: 'Objetivo asignado: "Localizar caja de medicamentos azul en estante B2 y transportarla al área médica"',
    demoResult: 'Plan ejecutado: Navegación LiDAR evasiva → Reconocimiento visual 3D → Sujeción de presión controlada → Entrega en 48 segundos.',
  }
];

export const AI_TIMELINE: TimelineMilestone[] = [
  {
    year: 1950,
    title: 'El Test de Turing y la Pregunta Fundacional',
    tagline: '¿Pueden pensar las máquinas?',
    description: 'Alan Turing publica "Computing Machinery and Intelligence", proponiendo el famoso Juego de la Imitación (Test de Turing) para evaluar si el comportamiento de una máquina es indistinguible del humano.',
    protagonists: ['Alan Turing'],
    impact: 'Estableció el marco conceptual y filosófico de la computación inteligente.',
    keyFact: 'Turing predijo que en el año 2000 una computadora podría engañar a un evaluador durante 5 minutos en el 30% de los casos.'
  },
  {
    year: 1956,
    title: 'La Conferencia de Dartmouth',
    tagline: 'Nace formalmente el término "Inteligencia Artificial"',
    description: 'Un grupo de científicos de élite se reúne durante dos meses en New Hampshire para explorar la hipótesis de que cada aspecto del aprendizaje puede describirse con tal precisión que una máquina sea capaz de simularlo.',
    protagonists: ['John McCarthy', 'Marvin Minsky', 'Claude Shannon', 'Nathaniel Rochester'],
    impact: 'Fundó la disciplina académica y definió los objetivos de la investigación moderna.',
    keyFact: 'John McCarthy acuñó explícitamente la frase "Artificial Intelligence" en la propuesta formal del evento.'
  },
  {
    year: 1966,
    title: 'ELIZA: El Primer Chatbot Psicoterapeuta',
    tagline: 'La ilusión de la empatía artificial',
    description: 'Joseph Weizenbaum en el MIT crea ELIZA, un programa de procesamiento de lenguaje natural que simulaba una conversación con un psicoterapeuta mediante reglas sintácticas y coincidencia de patrones.',
    protagonists: ['Joseph Weizenbaum'],
    impact: 'Demostró cómo los humanos atribuimos intencionalidad y conciencia a programas basados en reglas simples.',
    keyFact: 'La secretaria de Weizenbaum le pidió que saliera de la habitación para tener conversaciones privadas con ELIZA.'
  },
  {
    year: 1997,
    title: 'Deep Blue vs. Garry Kasparov',
    tagline: 'El campeón mundial de ajedrez cae derrotado',
    description: 'La supercomputadora Deep Blue de IBM derrota al Gran Maestro mundial Garry Kasparov en un encuentro a 6 partidas (3.5 a 2.5), utilizando búsqueda en árbol masivamente paralela con hardware acelerador dedicado.',
    protagonists: ['Garry Kasparov', 'Murray Campbell', 'Feng-hsiung Hsu'],
    impact: 'Primera vez que una máquina superó a la mente humana en el juego considerado el pináculo de la estrategia intelectual.',
    keyFact: 'Deep Blue era capaz de evaluar 200 millones de posiciones de ajedrez por cada segundo transcurrido.'
  },
  {
    year: 2012,
    title: 'AlexNet y el Renacimiento del Deep Learning',
    tagline: 'Las GPUs y las redes neuronales conquistan la visión',
    description: 'Alex Krizhevsky, Ilya Sutskever y Geoffrey Hinton presentan AlexNet en la competencia ImageNet, reduciendo el error de reconocimiento de imágenes del 26% al 15% mediante redes convolucionales entrenadas en tarjetas gráficas (GPUs).',
    protagonists: ['Alex Krizhevsky', 'Ilya Sutskever', 'Geoffrey Hinton'],
    impact: 'Terminó el "Invierno de la IA" y dio inicio a la explosión comercial del Deep Learning en la nube.',
    keyFact: 'AlexNet utilizó dos GPUs Nvidia GTX 580 domésticas conectadas en paralelo para su entrenamiento.'
  },
  {
    year: 2017,
    title: 'La Arquitectura Transformer: "Attention Is All You Need"',
    tagline: 'El cimiento de la revolución de los LLMs',
    description: 'Investigadores de Google publican el artículo científico que introdujo el mecanismo de auto-atención, permitiendo a los modelos procesar todas las palabras de un texto en paralelo en lugar de secuencialmente.',
    protagonists: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit'],
    impact: 'Sentó las bases de GPT, Gemini, BERT, Claude y la práctica totalidad de los modelos de frontera actuales.',
    keyFact: 'El título del artículo científico se convirtió en uno de los papers de computación más citados de la historia moderna.'
  },
  {
    year: 2022,
    title: 'La Era de los Modelos de Frontera y Agentes',
    tagline: 'De experimentos de laboratorio a cientos de millones de usuarios',
    description: 'Llegada de ChatGPT, modelos multimodales nativos capaces de procesar audio, video, código y texto en milisegundos, y arquitecturas de agentes autónomos orientados a la resolución de problemas complejos.',
    protagonists: ['Comunidad Global de Investigación en IA'],
    impact: 'La IA se convierte en la tecnología de propósito general más transformadora desde la invención de Internet.',
    keyFact: 'Alcanzó los 100 millones de usuarios activos más rápido que cualquier aplicación de consumo en la historia humana.'
  }
];

export const AI_VS_HUMAN_DATA = [
  {
    dimension: 'Velocidad de Procesamiento',
    aiScore: 98,
    humanScore: 25,
    aiDetail: 'Capaz de procesar miles de páginas de texto, millones de imágenes o billones de operaciones de coma flotante por segundo sin fatiga.',
    humanDetail: 'Señales sinápticas biológicas viajan a ~120 metros por segundo. Lento para cálculo numérico masivo pero asombrosamente eficiente en integración sensorial.',
    verdict: 'Ventaja abrumadora para la IA en tareas numéricas, indexación y procesamiento a escala.'
  },
  {
    dimension: 'Sentido Común y Comprensión Contextual',
    aiScore: 40,
    humanScore: 95,
    aiDetail: 'Basada en correlaciones estadísticas aprendidas. Puede cometer errores absurdos ("alucinaciones") cuando se sale de su distribución de entrenamiento.',
    humanDetail: 'Comprende leyes físicas implícitas, intenciones no verbales, ironía, contexto social y causalidad desde la infancia.',
    verdict: 'Ventaja determinante para el ser humano en comprensión profunda de la realidad.'
  },
  {
    dimension: 'Eficiencia Energética',
    aiScore: 18,
    humanScore: 99,
    aiDetail: 'Entrenar un modelo de frontera requiere megavatios de electricidad en centros de datos especializados con refrigeración avanzada.',
    humanDetail: 'El cerebro humano consume apenas ~20 vatios de potencia continua (el equivalente a una bombilla LED tenue) alimentado con un plato de comida.',
    verdict: 'La biología humana sigue siendo millones de veces más eficiente energéticamente.'
  },
  {
    dimension: 'Creatividad y Síntesis Original',
    aiScore: 70,
    humanScore: 90,
    aiDetail: 'Recombina estilos, patrones y conceptos existentes de formas novedosas a gran velocidad, pero carece de experiencia de vida, dolor o inspiración visceral.',
    humanDetail: 'Capacidad de ruptura paradigmática genuina, metáforas emocionales profundas y creación artística nacida de la vivencia subjetiva.',
    verdict: 'La IA es una herramienta de co-creación y amplificación extraordinaria, pero el origen del significado radica en el humano.'
  },
  {
    dimension: 'Empatía y Juicio Ético',
    aiScore: 15,
    humanScore: 92,
    aiDetail: 'Puede simular un tono empático mediante predicción de tokens adecuados, pero no posee sentimientos, conciencia ni responsabilidad moral.',
    humanDetail: 'Capacidad biológica de compasión, responsabilidad ética, reciprocidad afectiva y discernimiento de valores en situaciones ambiguas.',
    verdict: 'Las decisiones críticas que involucran bienestar humano requieren inexorablemente supervisión humana.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Dónde y en qué año se acuñó oficialmente por primera vez el término "Inteligencia Artificial"?',
    options: [
      { id: 'a', text: 'En la Conferencia de Dartmouth en 1956, propuesta por John McCarthy.', isCorrect: true },
      { id: 'b', text: 'En Silicon Valley en 2022 durante el lanzamiento de ChatGPT.', isCorrect: false },
      { id: 'c', text: 'En la antigua Grecia por el filósofo Aristóteles.', isCorrect: false },
      { id: 'd', text: 'En una base secreta de la NASA durante la llegada a la Luna en 1969.', isCorrect: false }
    ],
    explanation: 'En el verano de 1956, John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon se reunieron en Dartmouth College y bautizaron formalmente el campo como "Artificial Intelligence".'
  },
  {
    id: 2,
    question: '¿A qué se conoce históricamente como los "Inviernos de la IA"?',
    options: [
      { id: 'a', text: 'Períodos en que los centros de datos se congelaron físicamente por el clima.', isCorrect: false },
      { id: 'b', text: 'Épocas de desilusión y recortes drásticos de financiamiento por promesas exageradas no cumplidas.', isCorrect: true },
      { id: 'c', text: 'Las vacaciones de invierno anuales de los ingenieros de software.', isCorrect: false },
      { id: 'd', text: 'Una técnica para enfriar procesadores GPU con nitrógeno líquido.', isCorrect: false }
    ],
    explanation: 'Hubo dos grandes inviernos (1974-1980 y 1987-1993) donde las expectativas irreales chocaron contra las limitaciones de hardware y algoritmos, provocando que gobiernos e inversores retiraran casi todos los fondos.'
  },
  {
    id: 3,
    question: '¿Qué tres pilares fundamentales coincidieron para que la IA moderna explotara a partir de 2012?',
    options: [
      { id: 'a', text: 'WiFi rápido, satélites espaciales y baterías de litio.', isCorrect: false },
      { id: 'b', text: 'Cómputo paralelo masivo (GPUs), montañas de datos (Big Data) y algoritmos profundos (Transformers/Backprop).', isCorrect: true },
      { id: 'c', text: 'Robots con piernas hidráulicas, cables de cobre y pantallas táctiles.', isCorrect: false },
      { id: 'd', text: 'Impresoras 3D, criptomonedas y cables submarinos.', isCorrect: false }
    ],
    explanation: 'La "Santísima Trinidad" de la IA: las tarjetas gráficas (GPUs) aceleraron el cálculo de matrices miles de veces, Internet proveyó billones de datos de entrenamiento, y modelos como AlexNet y Transformers lograron escalar sin límites.'
  },
  {
    id: 4,
    question: '¿Por qué la arquitectura "Transformer" (2017) superó a los métodos anteriores de procesamiento de texto?',
    options: [
      { id: 'a', text: 'Porque procesa todas las palabras en paralelo mediante auto-atención en vez de leer secuencialmente una por una.', isCorrect: true },
      { id: 'b', text: 'Porque consume la mitad de batería en teléfonos inteligentes.', isCorrect: false },
      { id: 'c', text: 'Porque no necesita matemáticas ni álgebra lineal para funcionar.', isCorrect: false },
      { id: 'd', text: 'Porque fue diseñada exclusivamente para traducir ruso y alemán.', isCorrect: false }
    ],
    explanation: 'Los modelos anteriores (RNN/LSTM) leían una palabra tras otra y olvidaban el contexto largo. Los Transformers calculan las relaciones entre todas las palabras a la vez, permitiendo entrenar en miles de GPUs simultáneas.'
  },
  {
    id: 5,
    question: '¿Qué afirmaba la matemática Ada Lovelace en 1843 sobre las máquinas de cómputo?',
    options: [
      { id: 'a', text: 'Que las máquinas dominarían el planeta y tendrían emociones en menos de 50 años.', isCorrect: false },
      { id: 'b', text: 'Que la máquina solo puede hacer lo que sepamos cómo ordenarle; no tiene la pretensión de originar nada por sí misma.', isCorrect: true },
      { id: 'c', text: 'Que las computadoras nunca superarían el tamaño de un reloj de bolsillo.', isCorrect: false },
      { id: 'd', text: 'Que la electricidad era peligrosa para calcular números.', isCorrect: false }
    ],
    explanation: 'Lovelace predijo con lucidez que las máquinas no "crean" de la nada con libre albedrío, sino que ejecutan procedimientos formalmente programados, debate que sigue vigente hoy con los modelos generativos.'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'GOFAI (Good Old-Fashioned AI)',
    category: 'Historia y Evolución',
    definition: 'La IA simbólica tradicional de 1950 a 1980 basada en lógica explícita, árboles de búsqueda y reglas manuales IF-THEN, antes del auge de las redes neuronales estadísticas.',
    practicalExample: 'Programas de ajedrez primitivos que exploraban millones de jugadas usando reglas fijas codificadas por maestros humanos.'
  },
  {
    term: 'Invierno de la IA (AI Winter)',
    category: 'Historia y Evolución',
    definition: 'Período histórico de desencanto público, desprestigio académico y sequía de financiamiento provocado por la brecha entre las promesas excesivas y los resultados reales.',
    practicalExample: 'Entre 1974 y 1980, investigadores no podían usar la frase "inteligencia artificial" en sus solicitudes de presupuesto gubernamental.'
  },
  {
    term: 'Leyes de Escalado (Scaling Laws)',
    category: 'IA Moderna',
    definition: 'Descubrimiento empírico que demuestra que el rendimiento de los modelos de lenguaje mejora predeciblemente conforme se incrementa el cómputo, los datos y el número de parámetros.',
    practicalExample: 'Aumentar 10x el cómputo de entrenamiento reduce la pérdida de validación siguiendo una ley de potencias matemática precisa.'
  },
  {
    term: 'Token',
    category: 'Modelos de Lenguaje',
    definition: 'Fragmento mínimo de texto (puede ser una palabra entera, una sílaba o un carácter) en el que los modelos dividen el lenguaje antes de procesarlo numéricamente.',
    practicalExample: 'En español, la palabra "inteligencia" suele dividirse en 2 o 3 tokens numéricos en el vocabulario del modelo.'
  },
  {
    term: 'Transformer',
    category: 'Arquitectura Neural',
    definition: 'Arquitectura introducida en 2017 basada en mecanismos de auto-atención que procesa secuencias de datos completas en paralelo, eliminando la dependencia secuencial de las RNNs.',
    practicalExample: 'Es el motor estructural que impulsa GPT-4, Gemini, Claude, LLaMA y los modelos de traducción modernos.'
  },
  {
    term: 'Retropropagación (Backpropagation)',
    category: 'Entrenamiento Neural',
    definition: 'Algoritmo que calcula el gradiente del error respecto a cada peso de la red usando la regla de la cadena, permitiendo ajustar millones de conexiones eficientemente.',
    practicalExample: 'Popularizado en 1986 por Hinton y Rumelhart, permitió revivir las redes neuronales multicapa tras el primer invierno de la IA.'
  },
  {
    term: 'Espacio Latente (Latent Space)',
    category: 'Deep Learning',
    definition: 'Representación matemática multidimensional comprimida donde puntos cercanos corresponden a conceptos o características semánticamente similares.',
    practicalExample: 'En un modelo generador de rostros, mover una coordenada en el espacio latente puede añadir una sonrisa o gafas de sol suavemente.'
  },
  {
    term: 'RAG (Generación Aumentada por Recuperación)',
    category: 'Arquitectura de Sistemas',
    definition: 'Técnica que combina un modelo de lenguaje con un motor de búsqueda sobre documentos privados para responder preguntas con fuentes verificables sin reentrenar.',
    practicalExample: 'Un chatbot corporativo que antes de responder busca en los manuales en PDF de la empresa para sustentar su respuesta.'
  }
];
