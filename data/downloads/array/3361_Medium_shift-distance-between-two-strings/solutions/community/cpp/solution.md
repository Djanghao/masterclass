# Prefix Sum

**Author:** fahad_Mubeen
**Votes:** 17
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075735/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075735/)

---

<!-- # Intuition -->

# Approach
1. Calculate the prefix and suffix cost.

2. Now for `0 <= i < n` : if `s[i] != t[i]` we have two cases:

- Case 1: `s[i] < t[i] `
---
    (s[i] = b, t[i] = f)
    Forward shifting = cost from b to e // --->
    Backward shifting = cost from b to a + cost from z to g // <---

- Case 2: `s[i] > t[i] `

---
    (s[i] = f, t[i] = b)
    Forward shifting = cost from f to z + a to a // --->
    Backward shifting = cost from f to c // <----

4. For forward shifting we use next Array and prev for backwards.

*Carefully analyze the direction and identify the pattern. Refer to the code for better understanding.*

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    #define ll long long
    long long shiftDistance(string s, string t, vector<int>& nextCost, vector<int>& previousCost) {
        ll n = s.length();
        ll next[26], prev[26]; // to prevent integer overflow
        for(int i = 0; i < 26; i++){
            next[i] = nextCost[i];
            prev[i] = previousCost[i];
        }
        // Calculate cumulative costs for next and previous 
        for(int i = 1; i < 26; i++){
            next[i] += next[i - 1];
        }
        for(int i = 24; i >= 0; i--){
            prev[i] += prev[i + 1];
        }

        ll cost = 0;
        for(int i = 0; i < n; i++){
            if(s[i] != t[i]){
                int start = s[i] - 'a', end = t[i] - 'a';
    
                if(start < end){ // case 1
                    ll forwardCost = next[end - 1] - (start > 0 ? next[start - 1] : 0);
                    ll backwardCost = prev[0] - (start + 1 < 26 ? prev[start + 1] : 0) + (end == 25 ? 0 : prev[end + 1]);
                    cost += min(forwardCost, backwardCost);
                }
                else{ // case 2
                    ll backwardCost = prev[end + 1] - (start >= 25 ? 0 : prev[start + 1]);
                    ll forwardCost = next[25] - next[start - 1] + (end != 0 ? next[end - 1] : 0);
                    cost += min(forwardCost, backwardCost);
                }
            }
        }

        return cost;
    }
};
```
```Java []
class Solution {
    public long shiftDistance(String s, String t, int[] nextCost, int[] previousCost) {
        int n = s.length();
        long[] next = new long[26];
        long[] prev = new long[26];
        
        for (int i = 0; i < 26; i++) {
            next[i] = nextCost[i];
            prev[i] = previousCost[i];
        }
        
        // Calculate cumulative costs for next and previous
        for (int i = 1; i < 26; i++) {
            next[i] += next[i - 1];
        }
        for (int i = 24; i >= 0; i--) {
            prev[i] += prev[i + 1];
        }
        
        long cost = 0;
        for(int i = 0; i < n; i++){
            if(s.charAt(i) != t.charAt(i)){
                int start = s.charAt(i) - 'a', end = t.charAt(i) - 'a';
                
                if(start < end){ // case 1
                    long forwardCost = next[end - 1] - (start > 0 ? next[start - 1] : 0);
                    long backwardCost = prev[0] - (start + 1 < 26 ? prev[start + 1] : 0) + (end == 25 ? 0 : prev[end +1]);
                    cost += Math.min(forwardCost, backwardCost);
                } 
                else{ // case 2
                    long backwardCost = prev[end + 1] - (start >= 25 ? 0 : prev[start + 1]);
                    long forwardCost = next[25] - next[start - 1] + (end != 0 ? next[end - 1] : 0);
                    cost += Math.min(forwardCost, backwardCost);
                }
            }
        }
        
        return cost;
    }
}

```
```Python3 []
from typing import List

class Solution:
    def shiftDistance(self, s: str, t: str, nextCost: List[int], previousCost: List[int]) -> int:
        n = len(s)
        next = [0] * 26
        prev = [0] * 26
        
        for i in range(26):
            next[i] = nextCost[i]
            prev[i] = previousCost[i]
        
        # Calculate cumulative costs for next and previous
        for i in range(1, 26):
            next[i] += next[i - 1]
        for i in range(24, -1, -1):
            prev[i] += prev[i + 1]
        
        cost = 0
        for i in range(n):
            if s[i] != t[i]:
                start = ord(s[i]) - ord('a')
                end = ord(t[i]) - ord('a')
                
                if start < end: # case 1
                    forwardCost = next[end - 1] - (next[start - 1] if start > 0 else 0)
                    backwardCost = prev[0] - (prev[start + 1] if start + 1 < 26 else 0) + (0 if end == 25 else prev[end + 1])
                    cost += min(forwardCost, backwardCost)
                else: # case 2
                    backwardCost = prev[end + 1] - (0 if start >= 25 else prev[start + 1])
                    forwardCost = next[25] - next[start - 1] + (next[end - 1] if end != 0 else 0)
                    cost += min(forwardCost, backwardCost)
        
        return cost

```
