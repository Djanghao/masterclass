# C / C++ / Java / JS / Python (1-Liner) Simple and Short Solutions, Faster than 100%

**Author:** YehudisK
**Votes:** 31
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1407800/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1407800/)

---

**Python, One Liner:**
```
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        return len(set(Counter(s).values())) == 1
```
**C++, 0ms Faster than 100%:**
```
class Solution {
public:
    bool areOccurrencesEqual(string s) {
        unordered_map<char, int> freq;
        for (auto c : s) freq[c]++;
        int val = freq[s[0]];
        for (auto [a, b] : freq) if (b != val) return false;
        return true;
    }
};
```
**C / C++, 0 ms Faster than 100%:**
```
bool areOccurrencesEqual(char * s){
    int freq[26] = {0};
    char* ptr = s;
    while (*ptr) freq[*ptr++ - 'a']++;
    
    int val = freq[s[0] - 'a'];
    for (int i = 0; i < 26; i++)
        if (freq[i] && freq[i] != val) return false; 
    
    return true;
}
```
**Java, 1ms Faster than 100%:**
```
class Solution {
    public boolean areOccurrencesEqual(String s) {
        int[] freq = new int[26];
        
        for (int i = 0; i < s.length(); i++) freq[s.charAt(i)-'a']++;

        int val = freq[s.charAt(0) - 'a'];
        for (int i = 0; i < 26; i++)
            if (freq[i] != 0 && freq[i] != val) return false; 

        return true;
    }
}
```
**Javascript:**
```
var areOccurrencesEqual = function(s) {
    var freq = {}
    for (let c of s) freq[c] = (freq[c] || 0) + 1
    var val = freq[s[0]]
    for (let c in freq) if (freq[c] && freq[c] != val) return false;
    return true;
};
```
**Like it? please upvote!**