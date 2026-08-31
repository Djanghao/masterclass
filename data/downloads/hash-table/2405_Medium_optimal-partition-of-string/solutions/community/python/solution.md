# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 82
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3376662/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3376662/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to partition the string into substrings where each substring should have unique characters. Therefore, if a character that has already appeared in the current substring appears again, we should create a new substring. We can keep track of the last occurrence of each character using a hash map, and iterate through the string to create substrings that contain only unique characters.

# Approach
<!-- Describe your approach to solving the problem. -->
We can use a hash map to keep track of the last occurrence of each character. We start with the first character of the string and add it to the hash map. Then, we iterate through the rest of the string, and for each character, we check if it has already appeared in the current substring (i.e., its last occurrence is after the start index of the current substring). If it has, we create a new substring and start a new count. Otherwise, we add the character to the hash map and continue iterating. At the end, we return the count plus one (to account for the last substring).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is $$O(n)$$, where n is the length of the input string. We iterate through the string once to create the substrings.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this algorithm is $$O(k)$$, where k is the size of the character set (in this case, the English lowercase letters). We use a hash map to store the last occurrence of each character, which can have at most k entries.



![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public int partitionString(String s) {
        int idx = 0;
        int count = 0;
        Map<Character, Boolean> mp = new HashMap<>(); // use a HashMap instead of an unordered_map
        while (idx < s.length()) {
            if (mp.containsKey(s.charAt(idx))) { // if current character has already appeared in current substring
                count++; // increment count
                mp.clear(); // clear HashMap to start a new substring
            }
            mp.put(s.charAt(idx), true); // mark current character as seen
            idx++; // move to next character
        }
        return count + 1; // return number of substrings (add 1 because we need to count the last substring as well)
    }
}
```
```C++ []
class Solution {
public:
    int partitionString(string s) {
        int idx = 0;
        int count = 0;
        unordered_map<char, bool> mp; // unordered_map to keep track of characters in current substring
        while (idx < s.length()) {
            if (mp.find(s[idx]) != mp.end()) { // if current character has already appeared in current substring
                count++; // increment count
                mp.clear(); // clear unordered_map to start a new substring
            }
            mp[s[idx]] = true; // mark current character as seen
            idx++; // move to next character
        }
        return count + 1; // return number of substrings (add 1 because we need to count the last substring as well)
    }
};
```

```Python []
class Solution(object):
    def partitionString(self, s):
        idx = 0
        count = 0
        mp = {} # use a dictionary instead of a HashMap
        while idx < len(s):
            if s[idx] in mp: # if current character has already appeared in current substring
                count += 1 # increment count
                mp.clear() # clear dictionary to start a new substring
            mp[s[idx]] = True # mark current character as seen
            idx += 1 # move to next character
        return count + 1 # return number of substrings (add 1 because we need to count the last substring as well)

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```