// Note: auth could be changed so we just save whatever token
// it requires into env since I can't be asked to do all this

export const config = {
  fireflyApiUrl: process.env.NEXT_PUBLIC_FIREFLY_API_URL,
  fireflyAmeenPassword: process.env.NEXT_PUBLIC_AMEEN_PASSWORD,
  fireflyAmeenUser: process.env.NEXT_PUBLIC_AMEEN_USER,
};
