# ✅☑Beats 100% users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 47
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476049/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476049/)

---

# PLEASE UPVOTE IF IT HELPED

---

![Screenshot 2023-12-24 062247.png](./images/0.png)



# Approaches
(Also explained in the code)

#### ***Approach 1 (Maps)***
1. **Counting Characters:** It iterates through each word in the words vector and counts the occurrences of each character, storing the counts in an unordered map counts.

1. **Checking if Characters Can Be Distributed Equally:** Then, it checks if the count of each character in the counts map is divisible by the total number of words n. If any character count isn't evenly divisible by n, it returns false. If all characters meet this condition, it returns true.

# Complexity
- Time complexity:
   $$O(n).k$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    bool makeEqual(vector<string>& words) {
        unordered_map<char, int> counts;
        for (auto a  : words) {
            for (char x : a) {
                counts[x]++;
            }
        }
        
        int n = words.size();
        for (auto a : counts) {
            if (a.second % n != 0) {
                return false;
            }
        }
        
        return true;
    }
};



```
```Java []

import java.util.*;

class Solution {
    public boolean makeEqual(String[] words) {
        Map<Character, Integer> counts = new HashMap<>();
        
        for (String word : words) {
            for (char c : word.toCharArray()) {
                counts.put(c, counts.getOrDefault(c, 0) + 1);
            }
        }
        
        int n = words.length;
        for (Map.Entry<Character, Integer> entry : counts.entrySet()) {
            if (entry.getValue() % n != 0) {
                return false;
            }
        }
        
        return true;
    }
}


```
```python3 []
class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        counts = {}
        
        for word in words:
            for c in word:
                counts[c] = counts.get(c, 0) + 1
        
        n = len(words)
        for val in counts.values():
            if val % n != 0:
                return False
        
        return True



```
```javascript []
var makeEqual = function(words) {
    let counts = new Map();
    
    for (let word of words) {
        for (let c of word) {
            counts.set(c, (counts.get(c) || 0) + 1);
        }
    }
    
    let n = words.length;
    for (let val of counts.values()) {
        if (val % n !== 0) {
            return false;
        }
    }
    
    return true;
};



```
---
#### ***Approach 2 (Vector)***


1. **Initialization:** Create a count array counts of size 26 (for each letter of the English alphabet) and initialize all counts to 0.

1. **Counting:** Loop through each word in the input vector. For each character in every word, increment its respective count in the `counts` array.

1. **Check distribution:** Determine the number of words (`n`) in the input vector. Then, iterate through the counts array. If any character count is not divisible by the total number of words (`n`), return `false`. This means the character distribution across all words is not equal.

1. If all characters' counts are divisible by the total number of words, return `true`. This implies that the character distribution can be made equal across all words in the input vector.

# Complexity
- Time complexity:
   $$O(n.k)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    bool makeEqual(vector<string>& words) {
        vector<int> counts(26, 0);
        for (string word : words) {
            for (char c : word) {
                counts[c - 'a']++;
            }
        }
        
        int n = words.size();
        for (int val : counts) {
            if (val % n != 0) {
                return false;
            }
        }
        
        return true;
    }
};




```
```Java []
class Solution {
    public boolean makeEqual(String[] words) {
        int[] counts = new int[26];
        for (String word : words) {
            for (char c : word.toCharArray()) {
                counts[c - 'a']++;
            }
        }
        
        int n = words.length;
        for (int val : counts) {
            if (val % n != 0) {
                return false;
            }
        }
        
        return true;
    }
}


```
```python3 []
class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        counts = [0] * 26
        for word in words:
            for c in word:
                counts[ord(c) - ord('a')] += 1
        
        n = len(words)
        for val in counts:
            if val % n != 0:
                return False

        return True


```
```javascript []
var makeEqual = function(words) {
    let counts = new Array(26).fill(0);
    
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            let charCode = word.charCodeAt(i) - 'a'.charCodeAt(0);
            counts[charCode]++;
        }
    }
    
    let n = words.length;
    for (let val of counts) {
        if (val % n !== 0) {
            return false;
        }
    }
    
    return true;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---