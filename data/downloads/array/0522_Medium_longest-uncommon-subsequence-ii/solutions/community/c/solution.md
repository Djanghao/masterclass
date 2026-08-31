# C++ Simple and Clean 4ms Solution, Detailed Explanation

**Author:** YehudisK
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1429061/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1429061/)

---

**Explanation:**
1. First, we keep the frequencies of all strings in a map. That's because we know that a string that has a duplicate can never be the longest uncommon subsequence.
2. Sort the string by length - from longest to shortest.
3. We iterate through the strings. If this word has a duplicate, continue.
If not, we call the function `checkSubsUptoI`, which checks if the current string is a subsequence of any of the previous strings.
If it's not - this will be our LUS, return its size.
Otherwise continue iterating.
If we got to the end with no result - return -1.

**Solution I:**
```
class Solution {
public:
    static bool compare(string& a, string& b) {
        return a.size() > b.size();
    }
    
    bool isSubsequence(string s, string t) {
        int s_i = 0, t_i = 0;
        
        while (s_i < s.size() && t_i < t.size()) {
            if (s[s_i] == t[t_i]) s_i++; 
            t_i++;
        }
        
        return s_i == s.size();
    }
    
    bool checkSubsUptoI(vector<string>& strs, string sub, int idx) {
        for (int i = 0; i <= idx; i++) {
            if (isSubsequence(sub, strs[i])) return true;
        }
        return false;
    }
    
    int findLUSlength(vector<string>& strs) {
        unordered_map<string, int> freq;
        for (auto str : strs) freq[str]++;
        
        sort(strs.begin(), strs.end(), compare);
        
        for (int i = 0; i < strs.size(); i++) {
            if (freq[strs[i]] > 1) continue;
            if (!checkSubsUptoI(strs, strs[i], i-1)) return strs[i].size();
        }
        return -1;
    }
};
```
****
**Solution II:**
Thanks to @ZX007PI, I wrote another version.
Here we use the fact that maps are already sorted in cpp, and we can use a custom sorting function.
So this will be a better complexity because we avoided the sorting.
```
class Solution {
public:
    struct comp {
        bool operator()(const std::string& a, const std::string& b) const {
            if (a.length() > b.length()) return true;
            if (a.length() == b.length()) return a < b;
          return false;
        }
    };
    
    bool isSubsequence(string s, string t) {
        int s_i = 0, t_i = 0;
        
        while (s_i < s.size() && t_i < t.size()) {
            if (s[s_i] == t[t_i]) s_i++; 
            t_i++;
        }
        
        return s_i == s.size();
    }
    
    bool checkSubsUptoI(map<string, int, comp >& freq, string sub, map<string, int>::iterator idx) {
        map<string, int>::iterator it = freq.begin();

        while (it != idx) {
            if (isSubsequence(sub, (*it).first)) return true;
            it++;
        }
        
        return false;
    }
    
    int findLUSlength(vector<string>& strs) {
        map<string, int, comp > freq;
        for (auto str : strs) freq[str]++;
        
        map<string, int>::iterator it = freq.begin();
        for (; it != freq.end() ; it++) {
            if ((*it).second > 1) continue;
            if (!checkSubsUptoI(freq, (*it).first, it)) return (*it).first.size();
        }
        return -1;
    }
};
```
**Like it? please upvote!**