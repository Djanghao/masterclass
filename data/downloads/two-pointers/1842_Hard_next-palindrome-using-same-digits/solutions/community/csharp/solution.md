# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5929744/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5929744/)

---

# Intuition
Rearrange the digits of a given palindrome to find the smallest larger palindrome. Since palindromes read the same forwards and backwards, we need to carefully adjust the digits while preserving this property.

# Approach
Identify the peak point in the first half of the palindrome, find the smallest larger digit to swap, and then mirror the first half to create the new palindrome.

# Complexity
- Time complexity:
The algorithm runs in O(n), where n is the length of the input string, because we may need to traverse the string multiple times.

- Space complexity:
O(n) due to the character array used for manipulation.

# Code
```csharp []
public class Solution {
    // Method to find the next palindrome larger than the given number
    public string NextPalindrome(string num) {
        // If the length of the number is less than 4, return an empty string
        if (num.Length < 4) return "";
        
        // Convert the number to a character array for manipulation
        char[] array = num.ToCharArray();
        
        // Find the peak index where the left half stops increasing
        int peak = FindPeak(array);
        
        // If peak is 0, it means no larger palindrome can be formed
        if (peak == 0) return "";
        
        // Find the next largest digit to swap and rearrange the second half
        FindNextLargest(array, peak);
        
        // Mirror the first half to create the complete palindrome
        Mirror(array);
        
        // Return the newly formed palindrome as a string
        return new string(array);
    }

    // Method to find the peak index in the character array
    private int FindPeak(char[] array) {
        int index = array.Length / 2 - 1; // Start from the middle of the array
        // Move left until we find a decreasing sequence
        while (index > 0 && array[index - 1] >= array[index]) {
            index--;
        }
        return index; // Return the peak index
    }

    // Method to find the next largest digit to create a larger palindrome
    private void FindNextLargest(char[] array, int peak) {
        int index = array.Length / 2 - 1; // Start searching from the middle
        // Look for a digit larger than the peak-1 digit
        while (index >= peak && array[index] <= array[peak - 1]) {
            index--;
        }
        // Swap the digits at peak-1 and the found index
        Swap(array, peak - 1, index);
        // Reverse the second half of the array
        Reverse(array, peak, array.Length / 2 - 1);
    }

    // Method to swap two characters in the array
    private void Swap(char[] array, int from, int to) {
        // If the characters are the same, no need to swap
        if (array[from] == array[to]) return;
        char temp = array[from];
        array[from] = array[to];
        array[to] = temp;
    }

    // Method to reverse a segment of the character array
    private void Reverse(char[] array, int from, int to) {
        int left = from;
        int right = to;
        // Swap characters from the left and right until they meet
        while (left <= right) {
            Swap(array, left, right);
            left++;
            right--;
        }
    }

    // Method to mirror the first half of the array to create the complete palindrome
    private void Mirror(char[] array) {
        int left = array.Length / 2 - 1; // Middle left index
        int right = (array.Length % 2 == 0) ? left + 1 : left + 2; // Middle right index
        // Copy elements from the left half to the right half
        while (left >= 0) {
            array[right++] = array[left--];
        }
    }
}

```