# 【Video】Sliding Window solution

**Author:** niits
**Votes:** 171
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/5756564/](https://leetcode.com/problems/minimum-window-substring/solutions/5756564/)

---

# Intuition
Use a sliding window to find the smallest range that contains all characters in string t.

---

# Solution Video

https://youtu.be/WGNaHa4853Q

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,404
Thank you for your support!

---

# Approach

1. **Problem Description**: The task is to find the smallest substring in `s` that contains all characters of string `T`.

2. **Approach**:
   - **Using HashMap**: A HashMap is used to keep track of the frequency of each character, allowing efficient management of character counts.
   - **Target Character Management**: Track the frequency of characters in `T` and calculate the minimum window size when all target characters are included in the window.
   - **Window Minimization**: Expand the window to include more characters and contract it to find the smallest valid window.

3. **Algorithm Details**:
   - **Remaining Target Characters**: Track the remaining count of characters from `T`. When all are zero, calculate the window size.
   - **Expanding and Contracting the Window**: Expand the window by adding characters and contract it by removing unnecessary characters.
   - **Updating Minimum Window**: Compute and update the smallest window size as needed.

If no valid window is found, return an empty string; otherwise, return the smallest valid window.

---

https://youtu.be/bU_dXCOWHls


# Complexity
- Time complexity: `O(S + T)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(S + T)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""
        
        char_count = defaultdict(int)
        for ch in t:
            char_count[ch] += 1
        
        target_chars_remaining = len(t)
        min_window = (0, float("inf"))
        start_index = 0

        for end_index, ch in enumerate(s):
            if char_count[ch] > 0:
                target_chars_remaining -= 1
            char_count[ch] -= 1

            if target_chars_remaining == 0:
                while True:
                    char_at_start = s[start_index]
                    if char_count[char_at_start] == 0:
                        break
                    char_count[char_at_start] += 1
                    start_index += 1
                
                if end_index - start_index < min_window[1] - min_window[0]:
                    min_window = (start_index, end_index)
                
                char_count[s[start_index]] += 1
                target_chars_remaining += 1
                start_index += 1
        
        return "" if min_window[1] > len(s) else s[min_window[0]:min_window[1]+1]
```
```javascript []
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return "";
    }

    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }

    let targetCharsRemaining = t.length;
    let minWindow = [0, Number.POSITIVE_INFINITY];
    let startIndex = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const ch = s[endIndex];
        if (charCount.has(ch) && charCount.get(ch) > 0) {
            targetCharsRemaining--;
        }
        charCount.set(ch, (charCount.get(ch) || 0) - 1);

        if (targetCharsRemaining === 0) {
            while (true) {
                const charAtStart = s[startIndex];
                if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
                    break;
                }
                charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
                startIndex++;
            }

            if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                minWindow = [startIndex, endIndex];
            }

            charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
            targetCharsRemaining++;
            startIndex++;
        }
    }

    return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);    
};
```
```java []
class Solution {
    public String minWindow(String s, String t) {
        if (s.length() < t.length()) {
            return "";
        }

        Map<Character, Integer> charCount = new HashMap<>();
        for (char ch : t.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        int targetCharsRemaining = t.length();
        int[] minWindow = {0, Integer.MAX_VALUE};
        int startIndex = 0;

        for (int endIndex = 0; endIndex < s.length(); endIndex++) {
            char ch = s.charAt(endIndex);
            if (charCount.containsKey(ch) && charCount.get(ch) > 0) {
                targetCharsRemaining--;
            }
            charCount.put(ch, charCount.getOrDefault(ch, 0) - 1);

            if (targetCharsRemaining == 0) {
                while (true) {
                    char charAtStart = s.charAt(startIndex);
                    if (charCount.containsKey(charAtStart) && charCount.get(charAtStart) == 0) {
                        break;
                    }
                    charCount.put(charAtStart, charCount.getOrDefault(charAtStart, 0) + 1);
                    startIndex++;
                }

                if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                    minWindow[0] = startIndex;
                    minWindow[1] = endIndex;
                }

                charCount.put(s.charAt(startIndex), charCount.getOrDefault(s.charAt(startIndex), 0) + 1);
                targetCharsRemaining++;
                startIndex++;
            }
        }

        return minWindow[1] >= s.length() ? "" : s.substring(minWindow[0], minWindow[1] + 1);        
    }
}
```
```C++ []
class Solution {
public:
    string minWindow(string s, string t) {
        if (s.length() < t.length()) {
            return "";
        }

        unordered_map<char, int> charCount;
        for (char ch : t) {
            charCount[ch]++;
        }

        int targetCharsRemaining = t.length();
        int minWindow[2] = {0, INT_MAX};
        int startIndex = 0;

        for (int endIndex = 0; endIndex < s.length(); endIndex++) {
            char ch = s[endIndex];
            if (charCount.find(ch) != charCount.end() && charCount[ch] > 0) {
                targetCharsRemaining--;
            }
            charCount[ch]--;

            if (targetCharsRemaining == 0) {
                while (true) {
                    char charAtStart = s[startIndex];
                    if (charCount.find(charAtStart) != charCount.end() && charCount[charAtStart] == 0) {
                        break;
                    }
                    charCount[charAtStart]++;
                    startIndex++;
                }

                if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                    minWindow[0] = startIndex;
                    minWindow[1] = endIndex;
                }

                charCount[s[startIndex]]++;
                targetCharsRemaining++;
                startIndex++;
            }
        }

        return minWindow[1] >= s.length() ? "" : s.substr(minWindow[0], minWindow[1] - minWindow[0] + 1);        
    }
};
```

# Step by Step Algorithm

**Step 1: Edge Case Handling**

```python
if len(s) < len(t):
    return ""
```
- If the length of `s` is smaller than the length of `t`, it's impossible for `s` to contain `t`. Therefore, return an empty string.

---

**Step 2: Initialize Data Structures**

```python
char_count = defaultdict(int)
for ch in t:
    char_count[ch] += 1
```
- Create a `char_count` dictionary using `defaultdict(int)` to store the frequency of each character in `t`. Initialize all counts to `0` by default.
- Loop through each character in `t` and increment its count in `char_count`.

---

**Step 3: Initialize Variables**

```python
target_chars_remaining = len(t)
min_window = (0, float("inf"))
start_index = 0
```
- `target_chars_remaining` tracks how many characters from `t` are still needed in the current window. Initially, it's set to the length of `t`.
- `min_window` holds the start and end indices of the smallest window found. Initialize with `(0, float("inf"))`, indicating no valid window found yet.
- `start_index` is the beginning of the current window in `s`.

---

**Step 4: Expand Window**

```python
for end_index, ch in enumerate(s):
    if char_count[ch] > 0:
        target_chars_remaining -= 1
    char_count[ch] -= 1
```
- Iterate through `s` using `end_index` as the index and `ch` as the character.
- If `ch` is a required character (its count in `char_count` is positive), decrement `target_chars_remaining` because one more required character is included.
- Decrease the count of `ch` in `char_count` because it's now part of the window.

---

**Step 5: Contract Window**

```python
if target_chars_remaining == 0:
    while True:
        char_at_start = s[start_index]
        if char_count[char_at_start] == 0:
            break
        char_count[char_at_start] += 1
        start_index += 1
```
- When `target_chars_remaining` is `0`, it means the current window contains all required characters.
- Start contracting the window from the left by moving `start_index` to the right:
  - Get the character at `start_index`.
  - If its count in `char_count` is `0`, exit the loop because it means this character is needed for a valid window.
  - Otherwise, increment its count and move `start_index` to the right to shrink the window.

---

**Step 6: Update Minimum Window**

```python
if end_index - start_index < min_window[1] - min_window[0]:
    min_window = (start_index, end_index)
```
- After contracting the window, check if the current window is smaller than the previously found minimum window.
- If so, update `min_window` to the new start and end indices.

---

**Step 7: Adjust for Validity**

```python
char_count[s[start_index]] += 1
target_chars_remaining += 1
start_index += 1
```
- After finding a valid window and updating `min_window`, adjust the character count for the character being removed from the window (`s[start_index]`).
- Increment `target_chars_remaining` since a required character is no longer in the window.
- Move `start_index` to the right to continue searching for smaller windows.

---

**Step 8: Return Result**

```python
return "" if min_window[1] > len(s) else s[min_window[0]:min_window[1]+1]
```
- After iterating through `s`, check if a valid window was found.
- If `min_window[1]` is still `float("inf")`, no valid window was found, so return an empty string.
- Otherwise, return the smallest window substring from `s` using the indices stored in `min_window`.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Similar Question

#239 - Sliding Window Maximum 

https://youtu.be/aCdpaTk5qBM
