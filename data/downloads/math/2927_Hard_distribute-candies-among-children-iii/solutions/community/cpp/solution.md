# C++ O(1), Follow the given hits. Stars and Bars + Inclusive/Exclusive.

**Author:** U_U
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-iii/solutions/4270591/](https://leetcode.com/problems/distribute-candies-among-children-iii/solutions/4270591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Function name is self explainable.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long distributeCandies(int n, int limit) {
        
        int64_t allPossibles = GetWaysToSplit_N_By_K_NonNegative(n, 3);
        int64_t result = allPossibles - (OneChildHasMoreThanLimit(n, limit) * 3 -
                        TwoChildenHaveMoreThanLimit(n, limit) * 3 +
                        ThreeChildrenHaveMoreThanLimit(n, limit));

        cout << allPossibles << "," << OneChildHasMoreThanLimit(n, limit) << ","
             << TwoChildenHaveMoreThanLimit(n, limit) << ","
             << ThreeChildrenHaveMoreThanLimit(n, limit) << ","
             << endl;

        return result;
    }

    int64_t OneChildHasMoreThanLimit(int64_t n, int64_t limit)
    {
        if (n <= limit) return 0;
        int64_t m = n - limit;
        return m * (m + 1) / 2;
    }

    int64_t TwoChildenHaveMoreThanLimit(int64_t n, int64_t limit)
    {
        if (n <= limit * 2) return 0;
        int64_t m = n - limit * 2 - 1;        
        return m * (m + 1) / 2;
    }

    int64_t ThreeChildrenHaveMoreThanLimit(int64_t n, int64_t limit)
    {
        if (n <= limit * 3) return 0;
        int64_t m = n - limit * 3 - 2;        
        return m * (m + 1) / 2;
    }

    int64_t GetWaysToSplit_N_By_K_NonNegative(int64_t n, int64_t k)
    {
        // C(n + k - 1, k - 1)
        int64_t ret = 1;
        for (int64_t i = n + 1; i <= n + k - 1; ++i)
        {
            ret *= i;
        }
        int64_t temp = 1;
        for (int i = 1; i <= k - 1; ++i)
        {
            temp *= i;
        }
        return ret / temp;
    }
};
```