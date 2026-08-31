# Golang 17 lines of easy to understand solution without using sort

**Author:** leontung7
**Votes:** 44
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/434269/](https://leetcode.com/problems/group-anagrams/solutions/434269/)

---

We can take advantage of anagram's defination:
> An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

So we can consider using a hashmap to store every letter's frequency and group those who have the same frequency, but in Golang slice cannot be a key. 
We are told:
> All inputs will be in lowercase.
So we can use array as a key, whose capacity is 26 since there are only 26 letters. 

* time complexity: O(nk), n is `len(strs)`, k is the length of the longest string in `strs`
* space complexity: O(nk), for we are using a hashmap

```
func groupAnagrams(strs []string) [][]string {
	mp := map[[26]int][]string{}
	for _, s := range strs {
		k := [26]int{}
		for i := 0; i < len(s); i++ {
			k[s[i]-'a'] += 1
		}
		mp[k] = append(mp[k], s)
	}
	res := [][]string{}
	for _, v := range mp {
		res = append(res, v)
	}
	return res
}
```