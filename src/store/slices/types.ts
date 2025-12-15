type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  address: Address;
};
