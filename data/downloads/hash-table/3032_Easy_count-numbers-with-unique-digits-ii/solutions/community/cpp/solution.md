# Brute Force with optimized comparing loop

**Author:** lixueyi83
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/6007136/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/6007136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution only does limited necessary comparisons to determin whether the input number has unique digits or not.  


# Approach
<!-- Describe your approach to solving the problem. -->
Brute Force comparing the least significant digit with the rest of the digits up to the most significant digit. As long as the dupliate digits was found return `false`, otherwise continue comparing to the end. If no duplicate digit was found, return `true`. 

# Complexity
- Time complexity:
- **O(N*M)**: 
    - `N`: `b-a`
    - `M`: max number of digits of the input number

- Space complexity:
- **O(1)**

# Code
```cpp []
class Solution {
public:
    int helper(int x) {
        while(x) {
            int m = x%10;
            if(0 == x/10) 
                return 1;

            int n = x/10;
            while(n) {
                if(m == n%10)
                    return 0;
                n /= 10;
            }
            x /= 10;
        }
        return 1;
    }

    int numberCount(int a, int b) {
        int res = 0;
        for(int i=a; i<=b; i++) {
            res += helper(i);
        }
        return res;
    }
};
```