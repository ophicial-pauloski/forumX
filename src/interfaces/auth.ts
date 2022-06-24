

export interface AuthInterface {
  isError: boolean;
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    password: string;
    token: string;
  } | null;
}