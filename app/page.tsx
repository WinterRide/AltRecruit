import ListingCard from "@/components/ListingCard";

const testCases = [
  {
    id: 1,
    company: "Company 1",
    jobdesc: "Job Description 1",
    criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test", "test"],
    salary: 600000,
    workStatus: "Full time",
    requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
  },
  {
    id: 1,
    company: "Company 2",
    jobdesc: "Job Description 2",
    criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test"],
    salary: 2500000,
    workStatus: "Part time",
    requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
  },
  {
    id: 1,
    company: "Company 3",
    jobdesc: "Job Description 3",
    criteria: ["Criteria 1", "Criteria 2", "Criteria 3", "test", "test", "test"],
    salary: 50000,
    workStatus: "One time job",
    requirement: ["Requirement 1", "Requirement 2", "Requirement 3"],
  },
];

export default async function Index() {
  return (
    <div>
      {testCases.map((testCase, i) => (
        <ListingCard key={i} {...testCase} />
      ))}
    </div>
  );
}
