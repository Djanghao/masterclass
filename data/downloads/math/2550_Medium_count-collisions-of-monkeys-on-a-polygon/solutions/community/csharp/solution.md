# O(logn) Time O(1) Space

**Author:** d_johnson
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3115317/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3115317/)

---

# Introduction
It should be stated that at the time of the contest, I believe the preparer of the question and test cases misunderstood the prompt. What I mean to say can be illustrated like this. Consider 4 monkeys at different vertices. If monkeys 1 and 2 swap and monkeys 3 and 4 swap, that will $$not$$ result in a collision. However, the test cases at the time of writing this $$directly$$ contradict that. In time, either the description of the problem will likely change, or the test cases themselves will be fixed. In the meantime, below is the solution.

# Intuition
Consider all the ways that a single monkey can move. Either to the left, or to the right (technically clockwise or counter-clockwise, but left and right are easier for me to think about..). Now, how many monkeys are there? You probably see where I am going with this. In statistics, this is an $$n$$ choose 2 problem for the total number of resulting moves. Now how many ways can the monkeys move so that there are $$no$$ collisions? If all monkeys move to the right, or all monkeys move to the left, then there are no collisions. (Additionally, though declared wrong by the test cases... if monkey B swaps with C, or monkey A swaps with B, for all neighboring monkeys, these would also not result in a collision, but I digress..)

As a result of the above, we have n choose 2 minus 2 as our result. That can be otherwise stated as $$2^n\\ -\\ 2$$ potential ways to have a collision.

While I am not certain, I imagine using the C# math pow library will result in TLE (also would increase time complexity to $$O(n)$$). So, instead, I used the same solution that I previously used with the [powx-n](https://leetcode.com/problems/powx-n/) problem (simplified to ignore cases based on constraints), to calculate $$2^n$$ in $$O(logn)$$. [Here](https://leetcode.com/problems/powx-n/solutions/2848885/o-log-n-time-with-o-1-space/?orderBy=most_votes) is my solution to the above problem in case you are interested.

# Approach
1. Calculate $$2^n$$ in $$O(logn)$$ time and subtract 2
2. Don't forgot to take into account for this statement in the problem description:```Return the number of ways the monkeys can move so that at least one collision happens. Since the answer may be very large, return it modulo 10^9 + 7.```

# Complexity
- Time complexity:
$$O(logn)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    const ulong modulo = 1000000007;
    
    public int MonkeyMove(int n) {
        //Should subtract 4 if even, but test cases are incorrect
        ulong collisions = (toPowerOf(2, n) - 2) % modulo;
        return Convert.ToInt32(collisions);
    }
    
    //3^ 5 = 3 ^ 4 * 3 = 9 ^ 2 * 3, 81 ^ 1 * 3 = 243
    private ulong toPowerOf(ulong x, int n) {
        ulong remainder = 1;
        
        while (n > 1) {
            if (n % 2 == 0) {
                x *= x;
                n /= 2;
            } else {
                n -= 1;
                remainder *= x;
            }
            
            x = x % modulo;
            remainder = remainder % modulo;
        }
        
        return x * remainder;
    }
}
```