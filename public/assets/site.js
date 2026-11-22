const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("open", open);
  menuButton.textContent = open ? "Bezárás" : "Menü";
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menü";
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menü";
    menuButton.focus();
  }
});
document.querySelectorAll("form[data-demo]").forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelector(".form-status").textContent =
      form.dataset.demo === "newsletter"
        ? "Ez bemutató űrlap. Az adataidat nem küldtük el. Feliratkozás nem történt, a Kisokos jelenleg nem tölthető le."
        : "Ez bemutató űrlap. Az adataidat nem küldtük el. Időpontfoglalás nem történt.";
  }),
);
addEventListener(
  "scroll",
  () => document.querySelector("header").classList.toggle("scrolled", scrollY > 20),
  { passive: true },
);

matchMedia("(min-width: 701px)").addEventListener("change", () => {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menü";
});

document.querySelectorAll("form[data-contact]").forEach((form) =>
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.dataset.sending === "true" || !form.reportValidity()) return;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-status");
    const label = button.textContent;
    form.dataset.sending = "true";
    button.disabled = true;
    button.textContent = "Küldés folyamatban…";
    form.setAttribute("aria-busy", "true");
    status.textContent = "Az üzenet küldése folyamatban van.";
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!response.ok) throw new Error("send-failed");
      form.reset();
      status.textContent =
        "Köszönöm! Az üzenetedet sikeresen elküldted. Ez egy tanfolyami próbaoldal, valódi szalonfoglalás nem történt.";
    } catch (error) {
      status.replaceChildren(
        document.createTextNode(
          "Az üzenetet nem sikerült elküldeni. Az adataid a mezőkben maradtak; próbáld újra, vagy írj ide: ",
        ),
      );
      const link = document.createElement("a");
      link.href = "mailto:eliza-beauty@freemail.hu";
      link.textContent = "eliza-beauty@freemail.hu";
      status.append(link);
    } finally {
      delete form.dataset.sending;
      button.disabled = false;
      button.textContent = label;
      form.removeAttribute("aria-busy");
    }
  }),
);
