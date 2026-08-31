# C# Solution for Sum of Digits of String After Convert Problem

**Author:** Aman_Raj_Sinha
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5729104/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5729104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea behind the C# solution is to reduce the size of the problem as early as possible by immediately summing the digits of the numeric values corresponding to the characters in the input string. By doing this, we avoid handling large numbers and keep the computations efficient. Instead of constructing a large intermediate string or number, the solution directly works with the sum of the digits, simplifying the overall process.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initial Conversion and Summing of Digits:
	\u2022	For each character in the string, compute its position in the alphabet (e.g., \u2018a\u2019 -> 1, \u2018b\u2019 -> 2, etc.).
	\u2022	Instead of constructing a large numeric string, immediately sum the digits of each computed position. This step directly reduces the problem\u2019s size and prepares the sum for the next transformation.
2.	Digit-Sum Transformation:
	\u2022	Perform the digit-sum transformation k-1 more times. In each transformation, the number is reduced by summing its digits until the transformation has been applied k times in total.
3.	Helper Function (SumOfDigits):
	\u2022	The SumOfDigits function is key to the approach. It computes the sum of the digits of a number, allowing us to iteratively reduce the number during the transformation steps.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Initial Conversion and Summing of Digits:
	\u2022	Each character in the string is processed individually. Calculating its position in the alphabet and summing its digits both take constant time. Given that there are n characters, this step has a time complexity of O(n).
\u2022	Digit-Sum Transformation:
	\u2022	The digit-sum operation on a number involves summing its digits, which generally takes O(log(sum)) time. Since this transformation is repeated k-1 times, the overall complexity of this part is O(k * log(sum)).
\u2022	Overall Time Complexity:
	\u2022	Combining both parts, the total time complexity is O(n + k * log(sum)). Given that log(sum) is relatively small, the complexity is effectively close to O(n + k).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space for Sum Calculation:
	\u2022	The solution only uses a few integer variables (e.g., for storing the sum and for temporary calculations in the SumOfDigits function). No large data structures are used, so the space complexity is O(1).

# Code
```csharp []
public class Solution {
    public int GetLucky(string s, int k) {
        // Step 1: Convert each character in the string to its position in the alphabet
        int sum = 0;
        foreach (char c in s) {
            int value = c - 'a' + 1;
            sum += SumOfDigits(value);
        }
        
        // Step 2: Perform the transformation k times
        for (int i = 1; i < k; i++) {
            sum = SumOfDigits(sum);
        }
        
        return sum;
    }

    private int SumOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
}
```