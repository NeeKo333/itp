class Api {
  constructor() {
    this.baseUrl = "http://localhost:9090";
  }

  async registration(body) {
    try {
      const response = await fetch(`${this.baseUrl}/api/registration`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return response.ok ? { status: true, data } : { status: false, data };
    } catch (error) {
      console.log("API error:", error);
    }
  }
}

export default new Api();
