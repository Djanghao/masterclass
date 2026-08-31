# Deep Dive into Lee's O(n) Solution

**Author:** rexcheng
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5118215/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5118215/)

---

[Click to view lee215's O(n) solution](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5114202/java-c-python-4-cases-o-n-solution)

***Disclaimer: This post is just my explanation of @lee215 solution and I do NOT own the solution.***

For ease of reading/understanding, let's call
- `op1`: increase an element in the array by 1 with `cost1`
- `op2`: choose two different elements in the array and increase both of them by 1 with `cost2`

First thing - let's forget the four cases in Lee's solution. We have two possible operations and we want to find the answer. What can we do with the two operations? Well, the answer must be one of the following:
1. Use only `op1`
2. Use a combination of `op1` and `op2`
3. Use only `op2`

### Now think about under which circumstance we would prefer "1. Use only `op1`."
Well, if we choose two different elements and increase both of them by 1 with `2 * cost1` and result in a lower cost than `cost2`, we definitely prefer using only `op1`. *This is case1 in Lee's solution.*
```python
# python code
maxNum = max(nums)
cost = sum([(maxNum - num) * cost1 for num in nums]) # sum of the difference between each element and maxNum, multiplied by cost1
# alternatively from Lee's solution
cost = (maxNum * len(nums) - sum(nums)) * cost1
```

### What about "2. Use a combination of `op1` and `op2`"?
*This covers case2 & case3 in Lee's solution.* There is a precondition for this case - `2 * cost1 > cost2` because if this condition is false, we can directly return the answer above.

Given the precondition, we should prefer using `op2` as much as possible and then `op1`. If it is possible to find an answer with two `op1` performed on different elements, we can always replace two `op1` with one `op2` to reduce the cost. What if `op1` is performed multiple times on the same element? Then we are not able to replace `op1` with `op2` unless we further increase all elements in the array beyond `max(nums)`.

Therefore, we need to consider two cases here:
1. Increase as many elements in the array as possible to `max(nums)` with `op2`, and then  use `op1` to increase the rest ("the rest" is actually the minimum element in the array)

```python
# python code
maxNum = max(nums)
op1, op2 = 0, 0
surplus = 0
for num in nums:
    diff = maxNum - num
    if surplus >= diff: # enough increase by op2 from previous step
        surplus -= diff
    else:
        op2 += diff - surplus # (diff - surplus) more op2 to bring num to maxNum
        surplus = diff - surplus
if surplus > 0: # too many op2 performed
    op1 = surplus
    op2 -= surplus
cost = op1 * cost1 + op2 * cost2

# alternatively from Lee's solution
minNum, maxNum = min(nums), max(nums)
# total difference to bring all elements to maxNum
total = maxNum * len(nums) - sum(nums)
# increasing minNum to maxNum using op2 gives you (maxNum - minNum) more to apply to all other elements
# thus the total difference to increase minNum to maxNum using op2 is 2 * (maxNum - minNum)
solo = max(0, (maxNum - minNum) * 2 - total)
# the sum of difference to be performed with op2
pair = total - solo
cost = (solo + pair % 2) * cost1 + (pair // 2) * cost2
```

2. Replace `op1` in the case1 above with `op2` but increase all elements in the array to `max(nums) + x`, some integer greater than `max(nums)`. We want to replace as many `op1` as possible because `cost2 < 2 * cost1`

```python
# python code
# total difference to bring all elements to maxNum
total = maxNum * len(nums) - sum(nums)
total += \\
    # this is the `x`
    # we have `solo` difference to be performed using op1
    # every time we increment `x` by 1, we can replace len(nums) - 1 op1 with op2
    # and introduce one more op1 to increment the smallest element by 1
    # so we reduce `solo` by the number of other elements minus 1 (the element itself)
    # because the element itself needs to be increased by 1 more using op1
    solo // (len(nums) - 2) \\
    # multiplied by len(nums) because we need to increase all elements to maxNum + x
    * len(nums)
# difference to be performed with op1
solo %= len(nums) - 2
# the sum of difference to be performed with op2
pair = total - solo
cost = (solo + pair % 2) * cost1 + (pair // 2) * cost2
```

### Finally "3. Use only `op2`."
*This is case4 in Lee's solution.* Obviously this time, we cannot assume when all elements in the array are equal, they are equal to `max(nums)` because `op2` will increase two different elements at the same time. So what can we do at best if we are only allowed to use `op2`?
1. Increase all elements to `max(nums)`
2. Consume the overflows due to `op2` by balancing them across the array as equally as possible
3. All the elements in the array should be equal to `max(nums) + x`, where `x` is some non-negative integer ($x \\ge 0$)

Okay, from the case above "Use a combination of `op1` and `op2`," we already know that `solo %= len(nums) - 2`. This means that `solo` can only be in the range $[0, \	ext{len(nums)} - 3]$. Since we want to use only `op2`, we want to reduce `solo` to 0. This means we need to increase `x` from the previous case.

However, we just need to increase `x` from the previous case by 1 or 2 (same as increasing `total` by `len(nums)` or `2 * len(nums)`). This can be proved by mathematical induction.

When `solo = 1`, if `len(nums)` is odd, `len(nums) - 1` is even and increasing `x` by 1 works; if `len(nums)` is even, `len(nums) - 1` is odd and increasing `x` by 2 works.

When `solo = k + 1`, we flap the if condition for `solo = k` so that the statement still holds.

```python
# python code
for i in range(2):
    total += len(nums) # adding len(nums) to `total` increases `x` by 1
    # cost1 is here because we don't know if adding len(nums) once is enough
    cost = (total % 2) * cost1 + (total // 2) * cost2
```

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Solution in JS (FYI)
```js
/**
 * @param {number[]} nums
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var minCostToEqualizeArray = function(nums, cost1, cost2) {
    const MOD = 1e9 + 7;
    let min = nums[0], max = nums[0], sum = 0;
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        sum += num;
    }
    let delta = max * nums.length - sum;
    if (cost1 * 2 <= cost2 || nums.length <= 2) {
        return (delta * cost1) % MOD;
    }
    // use cost2 as much as possible, then cost1 to fill the gap
    // to increase all elements to max
    let op1 = Math.max(0, (max - min) * 2 - delta);
    let op2 = delta - op1;
    let result = (op1 + op2 % 2) * cost1 + Math.floor(op2 / 2) * cost2;
    // use cost2 as much as possible, then cost1 to fill the gap
    // but to increase all elements to (max + ?)
    delta += Math.floor(op1 / (nums.length - 2)) * nums.length;
    op1 %= nums.length - 2;
    op2 = delta - op1;
    result = Math.min(result, (op1 + op2 % 2) * cost1 + Math.floor(op2 / 2) * cost2);
    // don't use cost1
    for (let i = 0; i < 2; i++) {
        delta += nums.length;
        result = Math.min(result, (delta % 2) * cost1 + Math.floor(delta / 2) * cost2);
    }
    return result % MOD;
};
```