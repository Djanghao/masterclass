# Simple Video Explanation 🔥 || Greedy 🔥 || C++ || JAVA || Python

**Author:** ayushnemmaniwar12
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168675/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168675/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
***I recommend breaking down the problem into smaller parts and, with small examples, visually simulate the different scenarios.***

# ***Detailed and easy Video Solution***

https://youtu.be/tsOioji8mFs

# Summary
<!-- Describe your approach to solving the problem. -->
The code identifies and extracts words from a list based on their corresponding group values. It initializes a result list with the first word, then iterates through the list, adding words to the result list only when their group value changes. The final result is a list of words representing the longest subsequence of distinct groups.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

```C++ []
class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<string>ans;
        int t=groups[0];
        ans.push_back(words[0]);
        for(int i=1;i<n;i++)
        {
            if(groups[i]!=t)
            {
                t=groups[i];
                ans.push_back(words[i]);
            }
        }
        return ans;
    }
};
```
```Python []
class Solution:
    def getWordsInLongestSubsequence(self, n, words, groups):
        ans = []
        t = groups[0]
        ans.append(words[0])
        for i in range(1, n):
            if groups[i] != t:
                t = groups[i]
                ans.append(words[i])
        return ans

```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> getWordsInLongestSubsequence(int n, List<String> words, List<Integer> groups) {
        List<String> ans = new ArrayList<>();
        int t = groups.get(0);
        ans.add(words.get(0));
        for (int i = 1; i < n; i++) {
            if (groups.get(i) != t) {
                t = groups.get(i);
                ans.add(words.get(i));
            }
        }
        return ans;
    }
}
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00