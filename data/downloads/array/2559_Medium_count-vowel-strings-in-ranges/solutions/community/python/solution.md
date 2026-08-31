# ✔ Python3 Solution | Prefix Sum

**Author:** satyam2001
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143797/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143797/)

---

# Intution
It is a standard range query question which can be solved using `Prefix Sum`

# Approach
At index `i` of Array `A` , it contains the no. of words which have first and last character vowel upto `i`. To find the no. of such words we need to subtract the no. words upto `l` from `r`.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        n = len(words)
        A = [0] * (n + 1)
        vowel = 'aeiou'
        ans = []
        for i in range(n):
            A[i + 1] = A[i] + (1 if words[i][0] in vowel and words[i][-1] in vowel else 0)
        for l, r in queries:
            ans.append(A[r + 1] - A[l])
        return ans
```