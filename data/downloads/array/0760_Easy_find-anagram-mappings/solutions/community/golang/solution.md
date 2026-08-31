# Golang solution faster than 100%

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/1208546/](https://leetcode.com/problems/find-anagram-mappings/solutions/1208546/)

---

I didn't really think this solution would work because the problem states: "These lists nums1 and nums2 may contain duplicates. If there are multiple answers, output any of them.", but then I realized that since it says "output any of them" we can just output the last one we found.

**The Code:**

```
func anagramMappings(A []int, B []int) []int {
	m := make(map[int] int)
	res := make([]int, len(A))

	for i, i2 := range B {
		m[i2] = i
	}

	for i := range A {
		res[i] = m[A[i]]
	}
    
	return res
}
```