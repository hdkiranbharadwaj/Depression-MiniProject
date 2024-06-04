import React, { useState } from "react";
import FillForm from "./FillForm";
import { useCookies } from "react-cookie";

const Pred = () => {
  const [prediction, setPrediction] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const Name = cookies.username.split(" ")[0];
  return (
    <div>
      {!showResults && (
        <FillForm
          setShowResults={setShowResults}
          setPrediction={setPrediction}
        ></FillForm>
      )}
      {showResults &&
        (prediction === 1 ? (
          <div className="fill-form">
            <div className="container-white">
              <h1 style={{ textAlign: "left" }}>
                Dear
                <span style={{ color: "purple" }}> {Name}</span>, You Show
                Indications Of{" "}
                <span style={{ color: "orange" }}>Depression,</span> but we know
                you will do great !
              </h1>

              <p style={{ textAlign: "justify" }}>
                If you're reading this, it means you've taken an important step
                towards understanding your mental health. Feeling depressed can
                be overwhelming, but remember, you're not alone in this journey.
                Acknowledging your feelings is the first step towards healing.
              </p>
              <br />
              <h2>Guidelines for Coping:</h2>
              <ol style={{ textAlign: "justify" }}>
                <li>
                  <strong>Reach Out:</strong> Don't hesitate to talk to someone
                  you trust about how you're feeling. Whether it's a friend,
                  family member, or a professional, opening up can provide
                  immense relief.
                </li>
                <li>
                  <strong>Self-Care:</strong> Take small steps to take care of
                  yourself every day. Whether it's going for a walk, practicing
                  mindfulness, or indulging in a hobby, prioritize activities
                  that bring you joy and relaxation.
                </li>
                <li>
                  <strong>Healthy Habits:</strong> Maintain a balanced routine
                  with adequate sleep, nutritious meals, and regular exercise.
                  Physical health plays a crucial role in improving mood and
                  overall well-being.
                </li>
                <li>
                  <strong>Seek Professional Help:</strong> Consider speaking to
                  a therapist or counselor who can provide guidance and support
                  tailored to your needs. Therapy can offer valuable insights
                  and coping strategies to navigate through difficult times.
                </li>
                <li>
                  <strong>Stay Positive:</strong> While it may seem challenging
                  now, remember that things can and will get better. Focus on
                  the small victories and celebrate your progress along the way.
                </li>
              </ol>
              <p style={{ textAlign: "justify" }}>
                You're stronger than you think, and with the right support and
                mindset, you can overcome this. Keep moving forward, one step at
                a time.
              </p>
              <p>Take care,</p>
              <p>SJCE Dev Team</p>
            </div>
          </div>
        ) : (
          <div className="fill-form">
            <div className="container-white">
              <h1 style={{ textAlign: "left" }}>
                Dear
                <span style={{ color: "purple" }}> {Name}</span>, You{" "}
                <span style={{ color: "lime" }}>Don't</span> Show Any
                Indications Of{" "}
                <span style={{ color: "lime" }}>Depression,</span> Kudos buddy
                you are doing great !
              </h1>
              <p>
                It's great to see you prioritizing your mental health! Here are
                some wellness tips to help you maintain a positive mindset and
                overall well-being:
              </p>
              <h1>Wellness Tips:</h1>
              <ul>
                <li>
                  <strong>Stay Active:</strong> Incorporate regular physical
                  activity into your routine, whether it's going for a walk,
                  practicing yoga, or dancing to your favorite music.
                </li>
                <li>
                  <strong>Practice Mindfulness:</strong> Take time to relax and
                  focus on the present moment. Mindfulness techniques such as
                  deep breathing exercises and meditation can help reduce stress
                  and promote mental clarity.
                </li>
                <li>
                  <strong>Get Adequate Sleep:</strong> Prioritize quality sleep
                  by establishing a consistent sleep schedule and creating a
                  relaxing bedtime routine. Aim for 7-9 hours of sleep per night
                  for optimal well-being.
                </li>
                <li>
                  <strong>Eat Nutritious Foods:</strong> Fuel your body with a
                  balanced diet rich in fruits, vegetables, whole grains, lean
                  proteins, and healthy fats. Stay hydrated by drinking plenty
                  of water throughout the day.
                </li>
                <li>
                  <strong>Cultivate Social Connections:</strong> Maintain
                  meaningful relationships with friends and family members.
                  Schedule regular time for social activities and engage in open
                  communication with your loved ones.
                </li>
                <li>
                  <strong>Practice Gratitude:</strong> Take a moment each day to
                  reflect on things you're grateful for. Cultivating an attitude
                  of gratitude can promote a positive outlook and enhance
                  overall well-being.
                </li>
              </ul>
              <p>
                Remember, prioritizing self-care is essential for maintaining
                physical, mental, and emotional wellness. Incorporate these tips
                into your daily life to nurture a healthier and happier you.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pred;
