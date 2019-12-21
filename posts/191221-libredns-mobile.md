title: Mobile Privacy with DoH using Firefox and LibreDNS 
slug: libredns-mobile-firefox
date: 2019-12-21 17:00:00
tags: dns, mobile, firefox
files: mobile1.png, mobile2.png, mobile3.png, mobile4.png
---

## DNS over HTTPS on Mobile
Using DoH on mobile phones is not an easy task.
There are not many applications nor settings on the major operating systems for mobile devices that support DoH to resolve domain names.
Firefox provides an easy solution in order to use DoH on your phone with your browser.
In this article, we provide steps to do that with the help of Firefox and LibreDNS.

## Firefox on Mobile

*  Download Firefox for Mobile Devices.
*  Open Firefox and write in the address bar `about:config`.
*  Write in the search bar `network.trr.uri` and change the value of the preference to the URL of **LibreDNS** DoH endpoint: <https://doh.libredns.gr/dns-query>.

![mobile1](mobile1.png)

*  Write in the search bar `network.trr.mode` and use **2** as value if you want to use LibreDNS as the default DoH provider and use your prexisting DNS provider as a fallback.
    Use **3** as a value if you want to use **only** LibreDNS without any fallback, for more options visit: <https://wiki.mozilla.org/Trusted_Recursive_Resolver>.

![mobile2](mobile2.png)

*  If you choose **3** in `network.trr.mode` you also need to add the following preference in `about:config`: 
    Search for `network.trr.bootstrapAddress` in the address bar and change the value to `116.203.115.192` which is the IP address of LibreDNS. 

![mobile3](mobile3.png)

*  Test the connection with <http://dnsleaktest.com/>, you should only get the following results:

![mobile4](mobile4.png)
