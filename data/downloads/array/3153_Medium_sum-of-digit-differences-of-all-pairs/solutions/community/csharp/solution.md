# O(n*m) Digit Difference with Explanation

**Author:** dhananjayah98
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5415678/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5415678/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of summing the digit differences in an array of numbers, the initial thought is to keep track of the occurrence of each digit at each position across all numbers. By maintaining this record, we can efficiently compute the differences as we process each number in the array.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**:
   - Create a list of integer arrays (`matrix`). Each array will keep track of the number of occurrences of digits (0-9) at each position (units, tens, hundreds, etc.).
   - Process the first number to initialize the `matrix` with the digit counts for each position.

2. **Digit Occurrence Tracking**:
   - Iterate through the rest of the numbers in the array.
   - For each number, process each digit and update the `matrix` to reflect the occurrence of the digit at the respective position.
   - Calculate the sum of differences by using the previously recorded occurrences of the same digit at the same position.

3. **Summation**:
   - Accumulate the sum of differences in a variable (`sum`) as you process each digit of every number.

4. **Final Result**:
   - Return the total sum of digit differences.

# Complexity
- Time complexity:
  - The time complexity is \\(O(n * m)\\), where \\(n\\) is the length of the array and \\(m\\) is the maximum number of digits in any number in the array.

- Space complexity:
  - The space complexity is \\(O(m)\\), where \\(m\\) is the maximum number of digits in any number in the array.

# Code
```csharp
public class Solution {
    public long SumDigitDifferences(int[] nums) {
        List<int[]> matrix = new List<int[]>();

        int n = nums[0];
        
        // Process the first number to initialize the matrix.
        while (n != 0) {
            // Add a new array for each digit position.
            matrix.Add(new int[10]);
            // Set the corresponding digit in the array.
            matrix[matrix.Count - 1][n % 10] = 1;
            // Move to the next digit.
            n = n / 10;
        }

        long sum = 0;

        // Iterate through the rest of the numbers in the array.
        for (int i = 1; i < nums.Length; i++) {
            n = nums[i];
            int j = 0;
            // Process each digit of the current number.
            while (n != 0) {
                // Calculate the sum of differences based on previous occurrences of the digit.
                sum += (i - matrix[j][n % 10]);
                // Increment the count of the digit at the current position.
                matrix[j][n % 10] += 1;
                // Move to the next digit.
                n = n / 10;
                j++;
            }
        }
        
        return sum;
    }
}

```