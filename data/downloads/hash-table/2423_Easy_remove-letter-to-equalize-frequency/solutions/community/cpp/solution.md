# ✅C++ | ✅Simple Approach

**Author:** Yash2arma
**Votes:** 16
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2646507/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2646507/)

---

**Please upvote if it helps :)**

**Approach:** Calculate frequency of each char then just decrease frequency of each char by 1 and check whether we get equal frequency or not.

```
class Solution 
{
public:
    bool equalFrequency(string word) 
    {
        vector<int> mp(26, 0); 
        
        for(auto it:word) //storing frequency
            mp[it-'a']++;

        for(int i=0; i<26; i++) 
        {
            if(mp[i]==0) continue;  //if no char available then check for next char
            
			//if char present then decrease its frequency by 1
            mp[i]--;
            
            int fl=0, cnt=0, fl2=0; //fl for storing frequency 1st time, fl2 assures whether we get equal frequency or not
            for(int i=0; i<26; i++) //check whether frequency is equal for other char
            {
                if(mp[i]==0) continue;
                
                if(fl==0)  //storing frequency of 1st char in cnt
                {
                    cnt = mp[i];
                    fl=1;
                }
                
                if(mp[i]!=cnt) 
                {
                    fl2=1; 
                    break;
                }
            }
            if(fl2==0) return true; 
            
            mp[i]++; //restoring frequency of char in mp 
        }
        return false;
    }
};
```