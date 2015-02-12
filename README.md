# discover-meteor
This is the demo application built from following the "Discover Meteor" book.
[https://book.discovermeteor.com]

## Notes from the book

On Meteor:

Let's review what makes Meteor so special in comparison. As we've seen, the key innovation of Meteor is that where a Rails app only lives on the server, a Meteor app also includes a client-side component that will run on the client (the browser).

This is like a store clerk who not only finds the right book for you, but also follows you home to read it to you at night (which we'll admit does sound a bit creepy).

This architecture lets Meteor do many cool things, chief among them what Meteor calls database everywhere. Simply put, Meteor will take a subset of your database and copy it to the client.

This has two big implications: first, instead of sending HTML code to the client, a Meteor app will send the actual, raw data and let the client deal with it (data on the wire). Second, you'll be able to access and even modify that data instantaneously without having to wait for a round-trip to the server (latency compensation).

## Usage

  - Clone this repo to a new directory
  - cd into the root of the app
  - Install meteor
  - Run "meteor" from the console
  - Run "meteor mongo" for the Mongo console 
