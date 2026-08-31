# Python 3 | Binary Search, Sqrt | Explanation

**Author:** idontknoooo
**Votes:** 23
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/1690452/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/1690452/)

---

### Explanation
- The idea is same as implement `double sqrt(double n)` using binary search. Below is a template.
	```python
	def sqrt_double(x):
		left, right = (1, x) if x >= 1 else (x, 1)
		while right - left >= 1e-10:     # precision is 1e-10
			mid = left + (right - left) / 2
			if mid * mid <= x:
				left = mid
			else:
				right = mid
		return right  
	```
- See comments below for more explanation
### Implementation
```
class Solution:
    def equalizeWater(self, buckets: List[int], loss: int) -> float:
        l, r = min(buckets), sum(buckets) / len(buckets) # initialize lowest and highest possible value
        left_over = 1-loss/100                           # calculate left over ratio
        def ok(val):                                     # check if reach to an average of `val` is posible
            cnt = 0
            for bucket in buckets:
                if bucket >= val:
                    cnt += (bucket - val) * left_over    # count left_over after pouring water
                else:
                    cnt -= (val - bucket)                # reduce count for those bucket need more water to reach `val`
            return cnt >= 0
        while r - l >= 1e-5:                             # by description, epsilon is 1e-5
            mid = (l + r) / 2                            # binary search
            if ok(mid):
                l = mid 
            else:    
                r = mid 
        return r
```