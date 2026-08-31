# 🟢🔴🟢 Efficient Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/5837628/](https://leetcode.com/problems/find-and-replace-in-string/solutions/5837628/)

---

# Intuition
The task is to replace specific substrings in a given string `s` based on certain indices. Each index points to a starting position where a substring in `s` should be replaced if and only if the substring starting from that index matches a given source substring. This problem requires keeping track of replacements efficiently while scanning through the string.

# Approach
1. First, we create a map to store the valid replacements. We iterate over the given `indices`, `sources`, and `targets` to check if the substring of `s` starting at a particular index matches the corresponding source substring. If it does, we add the index and corresponding position in the `sources`/`targets` to the map.
2. We then iterate through the string `s`, and whenever we find a starting index in our map, we replace the substring with the corresponding target. If no replacement is found at a position, we add the current character to the result string and move on.
3. This ensures that we build the new string with all the correct replacements applied.

# Example Walkthrough
### Example 1:
**Input**:  
`s = "abcd"`,  
`indices = [0, 2]`,  
`sources = ["a", "cd"]`,  
`targets = ["eee", "ffff"]`

1. At index `0`, the substring of `s` starting at `0` is `"a"`, which matches the source `"a"`. So, we replace `"a"` with `"eee"`.
2. At index `2`, the substring of `s` starting at `2` is `"cd"`, which matches the source `"cd"`. So, we replace `"cd"` with `"ffff"`.

**Output**: `"eeebffff"`

### Example 2:
**Input**:  
`s = "abcd"`,  
`indices = [1]`,  
`sources = ["bc"]`,  
`targets = ["xy"]`

1. At index `1`, the substring of `s` starting at `1` is `"bc"`, which matches the source `"bc"`. So, we replace `"bc"` with `"xy"`.

**Output**: `"axycd"`

# Complexity
- **Time Complexity**:  
  $$O(n + k)$$ where \\( n \\) is the length of the string \\( s \\) and \\( k \\) is the length of `indices`. We iterate over the string once and make at most `k` replacements.

- **Space Complexity**:  
  $$O(n)$$ due to the extra space used for constructing the result string and the map.

# Code
```dart
class Solution {
  String findReplaceString(String s, List<int> indices, List<String> sources, List<String> targets) {
    
    Map<int, int> map = {};
    for (int i = 0; i < indices.length; i++) {
        if (s.startsWith(sources[i], indices[i])) {
            map[indices[i]] = i;
        }
    }

    String res = "";
    for (int i = 0; i < s.length;) {
        if (map.containsKey(i)) {
            res += targets[map[i]!];
            i += sources[map[i]!].length; 
        } else {
            res += s[i++];
        }
    }

    return res;
  }
}
