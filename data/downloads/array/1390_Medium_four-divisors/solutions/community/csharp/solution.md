# C# Brute Force solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5598966/](https://leetcode.com/problems/four-divisors/solutions/5598966/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, you need to create a method that will iterate through each integer in the array, find the divisors of each integer, and sum those divisors if the integer has exactly four divisors. 
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initalize 'sum' to store the total sum of divisors for numbers with exactly four divisors.
//  Iterate over each number in the array 'nums'.
//  For each number initalize 'divisorSum' to store the sum of its divisors and 'divisorCount' to count 
//  the number of divisors.
//  Loop through possible divisors from '1' to 'sqrt(num)'. If 'i' is a divisor of 'num', check if it is
//  a perfect square.
//  *if 'i * i == num', it is a perfect square, so only add 'i' once..
//  *Otherwise, add both 'i' and 'num / i' to the sum and increment the count by 2.
//  If 'divisorCount' exceeds 4 during the loop, break early since we only carea bout numbers with 
//  exactly 4 divisors.
//  After checking all possible divisors, if 'divisorCount' equals 4, add 'divisorSUm' to the total of 
//  'sum'.
//  Return the final 'sum'.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n * sqrt(m)), where n is the length of the array and 'm' is the maximum value in the array.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
___

# Code
```
public class Solution {
    public int SumFourDivisors(int[] nums) {
        int sum = 0;

        foreach (int num in nums) {
            int divisorSum = 0;
            int divisorCount = 0;

            // Iterate through possible divisors
            for (int i = 1; i * i <= num; i++) {
                if (num % i == 0) {
                    if (i * i == num) {
                        divisorSum += i;
                        divisorCount++;
                    } else {
                        divisorSum += i + num / i;
                        divisorCount += 2;
                    }

                    // If more than 4 divisors, break early
                    if (divisorCount > 4) {
                        break;
                    }
                }
            }

            // If exactly 4 divisors, add to the sum
            if (divisorCount == 4) {
                sum += divisorSum;
            }
        }

        return sum;
    }
}
```