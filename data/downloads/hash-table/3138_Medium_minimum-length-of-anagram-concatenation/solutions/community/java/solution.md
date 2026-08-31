# Easy Video Solution 🔥 || How to 🤔 in Interview || Divisors + Map ✅

**Author:** ayushnemmaniwar12
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113718/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113718/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and note your observations clearly



***Easy Video Explanation***

https://youtu.be/yDdJvMNsknw




# Code


```C++ []
class Solution {
public:
    int minAnagramLength(string s) {
        int n = s.size();
        vector<int> factos;
        for(int i=1;i<=sqrt(n);i++) {
            if(n%i==0) {
                int k = n/i;
                if(k!=i) {
                    factos.push_back(i);
                    factos.push_back(k);
                } else {
                    factos.push_back(i);
                }
            }
        }
        sort(factos.begin(),factos.end());
        for(int i=0;i<factos.size();i++) {
            int ans = factos[i];
            map<char,int>mp1;
            for(int i=0;i<ans;i++)
                mp1[s[i]]++;
            int f=0;
            for(int i=ans;i<n;i=i+ans) {
                map<char,int> mp2;
                for(int j=i;j<i+ans;j++) {
                    mp2[s[j]]++;
                }
                if(mp1!=mp2) {
                    f=1;
                    break;
                }
            }
            if(f==0)
                return ans;
        }
        return n;
    }
};
```
```python []
import math
from collections import Counter

class Solution:
    def minAnagramLength(self, s):
        n = len(s)
        factors = []
        
        # Find the factors of the length of the string
        for i in range(1, int(math.sqrt(n)) + 1):
            if n % i == 0:
                k = n // i
                if k != i:
                    factors.append(i)
                    factors.append(k)
                else:
                    factors.append(i)
        
        factors.sort()  # Sort the factors in ascending order
        
        for factor in factors:
            # Count the frequency of characters in the first segment
            first_segment_freq = Counter(s[:factor])
            
            is_anagramic = True
            
            # Check if the rest of the segments have the same character frequency
            for i in range(factor, n, factor):
                segment_freq = Counter(s[i:i + factor])
                if first_segment_freq != segment_freq:
                    is_anagramic = False
                    break
            
            if is_anagramic:
                return factor
        
        return n  # If no anagramic segments, return the full length

```
```Java []
import java.util.*;

public class Solution {
    public int minAnagramLength(String s) {
        int n = s.length();
        List<Integer> factors = new ArrayList<>();
        
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                int k = n / i;
                if (k != i) {
                    factors.add(i);
                    factors.add(k);
                } else {
                    factors.add(i);
                }
            }
        }
        
        Collections.sort(factors);  // Sort the factors in ascending order
        
        for (int factor : factors) {
            Map<Character, Integer> firstSegmentFreq = new HashMap<>();
            
            // Count the frequency of characters in the first segment
            for (int i = 0; i < factor; i++) {
                firstSegmentFreq.put(s.charAt(i), firstSegmentFreq.getOrDefault(s.charAt(i), 0) + 1);
            }
            
            boolean isAnagramic = true;
            
            // Check if the other segments match the first segment's frequency
            for (int i = factor; i < n; i += factor) {
                Map<Character, Integer> segmentFreq = new HashMap<>();
                for (int j = i; j < i + factor; j++) {
                    segmentFreq.put(s.charAt(j), segmentFreq.getOrDefault(s.charAt(j), 0) + 1);
                }
                if (!firstSegmentFreq.equals(segmentFreq)) {
                    isAnagramic = false;
                    break;
                }
            }
            
            if (isAnagramic) {
                return factor;
            }
        }
        
        return n;  // If no anagramic segments, return the full length
    }
}

```


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(10^7)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00