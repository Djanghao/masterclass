# Go Solution | O(n) | With Explanation

**Author:** zell_dev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4824271/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4824271/)

---

**Step 1: Initialize Pointers**
Start by initializing two pointers, left and right, pointing at the start and end of the string respectively. These pointers will be used to identify the non-overlapping prefix and suffix in the string that can be removed according to the given conditions.

**Step 2: Compare and Contract**
In a loop, compare the characters at the left and right pointers. If they are different, return the length of the substring between these two pointers, since no more removals can be made. If they are the same, increment the left pointer until it points to a different character or reaches the right pointer, and decrement the right pointer until it points to a different character or meets the left pointer.

**Step 3: Repeat the Process**
After adjusting the left and right pointers, decrement the right pointer and increment the left pointer to prepare for the next comparison. Continue this process until the left pointer is not less than the right pointer.

**Step 4: Calculate Final Minimum Length**
Calculate and return the length of the substring determined by the left and right pointers. This length represents the minimum length of the string after performing the given operation any number of times.

```
func minimumLength(s string) int {
    left := 0
    right := len(s) - 1
    
    for left < right {
        lc := s[left]
        rc := s[right]
        
        if lc != rc {
            return right - left + 1
        }
        
        for left + 1 < right && lc == s[left + 1] {
            left++
        }
        
        for left < right - 1 && rc == s[right - 1] {
            right--
        }
        
        right--
        left++
    }
    
    return right - left + 1
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding!