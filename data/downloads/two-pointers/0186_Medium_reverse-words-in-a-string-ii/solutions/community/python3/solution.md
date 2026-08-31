# Python 3, In-place, O(n)

**Author:** timzeng
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/572068/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/572068/)

---

```
class Solution:
    def reverseWords(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        self.reverse(s,0,len(s)-1)
        i = j = 0
        while j < len(s):
            if s[j] == ' ':
                self.reverse(s,i,j-1)
                i = j+1
            j+=1
        self.reverse(s,i,j-1)
        
    def reverse(self, s, left, right):
        while left<right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -=1
```

***
Check on my [repo](https://github.com/zengtian006/LeetCode) to get Leetcode solution(Python) with classification: https://github.com/zengtian006/LeetCode
***