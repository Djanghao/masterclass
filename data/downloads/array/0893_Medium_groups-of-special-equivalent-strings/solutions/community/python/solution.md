# [python3]  detail explanation of special-equivalent

**Author:** zhanweiting
**Votes:** 40
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/358795/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/358795/)

---

* The point here is to understand the following requirement:
A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].
Don't trap your thoughts by the word 'swap'.
Your goal is how to identify the equivalent strings. 
* There are two possible outcomes of i%2: 1 or 0. i is the index of the input string.
	if i % 2 ==1: i = 1,3,5,7 ... in other words, i is odd number. In other words, the order of the odd index's value doesn't matter here. You can swap them.
	if i % 2 ==0: i = 0,2,4,6 ... in other words, i is even number. In other words, the order of the even index's value doesn't matter here. You can swap them.
*  So sort the string's odd index elements, and sort the string's even index elements and combine them to create a new string called "sort_string." If two string has the same "sort_string," they are the special-equivalent strings.
```
A = ["abcd","cdab","adcb","cbad"]
      ### sort odd index element      | sort even index element
"abcd" :              bd              |               ac
"cbad" :              bd              |               ac
"adcb" :              bd              |               ac
"cdab" :              bd              |               ac
# so they are equivalent strings
```

```
class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
        res = set()
        for s in A:
            sort_odd_even = ''.join(sorted(s[1::2]) + sorted(s[::2]))
            res.add(sort_odd_even)
        return len(res)
```