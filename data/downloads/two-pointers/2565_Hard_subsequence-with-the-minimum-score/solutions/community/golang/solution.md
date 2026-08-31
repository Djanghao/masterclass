# Go/Python O(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3176312/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3176312/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minimumScore(s string, t string) int {
    suffix :=make([]int,len(s))
    j := len(t)-1
    for i:=len(s)-1;i>=0;i--{
        if 0 <= j && s[i] == t[j]{
            j--
        }
        suffix[i] = j 
    }
    answer := j + 1
    j = 0
    for i,_ := range(s){
        answer = min(answer, max(0, suffix[i] - j + 1))
        if j < len(t) && s[i] == t[j]{
            j++
        }
    }
    return min(answer, len(t)-j)
}

func min(a,b int) int{
    if a<b{
        return a
    }
    return b
}

func max(a,b int) int{
    if a>b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        suffix = [0 for i in range(len(s))]
        j = len(t)-1
        for i in range(len(s)-1,-1,-1): 
            if 0 <= j and s[i] == t[j]:
                j -= 1
            suffix[i] = j 
        answer = j + 1
        j = 0 
        for i,_ in enumerate(s): 
            answer = min(answer, max(0, suffix[i] - j + 1))
            if j < len(t) and s[i] == t[j]:
                j += 1
        return min(answer, len(t)-j)
```