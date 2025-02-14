export function ReservationPage() {
  // Create the div container for about page
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("reservation");
  aboutPage.id = "content";
  aboutPage.innerHTML = `<h1>Reservation Information</h1>
      <form action="" method="get" id="reservation-form">
        <div class="form-entry">
          <label for="first-name">First name</label
          ><input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Ex: Minh"
            required
          />
          <span></span>
        </div>
        <div class="form-entry">
          <label for="last-name">Last name</label
          ><input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Ex: Le"
            required
          />
          <span></span>
        </div>
        <div class="form-entry">
          <label for="phone-number">Phone number</label
          ><input
            type="tel"
            id="phone-number"
            name="phone-number"
            pattern="[0-9]{10}"
            placeholder="Ex: 438-999-9999"
            required
          />
          <span></span>
        </div>
        <div class="form-entry">
          <label for="email">Email</label
          ><input
            type="email"
            id="email"
            name="email"
            placeholder="Ex: abc@def.xyz"
            required
          />
          <span></span>
        </div>
        <div class="form-entry">
          <label for="party-size">Party size</label
          ><input
            type="number"
            id="party-size"
            name="party-size"
            min="1"
            max="10"
            required
          />
          <span></span>
        </div>
        <div class="form-entry">
          <label for="allergy">Please specify you allergies (if any) so we can serve you better:</label
          >
            <textarea
                id="allergy"
                name="allergy"
                rows="5"
                cols="50"
                placeholder="Ex: I am allergic to peanuts"></textarea>
          <span></span>
        </div>
         <div class="form-entry submission">
          <button type="submit">Complete your booking</button>
        </div>
      </form>`;

  return aboutPage;
}
