# Python > 95% Time, O(logN) and Constant Memory, Commented and Explained

**Author:** ddhnnng
**Votes:** 13
**Link:** [https://leetcode.com/problems/elimination-game/solutions/552326/](https://leetcode.com/problems/elimination-game/solutions/552326/)

---

```
class Solution:
    def lastRemaining(self, n: int) -> int:
        N = n   # number of remaining numbers
        fwd = True   # flag for forward/backward elimination
        m = 2    # elimination step/interval
        s = 0   # elimination base

        while N > 1:
            if fwd or N % 2 == 1: 
                s += m // 2
            m *= 2
            N = N // 2
            fwd = not fwd   # reverse the pass direction
        return s+1
```

# Solution Explanation
For this problem, we begin by identifying some patterns in the elimination.
Using **zero-based indexing**, let's consider the pattern of elimination to be simulated by the following bit of logic:
```
for i in range(n):
	if (i - s) % m == 0:
		# eliminate
		# first elimination pass forward, s=0 and m=2
```

But first, let's consider a few things: 1) elimination steps 2) elimination base 3) direction of elimination, and 4) number of remaining numbers left to eliminate

1) Pattern Interval/Step:
	* Described by variable `m` in the soln. code - the intervals/distance between the eliminated numbers
	* **The interval/step doubles after every pass of elimination `m *= 2`**
	* The first pass of elimination is described by the solution of numbers `i`, such that `i % 2 == 0` 

2) Elimination Base Update/Shift - (Normalizing the Pattern)
	* Described by `s` in the soln. code - It normalizes the pattern to zero base
	* From 1), we see that we are left with a pattern of numbers that are all separated by a fixed interval/step of `m` beginning with an elimination base. `s` will only ever increase in magnitude as we eliminate numbers, a tightening of boundaries from both ends of the range of N.
	* So we can describe the whole pattern of numbers to be eliminated with `(i - s) % m == 0` for some `s`
	* After the first pass, we can see that next pass of numbers would eliminate numbers with a fixed step of `m = 4` or `(i - s) % 4 == 0` for some `s`

3) Direction of Elimination
	* Described by variable `fwd` in the soln. code
	*  Forward: the minimum *remaining* element is eliminated, AKA elimination base is eliminated
	*  Backward: the minimum *remaining* element *may not* be eliminated (more on this to follow)

4) Numbers Remaining to Eliminate
	* Described by variable `N` in the soln. code
	* **Odd** number of numbers remaining `N # odd`
		* Note: This elimination pattern looks the same, regardless of pass direction. Min and max remaining numbers are eliminated, we know that the minimum remaining number (elim. pattern base `s`) will be shifted up by a half step, such that `s += m // 2`. 
	* **Even** number of numbers remaining `N # even`
		* This elimination pattern will differ between a foward and backward pass by a half-step, `m // 2`.
			* Foward: If there are an even count of numbers remaining, and it is a forward pass, the base of the elimination pattern will eliminated such that we'd shift the base of the elimination pattern up by half-step, `s += m // 2`
			* Backward: If there are an even count of numbers remaining, and it is a backward pass, then the base of elimination pattern will be left unchanged for the next pass, a forward pass (because we will not end up eliminating the base in the backward pass). The only update in this situation is the doubling of the step size, `m *= 2`.

So the above code simulates the . We will only need O(logN) passes, since we are effectively eliminating half the possible numbers every time. This is simulated by the updates `N = N // 2` in the soln. code.
Memory is constant.

We are left with the final elimination pattern for a single number, which will be described by the base, `s` here. We return `s+1` because we use **zero-based** indexing for the code.


