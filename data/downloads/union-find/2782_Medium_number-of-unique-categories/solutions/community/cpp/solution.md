# One Element Each Category

**Author:** Benlegend
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3791449/](https://leetcode.com/problems/number-of-unique-categories/solutions/3791449/)

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
/**
 * Definition for a category handler.
 * class CategoryHandler {
 * public:
 *     CategoryHandler(vector<int> categories);
 *     bool haveSameCategory(int a, int b);
 * };
 */
class Solution {
public:
    // O(n^2) time O(n) space worst case, O(n) time O(1) space best;
    int numberOfCategories(int n, CategoryHandler* categoryHandler) {
        // the first element of each category
        vector<int> ctgs;
        for (int i = 0; i < n; i++) {
            int j = 0;
            while (j < ctgs.size()) {
                if (categoryHandler->haveSameCategory(ctgs[j], i)) {
                    break;
                }

                j++;
            }

            // a new category
            if (j == ctgs.size()) {
                ctgs.push_back(i);
            }
        }

        return ctgs.size();
    }
};
```