# Python LIS based approach

**Author:** constantine786
**Votes:** 31
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/2071626/](https://leetcode.com/problems/russian-doll-envelopes/solutions/2071626/)

---

The prerequisite for this problem is to understand and solve [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/). So if you are familiar with LIS and have solved it, the difficulty of this problem is reduced.

Now, before we can start implementing LIS for this problem, we need to determine the sort order of the input `envelopes`.  You can read this post which explains how the sort order is determined ->  [Explanation on which sort order to choose](https://leetcode.com/problems/russian-doll-envelopes/discuss/2071477/Best-Explanation-with-Pictures)

**Time - O(nlogn)** - Time required for sorting and performing LIS
**Space - O(n)** - space required for `res`.

```
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes.sort(key=lambda x: (x[0], -x[1]))
        
        res = []		
		# Perform LIS
        for _, h in envelopes:
            l,r=0,len(res)-1
			# find the insertion point in the Sort order
            while l <= r:
                mid=(l+r)>>1
                if res[mid]>=h:
                    r=mid-1
                else:
                    l=mid+1        
            idx = l
            if idx == len(res):
                res.append(h)
            else:
                res[idx]=h
        return len(res)
                                               
```

We can make the above code more concise by using a python library `bisect_left` to locate the insertion point in the sort order. 

```
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes.sort(key=lambda x: (x[0], -x[1]))        
        res = []
        for _, h in envelopes:
            idx = bisect_left(res, h)
            if idx == len(res):
                res.append(h)
            else:
                res[idx]=h
        return len(res)                                                                                              
```

---

***Please upvote if you find it useful***