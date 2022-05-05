title: Mastodon IP anonymization
slug: mastodon
date: 2022-05-09 13:58:15
tags: service, mastodon, privacy
files: mastodon.jpg, mastodon-account-ip.jpg
---

We always strive to keep **as less logs as it's technically possible** for any of our services to run smoothly.
Mastodon is no exception to this. For some pieces of the stack we use for our Mastodon instance ([libretooth](https://libretooth.gr)) minimizing logs footprint is straightforward.

As an example, this is a logs snippet of our `nginx` configuration.

    access_log off;
    error_log /dev/null crit;

But when it comes to the application, things get a bit more complicated.
Since Mastodon does keep some user IP information by default and provides no option or interface to disable or anonymize that.
At the same time, we don't want to do make changes to its code, since that would add a maintenance burden on our end.

Mastodon by default stores information in the database for these values:

    last_sign_in_ip
    current_sign_in_ip
    session_activations

The names are quite self explanatory, but we couldn't find any part of the Mastodon application that actually needs them.
These values are stored in the database, but they are also visible in the Administration panel for the instance admins to view.

So after some experimentation we tweaked our nginx configuration to remove these two lines below that are part of the official installation guide. This change **effectively prevents nginx from sending back to the application the actual IP address of the user's client** (eg. browser, mobile application, etc). Instead Mastodon now thinks that all users have `127.0.0.1` as their IP address.

    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

![mastodon admin panel](mastodon-account-ip.jpg)

That of course only fixed the issue for new users. To **anonymize existing data** we had to go one step further and run some SQL queries directly in the database.

    update users set last_sign_in_ip='127.0.0.1';
    update users set current_sign_in_ip='127.0.0.1';
    update session_activations set ip='127.0.0.1';

These changes happened a few months ago and everything seems to be working smoothly. If you are interested in Mastodon's future plans on this, you can follow the [upstream ticket discussion](https://github.com/mastodon/mastodon/issues/6474).

![mastodon](mastodon.jpg)
