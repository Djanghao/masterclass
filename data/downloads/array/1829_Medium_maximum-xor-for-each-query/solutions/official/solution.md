# Official Solution

**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solution/](https://leetcode.com/problems/maximum-xor-for-each-query/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we have to answer `n` queries. To answer the `i`-th query, we have to find the `k` where `k` has to be less than $2^{\text{maximumBit}}$ and maximizes the $XOR$ product between `k` and `nums[0], nums[1],..., nums[i]`. We will explore two approaches that will dive into how to calculate this `k` efficiently for all queries.

### Approach 1: Prefix Array + Bit Masking

#### Intuition

For the `i-th` query, we need to first calculate the $XOR$ product for the numbers `nums[0], nums[1],..., nums[i]`. Once we have this XOR value, which we'll call `product`, we want to find a `k` that maximizes the result of `k XOR product`. We first discuss how to find the `product` for each query efficiently.

To efficiently calculate the initial `product` for each query, we can save time by precomputing these values. We do this by performing a linear scan through the `nums` array to build a prefix array called `prefixXOR`. In this array, `prefixXOR[i]` will hold the XOR product of all numbers from `nums[0]` to `nums[i]`. For any query at index `i`, we can easily retrieve the `product` as `prefixXOR[i]`. 

Now that we have the `product` for each query, our next task is to find a `k` that will maximize `k XOR product`. A brute force approach would involve trying all possible bit combinations for `k`, where there is a total of $2^{\text{maximumBit}}$ bit combinations, and selecting the one that has the highest `k XOR product` value. 
 
However, due to the constraint on `k` where `k` can only have at most `maximumBit` bits, we know that we can only ever change at most the first `maximumBit` bits of `product` when maximizing our value of `k XOR product`. Specifically, we can achieve the greatest value by choosing a `k` that will make the first `maximumBits` bits set to all `1`s. Because the $XOR$ operator evaluates to 1 when the operands differ (0 and 1, or 1 and 0), we can do this by setting our `k` as the inverse of the first `maximumBits` of `product`. Because each respective bit is different, the XOR between a number and its inverse will lead to all bits being set to 1.

To quickly find this inverse, we create a bitmask called `mask`. This mask can be generated using the formula `mask = (1 << maximumBit) - 1`, which gives us a number where the first `maximumBit` bits are set to `1`. Then, to get our desired `k` for a given `product`, we can simply compute `product XOR mask`. Here, if a bit in `product` is set to 0, its XOR with the respective bit from `mask` set to 1 will make the resulting bit 1. Similarly, if the bit in `product` is set to 1, its XOR with the respective bit from `mask` will make the resulting bit 0. Thus, applying this mask will provide us with the inverse of the first `maximumBits` of `product`, which is the value of `k` that maximizes our result.


#### Algorithm

1. Calculate prefix array `prefixXOR` to store the prefix `XOR` products for all the queries:
    * Initialize `prefixXOR[0]` to `nums[0]`
    * From `i = 1` to `i = nums.length - 1`:
        * `prefixXOR[i] = prefixXOR[i - 1] XOR nums[i]`
2. Define our bitmask `mask = (1 << maximumBit) - 1`
3. Initialize our answer array `ans`
4. Answer each query and populate `ans`:
    * From `i = 0` to `i = nums.length - 1`:
        * The current XOR product we're dealing with is `product = prefixXOR[-i]`
        * Set `ans[i]` to be `product XOR mask`, giving us a `k` that inverts the first `maximumBit` bits of `product` to maximize our value `product XOR k`
5. Return `ans`

#### Implementation

<iframe src="https://leetcode.com/playground/8CLG94ay/shared" frameBorder="0" width="100%" height="463" name="8CLG94ay"></iframe>

#### Complexity Analysis

* Time Complexity: $O(n)$

    Calculating our prefix array takes $O(n)$ time. Going through all `n` queries will take $O(n)$ time where the $XOR$ calculation for each query takes constant time. Thus, the total time complexity is $O(n)$.

* Space Complexity: $O(n)$

    Our prefix array has a size of $n$, resulting in a space complexity of $O(n)$.

---

### Approach 2: Optimized Calculation + Bit Masking

#### Intuition

In Approach 1, we used a prefix array to quickly fetch the relevant XOR product for each query. In this approach, we explore a more space-efficient way to do so. 

For the first query, we notice that we start with the $XOR$ product that involves all numbers in `nums`. As we move on to each subsequent query, we calculate a new $XOR$ product that drops the last number in the previous calculation. 

To do this, we can start by calculating the initial XOR product, which we'll call`firstProduct`. This represents the XOR of all numbers in `nums`. This will give us the starting product used in the first query. Then, for each query `i`, we can then update `firstProduct` by removing the `i-th` last element from our previous calculations. We do this with the expression `firstProduct = firstProduct XOR nums[-i]`. 

The insight here is that when we XOR the same number again, it cancels itself out. This means that by applying the XOR operation to `firstProduct` with `nums[-i]`, we effectively remove that element from our calculations. This approach allows us to update the XOR product for each query efficiently without needing to recalculate everything from scratch.  

#### Algorithm

1. Calculate our initial $XOR$ product:
    * `xorProduct = 0`
    * For each `num` in `nums`: `xorProduct = xorProduct XOR num`
2. Define our bitmask `mask = (1 << maximumBit) - 1`
3. Initialize our answer array `ans`
4. Answer each query and populate `ans`:
    * From `i = 0` to `i = nums.length - 1`:
        * Set `ans[i]` to be `xorProduct XOR mask`, giving us a `k` that inverts the first `maximumBit` bits of `product` to maximize our value `product XOR k`
        * Update `xorProduct` for the next query by removing the last element: `xorProduct = xorProduct XOR nums[-i]`
5. Return `ans`

#### Implementation

<iframe src="https://leetcode.com/playground/Kf3i7SsP/shared" frameBorder="0" width="100%" height="395" name="Kf3i7SsP"></iframe>

#### Complexity Analysis

* Time Complexity: $O(n)$

    Going through all `n` queries will take $O(n)$ time where the $XOR$ calculations for each query take constant time. Thus, the total time complexity is $O(n)$.

* Space Complexity: $O(1)$

    We do not have any auxiliary data structures besides the required `ans` array, so the space complexity is $O(1)$.
    
    
---