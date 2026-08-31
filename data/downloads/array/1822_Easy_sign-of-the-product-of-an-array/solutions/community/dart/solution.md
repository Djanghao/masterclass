# ‎️‍🔥 DART‎️‍ 🔥100%🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476393/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476393/)

---

# Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int arraySign(List<int> nums) {
      int sign = 1; 
        for (int n in nums) {
            if (n == 0) {
                return 0; 
            } 
			if (n < 0) {
                sign = -sign; 
            }
        }
        return sign; 

  }
}
```