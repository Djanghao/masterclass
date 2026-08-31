# [Python3] greedy

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-permutation/solutions/1413548/](https://leetcode.com/problems/find-permutation/solutions/1413548/)

---


```
class Solution:
    def findPermutation(self, s: str) -> List[int]:
        ans, stack = [], []
        for i, ch in enumerate(s + "I"): 
            if ch == "D": stack.append(i+1)
            else: 
                ans.append(i+1)
                while stack: ans.append(stack.pop())
        return ans 
```

Implemented in C++ 
```
class Solution {
public:
    vector<int> findPermutation(string s) {
        vector<int> ans, stk; 
        s.push_back('I'); 
        for (int i = 0; i < s.size(); ++i)
            if (s[i] == 'D') stk.push_back(i+1); 
            else {
                ans.push_back(i+1); 
                while (stk.size()) {
                    ans.push_back(stk.back()); 
                    stk.pop_back(); 
                }
            }
        return ans; 
    }
};
```