
# Feed Reader Testing

## Table of Contents

* [Description](#description)
* [Getting Started](#getting-started)
* [Tests](#tests)
* [Dependencies](#dependencies)

## Description
This application loads various feeds. This functionality is being tested witch Jasmine.

## Getting Started
Download the zip file or clone the repo. 

Open the file "index.html" in your browser. Feeds are now beeing loaded - this may take a while.

At the bottom of the site you can see the test results from Jasmine.

## Tests
The application is tested with Jasmine. The test suits can be found in "/jasmine/feedreader.js".
 - RSS feed
	 - Test if the variable [allFeeds] has been defined and is not empty i.e. has at least one element
	 - Test if all feeds in [allFeeds] have a property [url] and is this [url] not empty
	 - Test if all feeds in [allFeeds] have a property [name] and is this [name] not empty
 - Menu
	 - Test if the HTML for the menu exists
	 - Test if the menu is hidden by default
	 - Test if the menu toggle works
 - Initial Entries
	 - Test if at least one entry exist after feed is loaded
 - New Feed Selection
	 - Test if the first element of feed 0 and the first element of feed 1 have different contents

## Dependencies
* Jasmine
* jQuery
* handlebars
* Google Feed Reader API