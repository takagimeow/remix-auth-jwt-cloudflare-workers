export {};
declare global {
  const SESSION_SECRET: string;
}

export const secret = SESSION_SECRET ?? "s3cr3t";