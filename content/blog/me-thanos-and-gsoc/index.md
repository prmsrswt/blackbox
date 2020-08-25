---
title: Me, Thanos and GSoC
date: '2020-08-25'
headerImg: 'header.jpg'
accent: '#b2b8f4'
draft: true
---

# The beginning

The [GSoC website](https://summerofcode.withgoogle.com/) gives a pretty good introduction to what it is all about.

> Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school.

I knew about GSoC from quite some time, mostly because some of my college seniors who had participated in GSoC in the past. They encouraged us to get involved in the open-source community. I had quite a bit of experience in web development with React so I started looking for organizations where I can start contributing to web-related stuff.

I have always been interested in things like hosting websites, running a mail server, automated deployments, etc. Inevitably, I came across Kubernetes and the whole Cloud Native landscape. So, coming back to GSoC, I decided to take a look at the CNCF projects. I was not expecting any web related projects here but to my surprise, I came across a proposal by the Thanos team to migrate their web UI to React. This looked like a perfect match for me. Thanos is mainly written in Go and I had started learning it a few weeks back. To me, this was an opportunity to get more experience with GoLang. So I hopped onto the CNCF slack and started lurking on #thanos and #thanos-dev channels.

# Enter, Thanos!

[Thanos](https://thanos.io) describes itself as _"Open source, highly available Prometheus setup with long term storage capabilities."_

### Now the question is, what is Prometheus?

In short, [Prometheus](https://prometheus.io) is a systems monitoring and alerting toolkit. People use Prometheus to monitor various kinds of workloads, from their application to the infrastructure the application is deployed on. Prometheus was initially created with more focus on real-time monitoring, with data retention requirements in order of a few months.

Thanos was created to address these limitations. With Thanos, you can have a highly available Prometheus setup, with unlimited retention of data. It allows you to store the metrics generated by Prometheus in object storage of your choice. It also allows you to have a global view of metrics from all of the Prometheus instances.

# So, what am I doing?

Thanos has a web UI that is mostly similar to the Prometheus web UI with some additional features related to Thanos. Recently, Prometheus moved to a new web UI written in React and TypeScript. My goal is to port the new Prometheus web UI to Thanos and then further extend it to various components of Thanos. I have been working towards this goal for the past two and a half months and I'll share more about it in future blog posts.

# My experience as a Thanos mentee

My experience as a GSoC mentee at Thanos has been excellent in all possible ways. Looking back to it, I think my experience doesn't have much to do with GSoC. I am not saying that being a GSoC student didn't provide me with any benefits. It was an important milestone in my life and I consider myself very lucky that I got selected. It's just that the experiences I had are not exclusive to GSoC. Heck, the barrier to entry is so low in open-source that I can't help but think that I should have started sooner. The open-source community is very inclusive and friendly. And it's not just limited to code, they'll help you with anything you can imagine. In a sense, this feels more like a family rather than just a bunch of people working on the same project.

Now, let's talk about some of those "experiences" I mentioned. My favorite thing about this summer is the Thanos Mentees' Hangouts. This summer, there are a total of 5 mentees working on Thanos including me. We decided to do a call every week where we discussed our projects, the progress we made, and random stuff. After a few of these, one of us mentees (shoutout to [Uche](https://twitter.com/Thisisobate)!) got the idea to invite Thanos maintainers in our calls. We invited a different maintainer in each call. We would ask questions related to their work, about software engineering, or life in general. Now I think you can understand why this is my favorite. We got to listen to so many interesting stories, solid bits of advice, and a few jokes. This was such a unique experience for me. I got to learn so many things in these hangouts. These hangouts are definitely going to shape my decisions in the future. I also got the chance to attend PromCon and KubeCon this year, albeit virtually due to the ongoing pandemic. I got a chance to meet more people outside of Thanos (virtually, but I hope to attend an in-person conference someday).

# The future

What the future holds for us is always a surprise, but we still can have a few expectations, right? In the future, I'd like to contribute more to Thanos and get more involved in the community. Most of my work has been around the UI and API stuff and I'd like to contribute code to other areas as well. I'd also like to start contributing to other projects as well. I already have a few improvements in my mind that we want to upstream to the Prometheus UI.

In conclusion, the summer was a very unique and awesome experience for me. Thank you very much all of the Thanos community and especially my mentors and the co-mentees for making this summer enjoyable on a whole new level. Okay then, until next time. :)