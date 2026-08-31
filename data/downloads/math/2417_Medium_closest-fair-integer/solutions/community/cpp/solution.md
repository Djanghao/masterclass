# ugly ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/3404802/](https://leetcode.com/problems/closest-fair-integer/solutions/3404802/)

---

couldn't find an ok solution :(
```
class Solution 
{
public:
    int closestFair(int n)
    {
        auto f = [](int n)
                         {
                             int x{}, y{};
                             for(int m{n}; m; m/=10)
                                 m%10&1 ? ++x : ++y;
                             return x+y;
                         };
        
        auto g = [](int n)
                         {
                             int x{}, y{};
                             for(int m{n}; m; m/=10)
                                 m%10&1 ? ++x : ++y;
                             return abs(x-y);
                         };
    
        if(!g(n)) return n;
        if(auto t = f(n); t&1)
        {
            int out{1};
            for(int i{}; i<t; ++i, out*=10);
            for(int i{}, p{1}; i<t/2; ++i, out+=p, p*=10);                
            return out;
        }
        
        int out{};
        for(int z{}, p{1}; n; ++z, n/=10, p*=10)
        {
            if(g(n+1)<=z)
            {
                out=p*(n+1);
                break;
            }
            if(n%10!=9 and g(n+2)<=z)
            {
                out=p*(n+2);
                break;
            }
        }
        int t=g(out);
        for(int i{}, p{1}; i<t/2; ++i, out+=p, p*=10);  
        if(t&1) return out*10+1;
        return out;    
    }
};
```

