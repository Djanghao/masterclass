# Swift Solution

**Author:** Gupta5610
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5545000/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5545000/)

---

# Intuition
The solution directly addresses the problem by strategically checking if a limited number of changes can lead to a palindromic string. It leverages the two-pointer approach for efficient character comparison and a counter to track the allowed modifications.
# Approach
The solution focuses on assessing if the given string s can be transformed into a palindrome with at most two character changes. Here's the core idea:

 1. `Two Pointer Traversal:` The code employs a two-pointer technique, where low starts from the beginning and high starts from the end of the string. They move towards each other, comparing characters at their respective positions.

 2. `Mismatch Handling:` If characters at low and high don't match, it implies a potential change is needed to make the string palindromic. The variable k keeps track of the remaining allowed changes (initially 2).

 3. `Change Counter:`  When a mismatch occurs, k is decremented. If k reaches 0 before the pointers meet, it signifies that more than two changes would be required, hence the function returns false.

 4. `Palindrome Check:` If the pointers meet (or cross) without k becoming 0, it means the string can be made palindromic with at most two changes, and the function returns true.

# Complexity
- Time complexity:
The solution iterates through roughly half the string, leading to a time complexity of O(N/2), which simplifies to O(N), where N is the length of the input string `s`.

- Space complexity:
The code uses an array `arr` to store the characters of the input string. Thus, the space complexity is O(N) as well.

# Code
```
class Solution {
    func makePalindrome(_ s: String) -> Bool {
        var arr = Array(s)
        var low = 0
        var high = arr.count - 1
        var k = 2
        while low < high {
            if arr[low] != arr[high] {
                if k == 0 {
                    return false
                }
                k -= 1
            }
            low += 1
            high -= 1
        }
        return true 
    }
}
```