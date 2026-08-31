# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5981102/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5981102/)

---

# Intuition
Find numbers that are palindromic in both base-10 and a given base k. A palindromic number reads the same forwards and backwards. By systematically generating potential palindromic numbers and checking if they satisfy the conditions for both bases, we can identify and sum the smallest k-mirror numbers.

# Approach
Use backtracking to generate palindromic numbers of increasing lengths, check if they are palindromic in base-10 and base k, and collect the first n valid k-mirror numbers to sum them.

# Complexity
- Time complexity:
The time complexity is O(n * m), where n is the number of k-mirror numbers to find, and m is the average time taken to check if a number is a palindrome in both bases. The checking becomes more efficient as the number of digits increases.

- Space complexity:
The space complexity is O(n) for storing the valid k-mirror numbers in a list, plus O(m) for the temporary storage of palindromic numbers during backtracking.

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution
{
    // Main method to find the sum of the first n k-mirror numbers
    public long KMirror(int k, int n)
    {
        // List to hold the k-mirror numbers found
        List<long> result = new List<long>();
        int len = 1;

        // Continue generating palindromes until we find n k-mirror numbers
        while (result.Count < n)
        {
            // Backtrack to generate palindromic numbers of the current length
            Backtrack(result, new char[len++], k, n, 0);
        }

        // Calculate the sum of the found k-mirror numbers
        long sum = 0;
        foreach (long num in result)
        {
            sum += num; // Sum up the valid k-mirror numbers
        }

        return sum; // Return the total sum of k-mirror numbers
    }

    // Helper method for backtracking to generate palindromic numbers
    private void Backtrack(List<long> result, char[] arr, int k, int n, int index)
    {
        // If we have found enough k-mirror numbers, exit the function
        if (result.Count == n)
            return;

        // Check if we have filled half of the palindrome
        if (index >= (arr.Length + 1) / 2)
        {
            // Convert the char array to a number in base-10
            long number = ConvertToBase10(arr, k); // Safely convert the palindromic number

            // Check if the number is a palindrome
            if (IsPalindrome(number))
                result.Add(number); // Add the valid k-mirror number to the result

            return; // Exit backtracking
        }

        // Generate base-k palindrome numbers in arr.length without leading zeros
        for (char i = '0'; i < '0' + k; i++)
        {
            if (index == 0 && i == '0') // Skip leading zeros
                continue;

            arr[index] = i; // Set the current character
            arr[arr.Length - 1 - index] = i; // Mirror the character

            // Continue backtracking to fill the next index
            Backtrack(result, arr, k, n, index + 1);
        }
    }

    // Helper method to convert a char array to a number in base-10
    private long ConvertToBase10(char[] arr, int k)
    {
        long number = 0;
        long multiplier = 1;

        // Convert the palindromic char array to a long in base-10
        for (int i = arr.Length - 1; i >= 0; i--)
        {
            number += (arr[i] - '0') * multiplier; // Calculate the base-10 value
            multiplier *= k; // Increase multiplier for the next digit
        }

        return number; // Return the base-10 number
    }

    // Helper method to check if a number is a palindrome
    private bool IsPalindrome(long number)
    {
        // Convert the number to string for palindrome checking
        string strNum = number.ToString();

        int left = 0, right = strNum.Length - 1;

        // Check if the string is a palindrome
        while (left < right)
        {
            if (strNum[left] == strNum[right])
            {
                left++;
                right--;
            }
            else
                return false; // If characters do not match, it's not a palindrome
        }

        return true; // It is a palindrome
    }
}

```