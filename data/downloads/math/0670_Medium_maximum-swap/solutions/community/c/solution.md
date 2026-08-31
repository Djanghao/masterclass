# C++ Simple and Efficient O(n) Solution - 0ms, faster than 100%

**Author:** YehudisK
**Votes:** 40
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/976478/](https://leetcode.com/problems/maximum-swap/solutions/976478/)

---

```
class Solution {
public:
    int maximumSwap(int num) {
        string n = to_string(num);
        
        // Keep in a map the last accurance of each digit:
        unordered_map<int, int> last;
        for (int i=0; i<n.size(); i++)
            last[n[i] - '0'] = i;
        
        for (int i=0; i < n.size(); i++) {
            for (int j = 9; j > n[i]-'0'; j--) {
                
                // If there's a larger digit later - swap:
                if (last[j] > i) {
                    swap(n[last[j]], n[i]);
                    return stoi(n);
                }
            }
        }
        return stoi(n);
    }
};
```
**Like it? please upvote...**