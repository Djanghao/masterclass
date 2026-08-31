# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481149/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481149/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. **Initialization:** Initialize a vector of vectors (len) to store the lengths of character sequences for each character in the input string.

1. **Compute Sequence Lengths:** Loop through the string to count the lengths of consecutive character sequences and store these lengths in the len vector for the respective characters.

1. **Find Maximum Palindrome Length:** For each character, sort the lengths of sequences in ascending order. Then, iterate through these lengths and check if removing at most one character can form a palindrome substring.

1. **Update Maximum Length:** Update the maximum palindrome length found while iterating through the sequences for each character.

1. **Return Maximum Length:** Return the maximum length found for a palindrome substring where at most one character can be removed.


# Complexity
- Time complexity:
   $$O(n + 26 * (k log k) * (k^2))$$
    

- Space complexity:
   $$O(26 * k)$$
    


# Code
```C++ []

class Solution {
public:
    int maximumLength(string s) {
        // Create a vector of vectors to store lengths of character sequences
        // Initialize a vector for each character ('a' to 'z') to store lengths
        vector<vector<int>> len(26);
        
        int n = s.size();
        
        // Loop through the string to compute lengths of consecutive characters
        for (int i = 0; i < n;) {
            int j = i;
            // Count the length of the current character sequence
            while (j < n && s[j] == s[i])
                j++;
            // Store the length of the sequence for the respective character
            len[s[i] - 'a'].push_back(j - i);
            i = j;
        }
        
        int mx = -1; // Initialize the maximum length as -1
        
        // Iterate through each character ('a' to 'z')
        for (int i = 0; i < 26; ++i) {
            // Sort the lengths of sequences for the current character
            sort(begin(len[i]), end(len[i]));
            
            // Iterate through each length in the sorted sequence lengths
            for (auto v : len[i]) {
                // Try to find the maximum palindrome length for the current character
                for (int j = max(1, v - 2); j <= v; ++j) {
                    auto lb = lower_bound(begin(len[i]), end(len[i]), j + 2);
                    // If a length can be found that forms a palindrome by removing at most one character
                    if (lb != end(len[i])) {
                        mx = max(mx, j); // Update the maximum length
                        continue;
                    }
                    // If a length can be found that forms a palindrome by removing exactly one character
                    lb = lower_bound(begin(len[i]), end(len[i]), j + 1);
                    if (lb != end(len[i]) && lb + 1 != end(len[i])) {
                        mx = max(mx, j); // Update the maximum length
                        continue;
                    }
                    // If a length can be found that forms a palindrome by removing exactly one character
                    lb = lower_bound(begin(len[i]), end(len[i]), j);
                    if (lb != end(len[i]) && lb + 1 != end(len[i])) {
                        if (*(lb + 1) == j + 1) {
                            mx = max(mx, j); // Update the maximum length
                            continue;
                        }
                        if (lb + 2 != end(len[i])) {
                            mx = max(mx, j); // Update the maximum length
                            continue;
                        }
                    }
                }
            }
        }
        
        return mx; // Return the maximum length of the palindrome substring
    }
};




```
```Java []
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int maximumLength(String s) {
        List<List<Integer>> len = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            len.add(new ArrayList<>());
        }

        int n = s.length();
        for (int i = 0; i < n;) {
            int j = i;
            while (j < n && s.charAt(j) == s.charAt(i)) {
                j++;
            }
            len.get(s.charAt(i) - 'a').add(j - i);
            i = j;
        }

        int mx = -1;
        for (int i = 0; i < 26; ++i) {
            len.get(i).sort(null);
            for (int v : len.get(i)) {
                for (int j = Math.max(1, v - 2); j <= v; ++j) {
                    int idx = lowerBound(len.get(i), j + 2);
                    if (idx != len.get(i).size()) {
                        mx = Math.max(mx, j);
                        continue;
                    }
                    idx = lowerBound(len.get(i), j + 1);
                    if (idx != len.get(i).size() && idx + 1 != len.get(i).size()) {
                        mx = Math.max(mx, j);
                        continue;
                    }
                    idx = lowerBound(len.get(i), j);
                    if (idx != len.get(i).size() && idx + 1 != len.get(i).size()) {
                        if (len.get(i).get(idx + 1) == j + 1) {
                            mx = Math.max(mx, j);
                            continue;
                        }
                        if (idx + 2 != len.get(i).size()) {
                            mx = Math.max(mx, j);
                            continue;
                        }
                    }
                }
            }
        }
        
        return mx;
    }

    private int lowerBound(List<Integer> list, int target) {
        int left = 0, right = list.size();
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (list.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}



```
```python3 []
class Solution:
    def maximumLength(self, s: str) -> int:
        len = [[] for _ in range(26)]
        
        n = len(s)
        i = 0
        while i < n:
            j = i
            while j < n and s[j] == s[i]:
                j += 1
            len[ord(s[i]) - ord('a')].append(j - i)
            i = j
        
        mx = -1
        for i in range(26):
            len[i].sort()
            for v in len[i]:
                for j in range(max(1, v - 2), v + 1):
                    idx = self.lower_bound(len[i], j + 2)
                    if idx != len[i].__len__():
                        mx = max(mx, j)
                        continue
                    idx = self.lower_bound(len[i], j + 1)
                    if idx != len[i].__len__() and idx + 1 != len[i].__len__():
                        mx = max(mx, j)
                        continue
                    idx = self.lower_bound(len[i], j)
                    if idx != len[i].__len__() and idx + 1 != len[i].__len__():
                        if len[i][idx + 1] == j + 1:
                            mx = max(mx, j)
                            continue
                        if idx + 2 != len[i].__len__():
                            mx = max(mx, j)
                            continue
        return mx
    
    def lower_bound(self, arr, target):
        left, right = 0, len(arr)
        while left < right:
            mid = left + (right - left) // 2
            if arr[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left



```
```javascript []
var maximumLength = function(s) {
    let len = Array.from({ length: 26 }, () => []);
    
    let n = s.length;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) {
            j++;
        }
        len[s.charCodeAt(i) - 'a'.charCodeAt(0)].push(j - i);
        i = j;
    }
    
    let mx = -1;
    for (let i = 0; i < 26; ++i) {
        len[i].sort((a, b) => a - b);
        for (let v of len[i]) {
            for (let j = Math.max(1, v - 2); j <= v; ++j) {
                let idx = lowerBound(len[i], j + 2);
                if (idx !== len[i].length) {
                    mx = Math.max(mx, j);
                    continue;
                }
                idx = lowerBound(len[i], j + 1);
                if (idx !== len[i].length && idx + 1 !== len[i].length) {
                    mx = Math.max(mx, j);
                    continue;
                }
                idx = lowerBound(len[i], j);
                if (idx !== len[i].length && idx + 1 !== len[i].length) {
                    if (len[i][idx + 1] === j + 1) {
                        mx = Math.max(mx, j);
                        continue;
                    }
                    if (idx + 2 !== len[i].length) {
                        mx = Math.max(mx, j);
                        continue;
                    }
                }
            }
        }
    }
    return mx;
};

function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---