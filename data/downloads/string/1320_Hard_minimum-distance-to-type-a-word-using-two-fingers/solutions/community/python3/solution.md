# 📌📌 Well-Coded || Clean & Concise || 93% faster 🐍

**Author:** abhi9Rai
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/1509241/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/1509241/)

---

## Implementation:
'''

	class Solution:
    def minimumDistance(self, word: str) -> int:
        def dist(pre,cur):
            if pre==None:
                return 0
            x1,y1 = divmod(ord(pre)-ord('A'),6)
            x2,y2 = divmod(ord(cur)-ord('A'),6)
            return abs(x1-x2) + abs(y1-y2)
        
        @lru_cache(None)
        def fingers(i,l,r):
            if i == len(word):
                return 0
            n1 = dist(l,word[i]) + fingers(i+1,word[i],r)
            n2 = dist(r,word[i]) + fingers(i+1,l,word[i])
            return min(n1,n2)
        
        return fingers(0,None,None)

**feel free to ask if you need Explaination. \uD83E\uDD17**
### Thanks and Upvote If like the Idea !!\uD83E\uDD1E