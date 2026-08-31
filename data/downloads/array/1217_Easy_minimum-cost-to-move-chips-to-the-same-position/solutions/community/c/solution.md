# 100% faster 100% speed c++ with explanation

**Author:** medusa_21
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/606041/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/606041/)

---

```
class Solution {
public:
    int minCostToMoveChips(vector<int>& chips) {
        int even=0,odd=0;
        for(int i=0;i<chips.size();i++){
            if(chips[i]%2==0)
                even++;
            else
                odd++;
        }
        if(even>odd)
            return odd;
        return even;
        
    }
};
```
We are using even odd concept here. We have 0 cost in moving two places and 1 cost in moving one. So, just count the no. of even numbers and odd numbers in the array, if count of even numbers is more than odd numbers then for minimum cost we will have to move all the numbers at odd position to even position as all even numbers can be brought to same position just by 0 cost. All numbers at odd positions can be brought to any even position just by cost 1 and after that they can be brought to same even position just by cost 0. So, the minimum cost will be number of odd numbers in the array. If numbers at odd position are greater the numbers at even position then we will bring all the numbers at any odd position then the minimum cost of bringing all the even numbers at any odd position will be 1. So, in that case the ans will be number of even numbers in the array.

Hope you understand it. :)