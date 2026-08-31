# [C++|Java|Python3|Javascript|Typescript] sliding window

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916814/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916814/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cdc5e101ce1f1fae525345dec774217fbbdba2c4) for my solutions of [weekly 390](https://leetcode.com/contest/weekly-contest-390/). 

**C++**
```
class Solution {
public:
    int maximumLengthSubstring(string s) {
        int ans = 0; 
        unordered_map<char, int> freq; 
        for (int i = 0, ii = 0; i < s.size(); ++i) {
            ++freq[s[i]]; 
            while (freq[s[i]] == 3) --freq[s[ii++]]; 
            ans = max(ans, i-ii+1); 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public int maximumLengthSubstring(String s) {
        int ans = 0; 
        int[] freq = new int[26]; 
        for (int i = 0, ii = 0; i < s.length(); ++i) {
            ++freq[s.charAt(i)-97]; 
            while (freq[s.charAt(i)-97] == 3) --freq[s.charAt(ii++)-97]; 
            ans = Math.max(ans, i-ii+1); 
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        ans = ii = 0 
        freq = Counter()
        for i, ch in enumerate(s): 
            freq[ch] += 1
            while freq[ch] == 3: 
                freq[s[ii]] -= 1
                ii += 1
            ans = max(ans, i-ii+1)
        return ans 
```
**Javascript**
```
var maximumLengthSubstring = function(s) {
    let ans = 0, ii = 0; 
    const freq = new Map(); 
    for (const [i, ch] of s.split('').entries()) {
        freq.set(ch, 1 + (freq.get(ch) ?? 0)); 
        while (freq.get(ch) == 3) {
            freq.set(s[ii], freq.get(s[ii])-1); 
            ++ii; 
        }
        ans = Math.max(ans, i-ii+1); 
    }
    return ans; 
};
```
**Typescript**
```
function maximumLengthSubstring(s: string): number {
    let ans = 0, ii = 0; 
    const freq = new Map(); 
    for (const [i, ch] of s.split('').entries()) {
        freq.set(ch, 1 + (freq.get(ch) ?? 0)); 
        while (freq.get(ch) == 3) {
            freq.set(s[ii], freq.get(s[ii])-1); 
            ++ii; 
        }
        ans = Math.max(ans, i-ii+1); 
    }
    return ans; 
};
```