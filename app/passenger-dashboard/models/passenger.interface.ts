export interface Passenger {
  id: number;
  fullname: string;
  checkedin: boolean;
  checkindate?: number;
  children?: Child[];
}

export interface Child {
  name: string;
  age: number;
}
