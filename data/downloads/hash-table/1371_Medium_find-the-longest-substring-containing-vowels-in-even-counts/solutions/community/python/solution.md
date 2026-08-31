# [Python] solution in O(n) time and O(1) space explained

**Author:** m-Just
**Votes:** 92
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/531850/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/531850/)

---

We can use 5 bits to represent the parity of the number of occurrences of vowels. For example, we can use 0/1 for even/odd numbers, then if we have 4a, 3e, 2i, 1o, 0u, the representation would be 01010. As we scan through the array, we can update the representation in O(1) time by using the XOR operation, and then store the index where every different representation first appeared. When we encounter a representation, say 01010 again at index `j`, we can look back on the index `i` where 01010 first appeared, and we know that the substring from `i` to `j` must be a valid string, and it is the longest valid substring that ends at `j`.
```python
def findTheLongestSubstring(self, s: str) -> int:
    vowels = {'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16}
    d, n, r = {0: -1}, 0, 0
    for i, c in enumerate(s):
        if c in vowels:
            n ^= vowels[c]
        if n not in d:
            d[n] = i
        else:
            r = max(r, i - d[n])
    return r
```
Vote up if you find this helpful, thanks!