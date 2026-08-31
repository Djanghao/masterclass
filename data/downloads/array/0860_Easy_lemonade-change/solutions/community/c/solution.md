# C++ Easy and Simple Explained Solution, O(n) - faster than 100%

**Author:** YehudisK
**Votes:** 21
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/1017006/](https://leetcode.com/problems/lemonade-change/solutions/1017006/)

---

```
// We just simulate the selling of lemonade.
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int fives = 0, tens = 0;
        for (auto bill : bills) {
            
            // first case - customer paid 5$ - no change needed
            if (bill == 5) 
                fives++;
            
            // second case - customer paid 10$ - if we have a 5$ bill, give it. Otherwise - return false
            else if (bill == 10) {
                if (fives == 0) return false;
                tens++;
                fives--;
            }
            
            // third case - customer paid 20$ - if we have 5$ and 10$ bills - give that.
            // Else - if we have three 5$ bills - give that.
            // Otherwise - return false.
            else {
                if (fives > 0 && tens > 0) {
                    fives--;
                    tens--;
                }
                else if (fives >= 3) fives -= 3;
                else return false;
            }
        }
        return true;
    }
};
```
**Like it? please upvote...**