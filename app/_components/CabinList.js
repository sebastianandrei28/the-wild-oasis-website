import CabinCard from "@/app/_components/CabinCard";
import { getCabin } from "../_lib/data-service";

async function CabinList() {
  try {
    const cabins = await getCabin();
  } catch (error) {
    console.error("Error fetching cabins:", error);
    // Folosește date de rezervă pentru build static
    cabins = [];
  }

  if (!cabins.length) return null;

  // Verifică dacă cabins este null sau undefined
  if (!cabins || cabins.length === 0) {
    return (
      <p className="text-lg text-primary-200">
        No cabins available at the moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinList;
