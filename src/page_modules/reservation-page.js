import ab1 from "../../assets/ab1.jpg";
import ab2 from "../../assets/ab2.jpg";

export function ReservationPage() {
  // Create the div container for about page
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about");
  aboutPage.id = "content";

  // Start creating other elements
  // 1. Title h1
  const title = document.createElement("h1");
  title.textContent = "Reservation";

  //   // 2. Description p
  //   const desPara1 = document.createElement("p");
  //   const desPara2 = document.createElement("p");
  //   desPara1.classList.add("about-text");
  //   desPara2.classList.add("about-text");
  //   desPara1.textContent =
  //     "Pétrus is a restaurant in London, England. It was opened in 2010 by chef Gordon Ramsay. Pétrus was awarded a Michelin star in 2011. The restaurant was named after the French wine Pétrus. Pétrus is located in Belgravia, London. The restaurant has a capacity of 60 seats. Pétrus is known for its French cuisine.";
  //   desPara2.textContent =
  //     "Pétrus offers a tasting menu and an à la carte menu. The tasting menu consists of 6 courses. The tasting menu costs £120. The à la carte menu consists of 3 courses. The à la carte menu costs £60. Pétrus offers a wine pairing with the tasting menu. The wine pairing costs £60.";

  //   // 3. Image Gallery
  //   const gallery = document.createElement("div");
  //   gallery.classList.add("gallery");

  //   // 4. Images
  //   const img1 = document.createElement("img");
  //   const img2 = document.createElement("img");
  //   img1.src = ab1;
  //   img1.alt = "ab1";
  //   img2.src = ab2;
  //   img2.alt = "ab2";

  //   // Append elements to gallery
  //   gallery.appendChild(img1);
  //   gallery.appendChild(img2);

  // Append elements to aboutPage
  aboutPage.appendChild(title);
  //   aboutPage.appendChild(desPara1);
  //   aboutPage.appendChild(desPara2);
  //   aboutPage.appendChild(gallery);

  return aboutPage;
}
