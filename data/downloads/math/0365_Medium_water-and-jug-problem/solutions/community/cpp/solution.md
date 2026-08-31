# Clear Explanation of Why Using GCD

**Author:** TonyLic
**Votes:** 114
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/83720/](https://leetcode.com/problems/water-and-jug-problem/solutions/83720/)

---

Forget about two jugs pouring between each other, which may make you confused. 

Let's make it simple: assuming we have one big enough bucket and two cups with volume `x` and `y`, respectively. Now we want to perform a series of operation -- pouring water in and out only by those two cups with exactly amount `x` or `y`. Somehow, there will be only `z` water left in this big bucket eventually. Then the equation will be:

    z = m * x + n * y

 `m` means using cup-x `m` times. If m is positive, it means pouring in. Otherwise, it's pouring out.
`n` is similar.

For example, `4 = (-2) * 3 + 2 * 5`, which means you pour in water twice with cup-5 and pour out water twice with cup-3. Talk back to the question, it's like we first fill jug-5, pour water to jug-3 from jug-5, empty jug-3, pour the remaining `2` water into jug-3 from jug-5, fill jug-5 again, pour water into jug-3 from jug-5, empty jug-3, then we have only `4` water left in jug-5. It's exactly fill jug-5 twice and empty jug-3 twice.  

Now the question is, can we find those two `m` and `n` exist? 

The answer is YES. Here we need a little math -- [Bezout's identity][1], which is:

 **We can always find `a` and `b` to satisfy `ax + bx = d` where `d = gcd(x, y)`** 

So, everything is clear, if `z % d == 0`, then we have `(a*z/d)*x + (b*z/d)*y = z`, which means `m` and `n` exist.

Below is the code:

    class Solution {
    public:
    bool canMeasureWater(int x, int y, int z) {
        return z == 0 || (z - x <= y && z % gcd(x, y) == 0);
    }
    private:
    int gcd(int x, int y)
    {
        return y == 0 ? x : gcd(y, x % y);
    }
    };

  [1]: https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity