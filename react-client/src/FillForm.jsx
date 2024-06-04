import React, { useState } from "react";
import { useCookies } from "react-cookie";

const FillForm = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies("User");
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState(0);
  const [Country, setCountry] = useState(0);
  const [Occupation, setOccupation] = useState(0);
  const [FamilyHistory, setFamilyHistory] = useState(0);
  const [DaysIndoors, setDaysIndoors] = useState(0);
  const [GrowingStress, setGrowingStress] = useState(0);
  const [ChangesHabits, setChangesHabits] = useState(0);
  const [MentalHealthHistory, setMentalHealthHistory] = useState(0);
  const [MoodSwings, setMoodSwings] = useState(0);
  const [CopingStruggles, setCopingStruggles] = useState(0);
  const [WorkInterest, setWorkInterest] = useState(0);
  const [SocialWeakness, setSocialWeakness] = useState(0);
  const [MentalHealthInterview, setMentalHealthInterview] = useState(0);
  const [CareOptions, setCareOptions] = useState(0);

  const countries = [
    "United States",
    "Poland",
    "Australia",
    "Canada",
    "United Kingdom",
    "South Africa",
    "Sweden",
    "New Zealand",
    "Netherlands",
    "India",
    "Belgium",
    "Ireland",
    "France",
    "Portugal",
    "Brazil",
    "Costa Rica",
    "Russia",
    "Germany",
    "Switzerland",
    "Finland",
    "Israel",
    "Italy",
    "Bosnia and Herzegovina",
    "Singapore",
    "Nigeria",
    "Croatia",
    "Thailand",
    "Denmark",
    "Mexico",
    "Greece",
    "Moldova",
    "Colombia",
    "Georgia",
    "Czech Republic",
    "Philippines",
  ];
  const occupations = [
    "Corporate",
    "Student",
    "Business",
    "Housewife",
    "Others",
  ];
  const familyHistoryOptions = ["No", "Yes"];
  const daysIndoorOptions = [
    "1-14 days",
    "Go out Every day",
    "More than 2 months",
    "15-30 days",
    "31-60 days",
  ];
  const growingStressOptions = ["Yes", "No", "Maybe"];
  const changesHabitsOptions = ["No", "Yes", "Maybe"];
  const mentalHealthHistoryOptions = ["Yes", "No", "Maybe"];
  const moodSwingsOptions = ["High", "Medium", "Low"];
  const copingStrugglesOptions = ["No", "Yes"];
  const workInterestOptions = ["No", "Maybe", "Yes"];
  const socialWeaknessOptions = ["Yes", "No", "Maybe"];
  const mentalHealthInterviewOptions = ["No", "Maybe", "Yes"];
  const careOptions = ["Not sure", "No", "Yes"];

  // Sort
  countries.sort();
  occupations.sort();
  familyHistoryOptions.sort();
  daysIndoorOptions.sort();
  growingStressOptions.sort();
  changesHabitsOptions.sort();
  mentalHealthHistoryOptions.sort();
  moodSwingsOptions.sort();
  copingStrugglesOptions.sort();
  workInterestOptions.sort();
  socialWeaknessOptions.sort();
  mentalHealthHistoryOptions.sort();
  careOptions.sort();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = [
      Gender,
      Number(Country),
      Number(Occupation),
      Number(FamilyHistory),
      Number(DaysIndoors),
      Number(GrowingStress),
      Number(ChangesHabits),
      Number(MentalHealthHistory),
      Number(MoodSwings),
      Number(CopingStruggles),
      Number(WorkInterest),
      Number(SocialWeakness),
      Number(MentalHealthInterview),
      Number(CareOptions),
    ];
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData.prediction[0]);
      props.setPrediction(jsonData.prediction[0]);
      setCookie("username", Name);
      props.setShowResults(true);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  }

  return (
    <div className="fill-form">
      <div className="container-white">
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          <center>Know Yourself Better</center>
        </span>

        <form>
          <br />

          <label className="query" htmlFor="name">
            Name &nbsp;{" "}
          </label>
          <input
            type="text"
            placeholder="Your full name"
            name="name"
            value={Name}
            style={{ width: "175px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          {/* Gender Input */}
          <label className="query" htmlFor="gender">
            Gender &nbsp;{" "}
          </label>
          <select
            id="gender"
            name="gender"
            value={Gender}
            onChange={(e) => {
              setGender(e.target.value);
              console.log(Gender);
              console.log(Gender);
            }}
          >
            <option value={0}>Female</option>
            <option value={1}>Male</option>
          </select>
          {/* Gender Input */}
          <br />
          <br />
          {/* Country */}
          <label className="query" htmlFor="country">
            Country &nbsp;{" "}
          </label>
          <select
            id="country"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
              console.log(e.target.value);
            }}
          >
            {countries.map((country, index) => (
              <option value={index} key={index}>
                {country}
              </option>
            ))}
          </select>
          {/* Country End*/}
          <br />
          <br />
          {/* Occupation */}
          <label className="query" htmlFor="occupation">
            Occupation &nbsp;{" "}
          </label>
          <select
            id="occupation"
            name="occupation"
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          >
            {occupations.map((occupation, index) => (
              <option value={index} key={index}>
                {occupation}
              </option>
            ))}
          </select>
          {/* Occupation */}
          <br />
          <br />
          {/*Family History */}
          <div>
            <label className="query">Family History:</label>
            <br />
            {familyHistoryOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`familyHistory-${option}`}
                  name="familyHistory"
                  value={index}
                  onChange={(e) => {
                    setFamilyHistory(e.target.value);
                  }}
                />
                <label htmlFor={`familyHistory-${option}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* Days Indoor */}
          <br />
          <div>
            <label className="query">Days Indoors &nbsp;</label>

            <select
              id="daysIndoor"
              name="daysIndoor"
              onChange={(e) => {
                setDaysIndoors(e.target.value);
              }}
            >
              {daysIndoorOptions.map((option, index) => (
                <option key={index} value={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* {growing stress} */}
          <br />
          <div>
            <label className="query">Growing Stress:</label>
            <br />
            {growingStressOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`growingStress-${index}`}
                  name="growingStress"
                  value={index}
                  onChange={(e) => {
                    setGrowingStress(e.target.value);
                  }}
                />
                <label htmlFor={`growingStress-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* {Change HAbits} */}
          <br />
          <div>
            <label className="query">Changes Habits:</label>
            <br />
            {changesHabitsOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`changesHabits-${index}`}
                  name="changesHabits"
                  value={index}
                  onChange={(e) => {
                    setChangesHabits(e.target.value);
                  }}
                />
                <label htmlFor={`changesHabits-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* mental health history */}
          <br />
          <div>
            <label className="query">Mental Health History:</label>
            <br />
            {mentalHealthHistoryOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`mentalHealthHistory-${index}`}
                  name="mentalHealthHistory"
                  value={index}
                  onChange={(e) => {
                    setMentalHealthHistory(e.target.value);
                  }}
                />
                <label htmlFor={`mentalHealthHistory-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* mood swings  */}
          <br />
          <div>
            <label className="query">Mood Swings:</label>
            <br />
            {moodSwingsOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`moodSwings-${index}`}
                  name="moodSwings"
                  value={index}
                  onChange={(e) => {
                    setMoodSwings(e.target.value);
                  }}
                />
                <label htmlFor={`moodSwings-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* Coping Struggles */}
          <br />
          <div>
            <label className="query">Coping Struggles:</label>
            <br />
            {copingStrugglesOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`copingStruggles-${index}`}
                  name="copingStruggles"
                  value={index}
                  onChange={(e) => {
                    setCopingStruggles(e.target.value);
                  }}
                />
                <label htmlFor={`copingStruggles-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* Work Interest */}
          <br />
          <div>
            <label className="query">Work Interest:</label>
            <br />
            {workInterestOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`workInterest-${index}`}
                  name="workInterest"
                  value={index}
                  onChange={(e) => {
                    setWorkInterest(e.target.value);
                  }}
                />
                <label htmlFor={`workInterest-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* Social weakness */}
          <br />
          <div>
            <label className="query">Social Weakness:</label>
            <br />
            {socialWeaknessOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`socialWeakness-${index}`}
                  name="socialWeakness"
                  value={index}
                  onChange={(e) => {
                    setSocialWeakness(e.target.value);
                  }}
                />
                <label htmlFor={`socialWeakness-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {/* Mental health interview */}
          <br />
          <div>
            <label className="query">Mental Health Interview:</label>
            <br />
            {mentalHealthInterviewOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`mentalHealthInterview-${index}`}
                  name="mentalHealthInterview"
                  value={index}
                  onChange={(e) => {
                    setMentalHealthInterview(e.target.value);
                  }}
                />
                <label htmlFor={`mentalHealthInterview-${index}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          {/*Care Options  */}
          <br />
          <div>
            <label className="query">Care Options:</label>
            <br />
            {careOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`careOptions-${index}`}
                  name="careOptions"
                  value={index}
                  onChange={(e) => {
                    setCareOptions(e.target.value);
                  }}
                />
                <label htmlFor={`careOptions-${index}`}>{option}</label>
              </div>
            ))}
          </div>

          <br />
          <center>
            <input
              className="btn btn-outline-primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            />
          </center>
        </form>
      </div>
    </div>
  );
};

export default FillForm;
