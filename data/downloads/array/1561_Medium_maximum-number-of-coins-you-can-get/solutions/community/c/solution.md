# ✅ Short | 2 Approaches | C++ | Beginner friendly

**Author:** rajat_gupta_
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/1500779/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/1500779/)

---

**Time: O(10001)
Space : O(10001)**
```
class Solution {
public:
    int maxCoins(vector<int>& piles) {
        int hash[10001] = {0};
        for (auto x: piles){
            hash[x]++;
        }
        int last = 10000;
        int front = 0;
        int n = ((piles.size()/3) );
        int ans = 0;
        while (n--){
            while (last > 0 && hash[last] == 0) last--;
            hash[last]--;
            while (last > 0 && hash[last] == 0) last --; // second largest
            ans += last;
            hash[last]--;
        }
        return ans;
    }
};
```
**Time: O(nlogn)
Space : O(1)**
```
class Solution {
public:
    int maxCoins(vector<int>& piles) {
        sort(piles.begin(),piles.end());
        int n=piles.size(),res=0;
        for(int i=n/3;i<n;i+=2){
            res+=piles[i];
        }
        return res;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
