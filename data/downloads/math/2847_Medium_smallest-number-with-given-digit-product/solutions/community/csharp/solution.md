# c#, greedy

**Author:** bytchenko
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4011284/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4011284/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In (degenerated) case when `n` is one digit number `n <= 9` we can return `d` immediately.

In general case we try to divide `n` by `9` while it's possible and save divisors, then by `8` while it's possible etc. up to `2`. If, finally, we get value greater than `1` then `n` contains *prime divisor* greater than `9` and we return `-1`. Otherwise, we have divisors to construct the answer. 

# Approach
<!-- Describe your approach to solving the problem. -->

I've used `Stack` to store `divisors` to avoid sorting them: we divide in `9, 8, ... 2` order when digits in the final answer should be concated in `2, 3, ... 8, 9` order.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$

# Code
```
public class Solution {
    public string SmallestNumber(long n) {
        if (n <= 9)
            return n.ToString();

        Stack<long> divisors = new ();

        for (int d = 9; d >= 2; ) 
            if (n % d == 0) {
                n /= d;

                divisors.Push(d);
            }
            else 
                d -= 1;
        
        return n > 1 
            ? "-1"
            :  string.Concat(divisors);
    }
}
```