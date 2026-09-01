import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  Container,
  GitBranch,
  Server,
  Shield,
  Terminal,
  Gauge,
  Network,
  Boxes,
  Cpu,
  Lock,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Alex Carter',
  role: 'DevOps Engineer',
  tagline: 'Building resilient, scalable infrastructure that ships faster.',
  location: 'Austin, TX',
  email: 'alex.carter.dev@gmail.com',
  github: 'https://github.com/alexcarter',
  linkedin: 'https://linkedin.com/in/alexcarter',
  resume: '#',
  bio: 'I am a DevOps engineer with 8+ years of experience architecting cloud-native platforms, automating delivery pipelines, and running production systems at scale. I bridge development and operations — reducing deploy times from hours to seconds, engineering observability into every layer, and making infrastructure reproducible, versioned, and boring.',
};

export const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '200+', label: 'Pipelines Built' },
  { value: '99.99%', label: 'Uptime Maintained' },
  { value: '50M+', label: 'Daily Requests' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  overall: number;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'text-cyan-400',
    accent: '#22d3ee',
    overall: 88,
    skills: [
      { name: 'AWS', level: 95 },
      { name: 'Google Cloud', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'DigitalOcean', level: 90 },
    ],
  },
  {
    title: 'Containerization',
    icon: Container,
    color: 'text-accent-400',
    accent: '#25c89f',
    overall: 89,
    skills: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 92 },
      { name: 'Helm', level: 88 },
      { name: 'Podman', level: 82 },
    ],
  },
  {
    title: 'CI/CD & Automation',
    icon: GitBranch,
    color: 'text-amber-400',
    accent: '#fbbf24',
    overall: 90,
    skills: [
      { name: 'GitHub Actions', level: 95 },
      { name: 'GitLab CI', level: 90 },
      { name: 'Jenkins', level: 88 },
      { name: 'ArgoCD', level: 85 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: Boxes,
    color: 'text-cyan-400',
    accent: '#22d3ee',
    overall: 88,
    skills: [
      { name: 'Terraform', level: 95 },
      { name: 'Ansible', level: 90 },
      { name: 'Pulumi', level: 80 },
      { name: 'CloudFormation', level: 85 },
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Gauge,
    color: 'text-accent-400',
    accent: '#25c89f',
    overall: 89,
    skills: [
      { name: 'Prometheus', level: 92 },
      { name: 'Grafana', level: 90 },
      { name: 'Datadog', level: 88 },
      { name: 'ELK Stack', level: 85 },
    ],
  },
  {
    title: 'Security & Networking',
    icon: Shield,
    color: 'text-amber-400',
    accent: '#fbbf24',
    overall: 84,
    skills: [
      { name: 'Vault', level: 88 },
      { name: 'Istio', level: 82 },
      { name: 'OPA / Gatekeeper', level: 85 },
      { name: 'Terraform Cloud', level: 80 },
    ],
  },
];

export type TechTool = {
  name: string;
  category: string;
  level: 'expert' | 'advanced' | 'proficient';
};

export const techStack: TechTool[] = [
  { name: 'Kubernetes', category: 'Containers', level: 'expert' },
  { name: 'Docker', category: 'Containers', level: 'expert' },
  { name: 'Terraform', category: 'IaC', level: 'expert' },
  { name: 'AWS', category: 'Cloud', level: 'expert' },
  { name: 'GitHub Actions', category: 'CI/CD', level: 'expert' },
  { name: 'Helm', category: 'Containers', level: 'advanced' },
  { name: 'ArgoCD', category: 'CI/CD', level: 'advanced' },
  { name: 'Ansible', category: 'IaC', level: 'advanced' },
  { name: 'Prometheus', category: 'Observability', level: 'advanced' },
  { name: 'Grafana', category: 'Observability', level: 'advanced' },
  { name: 'Vault', category: 'Security', level: 'advanced' },
  { name: 'GitLab CI', category: 'CI/CD', level: 'advanced' },
  { name: 'Jenkins', category: 'CI/CD', level: 'advanced' },
  { name: 'Pulumi', category: 'IaC', level: 'proficient' },
  { name: 'Istio', category: 'Networking', level: 'proficient' },
  { name: 'Datadog', category: 'Observability', level: 'proficient' },
  { name: 'ELK Stack', category: 'Observability', level: 'proficient' },
  { name: 'OPA', category: 'Security', level: 'proficient' },
  { name: 'Backstage', category: 'Platform', level: 'proficient' },
  { name: 'Karpenter', category: 'Cloud', level: 'proficient' },
];

export const dashboardMetrics = [
  { label: 'Cloud Platforms', value: 4, suffix: '', icon: Cloud, accent: '#22d3ee' },
  { label: 'CI/CD Tools', value: 6, suffix: '', icon: GitBranch, accent: '#fbbf24' },
  { label: 'Avg. Proficiency', value: 88, suffix: '%', icon: Gauge, accent: '#25c89f' },
  { label: 'Total Tools', value: 20, suffix: '+', icon: Boxes, accent: '#22d3ee' },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Nimbus Technologies',
    period: '2022 — Present',
    location: 'Austin, TX',
    description: 'Leading platform engineering for a multi-tenant SaaS serving 50M+ daily requests across 4 regions.',
    achievements: [
      'Reduced deployment time from 45 minutes to under 2 minutes by migrating to GitOps with ArgoCD and Helm.',
      'Designed a multi-cluster Kubernetes architecture across 4 AWS regions with automated failover, achieving 99.99% uptime.',
      'Built a self-service developer platform with Backstage, reducing new-service onboarding from 2 weeks to 2 hours.',
      'Implemented cost optimization with Karpenter and spot instances, cutting cloud spend by 38% ($1.2M annually).',
    ],
    tech: ['AWS EKS', 'ArgoCD', 'Terraform', 'Helm', 'Backstage', 'Karpenter'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Streamline Labs',
    period: '2019 — 2022',
    location: 'Remote',
    description: 'Owned CI/CD modernization and cloud migration for a fintech platform processing $2B in transactions.',
    achievements: [
      'Migrated 40+ services from monolithic EC2 to containerized EKS, reducing infrastructure costs by 45%.',
      'Built end-to-end CI/CD with GitHub Actions and Terraform, enabling 50+ deploys per day with zero-downtime.',
      'Implemented comprehensive observability stack with Prometheus, Grafana, and Loki, reducing MTTR by 70%.',
      'Designed a secrets management strategy with HashiCorp Vault, passing SOC 2 Type II audit on first attempt.',
    ],
    tech: ['AWS', 'Kubernetes', 'GitHub Actions', 'Vault', 'Prometheus', 'Terraform'],
  },
  {
    role: 'Site Reliability Engineer',
    company: 'DataForge Systems',
    period: '2017 — 2019',
    location: 'Dallas, TX',
    description: 'Managed on-call rotation and reliability for a high-traffic data analytics platform.',
    achievements: [
      'Reduced P1 incidents by 60% through proactive monitoring, runbook automation, and chaos engineering.',
      'Built an Ansible-based configuration management system covering 300+ servers.',
      'Implemented blue-green deployments and canary releases, achieving zero-downtime updates.',
      'Automated disaster recovery testing, achieving an RTO of 15 minutes and RPO of 1 minute.',
    ],
    tech: ['Ansible', 'Jenkins', 'AWS', 'Docker', 'Nagios', 'Bash'],
  },
];

export type Project = {
  name: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  highlights: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: 'K8s Auto-Healer',
    description: 'A Kubernetes operator that automatically detects and remediates unhealthy pods using policy-driven runbooks.',
    icon: Boxes,
    tags: ['Go', 'Kubernetes Operator SDK', 'CRD', 'Prometheus'],
    highlights: ['Auto-remediation of 15+ failure modes', 'Pluggable policy engine with OPA', 'Reduced manual intervention by 80%'],
    link: '#',
  },
  {
    name: 'TerraDrift',
    description: 'A CLI tool that detects infrastructure drift between Terraform state and live cloud resources, with Slack alerts.',
    icon: Network,
    tags: ['Go', 'Terraform', 'AWS SDK', 'Slack API'],
    highlights: ['Supports AWS, GCP, and Azure', 'Scheduled drift reports', 'Open-source — 2.3k GitHub stars'],
    link: '#',
  },
  {
    name: 'PipelineForge',
    description: 'A reusable GitHub Actions workflow library with 40+ composable actions for build, test, scan, and deploy.',
    icon: Workflow,
    tags: ['GitHub Actions', 'TypeScript', 'Docker', 'Reusable Workflows'],
    highlights: ['Adopted by 12 engineering teams', 'Standardized security scanning', 'Reduced pipeline setup from days to minutes'],
    link: '#',
  },
  {
    name: 'ObservaKit',
    description: 'A drop-in Helm chart that deploys a full observability stack — Prometheus, Grafana, Loki, and Tempo — pre-wired.',
    icon: Gauge,
    tags: ['Helm', 'Prometheus', 'Grafana', 'Loki', 'Tempo'],
    highlights: ['One-command install', 'Pre-built dashboards for 20+ services', 'Auto-discovery with annotations'],
    link: '#',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2023', icon: Boxes },
  { name: 'AWS Certified DevOps Engineer — Professional', issuer: 'Amazon', year: '2022', icon: Cloud },
  { name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'CNCF', year: '2021', icon: Cpu },
  { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2021', icon: Boxes },
  { name: 'AWS Certified Solutions Architect — Associate', issuer: 'Amazon', year: '2020', icon: Server },
  { name: 'Certified Security Engineer', issuer: 'CNCF', year: '2023', icon: Lock },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const terminalLines = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output', text: 'alex_carter — devops engineer' },
  { type: 'prompt', text: 'cat skills.txt' },
  { type: 'output', text: 'kubernetes · terraform · aws · ci/cd · observability' },
  { type: 'prompt', text: 'kubectl get experience' },
  { type: 'output', text: '8+ years · 200+ pipelines · 99.99% uptime' },
  { type: 'prompt', text: './deploy --env=production' },
  { type: 'output', text: 'Deployment successful ✓' },
];
