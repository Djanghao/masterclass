# Ruby solution

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84837/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84837/)

---

Just recursion with memoization. To calculate how much money I need to solve a range lo..hi (initially 1..n) with two or more numbers, I try all x in the range and take the best.
```
def get_money_amount(n)
  memo = (1..n).map { [] }
  need = -> lo, hi {
    lo >= hi ? 0 : memo[lo][hi] ||= (lo..hi).map { |x| x + [need[lo, x-1], need[x+1, hi]].max }.min
  }
  need[1, n]
end
```