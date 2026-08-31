# 5 lines python

**Author:** leetcode_dafu
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3460960/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3460960/)

---


		res,last=[],0        
        for s,e in sorted(ranges)+[[n,n]]:
            res+=[[last,s-1]]*(s>last)
            last=max(last,e+1)              
        return res