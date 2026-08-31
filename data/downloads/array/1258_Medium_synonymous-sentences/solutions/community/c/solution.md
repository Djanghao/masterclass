# C++ Beating 100% Using Union Find

**Author:** vwo50
**Votes:** 1
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/1093676/](https://leetcode.com/problems/synonymous-sentences/solutions/1093676/)

---

Just for your reference.

```
class Solution {
private: 
    unordered_set<string> words; 
    
    unordered_map<string, string> fathers; 
    
    string find(string child) {
        if (fathers[child] == child) return child; 
        
        fathers[child] = find(fathers[child]);
        
        return fathers[child];
    }
    
    void merge(string a, string b) {
        string par_a = find(a), par_b = find(b);
        
        if (par_a == par_b) return; 
        
        fathers[par_a] = par_b; 
    }
    
    unordered_map<string, string> wordToGroup; 
    unordered_map<string, set<string>> groups;   
public:
    vector<string> generateSentences(vector<vector<string>>& synonyms, string text) {
        for (const auto& synonym : synonyms) {
            if (fathers.count(synonym[0]) == 0) fathers[synonym[0]] = synonym[0];
            if (fathers.count(synonym[1]) == 0) fathers[synonym[1]] = synonym[1];
            merge(synonym[0], synonym[1]);
            
            words.insert(synonym[0]);
            words.insert(synonym[1]);
        }

        for (const auto& word : words) {
            string par = find(word); 
            
            wordToGroup[word] = par; 
            groups[par].insert(word);
        }
        
        vector<string> brokenText = decomposeText(text); 
        
        vector<string> res; 

        dfs(0, brokenText.size(), "", brokenText, res);
        
        return res;
    }
    
    void dfs(int i, int n, string candidate, vector<string>&text, vector<string>& res) {
        if (i == n) {
            res.push_back(candidate); return; 
        }
        
        string word = text[i]; 
        
        if (wordToGroup.count(word)) {
            for (const auto& alternative : groups[wordToGroup[word]]) {
                dfs(i + 1, n, candidate + (i == 0 ? "" :" ") + alternative, text, res);
            }
        } else {
            dfs(i + 1, n, candidate + (i == 0 ? "" :" ") + word, text, res);
        }
    } 
    
    vector<string> decomposeText(string text) {
        istringstream ss(text); 
        
        string t; vector<string> res; 
        
        while (ss >> t) res.push_back(t); 
        
        return res;
    }
};
```