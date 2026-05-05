import * as dotenv from 'dotenv';

dotenv.config();

type Role = 'valid' | 'locked' | 'problem';

const credentialMap: Record<Role, { username: string; password: string }> = {
  valid: {
    username: process.env.VALID_USER!,
    password: process.env.VALID_PASS!,
  },
  locked: {
    username: process.env.LOCKED_USER!,
    password: process.env.LOCKED_PASS!,
  },
  problem: {
    username: process.env.PROBLEM_USER!,
    password: process.env.PROBLEM_PASS!,
  },
};

export function getCredential(role: Role) {
  return credentialMap[role];
}