# ROT13 Twice For Extra Security

**Author:** OpenSauce
**Votes:** 2
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1973637/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1973637/)

---

```
type Codec struct {
}


func Constructor() Codec {
    return Codec{}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	return longUrl
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
    return shortUrl
}
```