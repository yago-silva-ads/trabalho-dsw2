// Valores vindos do env.js (gerado pelo container a partir da variavel API_URL).
// O teste de "typeof window" evita quebrar na renderizacao do lado do servidor (SSR),
// onde o objeto window nao existe.
const env = typeof window !== 'undefined' ? ((window as any).env ?? {}) : {};

export const API_URL: string = env.API_URL || 'http://localhost:8080';
