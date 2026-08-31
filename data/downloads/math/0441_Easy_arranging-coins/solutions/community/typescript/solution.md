# ✅ JAVASCRIPT SIMPLE || Upvote if ❤️

**Author:** vfyodorov
**Votes:** 6
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/3246339/](https://leetcode.com/problems/arranging-coins/solutions/3246339/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The N is a sum of the linear sequence $$(n = 1 + (1 + 1) ...)$$. So general formula is $$ n = i*(i + 1)/2$$, where i equals to full stairs count. 

Therefore $$i^2 + i - 2n = 0$$
$$discriminant = 1^2 - 4*1*(-2n) = 8n + 1$$
$$i_+ = (-1 + d^{0.5})/2$$
$$i_- = (-1 - d^{0.5})/2$$

$$i_- < 0$$ therefore it can't be our answer
$$i_+ >= 0$$ but it can be float, therefore 
$$res = Math.floor(i_+)$$


# Complexity
- Time complexity:
$$O(log(N))$$ because of the square root

- Space complexity:
$$O(1)$$

# Code
```
function arrangeCoins(n: number): number {
    const d = 8*n + 1;
    const res = Math.floor((-1 + d**0.5)/2);
    return res;
};
```