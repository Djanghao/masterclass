# [C++] Not an easy problem

**Author:** theGateway
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1563778/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1563778/)

---

This should atleast be a medium problem.
**1. Brute Force:**
```
    int countVowelSubstrings(string s) {
        int res = 0;
        for(int i=0; i<s.size(); i++){
            unordered_set<char> set;
            for(int j=i; j<s.size(); j++){
                if(!isVowel(s[j])) break;
                set.insert(s[j]);
                if(set.size() == 5) res++;
            }
        }
        return res;
    } 
	
	bool isVowel(char c) {
        return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
    }
```

**2. Sliding Window:**
Exactly k = atMostK(k) - atMostK(k-1)
```
class Solution {
    public:
    bool isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    };
    
    int atMostK(string &s, int k) {
        int res = 0, i=0, n = s.size();
        unordered_map<char, int> mp;
        
        for(int j=0; j<n; j++) {
            if (!isVowel(s[j])) {
                i = j + 1;
                //Clear map as new substring will begin
                mp.clear();
                continue;
            }
            mp[s[j]]++;
            while(mp.size() > k){
                mp[s[i]]--;
                if(mp[s[i]] == 0) mp.erase(s[i]);
                i++;
            }
            res += j - i + 1;
        }
        return res;
    }
    
    int countVowelSubstrings(string str) {
        return atMostK(str, 5) - atMostK(str, 4);
    }
};
```