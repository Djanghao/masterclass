# [Greedy + Formal Proof + Tutorial] Patching Array

**Author:** never_get_piped
**Votes:** 11
**Link:** [https://leetcode.com/problems/patching-array/solutions/5319537/](https://leetcode.com/problems/patching-array/solutions/5319537/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

**A thorough proof is essential to demonstrate the correctness of a perfect Greedy solution.**

Feel free to refer back to recent challenge on how I constructed a proof for it :
* [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/discuss/5304525/greedy-formal-proof-minimum-number-of-moves-to-seat-everyone)
* [Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/discuss/5309958/greedy-formal-proof-minimum-increment-to-make-array-unique)
* [IPO](https://leetcode.com/problems/ipo/discuss/5315196/greedy-proof-ipo)

___

## Greedy Solution
Solving a greedy problem generally involves coming up with a quick idea, but we need to prove its correctness before starting implementation. **Please refer to the section below for the solution walkthrough. This part exclusively focuses on guiding through the solution approach**.

The **greedy intuition** suggests that if you can already form any number from `0 to n` by using the current set of numbers, then adding a new number `x` such that `0 <= x <= n + 1` to our set allows you to from any number from `1` to `2 * n + 1`.

We initialize a variable `sum` to `0`, which signifies that with our current set, we can form any number from `0` up to `sum`. Our set starts empty, and we attempt to add elements from the input array or introduce new numbers using one operation.

We iterate through the `nums` array. If `nums[i]` is less than or equal to `sum + 1`, we add `nums[i]` to our current set, updating `sum` as `sum = sum + nums[i]`.  If `nums[i]` is greater than `sum + 1`, our current set can already form any number from 0 to `sum`. In this case, we need to introduce `sum + 1` as the maximum possible number into our set, updating `sum` as `sum = sum * 2 + 1`.

After picking all numbers from the input array, if we still cannot form every number from 1 to n, we must manually add new numbers to our current set. Each time, the maximum number we can introduce is `sum + 1`, and we update `sum` as `sum = sum * 2 + 1`.


## Proof 
We need to proof our greedy intuition idea:
if you can already form any number from `0 to n` by using the current set of numbers, then adding a new number `x` such that `1 <= x <= n + 1` to our set allows you to from any number from `0` to `2 * n + 1`.

```
Let S denotes the current set you have where S can form any number from 0 to n.
You introduce a number x into S where 0 <= x <= 1 + n. 

Since you can already form any number from 0 to n using S, you can also form any number from x  to  x + n by concatenating with  x.

By using all elements without x, you can form any number from 0 to n. By introducing x, you can form any number from x + 0 to x + n. 
Note that since x + 0 <= n + 1,  now the new S by introducing x can form any number from 0 to x + n.

If we take x > n + 1, since x + 0 > n + 1, n + 1 can not be fromed.
```

## Code
<iframe src="https://leetcode.com/playground/WvWWjLzy/shared" frameBorder="0" width="800" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(max(len(nums), log n))`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**