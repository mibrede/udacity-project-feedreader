/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
	describe('RSS Feeds', function() {
		/* Test if the variable [allFeeds] has been defined
		* and is not empty i.e. has at least one element
		*/
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* Test if all feeds in [allFeeds] have a property [url]
		* and is this [url] not empty
		*/
		it('all have an URL that is not empty', function() {
			for (let feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(typeof feed.url === 'string').toBe(true);
				expect(feed.url.length).not.toBe(0);
			 }
		});

		/* Test if all feeds in [allFeeds] have a property [name]
		* and is this [name] not empty
		*/
		 it('all have a name that is not empty', function() {
			for (let feed of allFeeds) {
				expect(feed.name).toBeDefined();
				expect(typeof feed.name === 'string').toBe(true);
				expect(feed.name.length).not.toBe(0);
			}			 
		 });
	});


	describe('The menu', function() {
		const elmBody = document.getElementsByTagName('BODY')[0];
		const elmMenu = document.getElementsByClassName('slide-menu')[0];
		const elmMenuToggle = document.getElementsByClassName('menu-icon-link')[0];
		
		/* Test if the HTML for the menu exists */
		it('HTML exists', function() {
			expect(elmMenu).toBeDefined();
		});		
		
		/* Test if the menu is hidden by default */
		it('is hidden by default', function() {
			expect(elmBody.classList.contains('menu-hidden')).toBe(true);
		});		
		
		/* Test if the menu toggle works */
		it('toggle works', function() {
			elmMenuToggle.click();
			expect(elmBody.classList.contains('menu-hidden')).toBe(false);
			elmMenuToggle.click();
			expect(elmBody.classList.contains('menu-hidden')).toBe(true);
		});
	});
	
	
	describe('Initial Entries', function() {
		/* Load initial feed */
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		
		/* Test if at least one entry exist after feed is loaded */
		it('are loaded correctly', function() {
			const elmEntries = document.getElementsByClassName('feed')[0].getElementsByClassName('entry');
			expect(elmEntries).toBeDefined();
			expect(elmEntries.length).toBeGreaterThan(0);
		});
		
	});


	describe('New Feed Selection', function() {
		let elmInitialFeed;
		let elmChangedFeed;
		
		/* Load feed */
		beforeEach(function(done) {
			loadFeed(0, function(){
				elmInitialFeed = document.getElementsByClassName('feed')[0].getElementsByClassName('entry')[0].innerText;
				loadFeed(1, function(){
					elmChangedFeed = document.getElementsByClassName('feed')[0].getElementsByClassName('entry')[0].innerText;
					done();
				});
			});
		});
		
		/* Test if the first element of feed 0 and the first element of feed 1
		* have different contents
		*/
		it('works and contents change correctly', function() {
			expect(elmInitialFeed === elmChangedFeed).toBe(false);
		});
	});

}());