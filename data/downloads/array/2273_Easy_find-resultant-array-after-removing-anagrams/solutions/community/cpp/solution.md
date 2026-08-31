# C++ solutions

**Author:** Infox_92
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2832345/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2832345/)

---

```
class Solution {
public:
    vector<string> removeAnagrams(vector<string>& words) {
        for(int i = 1;i<words.size();i++){
            string x = words[i];
            sort(x.begin(),x.end());
            string y = words[i-1];
            sort(y.begin(),y.end());
            if(x == y){
                words.erase(words.begin() + i);
                i--;
            }
        }
        return words;
    }
};
```