# [Scala faster than 100.00%] Easy Explanation of Algorithm | Two Pointer Technique

**Author:** kamranalinitb
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/2248877/](https://leetcode.com/problems/valid-palindrome-iv/solutions/2248877/)

---

# Code
```scala
object Solution {
  def makePalindrome(s: String): Boolean = {
    
    val len = s.length
    
	// Utility Function
    def util(left: Int, right: Int, mismatch: Int): Boolean = {
      if (mismatch >= 3) false
      else if (left >= right) true
      else if (s.charAt(left) == s.charAt(right)) util(left + 1, right - 1, mismatch)
      else util(left + 1, right - 1, mismatch + 1)
      
    }
    
	// Function call
    util(0, len - 1, 0)
  }
}
```

Algorithm
- Start with two pointers left (pointing to beginning) right (pointing to end)
- At each step, we compare values at left and right and keeping track of mismatch
	- If char at left and right are equal, shift left / right
	- if char at left and right are NOT equal, shift left / right + increase the mismatch count
	- if at any point mismatch count >= 3, return false
	- if we reach end then return true


![image](./images/0.png)



Please **UPVOTE** if you understood the explanation
