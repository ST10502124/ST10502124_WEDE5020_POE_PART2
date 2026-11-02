# Fresh Bites Bakery Website

**Module:** WEDE5020 – Web Development  
**Student number:** ST10502124  
**Project:** Fresh Bites Bakery  
**Website type:** Responsive front-end bakery website

## 1. Project overview

Fresh Bites Bakery is a front-end website concept that introduces the bakery, displays product categories and gives visitors ways to make product enquiries or send general messages. The design uses a warm bakery-inspired colour palette, clear page layouts and responsive navigation.

The website is built with HTML5, CSS3 and JavaScript. The source files are organised into separate page, stylesheet and script files so that the project is easier to maintain.

## 2. Website pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Introduces Fresh Bites Bakery and links visitors to the main sections. |
| Our Story | `about.html` | Explains the bakery's approach and includes an FAQ accordion. |
| Products | `products.html` | Displays product categories with a search field and category filter. |
| Enquiries | `enquiry.html` | Collects details about a product or special-order enquiry. |
| Contact | `contact.html` | Provides a general contact message form. |

## 3. Technologies

- **HTML5** for semantic page structure, navigation and forms.
- **CSS3** for the visual design, responsive layouts and mobile styling.
- **JavaScript** for the mobile navigation, FAQ accordion, product filtering, enquiry prefill and client-side form validation.
- **GitHub** for source-code hosting and version control.

## 4. Features implemented

- Shared navigation and footer across the five pages.
- Responsive layouts with a mobile navigation menu.
- Product search by name and filtering by category.
- FAQ accordion on the Our Story page.
- Product links that prefill the product field on the enquiry form.
- Required-field, email and minimum-length browser validation.
- Page-specific titles and meta descriptions.
- Semantic landmarks, form labels, skip link and accessible status messages.
- Reduced-motion support in the stylesheet.

Product illustrations currently use emoji and CSS styling. Replace or supplement these with suitable original bakery photographs or illustrations if available, and provide descriptive alternative text for meaningful images.

## 5. Important form limitation

The enquiry and contact forms currently perform **browser-side validation only**. They display a message explaining that the details passed validation, but they are not connected to an email inbox or server-side form service. The forms therefore do not send or store real submissions yet.

Before using the website for real customers, connect a form service or server endpoint, configure its destination and test successful delivery. Do not describe the forms as sending email until that has been done.

## 6. Project structure

```text
Fresh-Bites-Bakery/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── robots.txt
└── README.md
```

## 7. Running the website

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open `index.html` in a web browser, or run the folder using a local development server.
4. Navigate through all five pages.
5. Try the mobile menu, FAQ accordion, product search and category filter.
6. Test both forms using valid and invalid details. Remember that form validation is not the same as sending a message.

## 8. Testing checklist

- [ ] Open all five pages and check that navigation works.
- [ ] Check the layout at desktop, tablet and mobile widths.
- [ ] Test the mobile menu and FAQ accordion.
- [ ] Search for a product and change the category filter.
- [ ] Select a product enquiry link and check that the enquiry field is prefilled.
- [ ] Test required fields and invalid email addresses on both forms.
- [ ] Check for spelling mistakes and replace any placeholder business information.
- [ ] Connect and test a real form-submission service before launch.
- [ ] Add a sitemap after the final public website URL is known.
- [ ] Deploy the website and test the live version.

## 9. Uploading and version control

The repository should contain the actual website source files and folders, not only a ZIP archive.

1. Clone the repository or open it in GitHub Desktop.
2. Copy the website files into the repository folder, keeping the folder structure shown above.
3. Review the changed files.
4. Commit related changes using clear messages.
5. Push the commits to GitHub.
6. Open the repository in a browser and confirm that each source file is visible.

Suggested commit messages for future changes:

- `feat: add bakery website pages`
- `style: add responsive bakery website styling`
- `feat: add product filtering and form validation`
- `docs: update website setup and testing information`
- `seo: add sitemap for deployed website`

Only use a commit message when the change described has actually been made.

## 10. Deployment

The website can be deployed using GitHub Pages or Netlify.

For GitHub Pages:
1. Open the repository's **Settings** page.
2. Select **Pages**.
3. Choose deployment from the `main` branch and the root folder.
4. Save and wait for GitHub Pages to publish the site.
5. Open the published address and test all pages and links.

**Live website URL:** Add the published URL after deployment.

A sitemap needs the final public domain so that its page addresses are absolute and correct. Add `sitemap.xml` after deployment and then update `robots.txt` with the sitemap URL.

## 11. Changelog

| Date | Update |
|---|---|
| 2 November 2026 | Added the five website pages, shared responsive stylesheet, JavaScript navigation, FAQ accordion, product search/filter and browser-side form validation. |
| 2 November 2026 | Rewrote the project README with setup, features, limitations, testing, upload and deployment information. |

Add a new entry whenever further changes are made.

## 12. References

Add the sources actually consulted during development, including the date accessed. These official learning resources are useful references:

- MDN Web Docs – HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs – CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs – JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Google Search Central – SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

The stylesheet imports the DM Sans and Playfair Display fonts from Google Fonts. Acknowledge any additional images, icons, code examples or third-party assets added to the project.

## 13. Academic integrity

The final submission should reflect the student's understanding of the website. Review and test the source code before submission. Acknowledge external resources and make sure that this README describes the features and limitations of the version actually uploaded.
