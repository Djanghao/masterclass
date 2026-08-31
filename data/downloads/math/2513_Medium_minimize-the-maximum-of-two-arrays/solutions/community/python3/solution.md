# [C++|Java|Python3] binary search

**Author:** ye15
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2946621/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2946621/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/3ffc910c12ff8c84890fb15351216a0fa85dc3ac) for solutions of biweekly 94. 

**Intuition**
Here, we can use binary search to look for the tightest upper bound. Given a value `x`, the condition for `x` to be a valid upper bound is that 
1) there is enough number between 1 to `x` that are not divisible by `divisor1`; 
2) there is enough number between 1 to `x` that are not divisible by `divisor2`; 
3) in the overlapping area, if some numbers are allocated to cover `uniqueCnt1` they cannot be used to cover `uniqueCnt2`. 


**C++**
```
class Solution {
public: 
	int minimizeSet(int divisor1, int divisor2, int uniqueCnt1, int uniqueCnt2) {
		long lo = 0, hi = INT_MAX, mult = lcm((long) divisor1, divisor2); 
		while (lo < hi) {
			int mid = lo + (hi-lo)/2; 
			if (uniqueCnt1 <= mid-mid/divisor1 && uniqueCnt2 <= mid-mid/divisor2 && uniqueCnt1+uniqueCnt2 <= mid-mid/mult) hi = mid; 
			else lo = mid+1; 
		}
		return lo; 
	}
};
```
**Java**
```
class Solution {
	public int minimizeSet(int divisor1, int divisor2, int uniqueCnt1, int uniqueCnt2) {
		int g = divisor1; 
		for (int x = divisor2; x > 0; ) {int tmp = g; g = x; x = tmp % x; }
		long lo = 0, hi = Integer.MAX_VALUE, mult = ((long) divisor1*divisor2/g); 
		while (lo < hi) {
			long mid = lo + (hi-lo)/2;
			if (uniqueCnt1 <= mid-mid/divisor1 && uniqueCnt2 <= mid-mid/divisor2 && uniqueCnt1+uniqueCnt2 <= mid-mid/mult) hi = mid; 
			else lo = mid+1; 
		}
		return (int) lo; 
	}
}
```
**Python3**
```
class Solution: 
	def minimizeSet(self, divisor1: int, divisor2: int, uniqueCnt1: int, uniqueCnt2: int) -> int: 
		lo, hi = 0, 1<<32-1
		mult = lcm(divisor1, divisor2)
		while lo < hi: 
			mid = lo + hi >> 1
			if uniqueCnt1 <= mid - mid//divisor1 and uniqueCnt2 <= mid - mid//divisor2 and uniqueCnt1+uniqueCnt2 <= mid - mid//mult: hi = mid
			else: lo = mid+1
		return lo 
```