# 💯Faster✅💯 EASY ALGORITHM || Find the firs odd || C#, Pyhton, Java, Rust 🔥🔥

**Author:** ilxamovic
**Votes:** 18
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372966/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372966/)

---

# Intuition
The problem seems to involve finding the largest odd number from a given numeric string. The approach likely involves iterating through the string from right to left and stopping when an odd digit is encountered. The result should then be the substring from the beginning of the input string to the position where the odd digit was found.

# Approach
The provided code seems to follow the intuition correctly. It initializes an empty string `result` and iterates through the input numeric string `num` from right to left. For each digit, it checks if it's odd, and if so, it updates the `result` to be the substring from the beginning of the input string to the current position. The loop breaks as soon as an odd digit is found.

# Complexity
- Time complexity: \\(O(n)\\), where \\(n\\) is the length of the input string `num`. In the worst case, the algorithm may iterate through the entire string once.
- Space complexity: \\(O(1)\\), as the algorithm only uses a constant amount of extra space regardless of the input size. The primary variable is `result`, which is a string holding the final result.

# Code
```csharp []
public class Solution {
    public string LargestOddNumber(string num)
    {
        int ln = num.Length - 1;
        for (int i = ln; i >= 0; i--)
        {
            var ch = num[i].ToString();
            if (int.Parse(ch) % 2 != 0)
            {
                return num.Substring(0, i + 1);
            }
        }
        return "";
    }
}
```
```python []
class Solution:
    def largestOddNumber(self, num: str) -> str:
        ln = len(num) - 1
        for i in range(ln, -1, -1):
            ch = num[i]
            if int(ch) % 2 != 0:
                return num[:i + 1]
        return ""
```
``` Java []
public class Solution {
    public String largestOddNumber(String num) {
        String result = "";
        int ln = num.length() - 1;
        for (int i = ln; i >= 0; i--) {
            char ch = num.charAt(i);
            if (Character.getNumericValue(ch) % 2 != 0) {
                return num.substring(0, i + 1);
            }
        }
        return result;
    }
}
```
``` Rust []
pub fn largest_odd_number(num: &str) -> String {
    let ln = num.len();
    for (i, ch) in num.chars().rev().enumerate() {
        if ch.to_digit(10).unwrap() % 2 != 0 {
            return num[..ln - i].to_string();
        }
    }
    String::new()
}

```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!