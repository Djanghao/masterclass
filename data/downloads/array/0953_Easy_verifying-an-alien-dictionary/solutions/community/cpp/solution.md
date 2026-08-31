# simple cpp solution

**Author:** bitrish
**Votes:** 29
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/860949/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/860949/)

---

```
class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        for (int i = 0; i < words.size() - 1; i++) {
        string word1 = words[i];
        string word2 = words[i + 1];
        int i1 = 0, i2 = 0;
        while (word1[i1] == word2[i2]) {
            i1++, i2++;
        }
        int r = order.find(word1[i1]);   
        int s = order.find(word2[i2]);
        if (r > s) return false;
    }
    return true;
    }
};
```

**Using map--**
```
class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        unordered_map<char,int>mp;
        for(int i=0;i<order.size();i++) mp[order[i]]=i;
        for (int i = 0; i < words.size() - 1; i++) {
        string word1 = words[i];
        string word2 = words[i + 1];
        int i1 = 0, i2 = 0;
        while (i1<word1.size()&&i2<word2.size()&&word1[i1] == word2[i2]) {
            i1++, i2++;
        }
        if(i2==word2.size()&&i1<word1.size()) return false;
        if(i1<word1.size()&&i2<word2.size())
        {
            if(mp[word1[i1]]>mp[word2[i2]]) return false;
        }
    }
    return true;
    }
};
```