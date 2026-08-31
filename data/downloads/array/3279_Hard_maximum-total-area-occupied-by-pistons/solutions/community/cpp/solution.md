# C++ | Intended Solution

**Author:** pratyaksh3
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5739835/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5739835/)

---

# Intuition
The answer will be maximum when one of the pistons is at the top.
as iterating through each point in time and iterating positions for each piston individually will yield a TLE error. we ignore the transition states and mark all the points when 1. piston hits the top and 2. piston hits 0

# Approach
Create a map for each "critical point" and store all of the indexes that hit a top or bottom at the critical time.

since its a map the order is sorted and I use the add variable which increments by 1 for up pistons and decrements by 1 for down pistons this is to keep track of the transition state. for example lets say the first piston transitions at t = 2. and in the start 2 pistons were pointing up and 1 piston was pointing down. so the next change in I will get 

is = (Cur_time - prev_time) * add;
after hitting the critical point each piston's direction has to change and hence I iterate over the vector and update the add variable- if it was up before then it will be down now and add will become add-2. and vica versa

# Complexity
- Time complexity:
O(NLogN) -> because I am using a map

- Space complexity:
O(N)

# Code
```cpp []
class Solution {
public:
    #define ll long long int
    long long maxArea(int k, vector<int>& a, string s) {
        int n = a.size();
        map<ll, vector<ll>> m;
        ll sum = 0;
        ll add = 0;
        for(int i = 0;i<n;i++){
            sum += a[i];
            if(s[i]=='U'){
                int val = k - a[i];
                m[val].push_back(i);
                m[val+k].push_back(i);
                add++;
            }else{
                m[a[i]].push_back(i);
                m[a[i]+k].push_back(i);
                add--;
            }
        }
        ll ans = sum;
        ll cur = 0;
        for(auto [t,j] : m){
            sum += (add*(t-cur));
            ans = max(sum,ans);
            for(auto i : j){
                if(s[i]=='U'){
                    s[i] = 'D';
                    add -=2;
                }else{
                    s[i] = 'U';
                    add += 2;
                }
            }
            cur = t;
        }
        return ans;
    }
};
```