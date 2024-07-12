type Job = {
  id: string;
  company: string;
  position: string;
  location: string;
  shift: string;
  salary: number;
  description: string;
  criteria: string[];
  workStatus: string;
  requirement: string[];
};

type Test = {
  details: string[];
  schedule: TestSchedule[];
};

type TestSchedule = {
  name: string;
  date: string;
  duration: string;
};

type User = {
  name: string;
  email: string;
  phone?: string;
  role: string;
  details?: UserDetails | RecruiterDetails;
};

type UserDetails = {
  city?: string;
  country?: string;
  domicile?: string;
  avatar?: string;
};

type RecruiterDetails = {
  location?: string;
  website?: string;
};

type Company = {
  name?
}
