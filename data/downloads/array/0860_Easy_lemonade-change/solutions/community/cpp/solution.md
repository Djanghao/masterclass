# Greedy Easy Solution | 1ms Beats 100%

**Author:** Sachinonly__
**Votes:** 152
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5637527/](https://leetcode.com/problems/lemonade-change/solutions/5637527/)

---

# Complexity
- Time complexity: O(N)

- Space complexity:O(1)

# Code
``` python []
class Solution(object):
    def lemonadeChange(self, bills):
        if bills[0] != 5:
            return False
        
        five_dollers = 0
        ten_dollers = 0

        for x in bills:
            if x == 5:
                five_dollers += 1
            elif x == 10:
                if five_dollers > 0:
                    five_dollers -= 1
                else:
                    return False
                ten_dollers += 1
            else:
                if five_dollers > 0 and ten_dollers > 0:
                    five_dollers -= 1
                    ten_dollers -= 1
                elif five_dollers > 2 :
                    five_dollers -= 3
                else:
                    return False
            print(five_dollers, ten_dollers)
        return True
```
```C++ []
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int five_dollars = 0, ten_dollars = 0;
        
        for (int x : bills) {
            if (x == 5) {
                five_dollars++;
            } else if (x == 10) {
                if (five_dollars > 0) {
                    five_dollars--;
                    ten_dollars++;
                } else {
                    return false;
                }
            } else {
                if (five_dollars > 0 && ten_dollars > 0) {
                    five_dollars--;
                    ten_dollars--;
                } else if (five_dollars > 2) {
                    five_dollars -= 3;
                } else {
                    return false;
                }
            }
        }
        
        return true;
    }
};
```
```Java []
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five_dollars = 0, ten_dollars = 0;

        for (int x : bills) {
            if (x == 5) {
                five_dollars++;
            } else if (x == 10) {
                if (five_dollars > 0) {
                    five_dollars--;
                    ten_dollars++;
                } else {
                    return false;
                }
            } else {
                if (five_dollars > 0 && ten_dollars > 0) {
                    five_dollars--;
                    ten_dollars--;
                } else if (five_dollars > 2) {
                    five_dollars -= 3;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
```
![unnamed.jpg](./images/0.jpeg)
