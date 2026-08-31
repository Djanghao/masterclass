# 📝 Minimize Extra Characters in a String with Dynamic Programming 🚀 || 100% || All Languages

**Author:** MaheshSavant
**Votes:** 0
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/5822884/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/5822884/)

---

# \uD83E\uDDE0 Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to minimize the number of characters in the string `s` that are not part of any substring in the provided `dictionary`. A dynamic programming approach comes to mind, where for each character in `s`, we check all possible substrings against the dictionary.

# \u2699\uFE0F Approach
<!-- Describe your approach to solving the problem. -->
1. Convert the `dictionary` array into a `HashSet` for efficient lookup.
2. Initialize a `dp` array of size `n+1` (where `n` is the length of `s`) to store the minimum extra characters needed for each substring `s[0..i)`.
3. For each character in `s`, assume it's an extra character. Then, check every substring `s[j..i)` to see if it's in the dictionary. If it is, update the `dp[i]` to the minimum value.
4. Return `dp[n]` to get the minimum extra characters required for the entire string.

# \u23F3 Complexity
- **Time complexity:**  
  The time complexity is $$O(n^2)$$, where `n` is the length of the string `s`. For each character in `s`, we check all possible substrings, and each lookup in the dictionary is constant time $$O(1)$$ due to the `HashSet`.

- **Space complexity:**  
  The space complexity is $$O(n + d)$$ where `n` is the length of the string and `d` is the size of the dictionary, as we store both the `dp` array and the dictionary.

# \uD83D\uDCBB Code
```java []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        Set<String> dictSet = new HashSet<>();
        for (String word : dictionary) {
            dictSet.add(word);
        }

        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + 1; 
            for (int j = 0; j < i; j++) {
                if (dictSet.contains(s.substring(j, i))) {
                    dp[i] = Math.min(dp[i], dp[j]);
                }
            }
        }

        return dp[n];
    }
}
```
``` C []
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool dictContains(char* substring, char** dictionary, int dictSize) {
    for (int i = 0; i < dictSize; i++) {
        if (strcmp(substring, dictionary[i]) == 0) {
            return true;
        }
    }
    return false;
}

int minExtraChar(char* s, char** dictionary, int dictSize) {
    int n = strlen(s);
    int dp[n + 1];
    dp[0] = 0;

    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (int j = 0; j < i; j++) {
            char substring[i - j + 1];
            strncpy(substring, s + j, i - j);
            substring[i - j] = '\\0';
            if (dictContains(substring, dictionary, dictSize)) {
                dp[i] = dp[j] < dp[i] ? dp[j] : dp[i];
            }
        }
    }

    return dp[n];
}
```
```C++ []
#include <unordered_set>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    int minExtraChar(string s, vector<string>& dictionary) {
        unordered_set<string> dictSet(dictionary.begin(), dictionary.end());
        int n = s.length();
        vector<int> dp(n + 1, 0);

        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + 1;
            for (int j = 0; j < i; j++) {
                if (dictSet.find(s.substr(j, i - j)) != dictSet.end()) {
                    dp[i] = min(dp[i], dp[j]);
                }
            }
        }

        return dp[n];
    }
};
```
``` C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int MinExtraChar(string s, string[] dictionary) {
        var dictSet = new HashSet<string>(dictionary);
        int n = s.Length;
        var dp = new int[n + 1];
        
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + 1;
            for (int j = 0; j < i; j++) {
                if (dictSet.Contains(s.Substring(j, i - j))) {
                    dp[i] = Math.Min(dp[i], dp[j]);
                }
            }
        }
        
        return dp[n];
    }
}
```
``` Python []
class Solution:
    def minExtraChar(self, s: str, dictionary: list[str]) -> int:
        dict_set = set(dictionary)
        n = len(s)
        dp = [0] * (n + 1)

        for i in range(1, n + 1):
            dp[i] = dp[i - 1] + 1
            for j in range(i):
                if s[j:i] in dict_set:
                    dp[i] = min(dp[i], dp[j])

        return dp[n]
```
```Rust []
use std::collections::HashSet;

impl Solution {
    pub fn min_extra_char(s: String, dictionary: Vec<String>) -> i32 {
        let dict_set: HashSet<_> = dictionary.into_iter().collect();
        let n = s.len();
        let mut dp = vec![0; n + 1];

        for i in 1..=n {
            dp[i] = dp[i - 1] + 1;
            for j in 0..i {
                if dict_set.contains(&s[j..i]) {
                    dp[i] = dp[i].min(dp[j]);
                }
            }
        }

        dp[n]
    }
}
```
```Ruby []
def min_extra_char(s, dictionary)
    dict_set = dictionary.to_set
    n = s.length
    dp = Array.new(n + 1, 0)

    (1..n).each do |i|
        dp[i] = dp[i - 1] + 1
        (0...i).each do |j|
            dp[i] = [dp[i], dp[j]].min if dict_set.include?(s[j...i])
        end
    end

    dp[n]
end
```
```Go []
package main

import (
    "strings"
)

func minExtraChar(s string, dictionary []string) int {
    dictSet := make(map[string]struct{})
    for _, word := range dictionary {
        dictSet[word] = struct{}{}
    }

    n := len(s)
    dp := make([]int, n+1)

    for i := 1; i <= n; i++ {
        dp[i] = dp[i-1] + 1
        for j := 0; j < i; j++ {
            if _, exists := dictSet[s[j:i]]; exists {
                dp[i] = min(dp[i], dp[j])
            }
        }
    }

    return dp[n]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
```JavaScript []
var minExtraChar = function(s, dictionary) {
    const dictSet = new Set(dictionary);
    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = 0; j < i; j++) {
            if (dictSet.has(s.substring(j, i))) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }

    return dp[n];
};
```

## Video Solution \uD83D\uDC47
<iframe width="560" height="315" src="https://www.youtube.com/embed/9BAxiIdQE3E?si=1uWrinmiw4V07iUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



Click on the image to watch the video!

