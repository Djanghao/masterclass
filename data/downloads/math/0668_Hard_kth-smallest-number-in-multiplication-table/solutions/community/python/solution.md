# O(n^1/2 log(mn)) Math Formula Solution, 100% speed / 4 ms

**Author:** kcsquared
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1248927/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1248927/)

---

**Explanation**

This solution is extremely fast: I had posted about another 100% speed binary search solution earlier, and this algorithm is more than twice as fast for our inputs. 

The trick should be familiar if you've done other hard Leetcode math problems based on division: **integer floored division with a fixed numerator x has only 2 * sqrt(x) possible values**. The binary search part of the function is the same, but let's take a look at the core of the binary search:

```python
while lo < hi:
	mid = (lo + hi) // 2
	if sum(min(mid // i, m) for i in range(1, min(mid, n) + 1)) < k:
		lo = mid + 1
	else:
		hi = mid
```

This is annoying, because it's not easy to simplify a sum of mins. Rewrite this sum to take out the min():

```python
while lo < hi:
	mid = (lo + hi) // 2
	cutoff = mid // m
	if m*cutoff + sum(mid // j for j in range(cutoff+1, min(mid, n) + 1)) < k:
		lo = mid + 1
	else:
		hi = mid
return lo
```

Now, we have a sum of floored divisions with a constant numerator, so we're almost there. We want the value of a sum which looks like
```python
x//1 + x//2 + x//3 + ... + x // (x-2)  +  x // (x-1)  +  x // x
```
but possibly with some terms missing on either end. This [kind of sum is famous, and has a simple O(sqrt(x))](http://oeis.org/A006218) formula. The key insight is that we can break the sum into two sums: 

```python
sum(x // j for 1 <= j <= floor(sqrt(x))) + sum(x // j for floor(sqrt(x)) < j <= x).
```

The first sum has `O(sqrt(x))` terms and is summed directly. The second sum has `O(x)` terms, but only `O(sqrt(x))` unique terms: these terms are `1,2,...,floor(sqrt(x))`. All that's left is counting how many times each term is repeated in that second sum: we can compute this as the sum of `j * (x//j - x//(j+1)) for j = 1, 2, ... floor(sqrt(x))`. 

So in at most 2 * `sqrt(n)` additions, we can evaluate the "enough" function that's at the core of the binary search.



**Python** (heavily commented)


```python
class Solution:
	def findKthNumber(self, m: int, n: int, k: int) -> int:
		if k == 1 or k == m*n:
			return k
		# Make m >= n
		if m < n:
			m, n = n, m

		lo = 1

		# Top row is 1..n and left column is 1..m
		if n >= k:
			hi = k//2 + 1
		elif m >= k:
			hi = k + 1

		else:  # if we check k == m*n before, can do hi = nm - n instead of nm
			hi = n*m - n

		def not_enough(x: int) -> bool:
			floored_sqrt = math.isqrt(x)

			# Special case: want the full sum, so we can just use our formula
			if x <= n:
				return 2*(sum(x // j for j in range(1, floored_sqrt + 1))) - floored_sqrt*floored_sqrt < k

			# Cutoff value for j above which x // j < m.
			cutoff = x // m

			# Arbitrary choice of constant 40 for direct sum when x is tiny
			if n < 40 or n <= floored_sqrt:
				return m * cutoff + sum(x // j for j in range(cutoff + 1, n + 1)) < k

			sum_so_far = sum(x // j for j in range(cutoff + 1, floored_sqrt + 1)) + m*cutoff

			final_floored_divisor, last_ind, first_divisor = x // n, floored_sqrt, x // (floored_sqrt + 1)

			# Check if sum will either: definitely exceed k, or definitely not exceed k
			if sum_so_far + (n-floored_sqrt)*final_floored_divisor >= k:
				return False
			if sum_so_far + first_divisor*(n-floored_sqrt) < k:
				return True

			for current_floored_divisor in range(first_divisor, final_floored_divisor, -1):
				# next_ind is maximum j s.t. x//j == current_floored_divisor.
				# last_ind is maximum j s.t. x//j > current_floored_divisor

				next_ind = x // current_floored_divisor
				sum_so_far, last_ind = sum_so_far + (next_ind - last_ind) * current_floored_divisor, next_ind

			# Add value from final divisor
			return sum_so_far + (n - (x // (final_floored_divisor + 1))) * final_floored_divisor < k

		# Perform binary search
		while lo < hi:
			mid = (lo + hi) // 2
			if not_enough(mid):
				lo = mid + 1
			else:
				hi = mid
		return lo
```


**C++**

```c++
class Solution
{
public:
    int findKthNumber(int m, int n, int k) 
    {   
        if (k == 1 || k == m * n) return k;
        if (m < n) {
            swap(m, n);
        }
        int lo = 1, hi = m * n - n, mid = 0;
        
        if (n >= k) hi = k / 2 + 1;
        else if (m >= k) hi = k + 1;
        
        while (lo < hi)
        {
            mid = lo + (hi - lo) / 2;

            if (not_enough(mid, m, n, k)) lo = mid + 1;
            
            else hi = mid;
        }
        
        return lo;
    }
    
    
    bool not_enough(const int x, const int m, const int n, const int k)
    {   
        const int floored_sqrt = (int) sqrt(x);
        
        if (x <= n) {
            int tot=0;
            for (int j = 1; j <= floored_sqrt; j++) tot += x / j;
            return 2*tot - floored_sqrt*floored_sqrt < k;
        }
        
        const int cutoff = x / m;
        
        int sum_so_far = m*cutoff;
        
        if (n < 40 || n <= floored_sqrt) {
            for (int j = cutoff+1; j <= n; j++) sum_so_far += x / j;
            return sum_so_far < k;
        }
        
        for (int j = cutoff+1; j <= floored_sqrt; j++) sum_so_far += x / j;
        
        const int final_floored_divisor = x/n, first_divisor = x/(floored_sqrt+1);
        
        if (sum_so_far + (n-floored_sqrt)*final_floored_divisor >= k) return false;
        if (sum_so_far + first_divisor*(n-floored_sqrt) < k) return true;
        
        sum_so_far += (n - (x / (final_floored_divisor + 1))) * final_floored_divisor;
        int next_ind=0, last_ind=floored_sqrt;
        
        for (int curr_div = first_divisor; curr_div > final_floored_divisor; curr_div--){
            next_ind = x / curr_div;
            sum_so_far += (next_ind - last_ind) * curr_div;
            last_ind = next_ind;
            if (sum_so_far >= k) return false;
            
        }
        return true;
    }
};
```

****

**Complexity**
Our runtime is `O(sqrt(min(m,n))*log(mn))` worst case, although usually slightly less because of better lower and upper bounds for our answer. In theory, the core sum can be done in `O(n^(1/3))`, but I haven't implemented that algorithm because it's complex and I'm fairly sure it's much slower for values of n that aren't astronomically large.
The median times I saw were 160ms for Python3 and 4 ms for C++, although Leetcode's timings have seemed to fluctuate wildly in the last few weeks, even when immediately resubmitting the same code.

Space is `O(1)`.

**Please ask any questions** or comment further optimizations. I believe the binary search bounds for low and high can be further improved at the start, but I'm having trouble figuring that out. It's feasible that this can be improved to `O(sqrt(min(m,n))*log(m))` with a simple change.