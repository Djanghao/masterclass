# [C++/Python/Java] It is only easy when you think really hard to spot the built-in nature

**Author:** codedayday
**Votes:** 99
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/791646/](https://leetcode.com/problems/longest-palindrome/solutions/791646/)

---

idea\uFF1A count the frequency of each char, the chars appears even times can all be kept, however, the chars appears odd times must remove one char, then the rest instances of that char can be collected for composition. Finally, the middle char can be from OddGroup
Example: "abccccdd",
step 1: count  freq of  char before clearning:    
a:1
b:1
c:4
d:2

step 2: perform clearning and prepare for palindrom composition:
a:0
b:0
c:4
d:2
answer = s.size() - 1 - 1
Step 3: make correction, if necessary (i.e., when at least one char shows odd times)
if OddGroup > 0: answer +=1

Ref: https://leetcode.com/problems/longest-palindrome/discuss/89587/What-are-the-odds-(Python-and-C%2B%2B)
```
class Solution {
public:
    int longestPalindrome(string s) {
        int freq[128]={};
        for(auto c:s) ++freq[c];
        int OddGroup = 0; //count of uniq char which shows up odd times, help me if you have better naming 
        for(auto i:freq) OddGroup += i & 1;
        return s.size() - OddGroup + (OddGroup > 0);        
    }
};      
```

Python:
```
class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq = [0]*128;
        for c in s:freq[ord(c)]+=1
        OddGroup = 0
        for i in freq: OddGroup += i & 1
        return len(s) - OddGroup + (OddGroup > 0) 
```

Java:
```
class Solution {
    public int longestPalindrome(String s) {
        int[] freq = new int[128];        
        for(char c:s.toCharArray()) ++freq[c];
        int OddGroup = 0;
        for(int i:freq) OddGroup += i & 1;
        return s.length() - OddGroup + (OddGroup > 0 ? 1:0);  // Waiting for a better way to convert boolean into int  
    }
}
```