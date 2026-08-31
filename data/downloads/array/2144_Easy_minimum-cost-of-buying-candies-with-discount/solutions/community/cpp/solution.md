# ✅C++ easy solution using sorting with full explanations

**Author:** dhruba-datta
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1710139/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1710139/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistake please let me know. Thank you!\u2764\uFE0F**
> 

---

## Explanation:

### Solution 01

- Simply sort the array and iterate from last.
- Take the last 2 costs & skip the next one, because we\u2019ll get free if it\u2019s equal or less than the minimum one.
- Reduce the index by 3 to skip an element **`i = i-3`**
- If ***i*** became 1 or 0 then return ans else we need to add the first element of the array because we won\u2019t get that free.
- **Time complexity:** O(nlogn).

---

## Code:

```cpp
//Solution 01:
class Solution {
public:
    int minimumCost(vector<int>& cost) {
        int n = cost.size();
        int i = n-1, ans = 0;
        
        if(n <= 2){
            for(auto x: cost) 
                ans += x;
            return ans;
        }
        
        sort(cost.begin(), cost.end());
        
        while(i>=1){
            ans += cost[i] + cost[i-1];
            if(i-1 == 0 || i-1 == 1) return ans;
            i = i-3;
        }
        ans += cost[0];
        
        return ans;
    }
};
```

---

> **Please upvote this solution**
>