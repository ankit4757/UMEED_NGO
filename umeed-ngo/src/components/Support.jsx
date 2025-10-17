import React from "react";
import SliderImage2 from "../components/SliderImage2";

export default function Support() {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", fontFamily: "'Open Sans', Arial, sans-serif" }}>
      
      {/* Slider on Top */}
      <SliderImage2 />

      {/* Header */}
      <header style={{
        width: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 44px 0 44px",
        boxSizing: "border-box",
      }}>
        <img src="/smile-logo.png" alt="Smile Foundation Logo" style={{ height: "48px" }} />
        <button
          style={{
            background: "#8bc34a",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: 700,
            fontSize: "16px",
            padding: "9px 26px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.07)",
            cursor: "pointer"
          }}
        >DONATE NOW</button>
      </header>

      {/* Banner */}
      <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          src="/banner-classroom.jpg"
          alt="Outdoor classroom"
          style={{
            width: "100%",
            maxHeight: "290px",
            objectFit: "cover",
            display: "block"
          }}
        />
      </section>

      {/* Donation & Info Row */}
      <section style={{
        maxWidth: "1120px",
        margin: "0 auto",
        display: "flex",
        alignItems: "flex-start",
        padding: "38px 0 16px 0",
        gap: "32px"
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 900,
            textAlign: "left",
            letterSpacing: ".07em",
            fontSize: "1.7rem",
            marginBottom: "24px"
          }}>
            GIVE EVERY CHILD A CHANCE TO LEARN AND DREAM
          </h1>
          <p style={infoStyle}>
            Education is every child's right — it's the foundation for a secure, dignified, and fulfilling life. But for countless children in India, this simple dream remains out of reach. Poverty, lack of awareness, and social inequalities often force children out of classrooms and into child labour, early marriages, or other unsafe situations.
          </p>
          <p style={infoStyle}>
            At Smile Foundation, we believe that no child should have to choose between survival and school. Through our <b>‘Shiksha Na Ruke’</b> initiative, we are making sure that learning never stops, even in the toughest of times. Currently, we are empowering more than 160,000 children across 27 states, helping them step confidently into a future full of hope and opportunities.
          </p>
          <p style={infoStyle}>
            Our education centres are much more than classrooms. They are safe havens where children discover their potential, build friendships, learn important life skills, and develop into healthy and responsible citizens. We also engage with parents, teachers, and communities to create an environment where every child is encouraged to go to school and stay in school.
          </p>
          <p style={infoStyle}>
            These children are resilient dreamers — they continue to study and grow despite hardships that no child should ever face. But they can't do it alone. Your support can make all the difference in keeping them in school and away from the dangers of child labour and exploitation.
          </p>
          <p style={infoStyle}>
            Join us in giving every child the right to learn, to play, and to dream big. Together, let's build a nation where no child is left behind.
          </p>
        </div>

        {/* Donation Form */}
        <aside style={{
          flex: "0 1 350px",
          border: "2px solid #8bc34a",
          borderRadius: "7px",
          background: "#fff",
          boxSizing: "border-box",
          padding: "25px 24px",
          minWidth: "350px",
        }}>
          <h3 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            fontSize: "1.3rem",
            marginBottom: "10px"
          }}>
            SUPPORT THE CAUSE
          </h3>
          <p style={{ fontWeight: 500, textAlign: "center", fontSize: "1rem" }}>MAKE A DIFFERENCE</p>
          <form>
            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 14px 0", gap: "8px" }}>
              <label><input type="radio" name="amount" value="1500" /> ₹1500</label>
              <label><input type="radio" name="amount" value="3000" /> ₹3000</label>
              <label><input type="radio" name="amount" value="6000" /> ₹6000</label>
              <label><input type="radio" name="amount" value="12000" /> ₹12000</label>
            </div>
            <div style={{ textAlign: "center", fontWeight: 500, fontSize: ".97rem", marginBottom: "11px" }}>
              YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 3 MONTHS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <input type="text" placeholder="Other Amount" style={inputStyle}/>
              <input type="text" placeholder="Enter Full Name" style={inputStyle}/>
              <input type="email" placeholder="Enter Email ID" style={inputStyle}/>
              <input type="text" placeholder="Enter Mobile No" style={inputStyle}/>
              <input type="text" placeholder="DOB" style={inputStyle}/>
              <input type="text" placeholder="Pan No" style={inputStyle}/>
              <input type="text" placeholder="India" style={inputStyle}/>
              <input type="text" placeholder="Select State" style={inputStyle}/>
              <input type="text" placeholder="City" style={inputStyle}/>
              <input type="text" placeholder="Address" style={inputStyle}/>
              <input type="text" placeholder="Pincode" style={inputStyle}/>
            </div>
            <div style={{ fontSize: ".88rem", color: "#212121", marginBottom: "12px", marginTop: "8px", lineHeight: "1.56" }}>
              *YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS SMILE FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION*<br />
              PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210
            </div>
            <label style={{ display: "flex", alignItems: "center", fontSize: ".98rem", marginBottom: "16px", color: "#666" }}>
              <input type="checkbox" style={{ marginRight: "7px" }}/>
              You agree that Smile Foundation can reach out to you through Whatsapp/email/SMS/Phone to provide information of your donation, campaigns, 80G receipt etc.
            </label>
            <button type="submit"
              style={{
                background: "#8bc34a",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 34px",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                display: "block",
                margin: "0 auto"
              }}>Submit</button>
          </form>
        </aside>
      </section>

      {/* What Will Your Donation Support */}
      <section style={{ background: "#8bc34a", width: "100%", padding: "38px 0" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", textAlign: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 900, fontSize: "1.32rem", letterSpacing: ".03em", marginBottom: "32px" }}>
            WHAT WILL YOUR DONATION SUPPORT?
          </h2>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            {[
              ["Primary and Secondary education for children"],
              ["Regular health check-ups & nutrition support"],
              ["Training and capacity building of teachers"],
              ["Vocational Education & Skill Training"],
              ["Music, life skills development, socio-emotional well being"],
              ["STEM learning programmes with government schools"],
              ["Digital literacy and learning for children"],
              ["Merit-based scholarships for children's holistic development"]
            ].map((item, idx) => (
              <div key={idx} style={{
                background: "#fff",
                padding: "18px 22px",
                borderRadius: "8px",
                flex: "0 1 200px",
                boxShadow: "0 1px 7px rgba(0,0,0,0.09)",
                marginBottom: "20px",
                minHeight: "65px",
                display: "flex",
                alignItems: "center"
              }}>
                {/* Replace with your own icon */}
                <span role="img" aria-label="icon" style={{ fontSize: "2.2rem", marginRight: "18px" }}>🎒</span>
                <span style={{ fontWeight: 700, fontSize: ".98rem", color: "#333" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ width: "100%", padding: "32px 0", background: "#f7f7f7" }}>
        <div style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{ color: "#388e3c", fontWeight: 900, fontSize: "1.38rem", marginBottom: "9px" }}>1,60,000</div>
            <div style={{ fontSize: "1rem", color: "#333", fontWeight: 500, marginBottom: "16px" }}>Children Educated Last Year</div>
            <div style={{ color: "#8bc34a", fontWeight: 700, marginBottom: "7px", fontSize: ".96rem" }}>735 Mission Education Centres</div>
            <div style={{ color: "#8bc34a", fontWeight: 700, fontSize: ".96rem" }}>27 States Across India</div>
          </div>
          <img src="/india-map.png" alt="India Map" style={{ height: "110px", marginLeft: "30px" }} />
        </div>
      </section>

      {/* Stories in Motion (YouTube Videos) */}
      <section>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          textAlign: "center",
          fontWeight: 900,
          fontSize: "1.2rem",
          margin: "36px 0 22px 0"
        }}>
          STORIES IN MOTION
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "38px",
          flexWrap: "wrap",
          marginBottom: "36px"
        }}>
          <iframe
            width="360"
            height="212"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Story Video 1"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "6px", background: "#111" }}
          />
          <iframe
            width="360"
            height="212"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Story Video 2"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "6px", background: "#111" }}
          />
        </div>
      </section>

      {/* Glimpses Section */}
      <section>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          textAlign: "center",
          fontWeight: 900,
          fontSize: "1.2rem",
          margin: "34px 0 22px 0"
        }}>
          GLIMPSES FROM OUR PROJECTS
        </h2>
        <div style={{ textAlign: "center" }}>
          <img
            src="/glimpses.jpg"
            alt="Project classroom"
            style={{
              width: "660px",
              maxWidth: "95%",
              borderRadius: "5px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              marginBottom: "34px"
            }}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: "#f1f1f1", padding: "22px 0 48px 0" }}>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          textAlign: "center",
          fontWeight: 900,
          fontSize: "1.2rem",
          margin: "16px 0 16px 0"
        }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div style={{
          maxWidth: "740px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "6px",
          boxShadow: "0 2px 24px rgba(0,0,0,0.09)",
          padding: "18px 16px"
        }}>
          {[ 
            "How does your online donation make a difference for children through the Mission Education programme?",
            "Will you receive updates about the children supported through your online donation?",
            "Can you claim tax benefits on your online donation to the Mission Education programme?",
            "How does Smile Foundation ensure your online donation is used properly?",
            "Is there any set amount required to make an online donation to support Mission Education?"
          ].map((q, idx) => (
            <div key={idx} style={{
              borderBottom: idx !== 4 ? "1px solid #eee" : "",
              padding: "15px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer"
            }}>
              <span style={{ fontWeight: 500, fontSize: "1.06rem", color: "#222" }}>{q}</span>
              <span style={{
                display: "inline-block",
                background: "#8bc34a",
                color: "#fff",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "1.5rem",
                lineHeight: "26px"
              }}>+</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Styles
const infoStyle = { margin: "13px 0", fontSize: "1.05rem", lineHeight: "1.66", color: "#212121" };
const inputStyle = {
  width: "48%",
  minWidth: "148px",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #bdbdbd",
  fontSize: ".97rem",
  outline: "none",
  boxSizing: "border-box"
};
