# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 10
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/5822790/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/5822790/)

---


---

# Intuition
Given a string `s` and a list of valid words in `dictionary`, the problem requires us to split `s` into a combination of dictionary words while minimizing the number of "extra" characters that do not form valid dictionary words. The goal is to find an efficient way to evaluate different substrings and track the number of extra characters.

# Approach
1. **Dynamic Programming (DP)**:  
   We use a dynamic programming approach where `dp[i]` represents the minimum number of extra characters required if we start partitioning the string `s` from index `i`. We initialize `dp[i]` assuming the worst case, which is adding 1 extra character for each position.

2. **Substring Check**:  
   For each starting index `i`, check substrings `s[i:j+1]` for all possible `j` (where `j` ranges from `i` to `n`). If a substring is found in the dictionary, update `dp[i]` by considering the result of `dp[j + 1]`. This ensures that if we can partition `s` from `i` to `j` using a dictionary word, we minimize the extra characters for that part of the string.

3. **Final Answer**:  
   The final answer is stored in `dp[0]`, which gives the minimum extra characters needed when considering the entire string.

# Complexity
- **Time complexity**:  
  The time complexity is **O(n^2)**, where `n` is the length of the string `s`. For each index `i`, we check all substrings starting from `i` and look them up in the dictionary, which takes linear time for each substring due to substring extraction and dictionary lookup.

- **Space complexity**:  
  The space complexity is **O(n + m)**, where `n` is the length of the string `s` (used for the `dp` array) and `m` is the size of the dictionary (used for storing dictionary words in a set).

---

# Code Implementation (Dart)

```dart []
class Solution {
  int minExtraChar(String s, List<String> dictionary) {
    int n = s.length;

    // Create a set for quick lookup
    Set<String> dictSet = dictionary.toSet();

    // dp[i] stores the minimum number of extra characters if we start from index i
    List<int> dp = List.filled(n + 1, 0);

    // Fill the dp array from right to left
    for (int i = n - 1; i >= 0; i--) {
      // Initialize dp[i] to the worst case (one extra character)
      dp[i] = dp[i + 1] + 1;

      // Try to find a valid word starting from index i
      for (int j = i; j < n; j++) {
        String substring = s.substring(i, j + 1);

        // Check if the substring is in the dictionary
        if (dictSet.contains(substring)) {
          dp[i] = dp[i].min(dp[j + 1]);
        }
      }
    }

    // The result is stored in dp[0]
    return dp[0];
  }
}

// Extension to add a `min` function to the `int` class
extension MinInt on int {
  int min(int other) => this < other ? this : other;
}
```




```java []
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public int minExtraChar(String s, List<String> dictionary) {
        int n = s.length();
        Set<String> dictSet = new HashSet<>(dictionary);
        int[] dp = new int[n + 1];

        for (int i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1] + 1; // Worst case: add one character
            for (int j = i; j < n; j++) {
                String substring = s.substring(i, j + 1);
                if (dictSet.contains(substring)) {
                    dp[i] = Math.min(dp[i], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
}
```



```python []
class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        n = len(s)
        dict_set = set(dictionary)
        dp = [0] * (n + 1)

        for i in range(n - 1, -1, -1):
            dp[i] = dp[i + 1] + 1
            for j in range(i, n):
                substring = s[i:j+1]
                if substring in dict_set:
                    dp[i] = min(dp[i], dp[j + 1])

        return dp[0]
```



```cpp []
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int minExtraChar(string s, vector<string>& dictionary) {
        int n = s.length();
        unordered_set<string> dictSet(dictionary.begin(), dictionary.end());
        vector<int> dp(n + 1, 0);

        for (int i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1] + 1;
            for (int j = i; j < n; j++) {
                string substring = s.substr(i, j - i + 1);
                if (dictSet.find(substring) != dictSet.end()) {
                    dp[i] = min(dp[i], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
};
```



```javascript []
var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dictSet = new Set(dictionary);
    const dp = Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1; // Worst case: add one character
        for (let j = i; j < n; j++) {
            const substring = s.slice(i, j + 1);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j + 1]);
            }
        }
    }
    return dp[0];
};
```



```go []
package main

func minExtraChar(s string, dictionary []string) int {
    n := len(s)
    dictSet := make(map[string]struct{}, len(dictionary))
    for _, word := range dictionary {
        dictSet[word] = struct{}{}
    }

    dp := make([]int, n+1)

    for i := n - 1; i >= 0; i-- {
        dp[i] = dp[i+1] + 1
        for j := i; j < n; j++ {
            substring := s[i : j+1]
            if _, found := dictSet[substring]; found {
                dp[i] = min(dp[i], dp[j+1])
            }
        }
    }

    return dp[0]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```



```c []
#include <string.h>
#include <stdbool.h>

int min(int a, int b) {
    return a < b ? a : b;
}

bool contains(char* dict[], int dict_size, char* word) {
    for (int i = 0; i < dict_size; i++) {
        if (strcmp(dict[i], word) == 0) {
            return true;
        }
    }
    return false;
}

int minExtraChar(char* s, char* dictionary[], int dict_size) {
    int n = strlen(s);
    int dp[n + 1];
    memset(dp, 0, sizeof(dp));

    for (int i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1;  // Worst case: 1 extra char
        for (int j = i; j < n; j++) {
            char substring[100];
            strncpy(substring, s + i, j - i + 1);
            substring[j - i + 1] = '\\0';
            if (contains(dictionary, dict_size, substring)) {
                dp[i] = min(dp[i], dp[j + 1]);
            }
        }
    }

    return dp[0];
}
```



```typescript []
function minExtraChar(s: string, dictionary: string[]): number {
    const n = s.length;
    const dictSet = new Set(dictionary);
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1; // Worst case: one extra character
        for (let j = i; j < n; j++) {
            const substring = s.slice(i, j + 1);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j + 1]);
            }
        }
    }

    return dp[0];
}
```

---
![image.png](./images/0.png) {:style='width:250px'}