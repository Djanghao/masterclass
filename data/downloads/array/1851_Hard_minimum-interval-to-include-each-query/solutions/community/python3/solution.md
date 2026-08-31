# 📌📌 For Beginners || Easy-Approach || Well-Explained || Clean & Concise 🐍

**Author:** abhi9Rai
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1422509/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1422509/)

---

## IDEA:
\uD83D\uDC49 *Sort the intervals by size and the queries in increasing order, then iterate over the intervals.
\uD83D\uDC49 For each interval (left, right) binary search for the queries (q) that are contained in the interval (left <= q <=  right), pop them from the array queries and insert them in the array answers (with size = right - left +1).
\uD83D\uDC49 Since you're looking at the interval from the smallest to the largest, the first answer found is correct.*
'''

	class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        
        intervals.sort(key = lambda x:x[1]-x[0])
        q = sorted([qu,i] for i,qu in enumerate(queries))
        res=[-1]*len(queries)
		
        for left,right in intervals:
            ind = bisect.bisect(q,[left])
            while ind<len(q) and q[ind][0]<=right:
                res[q.pop(ind)[1]]=right-left+1
        return res
		
Feel free to ask if you have any doubt. \uD83E\uDD17
**Thanku** and do **Upvote** if you got any help !!\uD83E\uDD1E