# 💥C# | Runtime beats 100.00%, Memory beats 70.00% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/5801602/](https://leetcode.com/problems/largest-multiple-of-three/solutions/5801602/)

---

# Intuition
To find the largest number divisible by three from a set of digits, we need to ensure that the sum of the digits is divisible by three. If the sum isn\u2019t divisible by three, we need to adjust it by removing some digits, while keeping the result as large as possible.

# Approach
Count Digits: Track how many of each digit we have.

Check Sum: Compute the sum and its remainder when divided by 3.

Adjust Digits: Remove the smallest number of digits to make the sum divisible by 3.

Build Number: Arrange remaining digits in descending order, avoiding leading zeros.

# Complexity
- Time complexity:
O(N), iterating through the digits a few times.

- Space complexity:
 O(1), using a fixed amount of extra space.

# Code
```csharp []
public class Solution {
    public string LargestMultipleOfThree(int[] digits) {
        var count = new int[10];
        int sum = 0;

        // Count digit frequencies and calculate sum of digits
        foreach (var digit in digits) {
            count[digit]++;
            sum += digit;
        }

        // Calculate remainder of sum when divided by 3
        int remainder = sum % 3;

        // Adjust the count based on the remainder
        if (remainder != 0) {
            if (!RemoveDigits(count, remainder)) {
                RemoveDigits(count, 3 - remainder);
            }
        }

        // Construct the largest number
        var result = new List<char>();
        for (int i = 9; i >= 0; i--) {
            result.AddRange(Enumerable.Repeat((char)(i + '0'), count[i]));
        }

        // Remove leading zeros
        var resultStr = new string(result.ToArray());
        return resultStr.Length > 0 && resultStr[0] == '0' ? "0" : resultStr;
    }

    private bool RemoveDigits(int[] count, int remainder) {
        if (remainder == 1) {
            // Try to remove one digit with remainder 1
            for (int i = 1; i <= 9; i += 3) {
                if (count[i] > 0) {
                    count[i]--;
                    return true;
                }
            }

            // If not possible, try to remove two digits with remainder 2
            int needed = 2;
            for (int i = 2; i <= 8; i += 3) {
                while (count[i] > 0 && needed > 0) {
                    count[i]--;
                    needed--;
                }
                if (needed == 0) return true;
            }
        } else if (remainder == 2) {
            // Try to remove one digit with remainder 2
            for (int i = 2; i <= 8; i += 3) {
                if (count[i] > 0) {
                    count[i]--;
                    return true;
                }
            }

            // If not possible, try to remove two digits with remainder 1
            int needed = 2;
            for (int i = 1; i <= 9; i += 3) {
                while (count[i] > 0 && needed > 0) {
                    count[i]--;
                    needed--;
                }
                if (needed == 0) return true;
            }
        }
        return false;
    }
}

```