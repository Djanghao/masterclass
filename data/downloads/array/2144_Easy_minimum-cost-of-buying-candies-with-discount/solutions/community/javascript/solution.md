# Beats 100% | 0ms | Greedy 🚀🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4205441/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4205441/)

---

# Intuition
![Screenshot 2023-10-26 093525.png](./images/0.png)

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minimumCost(vector<int>& cost) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        cout.tie(0);
        
        sort(cost.begin(),cost.end(),greater<int>());
        int amount = 0;

        int j = 2;
        for(int i = 0; i < cost.size(); i++)
        {
            // We buy first two candies and take the third candy for free
            // 3rd candy = 2nd index
            // Next free candy will be at index -> 2 + 3 = 5
            if(i == j)
            {
                j += 3;
                continue;
            }
            amount += cost[i];
        }
        
        return amount;
    }
};
```