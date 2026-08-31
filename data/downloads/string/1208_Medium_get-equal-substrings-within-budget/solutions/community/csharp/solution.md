# ✅97.44%🔥Easy solution🔥With explanation🔥

**Author:** MrAke
**Votes:** 99
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218505/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218505/)

---

# Intuition
#### The problem requires finding the longest substring where the cost of converting it from `s` to `t` does not exceed `maxCost`. To achieve this, we can utilize a sliding window approach to dynamically adjust the size of the substring while ensuring the cost constraint is respected.

----

# Approach
### 1. Initialize Variables:
 - ##### `start` to mark the beginning of the sliding window.
 - ##### `current_cost` to keep track of the total transformation cost of the current window.
 - ##### `max_length` to store the maximum length of a valid window found.
### 2. Iterate through the String:
 - ##### Use `end` as the current end of the window.
 - ##### For each character at `end`, compute the cost to convert `s[end]` to `t[end]` and add it to `current_cost`.

### 3. Adjust the Window:

 - ##### If `current_cost` exceeds `maxCost`, increment `start` to shrink the window from the left, subtracting the cost of the character at `start` from `current_cost`, until the total cost is within the allowed limit.

### 4. Update the Maximum Length:

 - ##### After adjusting the window, compare its size `(end - start + 1)` with `max_length` and update `max_length` if the current window is larger.

### 5. Return the Result:
- ##### The maximum valid window length found during the iteration is returned as the result.

----

# Complexity
- ### Time complexity:
#### $$O(n)$$, where n is the length of the string `s` (or `t`). This is because each character is processed at most twice (once when expanding the window and once when shrinking it).

- ### Space complexity:
#### $$O(1)$$, as we are using a constant amount of extra space regardless of the input size.
---

# Code
```python []
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        n = len(s)
        start = 0
        current_cost = 0
        max_length = 0

        for end in range(n):
            current_cost += abs(ord(s[end]) - ord(t[end]))

            while current_cost > maxCost:
                current_cost -= abs(ord(s[start]) - ord(t[start]))
                start += 1

            max_length = max(max_length, end - start + 1)
        
        return max_length
```
```C++ []
class Solution {
public:
    int equalSubstring(string s, string t, int maxCost) {
        int n = s.size();
        int start = 0;
        int current_cost = 0;
        int max_length = 0;

        for (int end = 0; end < n; ++end) {
            current_cost += abs(s[end] - t[end]);

            while (current_cost > maxCost) {
                current_cost -= abs(s[start] - t[start]);
                ++start;
            }

            max_length = max(max_length, end - start + 1);
        }

        return max_length;
    }
};

```
```java []
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int n = s.length();
        int start = 0;
        int currentCost = 0;
        int maxLength = 0;

        for (int end = 0; end < n; ++end) {
            currentCost += Math.abs(s.charAt(end) - t.charAt(end));

            while (currentCost > maxCost) {
                currentCost -= Math.abs(s.charAt(start) - t.charAt(start));
                ++start;
            }

            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}

```
```javascript []
var equalSubstring = function(s, t, maxCost) {
    let n = s.length;
    let start = 0;
    let currentCost = 0;
    let maxLength = 0;

    for (let end = 0; end < n; end++) {
        currentCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
```
```C# []
public class Solution {
    public int EqualSubstring(string s, string t, int maxCost) {
        int n = s.Length;
        int start = 0;
        int currentCost = 0;
        int maxLength = 0;

        for (int end = 0; end < n; ++end) {
            currentCost += Math.Abs(s[end] - t[end]);

            while (currentCost > maxCost) {
                currentCost -= Math.Abs(s[start] - t[start]);
                ++start;
            }

            maxLength = Math.Max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}

```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)

