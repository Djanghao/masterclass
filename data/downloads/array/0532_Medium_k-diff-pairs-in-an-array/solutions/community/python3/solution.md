# ✔️ Python O(n) Solution | 98% Faster | Easy Solution | K-diff Pairs in an Array

**Author:** pniraj657
**Votes:** 36
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1757434/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1757434/)

---

**\uD83D\uDD3C IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D**

Visit this blog to learn Python tips and techniques and to find a Leetcode solution with an explanation: https://www.python-techs.com/

**Solution:**
```
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        cnt=0
        c=Counter(nums)
        
        if k==0:
            for key,v in c.items():
                if v>1:
                    cnt+=1
        else:
            for key,v in c.items():
                if key+k in c:
                    cnt+=1
        return cnt
```
**Thank you for reading! \uD83D\uDE04 Comment if you have any questions or feedback.**
