# c++ KMP solution

**Author:** ilovehawthorn
**Votes:** 1
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/1505608/](https://leetcode.com/problems/bold-words-in-string/solutions/1505608/)

---

```
class Solution {
private:
    vector<int> generateKMP(string& p)
    {
        vector<int> ans(p.size(), 0);
        for (int i = 1, j = 0; i < p.size(); i++)
        {
            j = ans[i-1];
            while (j>0 && p[j] != p[i])
                j = ans[j-1];
            if (p[j] == p[i])
                ans[i] = j+1;
        }
        return ans;
    }
public:
    string boldWords(vector<string>& words, string s) {
        vector<bool> bold(s.size(), false);
        for (auto& word:words)
        {
            vector<int> kmp = generateKMP(word);
            for (int i = 0, j = 0; i < s.size(); i++)
            {
                while (j>0 && s[i] != word[j])
                    j = kmp[j-1];
                if (s[i] == word[j])
                    j++;
                if (kmp.size() == j)
                    fill(bold.begin()+i-j+1, bold.begin()+i+1, true);
            }
        }
        
        string ans;
        for (int i = 0; i < bold.size(); i++)
        {
            if (bold[i] && (i==0||(i>0&&!bold[i-1])))
                ans += "<b>";
            ans.push_back(s[i]);
            if (bold[i] && (i==bold.size()-1||(i<bold.size()-1&&!bold[i+1])))
                ans += "</b>";
        }
        return ans;
    }
};
```