# Go strings.NewReplacer 100% solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/577224/](https://leetcode.com/problems/html-entity-parser/solutions/577224/)

---

```go
func entityParser(text string) string {
	r := strings.NewReplacer("&quot;", "\"", "&apos;", "'", "&amp;", "&", "&gt;", ">", "&lt;", "<", "&frasl;", "/")
	return r.Replace(text)
}
```