//We can not use await without async
async function getPlanetInfo() {
  const fetchedPlanetData = async (planetName) => {
    const response = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`
    );
    return response.json();
  };

  const filteredPlanetData = async (planetName) => {
    try {
      const planetData = await fetchedPlanetData(planetName);

      return {
        Name: planetData.englishName,
        Radius: planetData.meanRadius,
        Gravity: planetData.gravity,
        Mass: planetData.mass,
      };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const planetName = "earth";
  const planetInfo = await filteredPlanetData(planetName);

  if (planetInfo) {
    console.log(`Planet information:`, planetInfo);
  } else {
    console.log(`Planet not found`);
  }
}

getPlanetInfo();
// output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\async-await.js"
// Planet information: {
//   Name: 'Earth',
//   Radius: 6371.0084,
//   Gravity: 9.8,
//   Mass: { massValue: 5.97237, massExponent: 24 }
// }
