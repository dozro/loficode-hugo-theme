module github.com/dozro/loficode-hugo-theme

go 1.25.1

require codeberg.org/dozrye/hugo-og-img-generator v1.0.0 // indirect

retract (
	v1.4.7 // reason: faulty imports
	[v1.4.0, v1.4.6] // reason: bug during hugo build
)
