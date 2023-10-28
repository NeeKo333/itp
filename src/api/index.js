class Api {
  constructor() {
    this.baseUrl = "http://localhost:9090";
  }

  async registration() {
    try {
      const response = await fetch(`${this.baseUrl}/api/registration`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api();
