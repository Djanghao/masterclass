# Normal Binary Search

**Author:** ms0686714
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4059208/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4059208/)

---



# Code
```
/*
Use binary search to guess the answer.

1. If we need to make x alloys, how much money do we need?
2. If the money we need is smaller then budget, we can guess a little higher.
3. If the money we need is bigger than the budget, it means we dont have enough money to make x alloys.
   We should guess a liitle lower.
*/

class Solution {
    func maxNumberOfAlloys(_ n: Int, _ k: Int, _ budget: Int, _ composition: [[Int]], _ stock: [Int], _ cost: [Int]) -> Int {
        var left: Int = 0
        var right: Int = 1_000_000_000 //It ok to select another number which is big enough.
        var mid: Int = 0
        var ans:Int = 0
        while(left <= right){
            mid = (right - left)/2 + left
            var extraNeed: Int = 0
            var minExtraNeed: Int = 1_000_000_000 //It ok to select another number which is big enough.
            for i in 0 ..< k {  //The for-loop caculate if we want to make mid alloy, how much do we need.
                extraNeed = 0
                for j in 0 ..< n {
                    if(stock[j] < mid * composition[i][j]){
                        extraNeed += (mid * composition[i][j] - stock[j]) * cost[j]
                    }
                }
                minExtraNeed = min(minExtraNeed, extraNeed) //Here we store the minimal extraNeed as minExtraNeed.
            }
            if(minExtraNeed <= budget){ // It means we have at least one method within budget, so we can guess the answer higher.
                ans = max(ans, mid)     // Save possible answers
                left = mid + 1
            }
            else{  // Over the budget, we must guess the answer lower.
                right = mid - 1
            }
        }
        return ans
    }
}
```