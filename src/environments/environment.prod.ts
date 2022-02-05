export const environment = {
  production: true,
  api: {
    baseUrl: "http://localhost:8080",
    medication: {
      endpoint: "medication",
      getAllMedications: "getAllMedications",
      count: "count"
    },
    cookbook: {
      endpoint: "cookbook",
      count: "count"
    }
  }
};
