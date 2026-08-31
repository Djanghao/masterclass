# Easy Solution TypeScript

**Author:** SuvirHari
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/3514136/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/3514136/)

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
class ProductOfNumbers {
    stream: number[]
    constructor() {
        this.stream = []
    }

    add(num: number): void {
        this.stream.push(num)
    }

    getProduct(k: number): number {
        let res: number = 1
        for (var i = this.stream.length - 1; i > this.stream.length - k - 1; i--) {
            res *= this.stream[i]
        }
        return res
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
```