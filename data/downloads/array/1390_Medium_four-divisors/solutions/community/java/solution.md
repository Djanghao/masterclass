# Java solution

**Author:** Obose
**Votes:** 7
**Link:** [https://leetcode.com/problems/four-divisors/solutions/3102833/](https://leetcode.com/problems/four-divisors/solutions/3102833/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of this problem is to find the sum of all values in the input array that have exactly four divisors. To solve this problem, we can iterate over the input array and find all four divisors of each element and add them up if the number of divisors is exactly four.
# Approach
<!-- Describe your approach to solving the problem. -->
We can use divide and conquer approach to calculate the sum of the four divisors of each element in the array. We can first find all the divisors of the current element, and then for each divisor, we can check if it is a perfect square, in which case we need to add it only once, or else we can add both the divisor and the corresponding quotient. We then need to add up the divisors if the number of divisors is exactly four.

# Complexity
- Time complexity: $$O(n * \u221An)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int sumFourDivisors(int[] nums) {
        int sum = 0;
        for(int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int count = 0;
            int sumOfDivisors = 0;
            for(int j = 1; j <= Math.sqrt(num); j++) {
                if(num % j == 0) {
                    if(j * j == num) {
                        count++;
                        sumOfDivisors += j;
                    } else {
                        count += 2;
                        sumOfDivisors += (j + (num / j));
                    }
                }
            }
            if(count == 4) {
                sum += sumOfDivisors;
            }
        }
        return sum;
    }
}
```