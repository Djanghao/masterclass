# C++ Easy Solution [0ms faster than 100%, 8.6 MB less than 100%]

**Author:** Pooja0406
**Votes:** 24
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/374545/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/374545/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for Uncommon Words from Two Sentences.
Memory Usage: 8.6 MB, less than 100.00% of C++ online submissions for Uncommon Words from Two Sentences.

```
vector<string> uncommonFromSentences(string A, string B) {
        
        vector<string> res;
        unordered_map<string, int> mp;
        
        string word = "";
        for(char ch : A)
        {
            if(ch == ' ')
            {
                mp[word]++;
                word = "";
            }
            else
                word += ch;
        }
        
        mp[word]++;
        word = "";
        
        for(char ch : B)
        {
            if(ch == ' ')
            {
                mp[word]++;
                word = "";
            }
            else
                word += ch;
        }
        
        mp[word]++;
        
        for(auto i : mp)
            if(i.second == 1) res.push_back(i.first);
        
        return res;
    }