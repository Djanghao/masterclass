# Brute force

**Author:** donpaul271
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5716103/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5716103/)

---


Generate the first half of the number.
Since n <= 10 only around 1e5 numbers need to be checked (n/2 <= 5)

Once we have generated the number check if the palindrome formed from that number is divisible by k. 

If yes then find all combination of it that doesnt start with 0. Make sure you dont count numbers with same digit frequencies multiple times. Keep a visited map to keep track of it.


(Please upvote if it helped)

# Code
```cpp []
#define ll long long
#define ld long double

ll ans;

vector<ll> fact;
unordered_map<string, int> vis; // visited map

string genpal(ll num, ll val) // generating palindrome corresponding to the first half generated.
{
    string s = to_string(num);
    string t = s.substr(0, val);
    reverse(t.begin(), t.end());
    
    s += t;
    return s;
}

bool check(string &s, int k) // divisibility check. 
{    
    ll val = 0;

    for(int i = 0; i<s.length(); ++i)
    {
        ll curr = s[i] - '0';
        val = val*10 + curr;
    }
    
    if(val%k == 0)
        return true;
    
    return false;
}


ll count(string &s) // using basic combinatorics to count all combinations.
{
    vector<ll> fr(10, 0);
    
    ll n = s.length();
    
    if(n == 1)
        return 1;

    for(int i=0; i<s.length(); ++i)
    {
        ll curr = s[i] - '0';
        fr[curr]++;
    }
    
    ll tot = fact[n];
    string str = ""; // digit frequency string.
     
    for(int i=0; i<fr.size(); ++i)
    {
        ll curr = fr[i];
        str += ('a' + curr);
        
        if(curr != 0)
            tot = tot/fact[curr];
    }
    
    if(vis.find(str) != vis.end() ) // dont count numbers with same digit frequency multiple times.
        return 0;
    
    vis[str] = 1;
    
    if(fr[0] == 0)
        return tot;

    ll a = fact[n-1];
    a = a/fact[fr[0]-1];

    for(int i=1; i<fr.size(); ++i)
    {
        ll curr = fr[i];
        
        if(curr != 0)
            a = a/fact[curr];
    }
    
    ll res = tot-a;
    return res;
}


void find(int pos, int num, int len, int stat, int k) // generating all numbers of length len. 
{
    
    if(pos == len )
    {
        ll val;
        
        if(stat == 1) // stat = 0 => even n || stat = 1 => n is odd
            val = len-1;
        else if(stat == 0)
            val = len;
        
        string s = genpal(num, val); // generating palindrome.
        bool st = check(s, k); // check divisibility by k
        
        if(st) // if yes count all possible combinations
            ans += count(s);
        
        return;
    }

    if(pos == 0)
    {
        for(int i=1; i<=9; ++i)
        {
            int tnum = num*10 + i;
            find(pos+1, tnum, len, stat, k);
        }
    }
    
    else
    {
        for(int i=0; i<=9; ++i)
        {
            int tnum = num*10 + i;
            find(pos+1, tnum, len, stat, k);
        }
    }

    return;
}

class Solution {
public:
    long long countGoodIntegers(int n, int k) {
        
        ll len;
        ans = 0;
        
        int stat;
        
        fact.clear();
        vis.clear();
        
        fact.push_back(1);
        ll curr = 1;
        
        for(ll i=2; i<=11; ++i) // pre-computing factorial values for faster calculation. 
        {
            fact.push_back(curr);
            curr = curr*i;
        }
        
        if(n%2 == 1) // when n is odd number of length (n/2 + 1) should be generated.
        {
            len = n/2 + 1;
            stat = 1;
        }
    
        else // when n is even number of length n/2 should be generated.
        {
            len = n/2;
            stat = 0;
        }
    
        find(0, 0, len, stat, k);
        return ans;         
    }
};


```