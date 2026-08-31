# Ruby Solution Using Binary Search and LCM

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/3442276/](https://leetcode.com/problems/nth-magical-number/solutions/3442276/)

---

# Intuition
It's easy to calculate how many magic numbers there are up to a certain integer, so use binary search.

# Approach
1. Find the LCM
2. Do a binary search to find the smallest number with at least n magical numbers (this would be at most n * the minimum of a and b)
3. Return the answer mod 10**9 + 7

# Complexity
- Time complexity:
$$O(log([a,b].min * n))$$

- Space complexity:
$$O(1)$$

# Code
```
def nth_magical_number(n, a, b)
    lcm = a.lcm(b)
    k = (1..([a,b].min*n)).bsearch do |i|
        i / a + i / b - i / lcm >= n
    end
    k % 1000000007
end
```