# ✅ Beats 100% - Explained With [ Video ] - Simplest Solution ( 2-3 Lines) - Visualized Too

**Author:** millenium103
**Votes:** 138
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4292653/](https://leetcode.com/problems/find-unique-binary-string/solutions/4292653/)

---

![Screenshot 2023-11-16 060204.png](./images/0.png)

---

# YouTube Video Explanation:

[https://youtu.be/mQCxXYkyDQs](https://youtu.be/mQCxXYkyDQs)
**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 300 Subscribers*
*Current Subscribers: 261*

---

# Example Explanation
Let's break down the logic step by step using tables for the given input:

### Example:

Given Array: ["111", "011", "001"]

#### Step 1: Constructing the Result Binary String

| Iteration | Binary String | Character at Diagonal Position | Result Binary String |
|-----------|---------------|--------------------------------|-----------------------|
| 1         | "111"         | "1" (at position 0)             | "0"                   |
| 2         | "011"         | "1" (at position 1)             | "00"                  |
| 3         | "001"         | "1" (at position 2)             | "000"                 |

### Final Result:

The binary string "000" does not appear in the given array.

### Explanation:

- Iterate through each binary string in the array.
- Append the character at the diagonal position to the result binary string.
- Ensure the constructed binary string is different from any binary string in the array.

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks for a binary string that does not appear in the given array of binary strings. Since each binary string has a length of `n` and the strings are unique, we can construct a binary string by considering the characters at the diagonal positions in the given strings.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a `StringBuilder` to construct the result binary string.
2. Iterate through the array of binary strings.
3. At each iteration, append the character at the diagonal position (position `i`) in the current binary string to the result.
4. Return the result binary string.

# Complexity
- Time Complexity: O(n)
  - The algorithm iterates through the given array of binary strings once, and each iteration takes constant time.
- Space Complexity: O(n)
  - The `StringBuilder` is used to construct the result binary string.

# Code
## Java
```
class Solution {
    public String findDifferentBinaryString(String[] nums) {
        StringBuilder sb = new StringBuilder();

        for(int i=0;i<nums.length;i++)
        {
            sb.append(nums[i].charAt(i) == '0'? "1": "0");
        }
        return new String(sb);
    }
}
```
## C++
```
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        string result;

        for (int i = 0; i < nums.size(); ++i) {
            result += (nums[i][i] == '0' ? '1' : '0');
        }

        return result;
    }
};
```
## Python
```
class Solution(object):
    def findDifferentBinaryString(self, nums):
        result = ""

        for i in range(len(nums)):
            result += '1' if nums[i][i] == '0' else '0'

        return result
        
```
## JavaScript
```
var findDifferentBinaryString = function(nums) {
    let result = "";

        for (let i = 0; i < nums.length; ++i) {
            result += (nums[i][i] === '0' ? '1' : '0');
        }

        return result;
};
```
---
<!-- ![upvote1.jpeg](./images/1.jpeg) -->
