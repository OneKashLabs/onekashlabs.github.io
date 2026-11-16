# onekashlabs.github.io

The OneKash Labs website at https://onekash.org. Built with Docusaurus and published to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm ci
npm start          # local preview with live reload
npm run build      # static site in build/
npm run serve      # serve build/
```

`static/` is copied as is: `CNAME`, `robots.txt`, `images/` and `.well-known/mcp-registry-auth`
(the MCP Registry's domain check; the deploy keeps hidden folders for it).
