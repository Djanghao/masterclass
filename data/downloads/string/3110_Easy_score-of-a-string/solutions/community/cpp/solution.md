# 💯Faster✅💯Less Mem✅Detailed Explaination🎯Linear Iter🧠Step-by-Step Explaination✅Python🐍Java🍵

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 29
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5237893/](https://leetcode.com/problems/score-of-a-string/solutions/5237893/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
The problem is to compute the score of a given string `s`. The score is calculated based on the absolute differences between the ASCII values of each pair of adjacent characters in the string. Here's a explanation to it:

1. **Understanding ASCII Values**: Each character in the string has an ASCII value, which is a numerical representation of the character. For example, the ASCII value of 'a' is 97, and the ASCII value of 'b' is 98.

2. **Adjacent Characters**: Two characters are adjacent if they are next to each other in the string. For example, in the string "abc", the pairs of adjacent characters are ('a', 'b') and ('b', 'c').

3. **Absolute Difference**: The absolute difference between two numbers is the non-negative difference between them. For example, the absolute difference between the ASCII values of 'a' (97) and 'b' (98) is |97 - 98| = 1.

4. **Score Calculation**: To calculate the score of the string, sum the absolute differences between the ASCII values of all adjacent character pairs in the string.

## \uD83D\uDCE5Input
- A single string `s` which can contain any printable ASCII characters.

## \uD83D\uDCE4Output
- An integer representing the score of the string `s`.

# \u2705Approach:
- **Initialization**: Start with `score = 0`.
- **Loop Through the String**: Use a loop that runs from the first to the second last character.
- **Calculate and Update**: In each iteration of the loop, calculate the absolute difference between the current character and the next character, and add this difference to `score`.
- **Return the Score**: After the loop, return the accumulated `score`.

# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

Let's walk through the code step by step with the input `s = "abcd"`.

1. **ASCII Values**: 
   - 'a' = 97
   - 'b' = 98
   - 'c' = 99
   - 'd' = 100

2. **Adjacent Pairs and Differences**:
   - ('a', 'b'): |97 - 98| = 1
   - ('b', 'c'): |98 - 99| = 1
   - ('c', 'd'): |99 - 100| = 1

3. **Sum of Differences**:
   - 1 (from 'a' and 'b') + 1 (from 'b' and 'c') + 1 (from 'c' and 'd') = 3

4. **Final Score**:
   - The final score for the string "abcd" is 3.


# Code:
```Python []
class Solution:
    def scoreOfString(self, s: str) -> int:
        score = 0
        for i in range(len(s) - 1):
            score += abs(ord(s[i]) - ord(s[i + 1]))
        return score               
```
```Java []
public class Solution {
    public int scoreOfString(String s) {
        int score = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            score += Math.abs(s.charAt(i) - s.charAt(i + 1));
        }
        return score;
    }
}
```
```C++ []
class Solution {
public:
    int scoreOfString(string s) {
        int score = 0;
        for (size_t i = 0; i < s.length() - 1; i++) {
            score += abs(s[i] - s[i + 1]);
        }
        return score;
    }
};

```
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA