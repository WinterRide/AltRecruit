import ListingCard from "@/components/ListingCard";

export default async function Index() {
  return (
    // ! cuma utk testing, apus aj
    <div>
      <h1>WOOO</h1>
      <ListingCard
        company="Company Name"
        jobdesc="Job Description"
        criteria={["Criteria 1", "Criteria 2", "Criteria 3", "asd"]}
        salary={1000}
        workStatus="Part time"
        requirement={["Requirement 1", "Requirement 2", "Requirement 3"]}
      />
    </div>
  );
}
