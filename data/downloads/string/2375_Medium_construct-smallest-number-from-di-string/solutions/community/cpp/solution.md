# C++ | Backtracking | Easy Code

**Author:** ankit4601
**Votes:** 18
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422337/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422337/)

---

Please Upvote :)

```
class Solution {
public:
    string res="987654321"; // max possible 
    string smallestNumber(string pattern) {
        string s=""; 
        vector<int> vis(10,0);
        fun(vis,pattern,-1,s);
        return res;
    }
    void fun(vector<int>& vis,string& p,int i,string& s)
    {
        if(i==p.length())
        {
            if(res>s) // storing the min in res
                res=s;
            return;
        }
        
        if(i==-1)// choosing the first digit
        {
            for(int j=1;j<=9;j++)
            {
                if(vis[j]==0)
                {
                    vis[j]=1;// setting the vis
                    s+=j+'0'; // adding the digit j
                    fun(vis,p,i+1,s);
                    s.pop_back(); // removing the digit j, to go for other options
                    vis[j]=0; // reseting the vis 
                }
            }
        }
        else
        {
            if(p[i]=='D')
            {
                int t=s[s.length()-1]-'0';
                for(int j=t-1;j>=1;j--)
                {
                    if(vis[j]==0)
                    {
                        vis[j]=1;
                        s+=j+'0';
                        fun(vis,p,i+1,s);
                        s.pop_back();
                        vis[j]=0;
                    }
                }
            }
            else
            {
                int t=s[s.length()-1]-'0';
                for(int j=t+1;j<=9;j++)
                {
                    if(vis[j]==0)
                    {
                        vis[j]=1;
                        s+=j+'0';
                        fun(vis,p,i+1,s);
                        s.pop_back();
                        vis[j]=0;
                    }
                }
            }
        }
    }
};
```