# 9 lines C++

**Author:** zefengsong
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-permutation/solutions/96611/](https://leetcode.com/problems/find-permutation/solutions/96611/)

---

```
class Solution {
public:
    vector<int> findPermutation(string s) {
        vector<int>res;
        for(int i = 1; i <= s.size() + 1; i++) res.push_back(i);
        for(int i = 0; i < s.size(); i++){
            int j = i;
            while(j < s.size() && s[j] == 'D') j++;
            reverse(res.begin() + i, res.begin() + j + 1);
            i = j;
        }
        return res;
    }
};
```