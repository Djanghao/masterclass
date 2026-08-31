# O(1) space complexity (with explanation)

**Author:** vladkushnir
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4340788/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4340788/)

---

# Intuition
Let's try to solve one part of the problem - what if we would only be able to substract (without adding). The most efficient way of acheiving that would be substracting the max value possible each time until the full value is used.

Now let's also agree that the "effort" (or number of operations) of binging `-X` to 0 is the same as bringing `+X` to 0. Assuming we have two values `-5` and `+5`, both can be brought to 0 with 2 operations (`+4` & `+1`) and (`-4` & `-1`).

We can apply the same logic, except instead of working with the remainder every time, we would also consider what is the difference between our current value and the next 2^n value and work with the "easiest".

# Approach
Each time we find the closest `2^n` value that is equal or bigger than our current value. Once we have it - we have 2 options:
- If that value is equal to our current N then we found the answer, simply return the count of actions taken so far and add 1.
- The value we found is bigger than our N, but it could be "a little" bigger (N = 59 and K = 64, the difference is just 5), or "a lot" bigger (N = 39 and K = 64, the difference is 25). The main idea here is to figure out what is going to be a lot easier to work with. Let's break down both examples.

# N = 59 and K = 64
We have two options here, we either substract 32 and work with the remainder of 27, or we substract 64 and work with -5. As we figured earlier, we don't really care that "-5" is a negative value, we treat that as 5, because the number of operations is going to be the same. Thus, for this specific case it is easier for us to substract 64 and only figure out "-5" next treating it as "+5".

# N = 39 and K = 64
Same as above, we have two options - we either substract 32 (64/2) or we substract full 64. By substracting 32 the remainder will be 7 and with 64 it is going to be "-25", so same as 25. We go with the smallest which is 7. This is going to pay off later because the closest 2^n for 7 is going to be 8, so we could bring it to 0 by only doing 2 operations (-8 & +1).

**Pay attention how `long` is being used for `K` to handle overflows.**

# Complexity
- Time complexity:
`O(log(n) * m)` where `n` is our input and `m` is a number of operations needed (because we are going to be doing a lookup of proper 2^x power each time we make a substraction or addition) - my best guess

- Space complexity:
`O(1)` - we do not use any extra storage capacity

# Code
```
public class Solution {
    public int MinOperations(int n) {
        var count = 0;
        long nn = n;

        while (nn > 0) {   
            var k = FindClosestK(nn);

            if (k == nn) {
                return count + 1;
            }

            var subDiff = nn - (k / 2);
            var addDiff = k - nn;

            if (subDiff < addDiff) {
                nn = subDiff;
            }
            else {
                nn = addDiff;
            }

            count++;
        }

        return count;
    }

    private long FindClosestK(long n) {
        long k = 1;
        while (k < n) {
            k *= 2;
        }

        return k;
    }
}
```

I hope my explanation makes sense :) Maybe it is not full, but that was my intuition.