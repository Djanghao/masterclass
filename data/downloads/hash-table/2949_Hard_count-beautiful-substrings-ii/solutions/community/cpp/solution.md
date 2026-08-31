# 2D Hash Map || C++

**Author:** JakevK
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330356/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330356/)

---

Iterate through `s`

Let`a` = count of vowels so far
Let`b` = count of consonants so far

A substring is beautiful if it meets requirements:
1.`vowels == consonants`
2.`(vowels * consonants) % k == 0`
Due to req. 1, we can simplify req. 2 to `(vowels * vowels) % k == 0`

So we maintain a 2D hash map `mp`
Such that `mp[x][y]` is the count of visited indexes having: `a - b == x` and `a % k == y`

Parameter `x` allows us to count subarrays meeting req. 1
Parameter `y` allows us to count subarrays meeting req. 2

Please comment any questions, and upvote if this helped
```
class Solution {
public:
    #define ll long long
    
    bool isvowel(char ch) {return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';}
    
    ll beautifulSubstrings(string s, int k) {
        ll a = 0, b = 0, ans = 0;
        unordered_map<ll, unordered_map<ll, ll>> mp;
        mp[0][0] = 1;
        
        for (char ch: s) {
            ++(isvowel(ch) ? a : b);
            
            for (auto& [z, count]: mp[a-b])
                if ((a-z)*(a-z) % k == 0) ans += count;
            
            ++mp[a-b][a%k];
        }
        
        return ans;
    }
};
```