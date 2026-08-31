# Solution using Mathematics (4-liner) [Time: O(1), Space: O(1)]

**Author:** kodiswaran
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053861/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053861/)

---

**Points to remember:**
- Sort the numbers in ascending order for easy manipulation
- if sum of smallest numbers is less than the largest number, then we can make a+b pairs
	- e.g., (a,b,c) -> 1 2 4
	- here a+b <= c, therefore we can 
		- reduce (a,c) until a == 0 
		- reduce (b,c) until b == 0
- if sum of smallest numbers is greater than c, then we can (a+b)/2 pairs after making c empty
	- E.g., (a,b,c) ->  2 2 2
	- here a+b > c, therefore we can
		- reduce(a,c) then reduce(b,c) until c == 0 [`c` number of stones is removed from `a` and `b` in such a way that at the end there are almost same number of stones in `a` & `b` (maxDiff 1)]
		- using a & b we can make `(a+b)/2` extra pairs

**Time Complexity:** O(1)
**Space Complexity:** O(1)

```
class Solution {
    public int maximumScore(int a, int b, int c) {
        // Make sure a <= b <= c
        if (a>b) return maximumScore(b,a,c);
        if (b>c) return maximumScore(a,c,b);
        
        // if sum of smallest numbers [a+b] is less than c, then we can a + b pairs with the c
        if (a+b<=c) return a+b;
        
        // if sum of smallest numbers is greater than c, then we can (a+b)/2 pairs after making c empty
        return c+(a+b-c)/2;
    }
}
```