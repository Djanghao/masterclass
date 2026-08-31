# CPP | Two Solutions | O(n) and O(nlogn) Time | Deque and Multiset

**Author:** amirkpatna
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2524710/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2524710/)

---

**Before trying this question try**
1. 	[239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
2. 	[560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

**Intuition :** Use sliding window technique to get the `value` for subarray `[start,end]` if `value` exceeds `budget` move `start` and remove values associated with `start` to get new `value` and each time take maximum of your `answer` and length of your subarray

**1 : using multiset
Time : O(nlogn)
Space : O(n)**
```

class Solution {
public:
    typedef long long ll;
    int maximumRobots(vector<int>& ct, vector<int>& rc, long long budget) {
        multiset<int> ms;
        ll start=0,end=0,ans=0,n=ct.size(),s=0;
        while(end<n){
            s+=rc[end];
            ms.insert(ct[end++]);
            ll val = (*ms.rbegin())+(end-start)*s;
            while(val>budget){
                s-=rc[start];
                ms.erase(ms.find(ct[start++]));
                val =ms.empty()?0 : (*ms.rbegin())+(end-start)*s;
            }
            ans=max(ans,end-start);
        }
        return ans;
    }
};

```

**2 : using deque
Time : O(n)
Space : O(n)**

```
class Solution {
public:
    typedef long long ll;
    int maximumRobots(vector<int>& ct, vector<int>& rc, long long budget) {
        deque<int> dq;
        ll start=0,end=0,ans=0,n=ct.size(),s=0;
        while(end<n){
            s+=rc[end];
            while(!dq.empty() && ct[dq.back()]<ct[end])dq.pop_back();
            dq.push_back(end++);
            ll val = ct[dq.front()]+(end-start)*s;
            while(val>budget){
                s-=rc[start];
                if(!dq.empty() && dq.front()<=start)dq.pop_front();
                start++;
                val = (end == start?0:ct[dq.front()])+(end-start)*s;
            }
            ans=max(ans,end-start);
        }
        return ans;
    }
};
```
