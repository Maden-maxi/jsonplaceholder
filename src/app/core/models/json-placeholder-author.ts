export class JsonPlaceholderAuthor {
  id: number;
  name: string;
  username: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    get: {
      lat: number,
      lng: number
    }
  };
  phone: string;
  website: string;
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}
