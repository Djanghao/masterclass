# Python Sliding Window Technique (With Explanation)!!

**Author:** Speculations
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/471080/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/471080/)

---

Here, we want to use the sliding window technique! 

1. Get your first window and check if there are duplicates
2. Remove the first character and add the last character to your next window
3. Check if there are any duplicates inside of each window by comparing the length of the window with the length of the set of your current window

I believe the time complexity of this is O(n-k) but correct me if I'm wrong! Still struggling a bit with time complexity

```
class Solution:
    def numKLenSubstrNoRepeats(self, s: str, K: int) -> int:
        if len(s) < K:
            return 0
        
        self.points = 0
        currString = s[:K]
        self.checkDup(currString)
        
        for i in range(len(s) - K):
            currString = s[i+1:i+K+1]
            self.checkDup(currString)
        
        return self.points 
    
    def checkDup(self, currString):
        if len(currString) == len(set(currString)):
            self.points += 1
```