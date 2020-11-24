# markdown.html
One file drop-in Markdown file browser and viewer for text files served using basic directory listing.

## Usage
`markdown.html` is designed to be a drop-in file browser and viewer that does not require any configuration or other files.

To use it, copy the [`./src/markdown.html`](src/markdown.html) file into a folder that is served over HTTP using the web server's folder listing functionality. `markdown.html` basically uses the folder listing as an API for enumerating the files and folders. It should work with almost any web server, but it has only be tested against NGINX, Apache, and IIS.

### Supported features

* Only 1 file with zero external dependencies
* [`SVG images`](https://github.com/microsoft/fluentui-system-icons/) are inlined
* May be installed as a PWA (Progressive Web App) app. Dynamically generated inline data URI manifest file.
* Viewer for `txt` and `md` text files using the browser video engine
* Sharable URL that will load `markdown.html` in the same folder location, and video position
* Social media metadata (`og:\*`, `twitter:\*`)
* Text file metadata (bitrate, resolution, etc)
* Keyboard shortcuts (press `?` to see the list)
* Support for viewing text files directly from **OneDrive** and **Google Drive**. You **must supply the appropriate keys** in the `app.options.cloud` AND register your app with Microsoft and/or Google. Instructions are in the code. `markdown.html` also **must be served over HTTPS** for the Microsoft and Google auth flows to work. [Remix this Glitch]() to easily check it out over HTTPS with your own API keys.

## Supported Browsers

The latest version of these browsers is supported:

* Edge (Chromium)
* Firefox
* Safari (Mac, iPadOS, iOS)
* Chrome

## Supported Web Servers

The latest version of these web servers (others may work as well):

* NGINX ([`autoindex`](https://nginx.org/en/docs/http/ngx_http_autoindex_module.html) on)
* Apache ([`mod_autoindex`](https://cwiki.apache.org/confluence/display/HTTPD/DirectoryListings))
* IIS (enable [`Directory Browsing`](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/directorybrowse))

## Other

`markdown.html` uses [`folder.api](https://github.com/pseudosavant/folder.api) to consume HTTP directory listings like an API

## License

* [MIT](./LICENSE)

&copy; 2020 Paul Ellis
