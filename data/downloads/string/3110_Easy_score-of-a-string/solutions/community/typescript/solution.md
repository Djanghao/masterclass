# Differences of adjacent characters' ASCII values. || Beats 99% users with java & c++ || typescript

**Author:** SanketSawant18
**Votes:** 2
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5238033/](https://leetcode.com/problems/score-of-a-string/solutions/5238033/)

---

# Approach
Differences of adjacent characters' ASCII values.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. **Initialize totalScore:** Start with a variable totalScore set to 0. This will accumulate the sum of the absolute differences.

1. **Loop through the string:** Use a for loop to iterate from the first character to the second last character of the string (i < s.length() - 1).

1. **Compute absolute difference:** For each character at position i, compute the absolute difference between the ASCII values of the character at position i (s.charAt(i)) and the next character (s.charAt(i + 1)). Use Math.abs to get the absolute difference.

1. **Accumulate the score:** Add this difference to totalScore.
Return the result: After the loop completes, return the totalScore.


---

```java []
class Solution {
    public int scoreOfString(String s) {
        int totalScore = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            totalScore += Math.abs(s.charAt(i) - s.charAt(i + 1));
        }
        return totalScore;
    }
}

```
```C++ []
class Solution {
public:
    int scoreOfString(std::string s) {
        int totalScore = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            totalScore += std::abs(s[i] - s[i + 1]);
        }
        return totalScore;
    }
};
```
```python3 []
class Solution:
    def scoreOfString(self, s: str) -> int:
        total_score = 0
        for i in range(len(s) - 1):
            total_score += abs(ord(s[i]) - ord(s[i + 1]))
        return total_score

```
```Typescript []
function scoreOfString(s: string): number {
    let totalScore = 0;
    for (let i = 0; i < s.length - 1; i++) {
        totalScore += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return totalScore;
}
```
