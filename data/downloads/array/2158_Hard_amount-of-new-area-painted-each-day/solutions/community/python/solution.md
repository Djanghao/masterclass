# [Python] Jumping in 1d array

**Author:** tushars2007
**Votes:** 70
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1792770/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1792770/)

---

1. Initialize a 1D number jump array of size 50000
2. Iterate on intervals 
3. For each interval traverse *start* to *end*  marking jump value as end.
4. if any jump index is already marked (i.e. > 0) skip to the jump value, saving traversal. and continue #3 till interval is complete. 


```
        p = [0] * 50000 # 1D number array
        ans = []
        for (start,end) in paint:
            res = 0
            # loop from start to end of the interval
            while start < end : 
                # if jump value is set
                if p[start] != 0 : 
                    start = p[start]
                # if jump value is not set
                else :
                    res += 1
                    p[start] = end
                    start += 1
           
            ans.append(res)
        return ans