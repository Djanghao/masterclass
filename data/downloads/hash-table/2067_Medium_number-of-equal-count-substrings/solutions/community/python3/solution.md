# [C++|Java|Python3] sliding window

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/2885586/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/2885586/)

---


**C++**
```
class Solution {
public:
    int equalCountSubstrings(string s, int count) {
        int ans = 0; 
        for (int k = 1; k <= 26; ++k) {
            vector<int> freq(26); 
            int uniq = 0; 
            for (int i = 0; i < s.size(); ++i) {
                if (++freq[s[i]-'a'] == count) ++uniq; 
                if (i >= k*count && freq[s[i-k*count]-'a']-- == count) --uniq; 
                if (uniq == k) ++ans; 
            }
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public int equalCountSubstrings(String s, int count) {
        int ans = 0; 
        for (int k = 1; k <= 26; ++k) {
            int[] freq = new int[26]; 
            int uniq = 0; 
            for (int i = 0; i < s.length(); ++i) {
                if(++freq[s.charAt(i)-'a'] == count) ++uniq; 
                if (i >= k*count && freq[s.charAt(i-k*count)-'a']-- == count) --uniq; 
                if (uniq == k) ++ans; 
            }
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def equalCountSubstrings(self, s: str, count: int) -> int:
        ans = 0 
        for k in range(1, 27): 
            freq = Counter()
            uniq = 0 
            for i, ch in enumerate(s): 
                freq[ch] += 1
                if freq[ch] == count: uniq += 1
                if i >= k*count: 
                    if freq[s[i-k*count]] == count: uniq -= 1
                    freq[s[i-k*count]] -= 1
                if uniq == k: ans += 1
        return ans 
```