# C++ | Very Easy to Understand | Without Hashmap

**Author:** Prashant_Mohan
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/734251/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/734251/)

---

In this we just have to return the number of characters(with respect to their frequency) **which are in s but not in t**
```
class Solution {
public:
    int minSteps(string s, string t) { 
        int Freq[26]={0};
        int count=0;
        for(int i=0;i<s.size();i++)
        {
            Freq[s[i]-'a']++;
            Freq[t[i]-'a']--;
        }
        
        for(int i=0;i<26;i++)
        {
            if(Freq[i]>0)
                count+=Freq[i];
        }
        
        return count;
    }
};
```