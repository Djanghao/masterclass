# Simple DSU code | You are right, but test cases are edgy

**Author:** diyora13
**Votes:** 4
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/2066628/](https://leetcode.com/problems/groups-of-strings/solutions/2066628/)

---

Question is very easy and straight forward but test cases are not. 
* If you sort each 26 length string then you will get TLE. 
* In case you are using map then your code is faster than only 5% people but if you use the unordered_map then your code is fater than 65%.

**DON'T WORRY, interviewer will never judge you on this edgy cases!!**
```
typedef int ll;
const int N=2e4+5;

ll par[N],rnk[N];   // for size based union make rnk=siz

void build_DSU()
{
    for(ll i=0;i<N;i++) rnk[i]=0,par[i]=i;
}

ll get(ll v)
{
    if(par[v]!=v) par[v]=get(par[v]);
    return par[v];
}
 
void uni(ll a,ll b)
{
    a=get(a);
    b=get(b);
    if(a!=b)
    {
        if(rnk[a]<rnk[b]) swap(a,b);
        par[b]=a;
        if(rnk[a]==rnk[b]) rnk[a]++;    // siz[a]+=siz[b];
    }
}

class Solution {
public:
    
    vector<int> groupStrings(vector<string>& a)
    {
        int n=a.size();
        build_DSU();
        unordered_map<int,int> mp;
        
        for(int i=0;i<n;i++)
        {
            int s=0;
            for(int j=0;j<a[i].length();j++)
                s|=(1<<(a[i][j]-'a'));
                        
            for(int j=0;j<26;j++)  // type-1 & 2 modification
            {
                int tmp=s^(1<<j);
                if(mp.count(tmp))
                    uni(i,mp[tmp]);
            }
            
            for(int j=0;j<26;j++)   // type-3 modification = delete + add
            {
                if((s & (1<<j))==0) continue;
                
                for(int k=0;k<26;k++)
                    if((s & (1<<k))==0)
                    {
                        int tmp=s;
                        tmp^=(1<<j);    // delete jth char
                        tmp^=(1<<k);    // add kth char
                        if(mp.count(tmp))
                            uni(i,mp[tmp]);
                    }
            }
            
            if(mp.count(s))
                uni(i,mp[s]);
            mp[s]=i;
        }
        
        map<int,int> grp;
        for(int i=0;i<n;i++)
            grp[get(i)]++;
        
        int mx=-1;
        for(auto i:grp) 
            mx=max(mx,i.second);
        
        vector<int> ans={(int)grp.size(),mx};
        return ans;
    }
};
```