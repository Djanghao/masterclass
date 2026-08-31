# Brute Force

**Author:** axelu
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3789973/](https://leetcode.com/problems/number-of-unique-categories/solutions/3789973/)

---

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
    int numberOfCategories(int n, CategoryHandler* categoryHandler) {
        if( n == 1 )
            return 1;

        // 1 <= n <= 100
        // small constraint -> brute force

        int cat[n];memset(cat,0,sizeof cat);
        int catnbr = 0;
        for(int i = 0; i < n; ++i) {
            // is element i already mapped to a category?
            if( cat[i] != 0 )
                continue;

            ++catnbr;
            // check all other elements not yet mapped to a category,
            // if they belong to the same category as the i'th element
            for(int j = i+1; j < n; ++j)
                if( cat[j] == 0 && categoryHandler->haveSameCategory(i,j) )
                    cat[j] = catnbr;
        }

        return catnbr;
    }
};
```