# netlify-plugin-cargo-auth-cloudsmith

This configures a Git credential helper so that `cargo` is able to pull
crates from Cloudsmith in Netlify build.

## Install

The recommended way to install this right now is using a git npm dependency:

`package.json`

```js
{
  // ...
  "dependencies": {
    "netlify-plugin-cargo-auth-cloudsmith": "netlify/netlify-plugin-cargo-auth-cloudsmith#v1.0.0"
  }
}
```

`netlify.toml`

```toml
[[plugins]]
package = "netlify-plugin-cargo-auth-cloudsmith"
```

### Setup

- Go to `Settings -> Build & deploy -> Environment`
- Add an environment variable named `CLOUDSMITH_TOKEN`, set it to an Entitlement token
  that has read access to your repository
- Make sure your repository includes a `.cargo/config.toml` that lists the registry
