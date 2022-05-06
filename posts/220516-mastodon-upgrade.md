title: Upgrading Mastodon, for new accounts influx
slug: mastodon-upgrade
date: 2022-05-16 11:08:15
tags: service, mastodon
files: mastodon-users-april.jpg, mastodon-grafana-april.jpg, mastodon-grafana-may.jpg
---

It's not secret that for the past month there was a big users influx towards Mastodon.
Our instance ([libretooth](https://libretooth.gr/)) was not an exception.

![mastodon user metrics](mastodon-users-april.jpg)

Besides many new account registrations, we also saw much more content and traffic, as people started to be more active.
That raised our attention to the instance, to ensure it can handle the pressure.
LibreTooth virtual machine (our mastadon instance) was running on 2vCPUs and 4GB of RAM at that time.
We could have upgraded its specs right away, but since our budget is depending on people donations we also bear the responsibilty of how we spend these money and be more consious about these kind of decisions.

Instead we took it as an opportunity to set up a monitoring system. Collect some metrics first, and then decide what would be the best approach of upgrading its specs (vCPU, RAM, Disk, etc).
As we solely rely on open source software, we had some good options available and we went with setting up `Grafana` and `Prometheus` (along with its node exporter) to collect some basic metrics for our instance.

![mastodon load metrics](mastodon-grafana-april.jpg)

It was clear that the virtual maching was at its peak, in terms of RAM utilization, despite the fact that using a browser to navigate through the application still felt like a smooth experience. After letting the system for a few more days, to gather more data, we decided it was indeed time for an upgrade.

So today our Mastodon instance runs on 8GB of RAM. We keep monitoring how it's handling the load, but things definitely look much better.

![mastodon load metrics](mastodon-grafana-may.jpg)

We are grateful that we have the budget flexibilty to make these kind of adjustments and offer a better service to the people who use them. All thanks to the commitment of our financial contributors ❤️

---

*If you value our work, please consider [supporting us](https://opencollective.com/libreops/). We only rely on our contributors.*

