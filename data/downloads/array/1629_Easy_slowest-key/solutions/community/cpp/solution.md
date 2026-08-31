# C++ 3-line solution (O(N) time & O(1) space)

**Author:** minato_yukina
**Votes:** 8
**Link:** [https://leetcode.com/problems/slowest-key/solutions/1448731/](https://leetcode.com/problems/slowest-key/solutions/1448731/)

---

`std::pair` has built-in operators for comparison.
```
class Solution {
public:
    char slowestKey(const vector<int>& releaseTimes, const string& keysPressed) {
        pair<int, char> key = {releaseTimes[0], keysPressed[0]};
        for(int i = 1; i < keysPressed.size(); ++i) key = max(key, {releaseTimes[i] - releaseTimes[i - 1], keysPressed[i]});
        return key.second;
    }
};
```