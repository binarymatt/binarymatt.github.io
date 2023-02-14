---
title: 'RPI Cluster - Part 1'
date: 2023-02-13T20:00:29-07:00
draft: false
---

I’ve been thinking about building a home lab for quite some time.
Specifically, I want a cluster of raspberry pis that can be orchestrated to run
a collection of services across the 3 devices.

Originally, I looked at running specific services in docker on specific hosts.
However, I don’t want to have to remember which host runs which jobs. I don’t
want to keep inventory. In the past I’ve used ECS and Fargate
for container orchestration and scheduling. I like the simplicity of the Fargate
job definitions. However, I want most of these jobs to run out of the house and
I don’t want to spend extra money on cloud infrastructure
(outside of using s3, which I’ll get to in a later post)

When I started working at Hashicorp I was exposed to Nomad for the first
time. The job definitions are easy to read. It clusters well, and I only need a
minimal inventory in my head. So about 2 years ago I started building the cluster,
but ran into a bit of complexity. At the time, if you wanted service discovery for your
Nomad services, you needed to add in Consul. I like that tool, but I wanted to keep
my set of services on the pis to a minimum. So I shelved the project for a time.

Then this past May service discovery was added into Nomad, without Consul. It
took the rest of the year, but I finally got around to picking the project back up
a few weeks ago.

Currently, I’m running Traefik, Loki, Mimir, Jaegar, Grafana, and some private
learning projects across 3 raspberry pis running Nomad 1.4. It’s been a fun learning experience so far.
I'm enjoying both the constraints of running on raspberry pis and running out of
running out of the house. We've already had one power outage so it's definitely
a learning experience.

### Next

Part 2 will focus on the actual configuration I’m using for Nomad and the why
behind some specific tooling choices I’ve made.
