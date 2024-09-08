import { Component } from '@angular/core';
import { IExperiences } from 'app/interfaces/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styles: [],
})
export class ExperiencesComponent {
  experiences: IExperiences[] = [
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Autoglass Brasil',
      period: 'Desde Setembro de 2021',
      description:
        'Desenvolvedor WEB Full Stack, com foco na manutenção, melhoria e construção de novas features para os sistemas utilizados e disponibilizados pela Autoglass Brasil.',
      stack: ['C#', '.Net', 'Angular', 'PL/SQL', 'MySQL', 'Kafka', 'GIT'],
      current: true,
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Vollare',
      period: 'De Março/2021 a Agosto/2021',
      description:
        'Desenvolvedor WEB Full Stack, com foco na manutenção, melhoria e construção de novas features para o sistema Vollare voltado ao ramo de cartórios de registro imobiliário.',
      stack: ['NodeJS', 'Vue.JS', 'MongoDB', 'GraphQL', 'GIT'],
      current: false,
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Bpago',
      period: 'De Junho/2018 a Março/2021',
      description:
        'Desenvolvedor WEB Full Stack, com foco na manutenção, melhoria e construção de novas features para o sistema Bpago, voltada ao setor financeiro (meio de pagamentos) e na construção do sistema Arpenium voltado aos cartórios de Registro Civil de Pessoas Naturais da Bahia (ARPEN-BA).',
      stack: ['PHP', 'Laravel', 'Vue.JS', 'MySQL', 'WAMP Server', 'GIT'],
      current: false,
    },
    {
      title: 'Desenvolvedor Front-End [Estágio]',
      company: 'Lupalina Calçados',
      period: 'De Maio/2017 a Junho/2018',
      description:
        'Estagiário em desenvolvimento WEB front-end, com foco na manutenção e construção de novas features do sistema Genius, consumindo API RESTful.',
      stack: ['PHP', 'Laravel', 'Vue.JS', 'MySQL', 'WAMP Server', 'GIT'],
      current: false,
    },
    {
      title: 'Desenvolvedor Web [Estágio]',
      company: 'UEFS - Universidade Estadual de Feira de Santana',
      period: 'De Maio/2015 a Maio/2017',
      description:
        'Gerenciamento de Bancos de Dados e páginas WEB (PHP + HTML + JavaScript).',
      stack: ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL', 'FileZila'],
      current: false,
    },
    {
      title: 'Operador Gráfico',
      company: 'Colégio Pitágoras',
      period: 'De Julho/2010 a Dezembro/2011',
      description: 'Toda parte de T.I. do colégio, incluindo suporte técnico.',
      stack: [],
      current: false,
    },
  ];
}
