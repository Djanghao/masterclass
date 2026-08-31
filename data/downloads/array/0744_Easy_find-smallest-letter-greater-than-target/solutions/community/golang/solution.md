# Golang sort.Search Solution logn

**Author:** Gokhang
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1903505/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1903505/)

---

```
func nextGreatestLetter(letters []byte, target byte) byte {
    r := sort.Search(len(letters), func(i int) bool{
        return letters[i] > target
    })
    if r < len(letters){
		return letters[r]
	}
    return letters[0]
}
```