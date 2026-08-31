# Easy Optimized Solution 🧠 Python | Java | C++ O(N), O(1)

**Author:** violet_6
**Votes:** 177
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/5884227/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/5884227/)

---

# Intuition
The key takeaway is to count **unbalanced opening brackets** that don't have corresponding closing brackets. 

To balance a string of brackets, every `[` needs a corresponding `]` later in the string. If you have more `[` than `]`, or if they're in the wrong order, the string is imbalanced.

The goal is to determine the **minimum number of swaps** needed to make the string balanced.

Instead of using a stack, we can keep track of the unmatched brackets with a simple integer, which is more space-efficient.


# Approach
- Initialize a counter to 0: This keeps track of how many `[` are waiting for a matching `]`.
- Loop through the string:
- If we see `[`: **Increase** the counter because it needs a match.
- If we see `]`: 
    1. If there's already an unmatched opening bracket (`size > 0`), we can balance it by **reducing** the counter because this closing bracket has found a match.
    2. If `size == 0` (meaning no matched `[`), we do nothing, because we can't balance a `]` without a prior `[`.
- After looping through the string, the counter will show how many opening brackets `[` remain unmatched. (These are the brackets that still need to be paired with closing brackets `]`)
- Since each swap can match one `[` with one `]`, we need to calculate the minimum number of swaps. The formula `(size + 1) / 2` or `(ans + 1) // 2` in Python works because each swap matches two brackets at a time (one `[` and one `]`).

# Complexity
- Time complexity: `O(N)`

- Space complexity: `O(1)`

# Code
```python3 []
class Solution:
    def minSwaps(self, s: str) -> int:
        ans = 0
        for c in s:
            if c == '[':
                ans += 1
            elif ans > 0:
                ans -= 1
        return (ans + 1) // 2
```

``` java []
class Solution {
    public int minSwaps(String s) {
        int size = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '[') 
                size++;
            else if (size > 0) 
                size--;
        }
        return (size + 1) / 2;
    }
}
```


``` C++ []
class Solution {
public:
    int minSwaps(string s) {
        int size = 0;
        int n = s.size();
        for (int i = 0; i < n; i++) {
            char ch = s[i];
            if (ch == '[')
                size++;
            else if (size > 0) 
                size--;
        }
        return (size + 1) / 2;
    }
};
```
EDIT: I have added some additional explanation above. I tried my best to keep it concise and clear, but do let me know if any of them are vague or hard to understand. I appreciate your upvotes and comments/suggestions/quesitons! \uD83D\uDC3E

![upvote2.jpg](./images/0.jpeg)
