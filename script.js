function suggestCareer() {
  const subject = document.getElementById("subject").value;
  const interest = document.getElementById("interest").value;
  const style = document.getElementById("style").value;
  const output = document.getElementById("careerOutput");

  let suggestion = "";

  if (subject === "science" && interest === "research")
    suggestion = "You might enjoy becoming a Scientist or Researcher!";
  else if (subject === "math" && interest === "business")
    suggestion = "You could be an excellent Data Analyst or Financial Planner!";
  else if (subject === "arts" && interest === "creative")
    suggestion = "You may thrive as a Graphic Designer, Writer, or Artist!";
  else if (subject === "commerce" && interest === "business")
    suggestion = "You could be a successful Entrepreneur or Marketing Executive!";
  else if (subject === "science" && interest === "technology")
    suggestion = "Try a career in Software Engineering or AI Development!";
  else
    suggestion = "Explore multiple career paths — you have a wide range of interests!";

  output.textContent = suggestion;
}
