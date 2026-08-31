# Really Simple and straight forward C++ solution | beats 100%

**Author:** abhishek25130
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/2942773/](https://leetcode.com/problems/word-abbreviation/solutions/2942773/)

---

Generate abbrivations and store the indices of conflicting abbrivations. Only for conflicting abbrivation, increase the length of prefix and check if conflict is resolved. If not, increase length by 1 again. Keep on increasing length till only one char is left or there is no conflict.

TC: O(N * M)
N: number of words
M: avg number of chars in each word
```
class Solution {
public:
    vector<string> wordsAbbreviation(vector<string>& words) {
        int n = words.size();
        vector<string> ans(n);
        vector<bool> abbr(n, false);
        int count = 1;
        while(accumulate(abbr.begin(), abbr.end(), 0) != n){
            unordered_map<string, vector<int>> m;
            for(int i = 0; i < words.size(); i++){
                if(abbr[i]) continue;
                string word = words[i];
                if(word.length() - (1 + count) <= 1)ans[i] = word, abbr[i] = true; 
                else{
                    string s = word.substr(0, count) + to_string(word.length() - (1 + count)) + word.back();
                    m[s].push_back(i);
                }
            }

            for(auto x: m){
                if(x.second.size() == 1)    ans[x.second.back()] = x.first, abbr[x.second.back()] = true;
                else{
                    for(auto y: x.second){
                        ans[y] = words[y];
                        abbr[y] = false;
                    }
                }
            }
            count++;
        }
        return ans;
    }
};
```