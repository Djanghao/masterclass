# ✅3 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 1926
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/3649636/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/3649636/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the 3 solutions is to iteratively find the longest substring without repeating characters by maintaining a sliding window approach. We use two pointers (`left` and `right`) to represent the boundaries of the current substring. As we iterate through the string, we update the pointers and adjust the window to accommodate new unique characters and eliminate repeating characters.

# Approach 1 - Set
<!-- Describe your approach to solving the problem. -->

1. We use a set (`charSet`) to keep track of unique characters in the current substring.
2. We maintain two pointers, `left` and `right`, to represent the boundaries of the current substring.
3. The `maxLength` variable keeps track of the length of the longest substring encountered so far.
4. We iterate through the string using the `right` pointer.
5. If the current character is not in the set (`charSet`), it means we have a new unique character.
6. We insert the character into the set and update the `maxLength` if necessary.
7. If the character is already present in the set, it indicates a repeating character within the current substring.
8. In this case, we move the `left` pointer forward, removing characters from the set until the repeating character is no longer present.
9. We insert the current character into the set and continue the iteration.
10. Finally, we return the `maxLength` as the length of the longest substring without repeating characters.

# Code
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        int maxLength = 0;
        unordered_set<char> charSet;
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (charSet.count(s[right]) == 0) {
                charSet.insert(s[right]);
                maxLength = max(maxLength, right - left + 1);
            } else {
                while (charSet.count(s[right])) {
                    charSet.erase(s[left]);
                    left++;
                }
                charSet.insert(s[right]);
            }
        }
        
        return maxLength;
    }
};
```
```Java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int maxLength = 0;
        Set<Character> charSet = new HashSet<>();
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (!charSet.contains(s.charAt(right))) {
                charSet.add(s.charAt(right));
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                while (charSet.contains(s.charAt(right))) {
                    charSet.remove(s.charAt(left));
                    left++;
                }
                charSet.add(s.charAt(right));
            }
        }
        
        return maxLength;
    }
}

```
```Python3 []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLength = 0
        charSet = set()
        left = 0
        
        for right in range(n):
            if s[right] not in charSet:
                charSet.add(s[right])
                maxLength = max(maxLength, right - left + 1)
            else:
                while s[right] in charSet:
                    charSet.remove(s[left])
                    left += 1
                charSet.add(s[right])
        
        return maxLength

```

# Approach 2 - Unordered Map
1. We improve upon the first solution by using an unordered map (`charMap`) instead of a set.
2. The map stores characters as keys and their indices as values.
3. We still maintain the `left` and `right` pointers and the `maxLength` variable.
4. We iterate through the string using the `right` pointer.
5. If the current character is not in the map or its index is less than `left`, it means it is a new unique character.
6 We update the `charMap` with the character's index and update the `maxLength` if necessary.
7. If the character is repeating within the current substring, we move the `left` pointer to the next position after the last occurrence of the character.
8. We update the index of the current character in the `charMap` and continue the iteration.
9. At the end, we return the `maxLength` as the length of the longest substring without repeating characters.

# Code
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        int maxLength = 0;
        unordered_map<char, int> charMap;
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (charMap.count(s[right]) == 0 || charMap[s[right]] < left) {
                charMap[s[right]] = right;
                maxLength = max(maxLength, right - left + 1);
            } else {
                left = charMap[s[right]] + 1;
                charMap[s[right]] = right;
            }
        }
        
        return maxLength;
    }
};
```
```Java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int maxLength = 0;
        Map<Character, Integer> charMap = new HashMap<>();
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (!charMap.containsKey(s.charAt(right)) || charMap.get(s.charAt(right)) < left) {
                charMap.put(s.charAt(right), right);
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                left = charMap.get(s.charAt(right)) + 1;
                charMap.put(s.charAt(right), right);
            }
        }
        
        return maxLength;
    }
}

```
```Python3 []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLength = 0
        charMap = {}
        left = 0
        
        for right in range(n):
            if s[right] not in charMap or charMap[s[right]] < left:
                charMap[s[right]] = right
                maxLength = max(maxLength, right - left + 1)
            else:
                left = charMap[s[right]] + 1
                charMap[s[right]] = right
        
        return maxLength

```

# Approach 3 - Integer Array
1. This solution uses an integer array `charIndex` to store the indices of characters.
2. We eliminate the need for an unordered map by utilizing the array.
3. The `maxLength`, `left`, and `right` pointers are still present.
4. We iterate through the string using the `right` pointer.
5. We check if the current character has occurred within the current substring by comparing its index in `charIndex` with `left`.
6. If the character has occurred, we move the `left` pointer to the next position after the last occurrence of the character.
7. We update the index of the current character in `charIndex`.
8. At each step, we update the `maxLength` by calculating the length of the current substring.
9. We continue the iteration until reaching the end of the string.
10. Finally, we return the `maxLength` as the length of the longest substring without repeating characters.

# Code
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        int maxLength = 0;
        vector<int> charIndex(128, -1);
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (charIndex[s[right]] >= left) {
                left = charIndex[s[right]] + 1;
            }
            charIndex[s[right]] = right;
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};
```
```Java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int maxLength = 0;
        int[] charIndex = new int[128];
        Arrays.fill(charIndex, -1);
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (charIndex[s.charAt(right)] >= left) {
                left = charIndex[s.charAt(right)] + 1;
            }
            charIndex[s.charAt(right)] = right;
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}

```
```Python3 []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLength = 0
        charIndex = [-1] * 128
        left = 0
        
        for right in range(n):
            if charIndex[ord(s[right])] >= left:
                left = charIndex[ord(s[right])] + 1
            charIndex[ord(s[right])] = right
            maxLength = max(maxLength, right - left + 1)
        
        return maxLength

```

![CUTE_CAT.png](./images/0.png)
**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**


