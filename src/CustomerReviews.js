import React from "react";
import "./App.css"; // Add CSS file for styling

const Reviews = () => {
  const reviews = [
    {
      name: "Emma",
      date: "December 18, 2023",
      review:
        "Nicholas i Göteborg var väldigt informativ och tog sin tid till att förstå hur vår verksamhet fungerar. Ser fram emot ett långt och bra samarbete. Super kille verkligen.",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "Mando Amer",
      date: "December 2, 2023",
      review:
        "Super nöjd med helheten, snabb hjälp och respons. Särskilt Lara som alltid finns vid hjälp.",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "Ghazal Saberian",
      date: "November 29, 2023",
      review:
        "Smidigt service och trevlig personal. Lara, vår kontaktperson, är professionell och engagerad. Tack vare deras arbete. Rekommenderar varmt Act Loca.",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "M",
      date: "November 28, 2023",
      review: "En mycket bra tjänst, och Laura är en stjärna på att ställa upp oavsett dag och tid.",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "nasim roshan",
      date: "November 28, 2023",
      review: "Tack bästa Lara för ett fantastiskt service.",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "Autohallen I Helsingborg",
      date: "November 28, 2023",
      review:
        "Vi har varit kunder i snart 2 år! Tack Lara för allt stöd ❤️ Från Autohallen i Helsingborg AB",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "Autohallen I Helsingborg",
      date: "November 28, 2023",
      review:
        "Vi har varit kunder i snart 2 år! Tack Lara för allt stöd ❤️ Från Autohallen i Helsingborg AB",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
    {
      name: "Autohallen I Helsingborg",
      date: "November 28, 2023",
      review:
        "Vi har varit kunder i snart 2 år! Tack Lara för allt stöd ❤️ Från Autohallen i Helsingborg AB",
      stars: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    },
  ];

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div className="reviews-section">
      <h2>Vad säger våra kunder om oss?</h2>
      <p>
        Vi är stolta över förtroendet som vi fått att driva mer trafik och hjälpa
        företag, stora som små, att synas bättre på nätet.
      </p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <div className="review-avatar">{review.name[0]}</div>
              <div>
                <h3>{review.name}</h3>
                <p>{review.date}</p>
              </div>
              <img
                src={review.logo}
                alt="Google Logo"
                className="review-logo"
              />
            </div>
            <p className="review-text">{review.review}</p>
            <div className="review-stars">{renderStars(review.stars)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;