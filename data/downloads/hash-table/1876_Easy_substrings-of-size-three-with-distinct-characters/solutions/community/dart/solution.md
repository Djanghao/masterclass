# 🟢🔴🟢 Beats 100.00%👏 ||  Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5602906/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5602906/)

---

# Problem Description

Given a string `s`, the task is to count the number of substrings of length 3 with all distinct characters. These substrings are called "good substrings".

## Intuition

To solve this problem, the idea is to iterate through the string and check each substring of length 3 to see if it contains all unique characters. If it does, it is counted as a "good substring".

## Approach

1. **Initialize a Counter**:
   - Start with a counter set to zero to track the number of good substrings.

2. **Iterate Through the String**:
   - Iterate through the string using a loop that goes up to `s.length - 2` to ensure we only consider substrings of length 3.

3. **Check Each Substring**:
   - For each position `i` in the loop, extract the substring of length 3 starting at `i`.
   - Split the substring into a list of characters and convert it to a set to remove duplicates.
   - If the length of the set is 3, it means all characters are unique, and we increment the counter.

4. **Return the Final Count**:
   - After processing all possible substrings, return the count of good substrings.

## Complexity

- **Time complexity**:
  - The time complexity is $$O(n)$$, where `n` is the length of the string `s`. This is because we iterate through the string once and perform constant-time operations for each substring of length 3.

- **Space complexity**:
  - The space complexity is $$O(1)$$, as the additional space required for the counter and temporary variables does not depend on the size of the input string.

## Example Walkthrough

Consider the example:
- `s = "xyzzaz"`

### 1. **Initial String**
   - `s = "xyzzaz"`

### 2. **Iterate Through the String**
   - For `i = 0`: 
     - Substring: "xyz"
     - Set: {"x", "y", "z"}
     - All characters are unique, increment count: count = 1
   - For `i = 1`: 
     - Substring: "yzz"
     - Set: {"y", "z"}
     - Not all characters are unique, do not increment count
   - For `i = 2`: 
     - Substring: "zza"
     - Set: {"z", "a"}
     - Not all characters are unique, do not increment count
   - For `i = 3`: 
     - Substring: "zaz"
     - Set: {"z", "a"}
     - Not all characters are unique, do not increment count

### 3. **Final Result**
   - The number of good substrings is 1.

**Output**: 1

## Code

```dart
class Solution {
  int countGoodSubstrings(String s) {
    int count = 0;
    for (int i = 0; i < s.length - 2; i++) {
      String s1 = s[i] + s[i + 1] + s[i + 2];
      List<String> s2 = s1.split("");
      if (s1.length == s2.toSet().length) count++;
    }
    return count;
  }
}
