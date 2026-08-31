# Very detailed explanation, for math dummies like me

**Author:** pampommk
**Votes:** 5
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/4320812/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/4320812/)

---

This is based on other answers, can't take any credit.
I just wanted to explain it tiny step by tiny step, without making any approximations. Just as how I would explain it on the white board during the interview.

**Starting formula to express that we want a sum of consecutive numbers to be equal to n**
n = (x + 0) + (x + 1) + (x + 2) + ... + (x + k - 1)
x and k are unknown
n >= 1
x > 0

To arrive to an elegant code we need to know the bounds of k for iteration and the condition to be able to say that we found an answer.

**First we need to know the bounds of k so let's express formula differently**
n = (x + 0) + (x + 1) + (x + 2) + ... + (x + k - 1)

**here we observe that we have k terms so**
kx + (0 + 1 + 2+ .....+ k-1) = n

At this point **we need to know** the general formula for sum of consecutive integers is:
S = n(n+1)/2
if we substitue n with k-1 for our case we get:
S = ((k - 1)(k - 1 + 1))/2 = k(k-1)/2

Coming back to the formula:
kx + (0 + 1 + 2+ .....+ k-1) = n
kx + k(k-1)/2 = n

if we express it as:
kx = n - k(k-1)/2 and we know that both k and x are positive numbers then we know that 
for LHS to be positive, RHS needs to be positive so:

 n - k(k-1)/2 > 0
 2n > k * k - k

**We have upper bound of k. Now lower bound.**
if we take k = 0, then kx = n - k(k-1)/2 -> 0 = n so it''s invalid as we know n >= 1

**Therefore k goes from 1 to 2n > k * k - k**

**Now we need a condition where we can say that we found one of the possible answers.**
Taking our formula again:
kx = n - k(k-1)/2

and observing that the LHS is a multiple of k so whenever RHS is also a multiple of k (or RHS % k == 0)
we found ONE answer.

Hope that the code now makes sense. 

# Code
```
class Solution {
public:
    int consecutiveNumbersSum(int n) {
            int ans = 0;

    for(int k = 1; k * k - k < 2 * n; k++)
    {
        if((n - (k * (k-1)/2)) % k == 0)
        {
            ans++;
        }
    }
    return ans;
    }
};
```