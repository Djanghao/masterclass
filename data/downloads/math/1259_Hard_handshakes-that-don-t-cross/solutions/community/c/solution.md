# Easy Explanation, easier solution :), dp

**Author:** p--
**Votes:** 2
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/1843983/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/1843983/)

---

Imagine a circle, and all these points on a circle.
We wish to draw chords such that 
 - each point belongs to a chord exactly once.
 - No chord intersects.

Thus, each chord has to divide the circle in two.
In addition, each chord must leave enough points on each side of itself to form their own pairs (thus we cannot have an odd number of points on any side of the chord).

Induction.
Thus, we affix our points to be `0 .... n - 1`. (0 indexed)
And then we choose 0 .----> 2 to be the first handshake.
0 -----> 4 or we choose 0----> 4 to be our first handshake
0 ------> 6 .... or this, or another even number.

On any of these choices, we break the problem into 2 problems, exactly like itself.
Thus, we can solve for left and right  problems independently.

Now, the the two segment can be defined as 
L = i - 2
R = n - i

Where `i` is our chose first handshake, and thus only contributes as 1 possible way to handshake (0 ---------> i).

Equation: F(n) = F(i - 2) * F(i - n) .... where i = 2 .... 4 ... 6 ... n;


```
class Solution {
public:
  int dp[1001] = {};
  #define mod ((long)1e9 + 7)
    int numberOfWays(int numPeople) {
      if (numPeople <= 2) return 1;
      if (dp[numPeople]) return dp[numPeople];
      long s = 0;
      for (int i = 2; i <= numPeople; i += 2)
      {
        s += ((long)numberOfWays(i - 2) * (long)numberOfWays(numPeople - i)) % mod;
      }
      return dp[numPeople] = (s % mod);
    }
};```