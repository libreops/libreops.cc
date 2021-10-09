title: Using LibreDNS on iOS 14.x
slug: libredns-ios
date: 2020-10-14 11:00:00
tags: libredns, guide
files: libredns-doh-dnsecure.png, libredns-dot-dnsecure.png, libredns-vpn-ios.jpg, mobile4.png
---

We started our DoH/DoT service, [LibreDNS](https://libredns.gr), to secure (encrypt) our DNS queries and we made this service available to everybody, a year ago to this day!

We are really happy about the adaptation of LibreDNS and in some cases about providing a way to overcome censorship. Althouth we are not a big company/organization but a small team, we try to maintain these projects, keep them up to date and provide stable public services to everyone.

We depend on [financial contributions](https://opencollective.com/libreops/) from people who trust and support us into running all of our services. We are always available and open for communication at our [Matrix channel](https://riot.im/app/#/room/#libreops:matrix.org).

So, many thanks to all of you for supporting **LibreDNS**.

## Apple - iOS 14.x

In apple devices, there was not an easy way to encrypt DNS queries and be protected against DNS leaks. The acceptated method was using cloudflare's 1.1.1.1 that creates a VPN to your mobile device and send your DNS queries throuth their infrastructure.

Recently we came upon this opensource project: [DNSecure](https://github.com/kkk669/DNSecure) and we tried it, to see if it can be an alternative method to use **LibreDNS** service on iOS devices.

## Apple Store

You can download the application from the apple store:
[dnsecure](https://apps.apple.com/us/app/dnsecure/id1533413232)

***Notice:** Requires iOS 14.0 or later.*

### DoH Settings

These are the settings to enable LibreDNS - DoH (DNS over https) service:

Servers: **116.202.176.26** <br>
Server URL: `https://doh.libredns.gr/dns-query`

![libredns-doh](libredns-doh-dnsecure.png)

or you can use our no-trackers endpoint:

`https://doh.libredns.gr/ads`

### DoT Settings

To add the DoT (DNS over TLS) support:

Servers: **116.202.176.26** <br>
Server Name: `dot.libredns.gr`

![libredns-dot](libredns-dot-dnsecure.png)

## DNS - VPN

It is time to enable this DNS service, so go to:

`General --> VPN & Network --> DNS`

and enable DNSecure

![libredns-dns-vpn](libredns-vpn-ios.jpg)

### DNS Leak Results

To verify that your LibreDNS is running, visit
[dnsleattest](https://www.dnsleaktest.com/) and run the test; you should see LibreDNS as your DNS server

![dnsleak](mobile4.png)

---

*If you value our work, please consider [supporting us](https://opencollective.com/libreops/). We only rely on our contributors.*
