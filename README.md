# Fresh Bites Bakery Website

**Module:** WEDE5020 – Web Development  
**Student number:** ST10502124  
**Project name:** Fresh Bites Bakery  
**Project type:** Responsive bakery website

## 1. Project overview

Fresh Bites Bakery is a website developed to give customers information about the bakery, introduce its products and make it easier for visitors to contact the business or submit an enquiry.

The website is designed to be simple to navigate, visually consistent and usable on desktop, tablet and mobile devices. It uses HTML5, CSS3 and JavaScript. The project is managed using GitHub so that changes can be tracked during development.

## 2. Project objectives

The main objectives are to:

- Present the bakery and its products in a clear and attractive way.
- Provide easy navigation between the main website pages.
- Allow visitors to send product enquiries and general messages.
- Use responsive layouts for different screen sizes.
- Include useful JavaScript interactions and form validation.
- Apply basic search-engine optimisation (SEO).
- Keep the source code organised and documented.

## 3. Website pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces the bakery and highlights important information. |
| About | `about.html` | Gives background information about the bakery. |
| Products | `products.html` | Displays the bakery's products and descriptions. |
| Enquiry | `enquiry.html` | Allows visitors to ask about products or services. |
| Contact | `contact.html` | Provides contact information and a general message form. |

## 4. Technologies used

- **HTML5:** structures the pages and provides semantic elements and form fields.
- **CSS3:** controls colours, typography, spacing, layout and responsive design.
- **JavaScript:** adds client-side interaction, DOM updates and form validation.
- **Git and GitHub:** store the project and track development changes.
- **Leaflet (if included):** displays an interactive map using OpenStreetMap data.

## 5. Main functionality

The following features should be checked in the actual website before submission. Remove or change any item that is not present in the final version.

- Consistent navigation between the website pages.
- Responsive layout for desktop and smaller screens.
- Product information and images with descriptive alternative text.
- JavaScript interactions such as a mobile navigation menu, accordion or image gallery, where included.
- Enquiry and contact forms with required-field checks and clear validation messages.
- Product search, filtering or sorting, if implemented.
- SEO information including page titles, meta descriptions, meaningful headings and internal links.
- A sitemap and robots file, if included in the final project.

**Form submission note:** Browser-side validation does not automatically send an email. A working form delivery service or server-side endpoint must be configured and tested before the forms can be described as sending messages.

## 6. Folder and file structure

Keep the website files in one main project folder. A recommended structure is:

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
├── images/
│   └── (website image files)
├── robots.txt
├── sitemap.xml
└── README.md
```

Use the filenames and folder names that match the actual project. Do not create empty files just to make the folder look complete.

## 7. How to run the website

1. Download the repository or clone it to your computer.
2. If the website files are supplied in a ZIP archive, extract the archive.
3. Open the extracted project folder in Visual Studio Code or another code editor.
4. Open `index.html` in a web browser. A local development server may also be used.
5. Use the navigation links to open every page.
6. Test the forms, interactive features and responsive layout.

Some online features, such as map tiles or hosted form delivery, require an internet connection and correct configuration.

## 8. Testing checklist

Before submitting, test the following:

- [ ] All five pages open without errors.
- [ ] Navigation links lead to the correct pages.
- [ ] Images load and have useful alt text.
- [ ] The layout works at desktop and mobile widths.
- [ ] Buttons, menus and JavaScript interactions work.
- [ ] Forms show useful messages when required information is missing.
- [ ] Form submission has been tested using the configured delivery method.
- [ ] There are no obvious spelling mistakes or placeholder details.
- [ ] Page titles and meta descriptions are relevant.
- [ ] The sitemap and robots file, if included, contain the correct website address.
- [ ] The deployed website opens using its public URL.

## 9. GitHub upload and version control

The project should be uploaded with its actual source files and folders, not only as a ZIP archive.

1. Open the GitHub repository on your computer using GitHub Desktop, or clone it using Git.
2. Extract the website ZIP file.
3. Open the extracted folder and copy the website source files and folders into the repository folder.
4. Make sure `index.html`, the other HTML pages, `css`, `js` and `images` are visible in the repository.
5. Review the changed files before committing.
6. Use a descriptive commit message that explains the changes.
7. Commit the changes and push them to GitHub.
8. Open the repository in a browser and check that the files are visible.

Suggested commit messages (use only when the relevant work has actually been done):

- `feat: add bakery website pages and content`
- `style: improve responsive layout and visual consistency`
- `feat: add JavaScript interactions and form validation`
- `seo: add page metadata and search engine files`
- `docs: update project README and testing notes`

## 10. Deployment

The website can be hosted using GitHub Pages or Netlify.

For GitHub Pages:
1. Open the repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Under the build and deployment section, select deployment from the `main` branch and the root folder.
4. Save the settings.
5. Wait for the published URL to appear, then open it and test the website.

For Netlify, sign in, choose the option to add a site from an existing Git repository, connect the GitHub repository and follow the deployment instructions. Confirm that the published site loads correctly.

Add the final public website URL here once deployment is complete:

**Live website URL:** To be added after deployment.

## 11. Changelog

| Version | Changes |
|---|---|
| Initial project | Created the bakery website pages and initial styling. |
| Development update | Expanded the project documentation, added setup instructions, a file structure, testing checklist and GitHub upload guidance. |
| Future updates | Record each completed feature, correction or design change here with its date. |

Update this table whenever changes are made. The changelog should describe work that is actually present in the repository.

## 12. References

List every external source that was actually used for code, learning, images, fonts, icons or libraries. The following official resources can be used as references when relevant:

- MDN Web Docs. HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs. CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs. JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Google Search Central. SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Leaflet. Documentation: https://leafletjs.com/reference.html (only if Leaflet is used)

Add the date accessed and any other sources used, and acknowledge third-party images or assets where required.

## 13. Academic integrity

This project should represent the student's own understanding and development work. External sources, code examples, libraries and media assets must be acknowledged. Test and understand the code included in the final submission, and ensure that the documentation accurately describes the website that has been completed.
