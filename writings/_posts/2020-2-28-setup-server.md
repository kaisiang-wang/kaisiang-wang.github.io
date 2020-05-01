---
layout: writing
title: How to host your own website
custom: writing
description: "Sample post with a background image CSS override."
tags: [sample post]
image:
---
![image of Apache](/images/apache.png)

<br>
<br>
Owning your personal website is cool, you can share your amazing stuffs on it, run a bussiness through it, and do everything you want with it.

<br>
### What circumstance should you host your website by your own?
There're tons of convenient frameworks that others have already done for you to easily build a website, like [Wix](https://www.wix.com/) or [Wordpress](https://wordpress.com/). 

<br>
### What is [Apache](https://httpd.apache.org/)?
Apache Web Server is a software package that turns a computer into an HTTP server. That is, it sends web pages – stored as HTML files – to people on the internet who request them. It is open-source software, which means it can be used and modified freely.

<br>
> The whole tutorial is based on linux, so make sure you have any access to a linux machine.

<br>
# Well, let's start off!

<br>
### Prerequisites

<br>
A system running Ubuntu 18.04 LTS

An internet connection

Access to a user account with sudo privileges

<br>
### Notice

<br>
Before installing new software, it’s a good idea to refresh your local software package database to make sure you are accessing the latest versions. This helps cut down on the time it takes to update after installation, and it also helps prevent zero-day exploits against outdated software.

<br>
open a terminal and type

<br>
```bash
sudo apt-get update
```
Let the package manager finish updating.

<br>
### 1. Install Apache on your machine

<br>
To install the Apache package on Ubuntu, use the command:

<br>
```bash
sudo apt-get install apache2
```
The system prompts for confirmation – do so, and allow the system to complete the installation.
![image of install apache1](/images/install-apache1.png)

<br>
### 2. Verify Apache Installation

<br>
To verify Apache was installed correctly, open a web browser and type in the address bar:

<br>
[http://localhost](http://localhost)

<br>
The web browser should open a page labeled “Apache2 Ubuntu Default Page,” as in the image below:
![image of install apache1](/images/install-apache2.png)

<br>
### 3. Apache Service Controls

<br>
When managing a web server, it’s helpful to have some level of control over the service. You’ll probably find yourself reloading or restarting Apache quite frequently, as you make configuration changes and test them. However, it’s also helpful to be able to stop (and start) the Apache service as needed.

<br>
This operation uses the systemctl command, with a series of switches:

<br>
Stop Apache:

<br>
```bash
sudo systemctl stop apache2.service
```
<br>
Start Apache:

<br>
```bash
sudo systemctl start apache2.service
```
<br>
Restart Apache:

<br>
```bash
sudo systemctl restart apache2.service
```
<br>
Reload Apache:

<br>
```bash
sudo systemctl reload apache2.service
```

<br>
### 4. Apache Configuration Files, Directories and Modules

<br>
#### Directories

<br>
After installing, Apache by default creates a document root directory at `/var/www/html`. 

<br>
Any files that you place into this directory are available to Apache to distribute over the network. Which means, this is the place where you copy web page files you want to publish. This is also where you would want to install content management systems, such as WordPress.

<br>
#### Configuration Files
As mentioned above, website content is stored in the/var/www/html/directory. You can create subdirectories within this location for each different website hosted on your server.

<br>
Apache creates log files for any errors it generates in the file `/var/log/apache2/error.log`.

<br>
It also creates access logs for its interactions with clients in the file `/var/log/apache2/access.log`.

<br>
Like many Linux-based applications, Apache functions through the use of configuration files. They are all located in the `/etc/apache2/` directory.

<br>
Here’s a list of other essential directories:

<br>
`/etc/apache2/apache2.conf` – This is the main Apache configuration file and controls everything Apache does on your system. Changes here affect all the websites hosted on this machine.
<br>
`/etc/apache2/ports.conf` – The port configuration file. You can customize the ports Apache monitors using this file. By default, Port 80 is configured for http traffic.
<br>
`/etc/apache2/sites-available` – Storage for Apache virtual host files. A virtual host is a record of one of the websites hosted on the server.
<br>
`/etc/apache2/sites-enabled` – This directory holds websites that are ready to serve clients. The a2ensite command is used on a virtual host file in the sites-available directory to add sites to this location.
There are many directories and configuration files, which are detailed in the Apache Ubuntu documentation. These can be used to add modules to enhance Apache’s functionality, or to store additional configuration information.

<br>
#### Modules
If you intend to work with software modules – applications that expand or enhance the functionality of Apache – you can enable them by using:

<br>
```bash
sudo a2enmod name_of_module
```
To disable the module:
<br>
```bash
sudo a2dismod name_of_module
```
<br>
### Conclusion
<br>
This tutorial helped you install Apache on Ubuntu using a set of simple commands. In addition, you now know host to configure basic settings for your installation.
<br>
<br>
<hr>