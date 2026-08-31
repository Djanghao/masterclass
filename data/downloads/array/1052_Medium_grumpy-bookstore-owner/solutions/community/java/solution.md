# [Java/Python 3] Sliding window.

**Author:** rock
**Votes:** 157
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/299230/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/299230/)

---

**Q & A:**
Q1: Struggling to understand `winOfMakeSatisfied -= grumpy[i - X] * customers[i - X];`. How does it work in the array to delete?
A1: 
1. For any consecutive `X` minutes and any integer i (>= X), there are: 
grumpy[i - X] * cumtomers[i - X] unsatisfied customers at (i - X)th minutes;
grumpy[i - X + 1] * cumtomers[i - X + 1] unsatisfied customers at (i - X + 1)th minutes;
...
grumpy[i - 1] * cumtomers[i - 1] unsatisfied customers at (i - 1)th minutes;
We use a window of width `X` to record the number of unsatisfied customers for the above `X` minutes: 
`grumpy[i - X] * cumtomers[i - X] + grumpy[i - X + 1] * cumtomers[i - X + 1] + ... + grumpy[i - 1] * cumtomers[i - 1]` ... (a)

2. In order to find maximum unsatisfied customers in any consecutive `X` minutes, we slide the window of width `X` from left to right, one minute one iteration:
`grumpy[i - X + 1] * cumtomers[i - X + 1] + grumpy[i - X + 2] * cumtomers[i - X + 2] + ... + grumpy[i - 1] * cumtomers[i - 1] + grumpy[i] * cumtomers[i]`  ................................. (b)
`grumpy[i - X + 2] * cumtomers[i - X + 2] + grumpy[i - X + 3] * cumtomers[i - X + 3] + ... + grumpy[i] * cumtomers[i] + grumpy[i + 1] * cumtomers[i + 1]`
`grumpy[i - X + 3] * cumtomers[i - X + 3] + grumpy[i - X + 4] * cumtomers[i - X + 4] + ... + grumpy[i + 1] * cumtomers[i + 1] + grumpy[i + 2] * cumtomers[i + 2]`
...
(a) and (b) are `winOfMakeSatisfied` at `(i - 1)th` and `ith` minute, respectively; If you compare (a) and (b), you will find that (b) is short of a term `grumpy[i - X] * cumtomers[i - X]` but has a new term `grumpy[i] * cumtomers[i]`. That is why 

after 
```
else { winOfMakeSatisfied += customers[i]; } // here grumpy[i] = 1, hence equal to "else { winOfMakeSatisfied += grumpy[i] * customers[i]; } "
```
we have 
```
winOfMakeSatisfied -= grumpy[i - X] * customers[i - X];
```

**End of Q & A**

----

1. Use a sliding window `winOfMakeSatisfied` to record the number of unsatisfied customers for `X` minutes. Deduct the unsatisfied customers from left end of the sliding window when it is wider than `X`:
 `winOfMakeSatisfied -= grumpy[i - X] * customers[i - X];`.
2. Use `satisfied` to record the number of satistified customers without grumpy technique.
3. by the end of iterations, `satisfied` + `max(winOfMakeSatisfied)` is the answer.

```java
    public int maxSatisfied(int[] customers, int[] grumpy, int X) {
        int satisfied = 0, maxMakeSatisfied = 0;
        for (int i = 0, winOfMakeSatisfied = 0; i < grumpy.length; ++i) {
            if (grumpy[i] == 0) { 
                satisfied += customers[i]; 
            }else { 
                winOfMakeSatisfied += customers[i]; 
            }
            if (i >= X) {
                winOfMakeSatisfied -= grumpy[i - X] * customers[i - X];
            }
            maxMakeSatisfied = Math.max(winOfMakeSatisfied, maxMakeSatisfied);
        }
        return satisfied + maxMakeSatisfied;        
    }
```
```python
    def maxSatisfied(self, customers: List[int], grumpy: List[int], X: int) -> int:
        win_of_make_satisfied = satisfied = max_make_satisfied = 0
        for i, (c, g) in enumerate(zip(customers, grumpy)):
            satisfied += (1 - g) * c
            win_of_make_satisfied += g * c
            if i >= X and grumpy[i - X] == 1:
                win_of_make_satisfied -= customers[i - X]
            max_make_satisfied = max(win_of_make_satisfied, max_make_satisfied)  
        return satisfied + max_make_satisfied
```

**Analysis:**

Time: O(n), space: O(1), where n = grumpy.length;