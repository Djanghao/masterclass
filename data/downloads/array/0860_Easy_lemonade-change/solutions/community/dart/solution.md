# Super Easy solution! Beats 91%

**Author:** kishan061998
**Votes:** 1
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5638495/](https://leetcode.com/problems/lemonade-change/solutions/5638495/)

---


# Approach
Keeping the count of change in repository in each iteration.

# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
 $$O(1)$$

# Code
```
class Solution {
  bool lemonadeChange(List<int> bills) {
    int countOf5s = 0;
    int countOf10s = 0;
    
    
    for (int money in bills)
    {
       if (money == 5 ) {

        countOf5s++;

       } else if (money == 10){
        if (countOf5s > 0){
            countOf5s--;
            countOf10s++;
        } else {
            return false;
        }
        
       } else if (money == 20 ) {
        if (countOf10s > 0 && countOf5s > 0) {
            countOf10s--;
            countOf5s--;
        } else if (countOf5s > 2) {
            countOf5s = countOf5s - 3;
        } else {
            return false;
        }
       }     
    }
    return true;
  }
}
```