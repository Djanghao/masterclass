# Easy Swift Solution with Time Complexity O(N) and Space Complexity O(1)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5843632/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5843632/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The first observation we can make is that the two moves can be described as the following: shift `L` to the left and shift `R` to the right. Since L and `R` cannot be swapped with each other, the relative order of `L` and `R` letters will never change.

Let's label `L` and `R` as valid letters.

Our first condition for a transformation from start to end is that both start and end must have the same number of valid letters. In addition, the first valid letter in start must match the first valid letter in end, the second valid letter in start must match the second valid letter in end, and so on until the last.

We can also observe that for a transformation to exist, 
- the `i th` valid letter in `start` must be able to move to the position of the `i th` valid letter in `end`. 
- We'll denote startIndex as the index of the `i th` valid letter in `start` and endIndex as the index of the `i th` valid letter in `end`. 

There are two cases to consider:
- The valid letter is `L`. Since `L` can only move left, a transformation exists when startIndex `>=` endIndex.
- The valid letter is `R`. Since R can only move right, a transformation exists when startIndex `<=` endIndex.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func canTransform(_ start: String, _ end: String) -> Bool {
        let n = start.count // Length of the strings
        var startIndex = 0
        var endIndex = 0

        let startChars = Array(start) // Convert strings to array of characters for easier access
        let endChars = Array(end)

        // Iterate through both strings
        while startIndex < n || endIndex < n {
            // Find the next valid letter in the `start` string (skip 'X')
            while startIndex < n && startChars[startIndex] == "X" {
                startIndex += 1
            }
        
            // Find the next valid letter in the `end` string (skip 'X')
            while endIndex < n && endChars[endIndex] == "X" {
                endIndex += 1
            }
        
            // Both indices have reached the end of their respective strings
            if startIndex == n && endIndex == n {
                return true
            }

            // If one string has more valid characters left than the other
            if startIndex == n || endIndex == n {
                return false
            }

            // If the current valid characters are different
            if startChars[startIndex] != endChars[endIndex] {
                return false
            }

            // If the current character is 'R', it should not move left
            if startChars[startIndex] == "R" && startIndex > endIndex {
                return false
            }

            // If the current character is 'L', it should not move right
            if startChars[startIndex] == "L" && startIndex < endIndex {
                return false
            }
        
            // Move to the next character in both strings
            startIndex += 1
            endIndex += 1
        }

        return true
    }
}
```