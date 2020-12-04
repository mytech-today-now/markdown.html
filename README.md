# markdown.html
One file drop-in Markdown file browser and viewer for text files served using basic directory listing.

![image](https://user-images.githubusercontent.com/455424/100281804-69c5e280-2f1f-11eb-880f-ad0b3e9d27e0.png)
![image](https://user-images.githubusercontent.com/455424/100281829-73e7e100-2f1f-11eb-921b-e7da5f1d6a3e.png)

## Usage
`markdown.html` is designed to be a drop-in file browser and viewer that does not require any configuration or other files.

To use it, copy the [`./src/markdown.html`](src/markdown.html) file into a folder that is served over HTTP using the web server's folder listing functionality. `markdown.html` basically uses the folder listing as an API for enumerating the files and folders. It should work with almost any web server, but it has only be tested against NGINX, Apache, and IIS.

### Supported features

* Only 1 file with zero external dependencies
* Viewer for text files with syntax highlighting and markdown rendering
* Sharable URL that will load `markdown.html` with the same document and folder location
* Text file metadata (file size, mime-type, etc)
* Keyboard shortcuts (press `?` to see the list)
* May be installed as a PWA (Progressive Web App) app. Dynamically generated inline data URI manifest file.
* [`SVG images`](https://github.com/microsoft/fluentui-system-icons/) are inlined
* Social media metadata (`og:\*`, `twitter:\*`)
* Support for viewing text files directly from **OneDrive** and **Google Drive**. You **must supply the appropriate keys** in the `app.options.cloud` AND register your app with Microsoft and/or Google. Instructions are in the code. `markdown.html` also **must be served over HTTPS** for the Microsoft and Google auth flows to work. [Remix this Glitch](https://markdown-html-remix.glitch.me/src/markdown.html#eyJsb2NhdGlvbiI6Imh0dHBzOi8vbWFya2Rvd24taHRtbC1yZW1peC5nbGl0Y2gubWUvIiwiZG9jdW1lbnQiOiIifQ%3D%3D) to easily check it out over HTTPS with your own API keys.

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
