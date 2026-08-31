# ✅☑[C++/C/Java/Python/JavaScript] ||  DP ||  EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168250/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168250/)

---

# *PLEASE UPVOTE IF IT HELPED*

---


# Approaches
***(Also explained in the code)***

1. The code defines a C++ class named `Solution` that contains a public function `getWordsInLongestSubsequence`.
1. This function takes three arguments: `n`, an integer, `words`, a vector of strings, and `groups`, a vector of integers.
1. It initializes two vectors, `dp` and `pv`, to keep track of the maximum subsequence length and the previous word index in the longest subsequence, respectively.
1. The code iterates through the words and groups to find the longest subsequence.
1. It uses a nested loop to compare each word with all previous words to check for specific conditions:
    - It skips comparing words with the same group (`groups[i] == groups[j]`).
    - It skips comparing words with different lengths (`words[i].size() != words[j].size()`).
    - It calculates the "difference" between words by counting the number of differing characters.
    - If the difference is not exactly 1, it skips the comparison (`diff != 1`).
1. If the current word can be part of a longer subsequence (`dp[j] + 1 > dp[i]`), it updates the subsequence length and the previous word index.
1. The code then identifies the index of the maximum subsequence length in the `dp` vector.
1. It constructs the longest subsequence of words by backtracking through the `pv` vector.
1. The resulting subsequence is added to the `ans` vector in reverse order to maintain the original order.
1. Finally, the `ans` vector is reversed to provide the correct order and is returned as the output.


# Complexity
- **Time complexity:**
   $$O(n^2 * m)$$
    

- **Space complexity:**
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<int> dp(groups.size(), 1); // Create a vector to store the maximum subsequence length for each word.
        vector<int> pv(groups.size(), -1); // Create a vector to store the previous word index in the longest subsequence.

        // Iterate through the words and groups to find the longest subsequence.
        for (int i = 1; i < groups.size(); i++) {
            for (int j = 0; j < i; j++) {
                if (groups[i] == groups[j]) continue; // If the groups are the same, skip.
                if (words[i].size() != words[j].size()) continue; // If word lengths are different, skip.

                int diff = 0;
                for (int k = 0; k < words[i].size(); k++) {
                    diff += (words[i][k] != words[j][k]); // Calculate the difference in characters.
                }

                if (diff != 1) continue; // If there's more or less than one character difference, skip.

                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1; // Update the subsequence length if it's longer.
                    pv[i] = j; // Update the previous word index.
                }
            }
        }

        int wi = (max_element(dp.begin(), dp.end()) - dp.begin()); // Find the index of the maximum subsequence length.
        vector<string> ans;

        while (wi != -1) {
            ans.push_back(words[wi]); // Add words to the answer in reverse order to get the longest subsequence.
            wi = pv[wi]; // Move to the previous word in the subsequence.
        }

        reverse(ans.begin(), ans.end()); // Reverse the answer to get the correct order.
        return ans;
    }
};



```
```C []

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Solution {
    int* dp;
    int* pv;
};

struct Solution getWordsInLongestSubsequence(int n, char** words, int* groups) {
    struct Solution solution;
    solution.dp = (int*)malloc(n * sizeof(int));
    solution.pv = (int*)malloc(n * sizeof(int));
    
    for (int i = 0; i < n; i++) {
        solution.dp[i] = 1; // Initialize the maximum subsequence length for each word.
        solution.pv[i] = -1; // Initialize the previous word index in the longest subsequence.
    }

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (groups[i] == groups[j]) continue; // If the groups are the same, skip.
            if (strlen(words[i]) != strlen(words[j])) continue; // If word lengths are different, skip.

            int diff = 0;
            for (int k = 0; k < strlen(words[i]); k++) {
                if (words[i][k] != words[j][k]) diff++; // Calculate the difference in characters.
            }

            if (diff != 1) continue; // If there's more or less than one character difference, skip.

            if (solution.dp[j] + 1 > solution.dp[i]) {
                solution.dp[i] = solution.dp[j] + 1; // Update the subsequence length if it's longer.
                solution.pv[i] = j; // Update the previous word index.
            }
        }
    }

    int wi = 0;
    for (int i = 1; i < n; i++) {
        if (solution.dp[i] > solution.dp[wi]) {
            wi = i; // Find the index of the maximum subsequence length.
        }
    }

    char** ans = (char**)malloc(solution.dp[wi] * sizeof(char*));
    for (int i = 0; i < solution.dp[wi]; i++) {
        ans[i] = (char*)malloc(strlen(words[wi]) + 1);
        strcpy(ans[i], words[wi]); // Copy words to the answer.
        wi = solution.pv[wi]; // Move to the previous word in the subsequence.
    }

    // Reverse the answer to get the correct order.
    for (int i = 0; i < solution.dp[wi] / 2; i++) {
        char* temp = ans[i];
        ans[i] = ans[solution.dp[wi] - i - 1];
        ans[solution.dp[wi] - i - 1] = temp;
    }

    solution.dp = ans;
    return solution;
}



```
```Java []

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> getWordsInLongestSubsequence(int n, List<String> words, List<Integer> groups) {
        List<Integer> dp = new ArrayList<>(groups.size());
        List<Integer> pv = new ArrayList<>(groups.size());
        
        for (int i = 0; i < groups.size(); i++) {
            dp.add(1); // Initialize the maximum subsequence length for each word.
            pv.add(-1); // Initialize the previous word index in the longest subsequence.
        }

        // Iterate through the words and groups to find the longest subsequence.
        for (int i = 1; i < groups.size(); i++) {
            for (int j = 0; j < i; j++) {
                if (groups.get(i).equals(groups.get(j))) continue; // If the groups are the same, skip.
                if (words.get(i).length() != words.get(j).length()) continue; // If word lengths are different, skip.

                int diff = 0;
                for (int k = 0; k < words.get(i).length(); k++) {
                    diff += (words.get(i).charAt(k) != words.get(j).charAt(k)) ? 1 : 0; // Calculate the difference in characters.
                }

                if (diff != 1) continue; // If there's more or less than one character difference, skip.

                if (dp.get(j) + 1 > dp.get(i)) {
                    dp.set(i, dp.get(j) + 1); // Update the subsequence length if it's longer.
                    pv.set(i, j); // Update the previous word index.
                }
            }
        }

        int wi = dp.indexOf(dp.stream().max(Integer::compareTo).get()); // Find the index of the maximum subsequence length.
        List<String> ans = new ArrayList<>();

        while (wi != -1) {
            ans.add(words.get(wi)); // Add words to the answer in reverse order to get the longest subsequence.
            wi = pv.get(wi); // Move to the previous word in the subsequence.
        }

        Collections.reverse(ans); // Reverse the answer to get the correct order.
        return ans;
    }
}


```
```python3 []

class Solution:
    def getWordsInLongestSubsequence(self, n, words, groups):
        dp = [1] * len(groups)
        pv = [-1] * len(groups)

        for i in range(1, len(groups)):
            for j in range(i):
                if groups[i] == groups[j]:
                    continue
                if len(words[i]) != len(words[j]):
                    continue

                diff = sum(1 for k in range(len(words[i])) if words[i][k] != words[j][k])

                if diff != 1:
                    continue

                if dp[j] + 1 > dp[i]:
                    dp[i] = dp[j] + 1
                    pv[i] = j

        wi = dp.index(max(dp))
        ans = []

        while wi != -1:
            ans.append(words[wi])
            wi = pv[wi]

        ans.reverse()
        return ans


```
```javascript []

class Solution {
    getWordsInLongestSubsequence(n, words, groups) {
        const dp = new Array(groups.length).fill(1);
        const pv = new Array(groups.length).fill(-1);

        for (let i = 1; i < groups.length; i++) {
            for (let j = 0; j < i; j++) {
                if (groups[i] === groups[j]) continue;
                if (words[i].length !== words[j].length) continue;

                let diff = 0;
                for (let k = 0; k < words[i].length; k++) {
                    if (words[i][k] !== words[j][k]) diff++;
                }

                if (diff !== 1) continue;

                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    pv[i] = j;
                }
            }
        }

        let wi = dp.indexOf(Math.max(...dp));
        const ans = [];

        while (wi !== -1) {
            ans.push(words[wi]);
            wi = pv[wi];
        }

        ans.reverse();
        return ans;
    }
}


```
---



# *PLEASE UPVOTE IF IT HELPED*

---
---


---

