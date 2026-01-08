# Fork by Rye

## Fork Info

This repository is a fork of <https://github.com/raisingpixels/loficode-hugo-theme>,  
which was released under the MIT License[^PermaLicense] by raisingpixels.

## Why This Fork

I found the theme quite nice and wanted to adjust it to better fit my needs.

## Licensing Notes

All original files remain under the MIT License, even if modified.  

Any new files or substantial additions created in this fork are licensed under the Apache License 2.0.

Therefore the License in License.fork only becomes applicable in the aforementioned cases.

## Contribution to Upstream Repository

If the upstream project becomes active again, maintainers are welcome to merge any useful changes from this fork.

## Compatibility

Therefore the config of the upstream repo shall still work with this fork and the other way around.
However there might be bit of tweaking and adding options.

## Differences to upstream

Code changes see: <https://github.com/raisingpixels/loficode-hugo-theme/compare/main...dozro:loficode-hugo-theme:main>

- keyboard navigation in posts
- Support for a few more social networking links
- Generator notice on homepage
- option to link privacy policy and imprint (displayed on the homepage)
- generates atom feeds as well as xml feeds
- It can now be added as a hugo module

### Added configuration options

#### legal information

to add `Alice` as copyright holder and imprint located at `https://example.org/imprint` and privacy policy at `https://example.org/privacy`

```toml
[params.legal]
    copyrightHolder = "Alice"
    imprint = "https://example.org/imprint"
    privacyPolicy = "https://example.org/privacy"
```

### Fediverse and Twitter Creator Attribution

#### New Configuration option

##### Options for hugo config

```toml
# In your params.author
[params.author]
    # your other parameters for params.author
    fediverseIdentifier = "@example@mastodon.social"
    twitterIdentifier = "@example"
```

#### Options per file (in frontmatter)

```yml
fediverseIdentifier: "@example2@mastodon.social"
twitterIdentifier: "@example2"
```

### Twitter Head Attributes

Difference to the upstream version:

- refactored to [layouts/partials/head/meta/fediverse.html](./layouts/partials/head/meta/fediverse.html)

### Modularization of styling

Better seperation of concerns in Stylesheets.

Stylesheets may still be bundled with a config option:

```toml
  [params.customization]
    modularCSS = true
```

### Schema.org

#### Person

It will automatically create <person/index.html> for a person definition.

#### added hugo config

```toml
[params.author]
    # other author params
    pronouns = "they/them"
    gender = "Female"    
    [[params.author.sameAs]]
      url = "https://example.org/1"
    [[params.author.sameAs]]
      url = "https://example.org"
```

### Unified Social Media Preview Configuration

#### In the hugo config

```toml
  # Data for social media previews
  [partial.socialPreview]
    defaultFeaturedImage = ""
```

##### Explanation of config options

- `defaultFeaturedImage`: Path to the default image, should be in `static` or `assets`

#### per Post (in frontmatter)

```yml
featuredImage: "example.png"
```

### Hugo Module

It can now be added to your site as a hugo module[^HugoModuleDocu]:

```toml
[module]
[[module.imports]]
path = "github.com/dozro/loficode-hugo-theme"
```

and run in your terminal:

```bash
# if you haven't initialized your site as a module yet run:
hugo mod init github.com/<USER>/<REPO>
# and then get the module
hugo mod get github.com/dozro/loficode-hugo-theme
```

<!-- seperator to the footnotes, for those viewing this in a unsupported renderer -->

[^PermaLicense]: Permalink to license: <https://github.com/raisingpixels/loficode-hugo-theme/blob/e2422ab990d0a914adee8e0d6c7492ffc985f653/LICENSE> (added in commit e2422ab990d0a914adee8e0d6c7492ffc985f653)
[^HugoModuleDocu]: Hugo Module Documentation in the Hugo Documentation <https://gohugo.io/hugo-modules/use-modules/>
