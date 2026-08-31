# Straightforward

**Author:** Shishir_Sharma
**Votes:** 18
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061912/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061912/)

---

```
class Solution {
public:
    int percentageLetter(string s, char letter) {
        int count=0;
        for(int i=0;i<s.length();i++)
        {  if(s[i]==letter)
            {
                count++;
            }
        }
        return (count*100)/s.length();
        
    }
};
```
**Like it ? Please Upvote ;-)**