# [Python3] greedy

**Author:** ye15
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598954/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598954/)

---


Downvoters, leave a comment! 

For solutions of biweekly 66, please check out this [commit](https://github.com/gaosanyong/leetcode/commit/2efa877859ad8f79f212b8ebde3edf5730d457ad)
```
class Solution:
    def minimumBuckets(self, street: str) -> int:
        street = list(street)
        ans = 0 
        for i, ch in enumerate(street): 
            if ch == 'H' and (i == 0 or street[i-1] != '#'): 
                if i+1 < len(street) and street[i+1] == '.': street[i+1] = '#'
                elif i and street[i-1] == '.': street[i-1] = '#'
                else: return -1
                ans += 1
        return ans 
```