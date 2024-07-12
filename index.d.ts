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
