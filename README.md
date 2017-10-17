# nodejs-hello-world

**A simple and stateless "Hello World" Application written in Node.js used to illustrate OpenShift functionality**

## Prerequisites
- MiniShift environment is up and running
- See [Lesson 1 - Install and run Minishift](https://github.com/bugbiteme/openshift_tutorials) for instructions on how to install and run MiniShift 

## Relevent files we will be looking at

- server.js - Node.js server
- views/index.html - Node.js/HTML view

## Overview
- TODO: graphic showing how code is deployed from github
![img/GitHub-GitLab.png](img/GitHub-GitLab.png)

## Deploying an application to OpenShift
### CLI Method

* Log into OpenShift/Minishift
 
        $ oc login https://192.168.99.100:8443
        Authentication required for https://192.168.99.100:8443 (openshift)
        Username: developer
        Password: developer
        Login successful.

        You have one project on this server: "my-project"

        Using project "my-project".
    
my-project is the default new project living in the minishift environment

* Using the default project (my-project) deploy the app located here in github

        oc new-app https://github.com/bugbiteme/nodejs-hello-world -l name=myapp
        
app will build and deploy to OpenShift/MiniShift

--> Found image f38fb14 (4 weeks old) in image stream "nodejs" in project "openshift" under tag "6" for "nodejs"

    Node.js 6 
    --------- 
    Node.js 6 available as docker container is a base platform for building and running various Node.js 6 applications and frameworks. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

    Tags: builder, nodejs, nodejs6

    * The source repository appears to match: nodejs
    * A source build using source code from https://github.com/bugbiteme/nodejs-hello-world will be created
    * The resulting image will be pushed to image stream "nodejs-hello-world:latest"
    * Use 'start-build' to trigger a new build
    * This image will be deployed in deployment config "nodejs-hello-world"
    * Port 8080/tcp will be load balanced by service "nodejs-hello-world"
    * Other containers can access this service through the hostname "nodejs-hello-world"

    --> Creating resources with label name=myapp ...
        imagestream "nodejs-hello-world" created
        buildconfig "nodejs-hello-world" created
        deploymentconfig "nodejs-hello-world" created
        service "nodejs-hello-world" created
    --> Success
        Build scheduled, use 'oc logs -f bc/nodejs-hello-world' to track its progress.
        Run 'oc status' to view your app.
* From here, OpenShift will pull the code from github, build and deploy the application. 
* You cancheck the build status of the newly deployed app by running the following command

        $ oc logs -f bc/nodejs-hello-world
      
*Example:*
         
    $ oc logs -f bc/nodejs-hello-world
    
     Cloning "https://github.com/bugbiteme/nodejs-hello-world" ...
	          Commit:	145f3bdbdecb49b735a602aedeb679c1747d5b51 (images)
	          Author:	Leon Levy <leon.s.levy@gmail.com>
	          Date:	Tue Oct 17 10:21:20 2017 -0700
     ---> Installing application source ...
     ---> Building your Node application from source
     .
     .
     .
     Pushing image 172.30.1.1:5000/my-project/nodejs-hello-world:latest ...
     Pushed 0/9 layers, 0% complete
     Pushed 1/9 layers, 11% complete
     Push successful

* Once the application has been deployed, we must create a route to it, so users can access the deployed application's web interface

        $ oc expose svc/nodejs-hello-world
        route "nodejs-hello-world" exposed
        
* Now lets use minishift to access the application

        $ minishift openshift service nodejs-hello-world  --in-browser
        Opening the route/NodePort http://nodejs-hello-world-my-project.192.168.99.100.nip.io in the default browser...

![Screenshot of web based application](img/web-app-screenshot.png)

### GUI Method

## Scaling the application up and down
### CLI Method
### GUI Method

## Deploying changes to code ito application
### Rolling update (default method)
#### CLI Method
#### GUI Method

### Blue/Green Deployement
#### CLI Method
#### GUI Method
