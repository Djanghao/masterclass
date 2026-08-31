# Ruby Fibonacci-like solution with recurrence relation formula, O(n) compl., O(1) space

**Author:** shhavel
**Votes:** 4
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/888165/](https://leetcode.com/problems/student-attendance-record-ii/solutions/888165/)

---

Let `Rn` is a number of all rewardable attendance records of length `n` .
Let `Bn` is a number of all rewardable attendance records of length `n`  whithout `A` (only `L` and `P` sequences).

Recurrence relation for `Rn`:

`Rn+1 = Rn + Bn + Rn - Rn-3 - Bn-3`

Explanation:
Last letter in `n+1` sequnce can by either `P`, `A`, or `L`:
- if the last letter is `P`, there are `Rn` possible combinations.
- if the last letter is `A`, there are `Bn` possible combinations (`A` can only enter once).
- if the last letter is `L`, then we should count all possible `n`-length combinations except those that ends with `LL` (cannot end with `LLL`). It can end with `PLL` or `ALL`. So thare are `Rn - Rn-3 - Bn-3`  `L`-ending combinations of size `n+1`.

Recurrence relation for `Bn`:

`Bn+1 = Bn + Bn - Bn-3`

-  if the last letter in `n+1` sequnce is `P`, there are `Bn` possible combinations.
-  if the last letter in `n+1` sequnce is `L`, there are `Bn - Bn-3` possible combinations (excluding ending with `PLL`). 

```
def check_record(n)
  return 3 if n == 1
  return 8 if n == 2
  return 19 if n == 3
  rN_3, rN_2, rN_1, rN = 1, 3, 8, 19 # we assume that R0 equals 1 (number of ways to construct an empty record) 
  bN_3, bN_2, bN_1, bN = 1, 2, 4, 7 # we assume that B0 equals 1 (number of ways to construct an empty record without `A`) 

  (n - 3).times do
    rN_3, rN_2, rN_1, rN = rN_2, rN_1, rN, (rN + bN + rN - rN_3 - bN_3) % 1000000007
    bN_3, bN_2, bN_1, bN = bN_2, bN_1, bN, (bN + bN - bN_3) % 1000000007
  end
  rN
end
```