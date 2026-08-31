# GO | Two Pointer | O(n)

**Author:** prakhar__dixit
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3997038/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3997038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func checkPalindromeFormation(a string, b string) bool {
    return check(a, b) || check(b, a)
}

func check(a string, b string) bool{
    n := len(a)
    start := 0 
    end := n-1

    for start < end && a[start] == b[end] {
        start++
        end--
    }
    // The prefix and suffix characters have been matched till start in a and end in b. 
    // Now, if the remainder of the string from start to end is palindrome in either a or b, the concat will be a palindrome, splitting at either start or end 
    return checkPalindrome(a[start:end+1]) || checkPalindrome(b[start: end+1])
}

func checkPalindrome(s string) bool {
    start := 0 
    end := len(s) - 1 
    for start < end {
        if s[start] != s[end] {
            return false
        }
        start++
        end--
    }

    return true
}
```