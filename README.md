# Lightspeed Relay FreeDNS Domain Checker 
## Format FreeDNS domains and check them against Lightspeed's public database.

##Directions for downloading, scraping, formatiing, and checking the public database:

First, go to FreeDNS's public shared databases where you can use domains to create subdomains. Then, use Ctrl+S on Chrome to save the webpage to the Webpages folder in the repository.

Next, run `python format.py` to run the formatter. Once you have the output, copy that and paste it into domains.js in the Checker folder.

After that, run `npm i` and `npm start` to start checking. Your responses will be saved to responses.json.
