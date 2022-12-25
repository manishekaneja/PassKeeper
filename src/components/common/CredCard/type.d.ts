type CredCardFrontProps = {
  title?: string;
  onUpdate: (title: string, type: 'title') => void;
};
type CredCardBackProps = {
  username?: string;
  password?: string;
  onUpdate: (title: string, type: 'username' | 'password') => void;
};
