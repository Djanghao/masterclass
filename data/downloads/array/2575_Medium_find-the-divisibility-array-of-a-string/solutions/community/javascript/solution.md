# Simple solution

**Author:** svolkovichs
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3232409/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3232409/)

---

# Intuition
Devidability could be calculated iteratively
# Approach
Let's iterate the word char by char. Let's consider new character addition. If at ith step we had `k(i)` and we need to add `c` at current step `k(i+1) = 10*k(i) + c`. We can split `k(i)` as `n*m + r` where `r` is `k(i) mod m`. So `k(i+1) = 10*(n*m + r) + c= 10*n*m + 10r + c`. So to check if `k(i+1)` could be devided by `m` we need to check of `10r + c` could be devided by `m`.

# Complexity
- Time complexity:
O(N)
- Space complexity:
O(1)

# Code
```javascript []
var divisibilityArray = function(word, m) {
    const result = (new Array(word.length)).fill(0)
    let rest = 0
    for(let i = 0; i < word.length; i++) {
        rest = (rest * 10 + (word[i] - '0')) % m
        if(rest == 0){
            result[i] = 1
        }
    }
    
    return result
};
```
```python []
class Solution(object):
    def divisibilityArray(self, word, m):
        """
        :type word: str
        :type m: int
        :rtype: List[int]
        """
        temp = 0
        res = [0] * len(word)
        for i in range(len(word)):
            temp = (temp * 10 + int(word[i])) % m
            if temp == 0:
                res[i] = 1
                
        return res
```
