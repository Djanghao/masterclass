# ✅☑[C++/C/Java/Python/JavaScript] || Beats 95% || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168304/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168304/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. We initialize two vectors, `dp` and `pv`, to keep track of the maximum subsequence length and the previous word index, respectively.

1. We iterate through the words and groups to find the longest subsequence. The loops start from index 1 because we consider subsequences.

1. Inside the nested loops, we check if the groups are different. If they are the same, we continue to the next iteration.

1. We check if the subsequence length of `j + 1` is greater than `i`. If it is, we update `dp[i]` and `pv[i]`. This part of the code efficiently computes the length of subsequences.

1. After the loops, we find the index of the maximum subsequence length in the `dp` vector using `max_element`.

1. We initialize a vector, `ans`, to store the answer.

1. We reconstruct the longest subsequence by following the previous word indices in reverse order.

1. The words are added to the `ans` vector in reverse order to ensure they are in the correct sequence.

1. Finally, we reverse the `ans` vector to get the correct order of words and return it as the answer.


# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        // Initialize two vectors to keep track of the maximum subsequence length and the previous word index.
        vector<int> dp(groups.size(), 1);
        vector<int> pv(groups.size(), -1);

        // Iterate through the words and groups to find the longest subsequence.
        for (int i = 1; i < groups.size(); i++) {
            for (int j = 0; j < i; j++) {
                // Check if the groups are different.
                if (groups[i] == groups[j]) continue;

                // If the subsequence length of j + 1 is greater than i, update dp[i] and pv[i].
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    pv[i] = j;
                }
            }
        }

        // Find the index of the maximum subsequence length in the dp vector.
        int wi = (max_element(dp.begin(), dp.end()) - dp.begin());
        vector<string> ans; // Initialize a vector to store the answer.

        // Reconstruct the longest subsequence by following the previous word indices.
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

#define MAX_N 1000
#define MAX_STR_LEN 20

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int n;
    scanf("%d", &n);
    
    char words[MAX_N][MAX_STR_LEN];
    int groups[MAX_N];
    
    for (int i = 0; i < n; i++) {
        scanf("%s %d", words[i], &groups[i]);
    }

    int dp[MAX_N];
    int pv[MAX_N];
    
    for (int i = 0; i < n; i++) {
        dp[i] = 1;
        pv[i] = -1;
    }

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (groups[i] == groups[j]) continue;
            
            int diff = 0;
            int len = strlen(words[i]);
            
            if (len != strlen(words[j])) continue;
            
            for (int k = 0; k < len; k++) {
                if (words[i][k] != words[j][k]) {
                    diff++;
                }
            }

            if (diff != 1) continue;

            if (dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                pv[i] = j;
            }
        }
    }

    int wi = 0;
    
    for (int i = 0; i < n; i++) {
        if (dp[i] > dp[wi]) {
            wi = i;
        }
    }

    char ans[MAX_N][MAX_STR_LEN];
    int idx = 0;

    while (wi != -1) {
        strcpy(ans[idx], words[wi]);
        wi = pv[wi];
        idx++;
    }

    for (int i = idx - 1; i >= 0; i--) {
        printf("%s ", ans[i]);
    }

    return 0;
}


```



```Java []

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public List<String> getWordsInLongestSubsequence(int n, List<String> words, List<Integer> groups) {
        List<Integer> dp = new ArrayList<>(groups.size());
        List<Integer> pv = new ArrayList<>(groups.size());

        for (int i = 0; i < groups.size(); i++) {
            dp.add(1);
            pv.add(-1);
        }

        for (int i = 1; i < groups.size(); i++) {
            for (int j = 0; j < i; j++) {
                if (groups.get(i).equals(groups.get(j))) continue;
                if (words.get(i).length() != words.get(j).length()) continue;

                int diff = 0;
                for (int k = 0; k < words.get(i).length(); k++) {
                    if (words.get(i).charAt(k) != words.get(j).charAt(k)) {
                        diff++;
                    }
                }

                if (diff != 1) continue;

                if (dp.get(j) + 1 > dp.get(i)) {
                    dp.set(i, dp.get(j) + 1);
                    pv.set(i, j);
                }
            }
        }

        int wi = dp.indexOf(Collections.max(dp));
        List<String> ans = new ArrayList<>();

        while (wi != -1) {
            ans.add(words.get(wi));
            wi = pv.get(wi);
        }

        Collections.reverse(ans);
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

                diff = 0
                for k in range(len(words[i])):
                    if words[i][k] != words[j][k]:
                        diff += 1

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
                    if (words[i][k] !== words[j][k]) {
                        diff++;
                    }
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



# PLEASE UPVOTE IF IT HELPED

---
---


---