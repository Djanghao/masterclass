# Official Solution

**Link:** [https://leetcode.com/problems/find-missing-observations/solution/](https://leetcode.com/problems/find-missing-observations/solution/)

---

[TOC]

## Solution

---

### Approach: Math

#### Intuition

In this problem, we have some dice throw results but lost `n` of them. We know the results of `m` throws and the average value of all `m + n` throws. Our goal is to determine if we can find the missing throws that fit these conditions.

The mean is the sum of observations divided by the number of observations. Therefore, we can find the total sum by multiplying the mean by `m + n`. Next, we subtract the sum of the `m` known throws from this total sum to get the sum of the missing `n` throws.

For example:\
$rolls = [3, 2, 4, 3], mean = 4, n = 2$\
$total\; observations = m + n = 4 + 2 = 6$\
$sum\; of\; observations = 4 * 6 = 24$\
$sum\; of\; given\; dice\; rolls = 3 + 2 + 4 + 3 = 12$\
$sum\; of\; remaining\; dice\; rolls = 24 - 12 = 12$

To check if this sum is possible, we note that the minimum sum for `n` dice is `n` (if all dice show 1), and the maximum sum is `6n` (if all dice show 6). So, the sum of the missing throws must be between `n` and `6n`, inclusive.

Finally, we need to distribute this sum among the `n` missing throws. Ideally, each missing throw would have a value close to the average. If the sum isn’t exactly divisible by `n`, we distribute the remainder among the throws, making sure each value stays between 1 and 6.

#### Algorithm

1. Create an integer variable `sum` and set it to `0`.
2. Calculate the `sum` of `rolls`:
3. Iterate through each element in `rolls`:
    - Add the current element to `sum`.
4. Compute `remainingSum` as `mean * (n + rolls.size()) - sum`.
5. Check the validity of `remainingSum`:
    - If `remainingSum > 6 * n` or `remainingSum < n`, return an empty list `[]`.
6. Compute `distributeMean` as `remainingSum / n` and `mod` as `remainingSum % n`.
7. Initialize an array `nElements` of size `n` with each element set to `distributeMean`.
8. Iterate through the first `mod` elements of `nElements`:
    - Increment each of these elements by 1.
9. Return `nElements` as the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/hPCdeaQJ/shared" frameBorder="0" width="100%" height="463" name="hPCdeaQJ"></iframe>

#### Complexity Analysis

Let $m$ be the size of the `rolls` array.

- Time complexity: $O(m + n)$

    We iterate through the `rolls` array exactly once. Also, while filling the `mod` values, we iterate the array up to index `mod`. Since the value of `mod` in the worst case can go up to `n-1`, the total time complexity is given by $O(m + n)$.

- Space complexity: $O(1)$

   Apart from the `nElements` array, where we store the answer, no additional space is used to solve the problem. Therefore, the space complexity is given by $O(1)$.

---