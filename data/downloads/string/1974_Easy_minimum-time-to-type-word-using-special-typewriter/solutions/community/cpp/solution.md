# Faster than 100% C++ solutions

**Author:** imran2018wahid
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1484328/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1484328/)

---

```
class Solution 
{
public:
    int minTimeToType(string word) 
    {
        // time is the minimum time to print
        int time=0;
        
        // c is the character, the pointer is pointing
        char c='a';
        
        for(int i=0;i<word.length();i++)
        {
            // take the distance between the pointer and current character of the word
            int dis=abs(word[i]-c);
            
            // take the minimum of forward and backward distance
            dis=min(dis,26-dis);
            
            // time required to print the charcater will take 1 sec extra
            time+=(dis+1);
            
            // move the pointer to the current character 
            c=word[i];
        }
        
        // finally return the time
        return time;
    }
};
```
***Please upvote if you've got any help from my code. Thank you.***