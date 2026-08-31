# 🧩 Swift : Find the Longest Substring Containing Vowels in Even Counts

**Author:** shivampatel066
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792145/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the longest substring where each vowel ('a', 'e', 'i', 'o', 'u') appears an even number of times. One key insight is that the even or odd occurrence of each vowel can be tracked using a bitmask. The challenge can be reduced to finding the longest segment between two equal bitmask states, which implies that all vowels have even counts between those two points.


# Approach
<!-- Describe your approach to solving the problem. -->
Bitmask Representation: Use a 5-bit bitmask, where each bit represents the count of one vowel:

For each character in the string:
If it's a vowel, toggle the corresponding bit in the bitmask using XOR (^).
This way, the bitmask will store information about whether the count of each vowel is odd or even.
First Occurrence Dictionary: Use a dictionary (firstOccurrence) to track the first time each bitmask occurs. If the same bitmask occurs again, the substring between these two positions must contain vowels in even counts (since the bitmask state has returned to what it was before).

Iterate Over the String: For each character in the string:

Update the bitmask based on whether it's a vowel.
Check if this bitmask has been seen before:
If it has, calculate the length of the substring between the first occurrence of the bitmask and the current index.
If not, store the current index as the first occurrence of this bitmask.
Result: The maximum length of such substrings will give us the desired result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) : where n is the length of the string. Each character is processed once, and each dictionary lookup or update is constant time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) : for the bitmask (as it always requires 5 bits) and O(n) for storing the first occurrences of each unique bitmask.

# Code
```swift []
class Solution {
    func findTheLongestSubstring(_ s: String) -> Int {
        let vowels: [Character: Int] = ["a": 0, "e": 1, "i": 2, "o": 3, "u": 4]
        var mask = 0 // Bitmask to track vowels' parity
        var maxLength = 0
        var firstOccurrence = [Int: Int]() // Dictionary to store first occurrence of each mask
        firstOccurrence[0] = -1 // We start with mask 0 at index -1
        
        let sArray = Array(s) // Convert string to array for efficient index access
        
        for (i, char) in sArray.enumerated() {
            if let vowelIndex = vowels[char] {
                mask ^= (1 << vowelIndex) // Toggle the bit corresponding to the vowel
            }
            
            if let firstIndex = firstOccurrence[mask] {
                // If we've seen this mask before, update the max length
                maxLength = max(maxLength, i - firstIndex)
            } else {
                // Record the first occurrence of this mask
                firstOccurrence[mask] = i
            }
        }
        return maxLength
    }
}
```