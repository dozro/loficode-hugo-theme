module github.com/dozro/loficode-hugo-theme

go 1.25.1

require (
	codeberg.org/dozrye/hugo-og-img-generator v0.0.0-20251119163552-acc49ef4055b // indirect
)

retract (
	[v1.4.0, v1.4.5] // reason: critical bug in hugo build process
)