# ✅C++ solution with detailed explanations

**Author:** dhruba-datta
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005858/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005858/)

---

## Explanation:

### Solution 01

- First sort the array.
- Compare every element if coins are less or equal we\u2019ll increase the count.
- Decrease coin value to the element & if the value is less than 0 return count.
- **Time complexity:** O(nlogn).

---

## Code:

```cpp
//Solution 01:
class Solution {
public:
    int maxIceCream(vector<int>& costs, int coins) 
    {
        int cnt=0;
        sort(costs.begin(),costs.end());

        for(int i=0; i<costs.size(); i++)
        {
            if(costs[i]<=coins)
            {
                cnt++;
                coins=coins-costs[i];
            }
						if(coins<=0)
								return cnt;
        }
        return cnt;
    }
};
```

---

> **Please upvote this solution**