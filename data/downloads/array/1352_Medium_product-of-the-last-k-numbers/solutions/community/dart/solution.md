# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/3920593/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/3920593/)

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

    List<int> res = [];

    void add(int num) {
        res.add(num);
    }
    
    int getProduct(int k) {
        var prod = 1;
        for (int i = res.length - 1; i >= res.length - k; i--) {
            prod *= res[i];
        }
        return prod;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * ProductOfNumbers obj = ProductOfNumbers();
 * obj.add(num);
 * int param2 = obj.getProduct(k);
 */
```