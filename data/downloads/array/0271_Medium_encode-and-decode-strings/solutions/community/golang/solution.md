# Sleek & fast [Go] (no delimiters / no hacks)

**Author:** plustwo
**Votes:** 1
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/4495642/](https://leetcode.com/problems/encode-and-decode-strings/solutions/4495642/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Encode the strings by preceding each one with its length, in bytes. The given constraints ensure each length fits in a single byte. This approach eliminates any need for delimiters (including the associated scanning for & escaping of any embedded instances of those delimiters appearing in the given strings).

In the encoding process, build the composite result as a slice of bytes (`[]byte`), and use the special form of `append` to append each string directly to that slice. Appending strings is slower (because forces a copy each time), as does converting a string to a `[]byte` prior to the `append`.

It's tempting (and probably a better design for a real-world application) to also encode the overall number of strings (also guaranteed to fit in a single byte) ... but it's not actually needed here.

# Complexity
Using _n_ to denote the total number of characters in the given strings:
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
type Codec struct {
}

func (codec *Codec) Encode(strs []string) string {
    enc := []byte{}
	for _, s := range strs {
		enc = append(enc, byte(len(s)))
        enc = append(enc, s...)
	}
    return string(enc)
}

func (codec *Codec) Decode(s string) []string {
    strs := []string{}
    n := len(s)
	for j, k := 1, 0; j <= n; j = k+1 {
		k = int(s[j-1]) + j
		strs = append(strs, s[j:k])
	}
	return strs
}

```