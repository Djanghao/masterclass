# Rabin-Karp + Collision Check (36ms)

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/1317600/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/1317600/)

---

* Create one hash per word in the list of words
* For each position, iterate over hashes, removing one character and comparing results
* When there is a match, do regular string comparison

Notes:
* The example below does not cause any collisions as it is, but it is best practice to perform a collision check anyway.
* Base 29 is an arbitrary prime close to but above the actual required base (26)
* Mod 1e9+7 is also quite arbitrary - it's just easy to remember.
* Removing the collision check reduces execution time by roughly 1/5.

```go
func differByOne(dict []string) bool {
	// Compute a hash of each element in the dict, then remove one element
	// at a time from the hashes and compare to check if there is a match.
	mod := 1_000_000_007
	base := 29
	// Create hash of each word
	hashes := make([]int, len(dict))
	for i, w := range dict {
		for _, ch := range w {
			hashes[i] = (hashes[i]*base + int(ch-'a')) % mod
		}
	}

	n := len(dict[0])
	pow := 1
	for j := n - 1; j >= 0; j-- {
		seen := make(map[int][]int)
		for i, w := range dict {
			// Remove current character from hash and check if it has been seen before
			h := (mod + hashes[i] - pow*int(w[j]-'a')%mod) % mod
			for _, otherIdx := range seen[h] {
				if w[:j] == dict[otherIdx][:j] &&
					w[j+1:] == dict[otherIdx][j+1:] {
					return true
				}
			}
			seen[h] = append(seen[h], i)
		}
		pow = (pow * base % mod)
	}
	return false
}
```