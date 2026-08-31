# ✅ Beats 100% - C++/Java/Python/JS - Interview Solution - Visualized Too

**Author:** lancertech6
**Votes:** 113
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359596/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359596/)

---

![Screenshot 2023-12-04 085750.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/pYN3KVwU2-Y](https://youtu.be/pYN3KVwU2-Y)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 600 Subscribers*
*Current Subscribers: 575*

---
# Example Explanation
Here's a step-by-step explanation using tables:

| **Step** | **Index** | **Current Substring** | **Unique Digit?** | **Result** |
|----------|-----------|-----------------------|---------------------|------------|
| 1        | 0         | "677"                 | No                | -1         |
| 2        | 1         | "777"                 | Yes (7)           | 7          |
| 3        | 2         | "771"                 | No                | 7          |
| 4        | 3         | "713"                 | No                | 7          |
| 5        | 4         | "133"                 | No                | 7          |
| 6        | 5         | "333"                 | Yes (3)           | 7          |
| 7        | 6         | "333"                 | Yes (3)           | 7          |
| 8        | 7         | "339"                 | No                | 7          |
| 9        | 8         | "399"                 | No                | 7          |

The final result is "777" as it is the largest good integer.

Explanation:
- We traverse through the string "6777133339" and identify substrings of length 3.
- For each substring, we check if it consists of only one unique digit.
- If yes, we update the `result` to be the maximum of the current digit and the existing `result`.
- After the loop, we check if a good integer was found (i.e., `result` is not -1).
- If yes, we construct the maximum good integer using the digit stored in `result`, which is "777".


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the maximum good integer, we need to traverse through the given string `num` and identify all substrings of length 3 with only one unique digit. Among these substrings, we should choose the one with the maximum digit.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `result` to store the maximum digit of the good integer found so far. Set it to -1 initially.
2. Iterate through the string `num` from index 0 to `num.length() - 3`.
3. Check if the substring of length 3 starting at the current index consists of only one unique digit. If yes, update the `result` to be the maximum of the current digit and the existing `result`.
4. After the loop, if `result` is still -1, it means no good integer was found, so return an empty string.
5. Otherwise, construct the maximum good integer using the digit stored in `result` and return it.

# Complexity
- The time complexity is O(n), where n is the length of the input string `num`.
- The space complexity is O(1) as we are using a constant amount of space for variables.

# Code
```C++ []
class Solution {
public:
    string largestGoodInteger(string num) {
        int result = -1;
        for (int i = 0; i + 2 < num.length(); i++) {
            if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
                result = std::max(result, num[i] - '0');
            }
        }
        return (result == -1) ? "" : std::string(3, '0' + result);
    }
};
```
```Java []
class Solution {
  public String largestGoodInteger(String num) {
        int result = -1;
        for (int i = 0; i + 2 < num.length(); i++) {
            if (num.charAt(i) == num.charAt(i + 1) && num.charAt(i) == num.charAt(i + 2)) {
                result = Math.max(result, num.charAt(i) - '0');
            }
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 3; i++) {
            builder.append((char)(48 + result));
        }
        return result == -1 ? "" : builder.toString();
    }
}
```
```Python []
class Solution(object):
    def largestGoodInteger(self, num):
        result = -1
        for i in range(len(num) - 2):
            if num[i] == num[i + 1] == num[i + 2]:
                result = max(result, int(num[i]))
        return "" if result == -1 else str(result) * 3
        
```
```JavaScript []
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = -1;
    for (let i = 0; i + 2 < num.length; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            result = Math.max(result, parseInt(num[i]));
        }
    }
    return (result === -1) ? "" : String(result).repeat(3);
};
```
![upvote.png](./images/1.png)
