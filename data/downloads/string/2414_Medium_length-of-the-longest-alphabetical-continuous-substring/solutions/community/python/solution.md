# [Python3] O (n) with line by line comments.

**Author:** MeidaChen
**Votes:** 39
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590074/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590074/)

---

At each position, it either belongs to previous continues substring or it is the beginning of a new substring.


```
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        cur = 1 ### We are currently at 0 position, so the length is 1.
        res = 1 ### At least the string should contain 1 letter.
        for i in range(1,len(s)):
        	### If the ith letter is continued from the previous letter, 
        	### update the curLength and store the maximum length to res
            if ord(s[i])-ord(s[i-1])==1:
                cur = cur+1
                res = max(cur,res)
            ### This is the start of a new substring with length 1.
            else:
                cur = 1
        return res
```

**Upvote** if you like this post.

**Connect with me on [LinkedIn](https://www.linkedin.com/in/meida-chen-938a265b/)** if you'd like to discuss other related topics

\uD83C\uDF1F If you are interested in **Machine Learning** || **Deep Learning** || **Computer Vision** || **Computer Graphics** related projects and topics, check out my **[YouTube Channel](https://www.youtube.com/@meidachen8489)**! Subscribe for regular updates and be part of our growing community.