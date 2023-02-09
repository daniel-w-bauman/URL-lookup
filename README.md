# URL lookup service

## Description
A service to look up a URL in a list of potential malware sites.

## Running instructions
Pre-requisite:
* Install and run a local MongoDB instance, using the following instructions:
	https://www.mongodb.com/try/download/community

* Install npm using the following instructions:
	https://docs.npmjs.com/cli/v7/configuring-npm/install

Run the following command in the repository folder:

```npm start```

Use the API as described below.

## API:
GET /v1/urlinfo/<URL>
- response: 'allowed' if the URL was not found in the malware list,
	or 'banned' if it was.

POST /v1/newurl
- parameters:
    - url: the new malware URL to be added to the list
        - must be at least 3 characters long and contain a period.
