title: Android PrivateDNS
slug: libredns
date: 2022-12-26 12:00:00
tags: service, libredns, privacy, dot
files: PrivateDNS_NoAds.jpg, LibreDNS_Test.jpg
---

**TL;DR: You can now use `noads.libredns.gr` in Android Private DNS settings for an ad-free experience.**

As you may already know, the libreops team runs a dual stack (IPv4 & IPv6) DNS over HTTPS (DoH)/DNS over TLS
 (DoT) project: [LibreDNS](https://libredns.gr/). There are Unfiltered & Filtered DNS services for everybody
 to use and protecting their browsing exprerience. We do not keep any logs and the configuration is public
for review.

For a long time now, we had this request to support Android devices via Private DNS Setting for our filtered
 DoT option. There are a couple of difficulties with that request:

* Android only supports hostnames in the PrivateDNS setting (instead of an IP),
* Android does not provide the option to configure a TCP Port,
* Android does not support DNS over HTTPS!

Although, we already had created a workaround for our filtered option (DoT-Filtered runs on a different
TCP Port 854 instead of the default TCP Port 853), for all the above reasons, we can not use that workaround on
Android devices. And as there is not an option for DoH in Android, we kept that request on our backlog.

The recent migration from centralized social media platforms to our [mastadon](https://libretooth.gr/) instance,
gave a huge boost with a lot of new people joining in. That reenacted, once more, the discussions about
Privacy & Security on our matrix channels.

So it was time to take a fresh look on that request and find a proper solution.

We were delighted to find out, we can extract the TLS Server Name Indication value sent by the client with
a simple [SNIRule](https://dnsdist.org/rules-actions.html?highlight=snirule#SNIRule) and separate DNS
requests to different backends (filtered and unfiltered services) with a simple configuration line

    addAction(SNIRule("noads.libredns.gr"), PoolAction("ads"))

With the help of a few close friends, the SNI Rule was the key to start doing some internal tests in order to verify
this configuration option and find out if we can setup andoid devices with our filtered DNS over TLS LibreDNS service.

We are happy to announce that as of today, **LibreDNS** supports Android devices via **PrivateDNS** setting with a new
hostname:

`noads.libredns.gr`



## Enable Private DNS in Android

You have to go

> Settings --> Network & internet --> Advanced (Private DNS)

and then Select **Private DNS provider hostname** and type


    noads.libredns.gr

and click Save.

![PrivateDNS_NoAds](PrivateDNS_NoAds.jpg)

Open your browser and visit [libredns.gr](https://libredns.gr). You should be able to verify that you are using LibreDNS
by seeing the below message

    You are using LibreDNS. Your DNS requests are encrypted!

In a green section.

![LibreDNS_Test](LibreDNS_Test.jpg)


