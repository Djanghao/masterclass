# Yes, It's that easy 🤗🤗

**Author:** utkarshpriyadarshi5026
**Votes:** 4
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5240144/](https://leetcode.com/problems/score-of-a-string/solutions/5240144/)

---

# Welcome, I hope you like this Solution \uD83E\uDD17\uD83E\uDD17
# Approach
1. `Character Differences:`

    - Imagine each letter as having a number associated with it (its position in the alphabet). 'a' is 1, 'b' is 2, and so on. 
    - The code looks at each pair of neighboring letters and finds the difference between their numbers. For example, the difference between 'b' and 'a' is 1, and the difference between 'c' and 'b' is also 1.

2. `Absolute Differences:`

    - Sometimes, differences can be negative (e.g., 'a' - 'b' = -1). We don't want negative values, so we use a special function called abs (short for absolute value) to make all the differences positive. So, even if 'a' - 'b' is -1, the abs function turns it into 1.
3. `Adding Up the Differences:`

    - The code keeps a running total of all these positive differences. This total is the "score" of the string. A higher score means the letters in the string are more spread out in the alphabet.

# Complexity
- **Time complexity:**
**The time complexity of this function is $$O(n)$$, where 'n' is the length of the input string s. Here's why:**

    - `Loop:` The primary work is done in the for loop, which iterates through the string once.

    - `Constant Operations:` Inside the loop, each iteration performs a constant amount of work.


---


- **Space complexity:**
**The space complexity of this function is $$O(1)$$, which means it uses constant space. This is because:**

    - Fixed Variables: The function uses a fixed number of variables (score, i).

    - No Additional Data Structures: It doesn't create any data structures (like arrays or maps) whose size would depend on the input string.



# Code

```go []
func scoreOfString(s string) int {
    score := 0

    for i := 1; i < len(s); i++ {
        curr := int(s[i])
        prev := int(s[i - 1])

        score += abs(curr - prev)
    }
    return score
}


func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
```python []
def score_of_string(s):
    score = 0
    if len(s) <= 1:
        return score

    for i in range(1, len(s)):
        score += abs(ord(s[i]) - ord(s[i - 1]))  # Use ord() for ASCII values
    return score
```
```Java []
class Solution {
    public static int scoreOfString(String s) {
        int score = 0;
        if (s == null || s.length() <= 1) {
            return score;
        }

        for (int i = 1; i < s.length(); i++) {
            score += Math.abs(s.charAt(i) - s.charAt(i - 1));
        }
        return score;
    }
}
```
