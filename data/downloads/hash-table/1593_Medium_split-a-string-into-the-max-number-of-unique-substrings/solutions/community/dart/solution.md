# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 6
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5946112/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5946112/)

---

![image.png](./images/0.png)

---

## Intuition
We need to split the string into unique substrings in such a way that the number of splits is maximized. We can solve this using backtracking, where we try different splits at each index and check if the substring is unique.

## Approach
We use a set to track the unique substrings and a backtracking function to explore all possible ways to split the string. For each substring, we check if it has already been used (i.e., if it exists in the set). If not, we add it to the set and continue splitting the rest of the string. After processing a split, we backtrack by removing the substring from the set, allowing us to try other splits.

## Complexity
- **Time complexity:** $$O(2^n)$$ where \\(n\\) is the length of the string (since there are exponential possible ways to split).
- **Space complexity:** $$O(n)$$ due to the recursion stack and set used for unique substrings.


```dart []
class Solution {
  int maxUniqueSplit(String s) {
    Set<String> seen = {};  // Set to store unique substrings
    return backtrack(s, 0, seen);  // Start recursion from the first character
  }

  int backtrack(String s, int start, Set<String> seen) {
    if (start == s.length) {
      // Base case: if we've reached the end, return the number of unique substrings
      return seen.length;
    }

    int maxSplits = 0;

    // Try splitting at each possible point in the string
    for (int i = start + 1; i <= s.length; i++) {
      String substring = s.substring(start, i);  // Current substring

      // If this substring hasn't been used before, add it to the set
      if (!seen.contains(substring)) {
        seen.add(substring);
        // Recurse to split the rest of the string
        maxSplits = max(maxSplits, backtrack(s, i, seen));
        // Backtrack: remove the substring after trying it
        seen.remove(substring);
      }
    }

    return maxSplits;
  }
}
```


```python []
class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        def backtrack(start, seen):
            if start == len(s):
                return len(seen)
            max_splits = 0
            for i in range(start + 1, len(s) + 1):
                substring = s[start:i]
                if substring not in seen:
                    seen.add(substring)
                    max_splits = max(max_splits, backtrack(i, seen))
                    seen.remove(substring)
            return max_splits
        
        return backtrack(0, set())
```


```cpp []
class Solution {
public:
    int maxUniqueSplit(string s) {
        unordered_set<string> seen;  // Set to store unique substrings
        return backtrack(s, 0, seen);
    }
    
    int backtrack(string &s, int start, unordered_set<string> &seen) {
        if (start == s.size()) {
            return seen.size();
        }

        int maxSplits = 0;

        // Try splitting at each possible point in the string
        for (int i = start + 1; i <= s.size(); i++) {
            string sub = s.substr(start, i - start);  // Current substring

            if (seen.find(sub) == seen.end()) {
                seen.insert(sub);
                maxSplits = max(maxSplits, backtrack(s, i, seen));
                seen.erase(sub);  // Backtrack
            }
        }

        return maxSplits;
    }
};
```


```java []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int maxUniqueSplit(String s) {
        Set<String> seen = new HashSet<>();  // Set to store unique substrings
        return backtrack(s, 0, seen);
    }

    private int backtrack(String s, int start, Set<String> seen) {
        if (start == s.length()) {
            return seen.size();
        }

        int maxSplits = 0;

        // Try splitting at each possible point in the string
        for (int i = start + 1; i <= s.length(); i++) {
            String substring = s.substring(start, i);

            if (!seen.contains(substring)) {
                seen.add(substring);
                maxSplits = Math.max(maxSplits, backtrack(s, i, seen));
                seen.remove(substring);  // Backtrack
            }
        }

        return maxSplits;
    }
}
```


```javascript []
var maxUniqueSplit = function(s) {
    const seen = new Set();

    const backtrack = (start) => {
        if (start === s.length) return seen.size;

        let maxSplits = 0;
        for (let i = start + 1; i <= s.length; i++) {
            const substring = s.slice(start, i);
            if (!seen.has(substring)) {
                seen.add(substring);
                maxSplits = Math.max(maxSplits, backtrack(i));
                seen.delete(substring);  // Backtrack
            }
        }
        return maxSplits;
    };

    return backtrack(0);
};
```


```go []
package main

func maxUniqueSplit(s string) int {
    seen := make(map[string]bool)
    return backtrack(s, 0, seen)
}

func backtrack(s string, start int, seen map[string]bool) int {
    if start == len(s) {
        return len(seen)
    }

    maxSplits := 0

    for i := start + 1; i <= len(s); i++ {
        substring := s[start:i]

        if !seen[substring] {
            seen[substring] = true
            maxSplits = max(maxSplits, backtrack(s, i, seen))
            delete(seen, substring) // Backtrack
        }
    }

    return maxSplits
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

---

![image.png](./images/1.png) {:style='width:250px'}