# PHP Solution

**Author:** muneebshoukat60
**Votes:** 6
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/3078843/](https://leetcode.com/problems/richest-customer-wealth/solutions/3078843/)

---

# Intuition
The first intuition was to use a loop and array_sum function to solve this problem

# Approach
I used the array_map function to iterate and that returns an array containing sum of each inner array and then use max function to find the max value.

# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
 $$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[][] $accounts
     * @return Integer
     */
    function maximumWealth($accounts) {
        return max(array_map('array_sum',$accounts));
    }
}
```