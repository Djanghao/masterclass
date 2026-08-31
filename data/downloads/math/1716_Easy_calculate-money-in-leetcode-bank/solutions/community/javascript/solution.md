# ✅ Beats 100% - C++/Java/Python/JS - Explained with [ Video ] - O(1) Time and Space

**Author:** lancertech6
**Votes:** 83
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4367796/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4367796/)

---

![Screenshot 2023-12-06 064237.png](./images/0.png)

# YouTube Video Explanation:


[https://youtu.be/_a1Kpa74m08](https://youtu.be/_a1Kpa74m08)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 700 Subscribers*
*Current Subscribers: 602*

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Hercy contributes money to the Leetcode bank based on a specific pattern. He starts with \\$1 on the first day and increases his contribution by \\$1 each subsequent day. Additionally, on each Monday, he increases the contribution by $1 more than the previous Monday. To calculate the total amount after a certain number of days, we need to follow this contribution pattern.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate the number of complete weeks (week_count = n / 7).
2. Calculate the total contribution from complete weeks using the arithmetic sum formula for each week: `((week_count * (week_count - 1)) / 2) * 7`.
3. Calculate the total contribution from days beyond complete weeks using the arithmetic sum formula: `(week_count * 28)`.
4. Calculate the contribution from the remaining days (less than a week) using the arithmetic sum formula for the remaining days: `((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days)`.
5. Sum up the contributions calculated in steps 2, 3, and 4 to get the total amount.

# Complexity
- The time complexity is O(1) since the calculations are constant time.
- The space complexity is O(1) as well, as we are not using any additional data structures.

# Code
```Java []
class Solution {
    public int totalMoney(int n) {
        int week_count = n / 7;
        int remaining_days = n % 7;
        
        int total = ((week_count * (week_count - 1)) / 2) * 7; // Contribution from complete weeks
        total += week_count * 28; // Contribution from complete weeks (additional on Mondays)
        total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days); // Contribution from remaining days
        
        return total;
    }
}
```
```C++ []
class Solution {
public:
    int totalMoney(int n) {
        int week_count = n / 7;
        int remaining_days = n % 7;
        
        int total = ((week_count * (week_count - 1)) / 2) * 7; // Contribution from complete weeks
        total += week_count * 28; // Contribution from complete weeks (additional on Mondays)
        total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days); // Contribution from remaining days
        
        return total;
    }
};
```
```Python []
class Solution(object):
    def totalMoney(self, n):
        week_count = n // 7
        remaining_days = n % 7
        
        total = ((week_count * (week_count - 1)) // 2) * 7 
        total += week_count * 28
        total += ((remaining_days * (remaining_days + 1)) // 2) + (week_count * remaining_days)
        
        return total
        
```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const week_count = Math.floor(n / 7);
    const remaining_days = n % 7;
    
    let total = ((week_count * (week_count - 1)) / 2) * 7; 
    total += week_count * 28;
    total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days);
    
    return total;
};
```
![upvote.png](./images/1.png)