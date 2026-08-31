# Easy to understand Scala solution

**Author:** boes13
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4368382/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4368382/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem can be reduced as math problem. 
From the sequence: $$1, 1+2, 1+2+3, 1+2+3+4, ...$$, we can generate a formula to get $$i$$th element value: $$U(x) = (x^2 + x)/2.$$

Let's say $$n = 17$$, the total money will be
$$(1+2+3+4+5+6+7) + (2+3+4+5+6+7+8) + (3+4+5) = $$
$$7*0+(1+2+3+4+5+6+7)+7*1+(1+2+3+4+5+6+7)+3*2+(1+2+3)$$
Let's assume a<sub>i</sub>$$ = (1+2+3+...+i)$$,
$$d$$ is the integer value of division between $$n$$ and 7,
and $$r$$ is the remainder integer of division between $$n$$ and 7.
Then, we got:
$$7*0+$$a<sub>7</sub>$$+7*1+$$a<sub>7</sub>$$+r*2+$$a<sub>3</sub>$$=$$
$$7(0+1)+2*$$a<sub>7</sub>$$+r*d+$$a<sub>r</sub>$$=$$
$$7(1+2+...+d-1) + d*$$a<sub>7</sub>$$+r*d+$$a<sub>r</sub>$$=$$
$$7*$$a<sub>d-1</sub>$$+d*$$a<sub>7</sub>$$+r*d+$$a<sub>r</sub>


# Approach
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
object Solution {
    def totalMoney(n: Int): Int = {
        val u: Int => Int = x => x * (x + 1) / 2
        val x = n / 7
        val r = n % 7

        x * u(7) + 7 * u(x-1) + u(r) + r*x
    }
}
```