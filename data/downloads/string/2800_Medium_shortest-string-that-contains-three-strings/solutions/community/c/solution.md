# [C++] || easy self explained || Implementation || Connect 2Strings

**Author:** Pathak_Ankit
**Votes:** 9
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836218/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836218/)

---



```
class Solution {
public:
    string connect(string x,string y)
    {
        string ans="";
        int i=0;
        int j=0;
        int cnt=0;
        int ind=0;
        while(i<x.size())
        {
            if(x.size()-i>y.size())
            {
                cnt=0;
                i++;
                continue;
            }
            // cout<<x.substr(i)<<" : "<<y.substr(0,x.size()-i)<<endl;
            if(x.substr(i)==y.substr(0,x.size()-i))
            {
                // cout<<i<<endl;
                ind=x.size()-i;
                break;
            }
            i++;
        }
        ans+=x;
        
        // cout<<ans<<" : ind ="<<ind<<endl;
        for(int k=ind;k<y.size();k++) ans+=y[k];
        return ans;
    }
    string solve(string x,string y,string z)
    {
        size_t found = x.find(y);
        if (found != string::npos)
        {
            // if x contains y then only need to connect x and z
			// no need to check y contain x or not ,because try all possibilties 
            size_t f=x.find(z);
            if(f!= string::npos)
            {
                // if x contains z;
                return x;
            }
            else
            {
                // x +z;
                return connect(x,z);
            }
        }
        else
        {
            // x+y;
            string xy="";
            xy=connect(x,y);
            
            // check xy contains z;
            size_t found = xy.find(z);
            if (found != string::npos)
            {
                return xy;
            }
            else
            {
                return connect(xy,z);
            }
        }
        
        
    }
    string minimumString(string a, string b, string c) 
    {
        string ans="";
        string a1=solve(a,b,c);
        string a2=solve(a,c,b);
        
        string b1=solve(b,a,c);
        string b2=solve(b,c,a);
        
        string c1=solve(c,b,a);
        string c2=solve(c,a,b);
        int mini=INT_MAX;
        if(mini>a1.size())
        {
            ans=a1;
            mini=a1.size();
        }
        else if(mini==a1.size())
        {
            ans=min(ans,a1);
        }
        
        
        if(mini>a2.size())
        {
            ans=a2;
            mini=a2.size();
        }
        else if(mini==a2.size())
        {
            ans=min(ans,a2);
        }
        
        
        if(mini>b1.size())
        {
            ans=b1;
            mini=b1.size();
        }
        else if(mini==b1.size())
        {
            ans=min(ans,b1);
        }
        
        
        if(mini>b2.size())
        {
            ans=b2;
            mini=b2.size();
        }
        else if(mini==b2.size())
        {
            ans=min(ans,b2);
        }
        
        
        if(mini>c2.size())
        {
            ans=c2;
            mini=c2.size();
        }
        else if(mini==c2.size())
        {
            ans=min(ans,c2);
        }
        
        
        if(mini>c1.size())
        {
            ans=c1;
            mini=c1.size();
        }
        else if(mini==c1.size())
        {
            ans=min(ans,c1);
        }
        // cout<<c2<<endl;
        cout<<a1<<endl;
        cout<<a2<<endl;
        
        cout<<b1<<endl;
        cout<<b2<<endl;
        cout<<c1<<endl;
        cout<<c2<<endl;
        return ans;
        // cout<<c2<<endl;
        // return "";
    }
};
```
Thanks for UPVOTE

After some modifications
```
class Solution {
public:
    string connect(string x,string y)
    {
        string ans="";
        int i=0;
        int j=0;
        int cnt=0;
        int ind=0;
        while(i<x.size())
        {
            if(x.size()-i>y.size())
            {
                cnt=0;
                i++;
                continue;
            }
            // cout<<x.substr(i)<<" : "<<y.substr(0,x.size()-i)<<endl;
            if(x.substr(i)==y.substr(0,x.size()-i))
            {
                // cout<<i<<endl;
                ind=x.size()-i;
                break;
            }
            i++;
        }
        ans+=x;
        
        // cout<<ans<<" : ind ="<<ind<<endl;
        for(int k=ind;k<y.size();k++) ans+=y[k];
        return ans;
    }
    string solve(string x,string y,string z)
    {
        size_t found = x.find(y);
        if (found != string::npos)
        {
            // if x contains y
            size_t f=x.find(z);
            if(f!= string::npos)
            {
                // if x contains z;
                return x;
            }
            else
            {
                // x +z;
                return connect(x,z);
            }
        }
        else
        {
            // x+y;
            string xy="";
            xy=connect(x,y);
            
            // check xy contains z;
            size_t found = xy.find(z);
            if (found != string::npos)
            {
                return xy;
            }
            else
            {
                return connect(xy,z);
            }
        }
        
        
    }
    
    string minimumString(string a, string b, string c) 
    {
        
       
        vector<string> vs={a,b,c};
        vector<int> arr={0,1,2};
        int mini=INT_MAX;
        string ans="";
        do{
             string s=solve(vs[arr[0]],vs[arr[1]],vs[arr[2]]);
             
            if(mini>s.size())
            {
                ans=s;
                mini=s.size();
            }
            else if(mini==s.size())
            {
                ans=min(ans,s);
            }
        }while(next_permutation(arr.begin(),arr.end()));
        
        return ans;
    }
    
    
};
```