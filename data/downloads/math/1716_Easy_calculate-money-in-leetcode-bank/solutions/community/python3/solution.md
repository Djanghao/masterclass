# 🥇 O (1) math explained ; ] ✅

**Author:** karan_8082
**Votes:** 78
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4367675/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4367675/)

---


**UPVOTE IF HELPFuuL**

# Problem Statement
- Start by `$1` on first day `[MONDAY]`.
- For every day in the week put `$1` more than yesterday.
- On next Monday, start again by increasing `$1` from previous Monday.

# Approach
```
Week 1 money : [1, 2, 3, 4, 5, 6, 7] -> 28
Week 2 money : [2, 3, 4, 5, 6, 7, 8] -> 28 + 7
Week 3 money : [3, 4, 5, 6, 7, 8, 9] -> 28 + 7 + 7
```
This form an `Arithmetic Progression`

Now `n = 7*w + extra_days`
For complete weeks [ w in code] :
- AP starting with `28`, and increment of `7`.
- Money for `w` complete weeks = `[ 28 * w ] + [ 0 + 7 + 14 + ... + 7w ]`
`=[ 28w + 7w * (w - 1) / 2 ]`

For days that donot form a complete week :
- Add money using loop starting with `w + 1` for x days that are left. `x<7`



# Complexity
- Time complexity: O ( 1 )

- Space complexity: O ( 1 )


This solution can be reduced to few lines as it is basic math, but then code wouldnot be readable. Happy Coding!!
``` C++ []
class Solution {
public:
    int totalMoney(int n) {
        int w = n / 7;
        int money = w * 28;
        money += (7 * w * (w - 1)) / 2;

        if (n % 7) {
            int extra_days = n % 7;
            int money_to_add = w + 1;
            for (int i = 0; i < extra_days; ++i) {
                money += money_to_add;
                money_to_add += 1;
            }
        }
        return money;
    }
};

```
``` Python []
class Solution:
    def totalMoney(self, n: int) -> int:
        w = n // 7
        money = w * 28
        money += (7 * w *( w - 1))//2

        if (n % 7):
            extra_days = n % 7
            money_to_add = w + 1
            for i in range(extra_days):
                money += money_to_add
                money_to_add += 1

        return money
```
``` JAVA []
class Solution {
    public int totalMoney(int n) {
        int w = n / 7;
        int money = w * 28;
        money += (7 * w * (w - 1)) / 2;

        if (n % 7 != 0) {
            int extraDays = n % 7;
            int moneyToAdd = w + 1;
            for (int i = 0; i < extraDays; ++i) {
                money += moneyToAdd;
                moneyToAdd += 1;
            }
        }

        return money;
    }
}
```

**UPVOTE IF HELPFuuL**

![Screenshot 2023-12-05 at 6.18.22 AM.png](./images/0.png)
