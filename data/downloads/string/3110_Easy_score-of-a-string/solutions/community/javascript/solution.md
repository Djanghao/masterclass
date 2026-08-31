# ✅ EASY WITH EXPLANATION || 💯 % on runtime 🚀

**Author:** IamHazra
**Votes:** 12
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5238871/](https://leetcode.com/problems/score-of-a-string/solutions/5238871/)

---

# Intuition \uD83C\uDF1F

When given a string, one natural way to measure how "different" consecutive characters are is to look at their ASCII values. By calculating the absolute difference between the ASCII values of consecutive characters in the string, we can get a measure of how "different" the string is at each step. Summing these differences will give us the total score of the string.

# Approach \uD83D\uDE80

To solve this problem, we can break down the solution into the following steps:

1. **Initialize Variables**: Start by initializing a variable `ans` to store the cumulative score.
2. **Iterate Through the String**: Loop through the string starting from the second character (index 1) to the end.
3. **Calculate ASCII Differences**: For each character in the string (from the second character onwards), calculate the absolute difference between its ASCII value and the ASCII value of the previous character.
4. **Accumulate the Differences**: Add each calculated absolute difference to the variable `ans`.
5. **Return the Result**: After the loop finishes, `ans` will contain the total score of the string, which we then return.

This approach ensures that we consider the differences between all consecutive characters in the string, and by using the absolute value, we handle both positive and negative differences uniformly.

# Complexity Analysis \uD83D\uDCCA

- **Time Complexity**: The time complexity of this approach is **O(n)**, where **n** is the length of the string. This is because we have to iterate through the entire string once to calculate the differences.
- **Space Complexity**: The space complexity is **O(1)** as we are using a constant amount of extra space regardless of the input string size.

# Code \uD83D\uDDA5\uFE0F

### Java \u2615
```java
class Solution {
    public int scoreOfString(String s) {
        int ans = 0;
        for(int i=1;i<s.length();i++){
            ans += Math.abs(s.charAt(i-1)-s.charAt(i));
        }
        return ans;
    }
}
```

### JavaScript \uD83C\uDF10
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = (s) => {
    let ans = 0;
    for (let i = 1; i < s.length; i++) {
        ans += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
    }
    return ans;
};
```

### Python \uD83D\uDC0D
```python
class Solution(object):
    def scoreOfString(self, s):
        """
        :type s: str
        :rtype: int
        """
        ans = 0
        for i in range(1, len(s), 1):
            ans += abs(ord(s[i - 1]) - ord(s[i]))
        return ans
```

### Python (Python 3) \uD83D\uDC0D
```python
class Solution:
    def scoreOfString(self, s: str) -> int:
        ans = 0
        for i in range(1, len(s), 1):
            ans += abs(ord(s[i - 1]) - ord(s[i]))
        return ans
```

### C++ \uD83D\uDCBB
```cpp
class Solution {
public:
    int scoreOfString(string s) {
        int ans = 0;
        for (int i = 1; i < s.size(); i++) {
            ans += abs(s[i - 1] - s[i]);
        }
        return ans;
    }
};
```