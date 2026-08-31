# Easy C++ / Python3 / java / C / Python Solution beats 100%

**Author:** Edwards310
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4280127/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4280127/)

---

# Intuition
![Screenshot 2024-03-08 090356.png](./images/0.png)
```C++ []
class Solution {
public:
    int maximumStrongPairXor(vector<int>& nums) {
        int ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            for (int j = 0; j < nums.size(); j++) {
                if (abs(nums[i] - nums[j]) <= fmin(nums[i], nums[j]))
                    ans = fmax(ans, nums[i] ^ nums[j]);
            }
        }
        return ans;
    }
};
```
```python3 []
class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        ans = 0
        for x in nums:
            for y in nums:
                if abs(x - y) <= min(x, y):
                    ans = max(ans, x ^ y)
        return ans
```
```C []
int maximumStrongPairXor(int* nums, int numsSize) {
    int ans = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsSize; j++) {
            if (abs(nums[i] - nums[j]) <= fmin(nums[i], nums[j]))
                ans = fmax(ans, nums[i] ^ nums[j]);
        }
    }
    return ans;
}
```
```Java []
class Solution {
    public int maximumStrongPairXor(int[] nums) {
        int ans = 0;
        for (int x : nums)
            for (int y : nums)
                if (Math.abs(x - y) <= Math.min(x, y))
                    ans = Math.max(ans, x ^ y);

        return ans;
    }
}
```
```python []
class Solution(object):
    def maximumStrongPairXor(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums = sorted(list(set(nums)))
        n = len(nums)
        ans = 0
        for i in range(n):
            # a way to optimize redundent checks because i a num is more then twice bigger then another number they are not strong couple
            check = 2 * nums[i]
            for j in range(i+1, n):
                if nums[j] > check:
                    break
                temp = nums[i] ^ nums[j]
                if temp > ans:
                    ans = temp
        return  ans
        
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace std;
using namespace __gnu_pbds;
#define ff first
#define ss second
#define ll long long
#define ld long double
#define llu long long unsigned
#define v vector<ll>
#define vi vector<int>
#define vb vector<bool>
#define vs vector<string>
#define vv vector<vector<ll>>
#define vvi vector<vector<int>>
#define vvv vector<vector<vector<ll>>>
#define vvvi vector<vector<vector<int>>>
#define pll pair<ll, ll>
#define pii pair<int,int>
#define vll vector<pll>
#define vii vector<pii>
#define all(p) begin(p), end(p)
#define rall(p) rbegin(p), rend(p)
#define mxe(z) max_element(all(z))
#define mxi(z) min_element(all(z))
#define mp map<ll, ll>
#define ump unordered_map<ll, ll>
#define pb push_back
#define eb emplace_back
#define endl "\
"
#define tp tuple<ll,ll,ll>
#define ordered_set tree<int, null_type,less<int>, rb_tree_tag,tree_order_statistics_node_update>
typedef tree<pair<int,int>, null_type, less<pair<int,int>>, rb_tree_tag,tree_order_statistics_node_update> ordered_set_pair;
#define pmin priority_queue<ll,v,greater<ll>>
#define pmax priority_queue<ll>
#define Sum(a) accumulate(all(a),0LL)
#define Psum(a) parootial_sum(all(a),begin(a))
#define Psumb(a,b) parootial_sum(all(a),begin(b))
#define Mem(a,b) memset(a,b,sizeof(a))
#define yes cout<<"Yes"<<endl
#define no cout<<"No"<<endl
#define Yes cout<<"YES"<<endl
#define No cout<<"NO"<<endl
#define Alice cout<<"Alice"<<endl
#define Bob cout<<"Bob"<<endl
#define For(i,a,b) for(ll i=a;i<b;i++)
#define rfor(i,a,b) for(ll i=a-1;i>=b;i--)
#define mx 1000010
 
template<typename C,typename D> istream &operator>>(istream &cin,pair<C,D> &a) { return cin>>a.first>>a.second; }
template<typename C> istream &operator>>(istream &cin,vector<C> &a) { for (auto &x:a) cin>>x; return cin; }
template<typename C,typename D> ostream &operator<<(ostream &cout,const pair<C,D> &a) { return cout<<a.first<<' '<<a.second; }
template<typename C,typename D> ostream &operator<<(ostream &cout,const vector<pair<C,D>> &a) { for (auto &x:a) cout<<x<<'\
'; return cout; }
template<typename C> ostream &operator<<(ostream &cout,const vector<C> &a) { int n=a.size(); if (!n) return cout; cout<<a[0]; for (int i=1; i<n; i++) cout<<' '<<a[i]; return cout; }
template<typename P, typename Q> void amax(P &x, Q y){if(x < y) x = y;}
template<typename P, typename Q> void amin(P &x, Q y){if(x > y) x = y;}

class Solution {
public:
    int maximumStrongPairXor(vector<int>& a) {
        int n=a.size(),ans=0;
        for(int i=0;i<n;i++)
            for(int j=0;j<n;j++)
                if(abs(a[i]-a[j]) <= min(a[i],a[j]))
                    ans= max(ans , a[i] ^ a[j]);
        return ans;
    }
};
```
![th.jpeg](./images/1.jpeg)
