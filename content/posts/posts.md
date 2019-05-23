---
title: "Writing In Markdown"
description: "Markdown post content stress test. See how your post content is being styled with Tailwind CSS."
date: 2019-05-23
---

Today, A lot of developers are conversant with the `alt` attribute on images. I can say most of us know that it is one way of making webpages accessible but do we really understand the scope of the alternative text, when to make use of it, how to use it. I agree it is one step to being an accessibility advocate so that is why in this article, I'll be explaining in detail the alt attribute and how practicing it can improve web accessibility in a long run.

Truthful confession here, before I became really involved with accessibility I didn't understand the importance of having a descriptive text for all images on the web. I'm mostly guilty of leaving the `alt` attribute blank. Now that I know better I can't keep it to myself which is one of the reasons I'm writing this article to share this new knowledge gained with everyone.

## What is Alternative Text?
Alternative text or alt text as it is fondly called is a written text description for an image on the web.
Alt text is really useful and can come in handy in any of these scenarios:
- people using assistive technology such as screen readers and so on.
- people that have images turned off on their devices due to a poor internet connection.
- it helps improve SEO for the webpage.

Writing good alt text for images is very important and shouldn't be sidelined. To show how important this is the Web Content Accessibility Guidelines document [WCAG 2.1](https://www.w3.org/TR/WCAG21/#text-alternatives) have it has the first rule which shows that it's really important.

> Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

## How to Use Alt Text
Typically, when adding an image to a webpage, we use the HTML image element to represent the image and the alt attribute on the image tag to give a description of the image. Here's an example:


```html
```
The above alt attribute describes the context of the image. In this case, if a screen reader is being used on this page. It'll read the alt text instead and the user gets a very descriptive context of the image used.
There are other things to consider when writing alt text this is just a primer to writing descriptive alternate text for images. I'll be going over the important concepts to take note of when using images on the webpages.
All images on the web must have alternative text that describes the function of the image.
There are seven concepts for using images on the web I'll be outlining each of them and they include:

1. **Informative Images:** Informative images are images that describe a piece of information or concept. The information described can be anything from an emotion/impression to a label or the file format used in a link. The text alternative for an informative image should convey the meaning or content of the image. Here's an example:


```html
<img src="./girl.png" alt="A girl smiling happily.">
```
The image illustrated above shows the emotion of a girl. The idea therefore, is to make the alternative text convey this information.

2. **Decorative Images:** Decorative images are images that don't necessarily convey meaning or information. These images don't add information to the content of the page mainly because the content description is already provided or the image is used for styling purposes. Therefore, the `alt` attribute is not provided or left empty `(alt="")`. The reason for this is to avoid assistive technologies such as screen readers from reading a redundant text to its users. Leaving the `alt` attribute out entirely is not a good practice because some screen readers will announce the file name of the image instead. An example is shown below:

5. **Group of Images:** This type of images represent images that are grouped together to convey a single piece of information. An example can be a collection of heart icons to represent a rating. When adding descriptive text for each image, the alt attribute for only one of the image should have a description of the group of images, while the other images have an empty `alt` attribute so they are ignored by screen readers. Here's an example:


```html
<img src="full-heart.png" alt="1.5 of 3 hearts">
<img src="half-heart.png" alt="">
<img src="empty-heart.png" alt="">
```
