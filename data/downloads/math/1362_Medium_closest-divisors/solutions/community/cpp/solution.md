# C++ solution. 3ms

**Author:** Obose
**Votes:** 5
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/3083010/](https://leetcode.com/problems/closest-divisors/solutions/3083010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking to find the two closest integers that can divide the given number num such that num + 1 and num + 2 are both divisible by these integers. One approach to solve this problem is to start from the square root of num + 2 and work our way down to 1, checking if num + 1 or num + 2 is divisible by each integer.
# Approach
<!-- Describe your approach to solving the problem. -->
The given solution starts by initializing a loop variable i with the square root of num + 2. Then, it starts iterating the loop from i to 1. In each iteration, it checks if num + 1 is divisible by i, if yes it returns the value of i and (num + 1) / i. If not, it checks if num + 2 is divisible by i, if yes it returns the value of i and (num + 2) / i. If none of the above conditions are met then it returns an empty vector.
# Complexity
- Time complexity: $$O(sqrt(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> closestDivisors(int num) {
        for (int i = sqrt(num + 2); i > 0; i--) {
            if ((num + 1) % i == 0) {
                return {i, (num + 1) / i};
            }
            if ((num + 2) % i == 0) {
                return {i, (num + 2) / i};
            }
        }
        return {};
    }
};
```