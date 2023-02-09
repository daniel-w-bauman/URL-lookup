# URL lookup service

## Description
A service to look up a URL in a list of potential malware sites.

## API:
GET /v1/urlinfo/<URL>
- response: 'allowed' if the URL was not found in the malware list,
	or 'banned' if it was.

POST /v1/newurl
- parameters:
    - url: the new malware URL to be added to the list
        - must be at least 3 characters long and contain a period.
