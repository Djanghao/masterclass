# [JS/C#/Ruby] - Arithmetic Series O(1) / O(1)

**Author:** spacepumpkin
**Votes:** 9
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1128072/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1128072/)

---

##### Solution Analysis: **`Time O(1) | Space O(1)`**
I learned from other solutions and will try to summarize the thought process as best as I can here.

##### Finding the pattern
If you write out the amount deposited each week, what may be clear is that:
**`total sum = sum of previous weeks + sum of days in current week`**. 

The key here is that each week has a predictable sequence (e.g. 1 + 2 + ... + 6 + 7 ), which we can sum with the [arithmetic series formula](https://mathbitsnotebook.com/Algebra2/Sequences/SSGauss.html):

**`S_n = n(a_1 + a_n) / 2`** where `a_1` = first term, `a_n` = last term, `n` = total terms

**Sum of previous weeks**
To get the **`sum of previous weeks`**, we can think of each full week separately then sum them up to the `k`th full week:
```
week 1 = 7 * (1+7)/2 = `7 * 4`
week 2 = 7 * (2+8)/2 = `7 * 5`
week 3 = 7 * (3+9)/2 = `7 * 6`
...
week k = 7 * (k + (k-1 + 7))/2 = 7 * (2k+6)/2 = `7 * (k+3)`
```
When we sum them up, we also see that \\*gasp\\* there's *another* arithmetic sequence here...
```
sum of previous k weeks 
= (7*4) + (7*5) + (7*6) + ... + (7*(k+3))
= 7 * (4 + 5 + 6 + ... + (k+3) ) // 2nd sequence
= 7 * [k * (4 + (k+3)) / 2]
= 7 * k * (k+7) / 2
```
Another way you can think of it: using the base of 28 for a full week + 7 for each additional week:
```
week 1 = `28 + 7 * 0`
week 2 = `28 + 7 * 1`
week 3 = `28 + 7 * 2`
...
week k = `28 + 7 * (k-1)`
```
And look, another sequence??
```
sum of previous k weeks 
= (28 + 7 * 0) + (28 + 7 * 1) + (28 + 7 * 2) + ... + (28 + 7 * (k-1))
= 28 * k + 7 * (0 + 1 + 2 + ... + (k-1)) // 2nd sequence
= 28 * k + 7 * [k * (0 + (k-1)) / 2]
= 28 * k + 7 * k * (k-1) / 2
```
Both are valid for `sum of previous weeks` and you can find that 
**`7 * k * (k+7) / 2`** == **`28 * k + 7 * k * (k-1) / 2`**

There might only be a super slight, negligible difference in computation. They also work because if n < 7 (no full weeks yet), they're both 0.

**Sum of days in current week**
To get the **`sum of days in current week`**, we can use `x = n % 7` to give us the day of the week. Then we can find the sum up to and including the day of the week, depending on which week we're in.
```
S_1 = 1 + 2 + ... + x     = `x * (1+x) / 2` // if we were in week 1
S_2 = 2 + 3 + ... + (x+1) = (1 + 2 + ... + x) + 1 * x = `S_1 + 1 * x`  // in week 2
S_3 = 3 + 4 + ... + (x+2) = (1 + 2 + ... + x) + 2 * x = `S_1 + 2 * x` // in week 3
...
S_(k+1) 
= S_1 + k * x  // (because k = number of -full- weeks)
= (x * (x + 1) / 2) + k * x
= x * (2 * k + x + 1) / 2
```
##### Putting everything together:
**`total sum =  sum of k full weeks + sum of x days in current week`**
`(where k = n / 7 and x = n % 7)`

**`= [7 * k * (k+7) / 2] + [ x * (2 * k + x + 1) / 2]`**

---
### JS
```
function totalMoney(n) {
  const k = Math.floor(n / 7), x = n % 7; // k = # full weeks, x = day of week
  return (7 * k * (k + 7) / 2) + (x * (2*k + x + 1) / 2); // (sum of k weeks) + (sum of x days)
}
```
### C#
```
public class Solution {
  public int TotalMoney(int n)
  {
    int k = n / 7; int x = n % 7;
    return (7 * k * (k + 7) / 2) + (x * (2*k + x + 1) / 2);
  }
}
```
### Ruby
```
def totalMoney(n)
  k, x = n / 7, n % 7
  (7 * k * (k + 7) / 2) + (x * (2*k + x + 1) / 2)
end
```

*If you see anything that can be clarified or optimized more (I'm a novice so I often miss things that might be obvious to others), feel free to comment!*