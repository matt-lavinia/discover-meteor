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

### Routing

* Iron Router - https://github.com/iron-meteor/iron-router

#### Vocabulary
* Routes: A route is the basic building block of routing. It's basically the set of instructions that tell the app where to go and what to do when it encounters a URL.
* Paths: A path is a URL within your app. It can be static (/terms_of_service) or dynamic (/posts/xyz), and even include query parameters (/search?keyword=meteor).
* Segments: The different parts of a path, delimited by forward slashes (/).
* Hooks: Hooks are actions that you'd like to perform before, after, or even during the routing process. A typical example would be checking if the user has the proper rights before displaying a page.
* Filters: Filters are simply hooks that you define globally for one or more routes.
* Route Templates: Each route needs to point to a template. If you don't specify one, the router will look for a template with the same name as the route by default.
* Layouts: You can think of layouts as a “frame” for your content. They contain all the HTML code that wraps the current template, and will remain the same even if the template itself changes.
* Controllers: Sometimes, you'll realize that a lot of your templates are reusing the same parameters. Rather than duplicate your code, you can let all these routes inherit from a single routing controller which will contain all the common routing logic.