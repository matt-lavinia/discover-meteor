# discover-meteor
This is the demo application built from following the "Discover Meteor" book.
[https://book.discovermeteor.com]

## Usage

  - Clone this repo to a new directory
  - cd into the root of the app
  - Install meteor
  - Run "meteor" from the console
  - Run "meteor mongo" for the Mongo console 

## Notes from the book

### Publications & Subscriptions

Let's review what makes Meteor so special in comparison. As we've seen, the key innovation of Meteor is that where a Rails app only lives on the server, a Meteor app also includes a client-side component that will run on the client (the browser).

This is like a store clerk who not only finds the right book for you, but also follows you home to read it to you at night (which we'll admit does sound a bit creepy).

This architecture lets Meteor do many cool things, chief among them what Meteor calls database everywhere. Simply put, Meteor will take a subset of your database and copy it to the client.

This has two big implications: first, instead of sending HTML code to the client, a Meteor app will send the actual, raw data and let the client deal with it (data on the wire). Second, you'll be able to access and even modify that data instantaneously without having to wait for a round-trip to the server (latency compensation).

Fundamentally, you can think of the publication/subscription system as a funnel that transfers data from a server-side (source) collection to a client-side (target) collection.

The protocol that is spoken over that funnel is called DDP (which stands for Distributed Data Protocol). To learn more about DDP, you can watch this talk from The Real-time Conference by Matt DeBergalis (one of the founders of Meteor), or this screencast by Chris Mather that walks you through this concept in a little more detail.

_autopublish_
If you create a Meteor project from scratch (i.e using meteor create), it will automatically have the autopublish package enabled. As a starting point, let's talk about what that does exactly... MAKE SURE TO DISABLE FOR PRODUCTION LEVEL APPS

## Resources Used While Learning
* meteor.com - ran through basic tutorials and review of doc spec
* discovermeteor.com - Great book (so far) with associated live examples
* meteor + SEO: http://www.manuel-schoebel.com/blog/meteor-and-seo
* Great series: https://gentlenode.com/journal/meteo
* 
