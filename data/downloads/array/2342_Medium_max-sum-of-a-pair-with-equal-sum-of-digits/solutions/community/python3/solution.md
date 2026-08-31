# Python3 || dict(heaps), 8 lines, w/ explanation   ||  T/S: 54% / 75%

**Author:** Spaulding_
**Votes:** 7
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2297244/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2297244/)

---

Here's the plan:

  \u2022 We sort the elements of nums into a dict of maxheaps, according to sum-of-digits.

  \u2022 For each key, we determine whether there are at least two elements in that key's values, and if so, compute the product of the greatest two elements.

  \u2022 We return the the greatest such product as the answer.

For example:
			
```
   nums = [6,15,13,12,24,21] \u2013> {3:[12,21], 4:[13], 6:[6,15,24]}
```
				
Only two keys qualify, 3 and 6, for which the greatest two elements are 12, 21 and 15, 24, respectively. Because 12 + 21 = 33 and 15 + 24 = 39, the answer is 39.
```
class Solution:     
    def maximumSum(self, nums: List[int]) -> int:
        d, mx = defaultdict(list), -1
        digits = lambda x: sum(map(int, list(str(x))))      # <-- sum-of-digits function
       
        for n in nums:                  <-- construct max-heaps
            heappush(d[digits(n)],-n)       (note "-n") 

        for i in d:                     <-- pop the two greatest values off
            if len(d[i]) > 1:               each maxheap (when possible) and
                mx= max(mx, -heappop(d[i])-heappop(d[i]))   #     compare with current max value.
                                                           
        return mx
```
[https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/submissions/1287323201/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/submissions/1287323201/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
