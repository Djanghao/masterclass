# C++ | with explanation

**Author:** aman282571
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/1713576/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/1713576/)

---

**Explanation:-**
1. At any index while traversing the string this equation should be true,to make the whole string valid:-
2. ```cnt(c)>=cnt(r)>=cnt(o)>=cnt(a)>=cnt(k)```
3. After traversing the whole string  ```cnt(c)==cnt(r)==cnt(o)==cnt(a)==cnt(k)``` should hold true.
4. Now we know that string is valid,our aim is to find minimum number of frogs,for that traverse the string again,whenever you see ```c``` increase the cnt and when you see ```k``` decrease the cnt because one frog stops croaking. Update the ans whenever you incrase the cnt.

```
class Solution {
public:
    int minNumberOfFrogs(string s) {
        int size=s.size();
        unordered_map<char,int>mp;
        for(auto & ch:s){
            mp[ch]++;
            if(ch=='r' && mp['c']<mp[ch])
                    return -1;
            else if(ch=='o' && mp['r']<mp[ch])
                    return -1;
            else if(ch=='a' && mp['o']<mp[ch])
                    return -1;      
            else if(ch=='k' && mp['a']<mp[ch])
                    return -1;
        }
        if(!(mp['c']==mp['r'] && mp['r']==mp['o'] && mp['o']==mp['a'] && mp['a']==mp['k']))
            return -1;
        int ans=0,cnt=0;
        for(int i=0;i<size;i++){
            if(s[i]=='c'){
                cnt++;
                ans=max(ans,cnt);
            }
            else if(s[i]=='k')
                cnt--;   
        }
        return ans;
    }
};
```
Do **UPVOTE** if it helps :)