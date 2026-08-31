# [C++][MAP] - Intuitive Solution | Explained

**Author:** morning_coder
**Votes:** 8
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/1360651/](https://leetcode.com/problems/describe-the-painting/solutions/1360651/)

---

**Intuition:** Similar to prefix sum

Note - Assuming arr[] initialized to zero

**Case 1: No overlapping Interval**
Given [1,4,7] => We can have arr[1] = 7 and arr[4] = -7 so when we will add-up elements, it will be something like : 
arr[1] = 7
arr[2] = 0+arr[1] = 7
arr[3] = 0 + arr[2] = 7
arr[4]  = -7 + arr[3] = 0

**Case 2: Overlapping Intervals**
Given [1,4,7] and [1,10,8] => We can have arr[1] += 7 and arr[4] -=7 , arr[1] += 8 and arr[10] -= 8
arr[1] = 7+8 = 15
arr[2] = 0+arr[1] = 15
arr[3] = 0 + arr[2] = 15
arr[4] = -7 + arr[3] = 8
arr[5] = 0 + arr[4] = 8
arr[6] = 0 + arr[5] = 8
arr[7] = 0 + arr[6] = 8
arr[8] = 0 + arr[7] = 8
arr[9] = 0 + arr[8] = 8
arr[10] = 0 + arr[9] = -8 + 8 = 0

For this question, instead of storing them into array, we are storing in map (sorted) and populating elements with the above logic.

```
typedef long long ll;

class Solution {
public:
    vector<vector<long long>> splitPainting(vector<vector<int>>& segments) {
        vector<vector<ll> > ans;
        map<int,ll> um;
        
        for(auto s : segments){
            um[s[0]] += s[2];
            um[s[1]] -= s[2];
        }
        bool flag = false;
        pair<int,ll> prev;
        ll curr = 0;
        
        for(auto x : um){
            if(flag == false){
                prev = x;
                curr += x.second;
                flag = true;
                continue;
            }
            
            vector<ll> v = {prev.first,x.first,curr};
            prev = x;
            if(curr)
                ans.push_back(v);
            curr += x.second;
            
        }
        return ans;
    }
};
```