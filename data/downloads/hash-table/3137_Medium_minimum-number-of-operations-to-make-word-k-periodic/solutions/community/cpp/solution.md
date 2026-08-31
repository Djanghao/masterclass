# Easy Video Solution 🔥 || How to 🤔 in Interview || Map + Substring ✅

**Author:** ayushnemmaniwar12
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5113690/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5113690/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and note your observations clearly



***Easy Video Explanation***

https://youtu.be/KCZ5HrxqzL4

# Code


```C++ []
class Solution {
public:
    int minimumOperationsToMakeKPeriodic(string s, int k) {
        int n = s.size();
        map<string,int> mp ;
        int maxFreq = 0;
        int Totalcount = 0;
        for(int i=0;i<n;i=i+k) {
            string t = s.substr(i,k);
            mp[t]++;
            maxFreq = max(maxFreq,mp[t]);
            Totalcount++;
        }
        //cout<<maxFreq<<" "<<Totalcount<<endl;
        return Totalcount - maxFreq;
    }
};
```
```python []
from collections import defaultdict

class Solution:
    def minimumOperationsToMakeKPeriodic(self, s, k):
        n = len(s)
        substring_frequency = defaultdict(int)
        max_freq = 0
        total_count = 0
        
        # Loop over the string with step `k` to get all substrings of length `k`
        for i in range(0, n, k):
            t = s[i:i + k]
            substring_frequency[t] += 1
            max_freq = max(max_freq, substring_frequency[t])
            total_count += 1
        
        # Minimum operations needed to make the string k-periodic
        return total_count - max_freq

```
```Java []
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int minimumOperationsToMakeKPeriodic(String s, int k) {
        int n = s.length();
        Map<String, Integer> substringFrequency = new HashMap<>();
        int maxFreq = 0;
        int totalCount = 0;

        // Loop over the string with step `k` to get all substrings of length `k`
        for (int i = 0; i < n; i += k) {
            String t = s.substring(i, Math.min(i + k, n));  // Ensure substring doesn't exceed bounds
            substringFrequency.put(t, substringFrequency.getOrDefault(t, 0) + 1);
            maxFreq = Math.max(maxFreq, substringFrequency.get(t));
            totalCount++;
        }

        // Minimum operations needed to make the string k-periodic
        return totalCount - maxFreq;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00