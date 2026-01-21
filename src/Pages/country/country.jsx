import { useState, useEffect, useTransition } from "react";
import { getCountryData } from "../../api/postApi";
import Loader from "../../components/UI/loader";
import CountryCard from "../../components/Applayout/CountryCard";
import SearchFilter from "../../components/UI/SearchFilter";

function Country() {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  //here is main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default Country; // ✅ important!
