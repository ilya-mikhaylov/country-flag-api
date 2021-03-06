# Country Flag API

<strong>
This is a simple Express.js API that returns requested country flag URL.

Try now: https://country-flag-api.herokuapp.com
</strong>

Country name should be sent in ISO Alpha-2 format (like RU, EU, DE, FR etc.). You can check the full list in /public directory.

There are different types and sizes of flags:

Flat or shiny, available sizes (px) - 16, 24, 32, 48, 64.

Here's an example of GET query request, that should be sent to http://HOST/getflag

    {
        country: RU,
        type: flat,
        size: 64
    }

or

    https://country-flag-api.herokuapp.com/getflag?type=flat&size=64&country=RU


If request was successful, API returns JSON with flag URL:

    {
        "url": "https://country-flag-api.herokuapp.com/flags/flat/64/RU.png"
    }

Otherwise it will return Error 400.

# Installation and usage

To use it locally, in root directory you should create .env file with hostname

    HOST=http://localhost:7000

Flags were downloaded from gosquared.com under free license.

<!-- From 🇷🇺 with ♥️ -->
