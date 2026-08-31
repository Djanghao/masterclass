# [scala] one liners | Beats 100%

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4752189/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4752189/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ProductOfNumbers() {

    var stack = List.empty[Int]

    def add(num: Int) {
        stack = num :: stack
    }

    def getProduct(k: Int): Int = {
        stack.take(k).product
    }

}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
```