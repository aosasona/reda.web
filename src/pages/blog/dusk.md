---
layout: ../../layouts/BlogLayout.astro
title: Dusk
date: 05 February 2023
description: See you at dawn...
keywords: dawn, dusk, reda, swift
---

Reda started as a weekend project to simply organize the books I intended to read that weekend (which I never did complete reading by the way and it definitely took more than one weekend) and I started to see an opportunity to merge it into another project I was working on before then which had nearly the same idea and functionality but less targeted at 'books'.

I released the initial beta of Reda last December and it went from something I thought would be used by about 20 people including myself to something that is now used by over 150 people and counting. When I started the project, I used the most familiar stack/technology I could use; React Native, since I was already familiar with React. The project had and still has no backend/API since everything is stored and processed locally on the device which made it easy to ship things faster.

The app does a couple of things I want it to do and it even caught the eyes of some pretty interesting people in the tech space (big W for me in my book) but the last update which added ePub support has been a bit of a mid work; which I am not proud of (it renders in a WebView; yikes!). Files are hard to manipulate and you'd be surprised just how hard it is to render a PDF you could select text in and copy from in React Native; which of course you'd want to do when you're reading a book.

I had two options here; either I continue to use React Native in an attempt to support all platforms or I switch to a more native approach and know I'd be writing code (and/or custom libraries) targeted at one platform and one language instead of three different languages and then worrying about a JS bridge or whatever RN uses at the moment. I have been wanting to learn Swift for a while now and I think this is the perfect opportunity to do so too.

Performance-wise, I think going native would also be a better choice since I'd be able to use the native PDFKit and not have to worry about the performance of the PDF or EPUB rendering. I also think it would be a better choice for the app to be more native and not have to worry about the JS bridge and the performance of that. The initial version of the app also had no established design or layout and it was fun letting the app evolve as I added features and fixed bugs but I think it's time to give it a proper design and make it look and feel like a polished product.

So, I've decided to pause the project; I might update it from time to time to fix any bugs that might come up but I most likely won't be adding any new features to it (except folders perhaps). I'll be working on the new version of the app in Swift and I'll be releasing it as a beta in the coming months (unfortunately, this means I will be dropping support for android devices), Reda is not the first cloud storage or reading application so making it as seamless as it could be and doing it right matters a lot to me. I work on this project in my free time so I can't give an exact date but I'll be sure to keep you updated on the progress as I have other projects I'm working on as well & things I am learning coupled with my full-time job and school.

Thank you for using Reda and I hope you'll continue to use the new version when it's released.
