# Python3 O(n) solution using math with clear explanation

**Author:** suniljs6
**Votes:** 16
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/676440/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/676440/)

---

let's consider n=3 and k=9
The lexicographical order of the strings are ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]

We can observe that each element a,b,c has repeated 2**(n-1)  times as the first character which is 4 in our case they are ["aba", "abc", "aca", "acb"], ["bab", "bac", "bca", "bcb"], ["cab", "cac", "cba", "cbc"]

We can also observe that total number of permutations are 3*(2**(n-1)) which 12 in our case.


```
from math import ceil
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        single_ele = 2**(n-1)
        if k>3*single_ele:
            return ""
        result = ['a','b','c'][ceil(k/single_ele)-1]
        while single_ele>1:
            k = (k-1)%single_ele +1
            single_ele = single_ele//2
            if result[-1]=='a':
                result+=['b','c'][ceil(k/single_ele)-1]
            elif result[-1]=='b':
                result+=['a','c'][ceil(k/single_ele)-1]
            else:
                result+=['a','b'][ceil(k/single_ele)-1]
        return result
```