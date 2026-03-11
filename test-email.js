const testForms = async () => {
  console.log("Testing /api/contact...");
  try {
    const res1 = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "AI Assistant Test",
        email: "test@example.com",
        phone: "1234567890",
        message: "This is a test message from the automated testing script."
      })
    });
    const data1 = await res1.json();
    console.log("Contact API Response:", res1.status, data1);
  } catch (err) {
    console.error("Contact API Error:", err);
  }

  console.log("\nTesting /api/careers...");
  try {
    const res2 = await fetch("http://localhost:3000/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "AI",
        lastName: "Tester",
        email: "applicant@example.com",
        mobile: "0987654321",
        qualification: "B.Com",
        subject: "Test Job Application",
      })
    });
    const data2 = await res2.json();
    console.log("Careers API Response:", res2.status, data2);
  } catch (err) {
    console.error("Careers API Error:", err);
  }
};

testForms();
