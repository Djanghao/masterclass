# Simple loop

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5647562/](https://leetcode.com/problems/lemonade-change/solutions/5647562/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the bills list. This is because the function iterates over each element in the list once.

- Space complexity:
$$O(1)$$, because the function does not use any additional data structures or memory beyond the initial counters for $5 and $10 bills.

# Code
``` python3 []
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        # Initialize counters for $5 and $10 bills
        five, ten = 0, 0

        for bill in bills:
            # If the bill is $5, increase the $5 counter
            if bill == 5:
                five += 1
            # If the bill is $10, increase the $10 counter and decrease the $5 counter
            elif bill == 10:
                ten += 1
                five -= 1
            # If the bill is $20, try to use a $10 and a $5 bill to give change
            else:
                if ten > 0:
                    ten -= 1
                    five -= 1
                # If it's not possible to give change, decrease the $5 counter by 3
                else:
                    five -= 3
            # If the $5 counter becomes negative, return False
            if five < 0:
                return False
            
        # If all bills have been processed, return True
        return True
```
``` javascript []
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // Initialize counters for $5 and $10 bills
    let five = 0;
    let ten = 0;

    for (let bill of bills) {
        // If the bill is $5, increase the $5 counter
        if (bill === 5) {
            five++;
        }
        // If the bill is $10, increase the $10 counter and decrease the $5 counter
        else if (bill === 10) {
            ten++;
            five--;
        }
        // If the bill is $20, try to use a $10 and a $5 bill to give change
        else {
            if (ten > 0) {
                ten--;
                five--;
            } else {
                five -= 3;
            }
        }
        // If the $5 counter becomes negative, return False
        if (five < 0) {
            return false;
        }
    }
    // If all bills have been processed, return True
    return true;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $bills
     * @return Boolean
     */
    function lemonadeChange($bills) {
        // Initialize counters for $5 and $10 bills
        $five = 0;
        $ten = 0;

        foreach ($bills as $bill) {
            // If the bill is $5, increase the $5 counter
            if ($bill == 5) {
                $five++;
            }
            // If the bill is $10, increase the $10 counter and decrease the $5 counter
            elseif ($bill == 10) {
                $ten++;
                $five--;
            }
            // If the bill is $20, try to use a $10 and a $5 bill to give change
            else {
                if ($ten > 0) {
                    $ten--;
                    $five--;
                } else {
                    $five -= 3;
                }
            }
            // If the $5 counter becomes negative, return False
            if ($five < 0) {
                return false;
            }
        }
        // If all bills have been processed, return True
        return true;
    }
}
```