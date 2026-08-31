# [C++] Treat the string as a stack - O(n)

**Author:** virtyaluk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6070071/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6070071/)

---

```cpp
class Solution {
public:
    vector<string> stringSequence(string target) {
        vector<string> ans;
        
        while (not empty(target)) {
            ans.push_back(target);
            
            if (target.back() == 'a') {
                target.pop_back();
            } else {
                target.back()--;
            }
        }
        
        reverse(begin(ans), end(ans));
        
        return ans;
    }
};
```

Time complexity - O(n)
Space complexity - O(n^2)