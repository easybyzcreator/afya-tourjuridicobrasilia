import { SlideItem } from '../types.ts';

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    title: 'Tour Jurídico em Brasília',
    subtitle: 'Imersão acadêmica e institucional para estudantes de Direito.',
    badge: '11 a 14 de abril',
    category: 'Abertura',
    type: 'cover',
    notes: 'Apresentar o Tour Jurídico em Brasília: 11 a 14 de abril de imersão prática nos órgãos centrais da República.'
  },
  {
    id: 2,
    title: 'A proposta da viagem',
    category: 'Proposta',
    type: 'proposal',
    content: [
      'Brasília reúne alguns dos espaços mais importantes da vida política, jurídica e institucional do país.',
      'Nesta viagem acadêmica, estudantes de Direito terão a oportunidade de observar de perto o funcionamento de órgãos centrais da República, ampliando o repertório construído em sala de aula e vivenciando, de forma concreta, temas que fazem parte da formação jurídica contemporânea.',
      'Mais do que uma viagem, esta é uma experiência de aproximação entre estudo, cidade, instituições e realidade profissional.'
    ],
    notes: 'Enfatizar o ganho de repertório prático além da sala de aula e a vivência das instituições em funcionamento.'
  },
  {
    id: 3,
    title: 'Foto/Reprodução — Viagem Acadêmica | Brasília – DF',
    subtitle: 'Supremo Tribunal Federal',
    category: 'Registro',
    type: 'stj_photo',
    notes: 'Mostrar foto real de turmas anteriores com trajes formais e Cerimonial do STF.'
  },
  {
    id: 4,
    title: 'Por que Brasília faz sentido para estudantes de Direito',
    subtitle: 'Brasília permite observar, em escala real, como se articulam instituições centrais da vida pública brasileira.',
    category: 'Relevância',
    type: 'why_brasilia',
    content: [
      'Para estudantes de Direito, a cidade oferece uma oportunidade rara de acompanhar de perto espaços ligados à produção das leis, ao funcionamento do sistema de justiça, à organização do Estado e à dinâmica política do país.',
      'Ao longo da viagem, será possível compreender melhor como esses órgãos se relacionam, como atuam na prática e como questões jurídicas, políticas e institucionais ganham forma no cotidiano da capital federal.'
    ],
    notes: 'Destacar o diferencial no currículo e na compreensão das decisões dos tribunais superiores.'
  },
  {
    id: 5,
    title: 'O que você vai viver nesta experiência',
    category: 'Experiências',
    type: 'experiences',
    bullets: [
      'STJ - Superior Tribunal de Justiça',
      'Conselho Federal da OAB - Ordem dos Advogados do Brasil',
      'CNJ - Conselho Nacional de Justiça',
      'STF - Supremo Tribunal Federal, sessão de uma das Turmas'
    ],
    notes: 'Passar pelos 4 pilares de vivência: STJ, OAB, CNJ e STF.'
  },
  {
    id: 6,
    title: 'Memória da Viagem & Produção Audiovisual',
    subtitle: 'Clique e veja o que torna essa viagem uma experiência inesquecível.',
    category: 'Vídeo & Memória',
    type: 'video_memory',
    content: [
      'Em todas nossas viagens, embarcamos com o grupo um vídeo-maker que fará o registro das atividades.',
      'Vídeo ilustrativo da produção de Memória da Viagem, que será oferecida após o retorno de Brasília.'
    ],
    notes: 'Mencionar a presença de vídeomaker exclusivo acompanhando a turma durante toda a viagem.'
  },
  {
    id: 7,
    title: 'Visão geral da viagem',
    category: 'Roteiro Geral',
    type: 'overview_days',
    notes: 'Apresentar a linha do tempo sintética dos dias.'
  },
  {
    id: 8,
    title: 'Entrada no coração político de Brasília',
    dayNumber: '01',
    dayLabel: 'dia 1 de atividade - 12 de abril',
    category: 'Jornada Jurídica',
    type: 'day_detail',
    bullets: [
      'Parada no trajeto para café da manhã',
      'Chegada em Brasília e início das atividades do dia',
      'STJ - Superior Tribunal de Justiça - visita institucional guiada',
      'Almoço no Restaurante Tia Zélia - Vila Planalto',
      'CNJ - Conselho Nacional de Justiça - visita institucional guiada',
      'Pôr do Sol no Pontão Sul',
      'Chegada e acomodação no Bay Park Flats',
      'Jantar no Brasília Shopping',
      'Retorno para o Bay Park Flats'
    ],
    options: [
      'Ida de ônibus até o shopping próximo, com retorno coletivo após 1h30',
      'Refeição por delivery no hotel',
      'Autonomia para sair, jantar e retornar por conta própria'
    ],
    notes: 'Detalhes do Dia 1 (12 de abril): STJ, almoço no Tia Zélia, CNJ, Pôr do Sol no Pontão Sul e check-in no Bay Park Flats.'
  },
  {
    id: 9,
    title: 'Estado, democracia e sistema eleitoral',
    dayNumber: '02',
    dayLabel: 'dia 2 de atividade - 13 de abril',
    category: 'Jornada Jurídica',
    type: 'day_detail',
    bullets: [
      'Café da manhã no Bay Park Flats',
      'Conselho Federal da OAB - Ordem dos Advogados do Brasil - visita institucional guiada',
      'Almoço no Restaurante Taioba - Anexo 3 da Câmara dos Deputados',
      'STF - Supremo Tribunal Federal - Sessão de Turma',
      'Encerramento da viagem em espaço público',
      'Partida de Brasília para Montes Claros'
    ],
    options: [],
    notes: 'Detalhes do Dia 2 (13 de abril): Conselho Federal da OAB, almoço no Restaurante Taioba, STF - Sessão de Turma e partida para Montes Claros.'
  },
  {
    id: 11,
    title: 'O que está incluso / não está incluso',
    category: 'Inclusões',
    type: 'inclusions',
    bullets: [
      'Transporte ida e volta, saindo de Montes Claros para Brasília',
      'Hospedagem no Bay Park Flat Hotel em quarto quádruplo',
      'Café da manhã nos dias 12 e 13 de abril',
      'Almoço nos dias 12 e 13 de abril',
      'Educadores da Universo Lúdico com experiência em Brasília',
      'Guia local com Cadastur',
      'City tour guiado - todos os dias',
      'Água mineral no ônibus',
      'Seguro-viagem',
      'Story-maker'
    ],
    options: [
      'Jantares nos dias 11, 12, 13 e 14 de abril',
      'Despesas pessoais e com alimentação durante o traslado ida e volta de ônibus'
    ],
    notes: 'Pacote completo: transporte ida e volta saindo de Montes Claros para Brasília, hotel, café da manhã nos dias 12 e 13 de abril, almoço nos dias 12 e 13 de abril, city tour guiado todos os dias, seguro e guias cadastrados.'
  },
  {
    id: 12,
    title: 'Bay Park Flat Hotel',
    category: 'Hospedagem',
    type: 'hotel_photo',
    notes: 'Acomodação em quarto quádruplo com café da manhã no Bay Park Flat Hotel.'
  },
  {
    id: 13,
    title: 'Seu Guia Digital de Viagem',
    subtitle: 'BÔNUS EXCLUSIVO - TECNOLOGIA NA VIAGEM',
    category: 'App Exclusivo',
    type: 'travel_app_guide',
    bullets: [
      'Roteiro Dia a Dia: Programação completa com horários, endereços e detalhes sobre as visitas.',
      'Orientação sobre trajes: Orientação clara sobre as vestimentas adequadas para cada visita e dicas para garantir seu conforto.',
      'O que Levar na Mala: Checklist interativo de bagagem (mala de até 10kg + mochila) para não esquecer nenhum item.',
      'Transporte terrestre (Ônibus com ar condicionado): Instruções de embarque e traslado'
    ],
    notes: 'Destacar o aplicativo móvel exclusivo com todas as informações da viagem.'
  },
  {
    id: 14,
    title: 'Mais do que uma viagem, uma experiência acadêmica',
    category: 'Conceito',
    type: 'academic_quote',
    content: [
      'Ao longo de três dias de atividades, a proposta busca aproximar os estudantes de Direito de instituições, espaços e dinâmicas que fazem parte da vida pública brasileira.',
      'Mais do que visitar lugares emblemáticos, a viagem convida o grupo a observar como temas discutidos na graduação ganham forma concreta na capital federal.',
      'Trata-se de uma experiência que articula formação acadêmica, repertório institucional, convivência universitária e leitura crítica da cidade.'
    ],
    notes: 'Reforçar o compromisso pedagógico e a integração acadêmica entre os alunos.'
  },
  {
    id: 15,
    title: 'INVESTIMENTO e condições de adesão',
    category: 'Investimento',
    type: 'investment',
    notes: 'Período de adesão: a definir. Taxa de inscrição R$ 150 à vista no Pix. Investimento (11 a 14 de abril de 2027): 12x R$ 247,84.'
  },
  {
    id: 16,
    title: 'Como fazer sua reserva',
    category: 'Passo a Passo Reserva',
    type: 'reservation_steps',
    notes: 'Etapas da reserva: Taxa R$ 150 após reunião (30 interessados). Encerramento das vagas. Limite máximo de 30 participantes.'
  },
  {
    id: 17,
    title: 'como pagar o saldo da viagem',
    subtitle: 'em até 12x no cartão de crédito',
    category: 'Pagamento Saldo',
    type: 'payment_code',
    content: [
      'você receberá um código referente ao número da viagem',
      'acesse o site www.universoludico.com.br',
      'entre na área do aluno e insira o código.',
      'siga as etapas até concluir a compra de forma fácil e segura!'
    ],
    notes: 'Passo a passo para pagar o saldo da viagem em até 12x no cartão de crédito. Código da Viagem XXXXXX. Atenção! Todo o processo de inscrição precisa ser feito em até 24h após o pagamento da taxa de reserva.'
  },
  {
    id: 18,
    title: 'Uma experiência para sair da sala de aula e ver o Direito em funcionamento',
    category: 'Encerramento & Contatos',
    type: 'team_contact',
    content: [
      'Brasília é um dos poucos lugares do país em que estudantes de Direito podem, em poucos dias, observar de perto instituições centrais da vida pública brasileira e compreender melhor como temas debatidos na graduação ganham forma concreta na realidade institucional do país.',
      'Mais do que visitar espaços emblemáticos, esta viagem propõe uma experiência acadêmica intensa, organizada e significativa, construída para aproximar formação universitária, vivência coletiva e contato direto com o funcionamento da República.'
    ],
    notes: 'Contatos da equipe da Universo Lúdico e Pati Tour à disposição para tirar dúvidas na reunião.'
  }
];
