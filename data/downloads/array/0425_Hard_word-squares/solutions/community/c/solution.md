# Easy to Read C++ Code using Map

**Author:** vwo50
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-squares/solutions/1093636/](https://leetcode.com/problems/word-squares/solutions/1093636/)

---

```
class Solution {
private:
    vector<vector<string>> res; 
    
    unordered_map<string, vector<string>> m;
public:
    vector<vector<string>> wordSquares(vector<string>& words) {   
        if (words.empty()) return res;
        
        m[""] = words; 
        
        for (const auto& word : words) {
            for (int i = 0; i < word.size(); i++) {
                string ss = word.substr(0, i + 1); 
                m[ss].push_back(word);
            }
        }
        
        vector<string> candidate;
        
        dfs(0, words[0].size(), candidate);
        
        return res;
    }
    
    void dfs(int index, int n, vector<string>& candidate) {
    //  cout << " ----- " << index << " ----- " << endl;
        
    //  for (const auto& c : candidate) cout << c << endl; 
        
        if (n == index) {
            res.push_back(candidate); return;
        }
        
        string s = ""; 
        
        for (int i = 0; i < index; i++) {
            s += candidate[i][index];
        }
        
        for (const auto& word : m[s]) {            
            candidate.push_back(word); 
            
            dfs(index + 1, n, candidate);
            
            candidate.pop_back(); 
        }
    }
};
```