# Deep Intuition explanation | JS | Easy to understand

**Author:** erickaky
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4451527/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4451527/)

---

# Intuition
To find K-free subset(s) we first might want to identify which items we CAN'T put together in the same subset and group them accordingly.

For example, for:
`k = 5`
`nums = 2 3 5 8`

we can make groups like:
```
  2
  3 -> 8 
  5 
```

So, we can't mix `3` and `8`. (as they are in the same group and have K difference)

At the same time, each group are independent each other, and we know for sure that **we CAN mix items from different group together and get K-free subsets**. For example we can mix them and make the following valid subsets:
```
2,3,5
2,8,5
2,3
2,5
and etc
```

Now, to get all possible combinations of K-free subsets, we need to count how many valid k-free subsets each group can have and them *multiple them*.

```
  2         - [], [2] - 2 sets
  3 -> 8    - [], [3], [8] - 3 sets (we can't have [3,8])
  5         - [], [5] - 2 sets
```

2 * 3 * 2 = > 12 sets


Anothere observation that we can make is that, we group `[2]` and `[5]` both have 2 sets.
Which means that we don't care about values, we are only interested in the size of the group.

So if group has 1 item it can form `2 sets`
if group has 2 items it can form `3 sets` and etc.

We also know that empty set is a valid set. (e.g - `1 set`)

So we can do:
```
dp[0] = 1
dp[1] = 2
```

let's assume we have a group of 3:
```
3 -> 8 -> 13
```
we can have the following valid subsets:
```
[3]
[8]
[13]
[3,13]
[]
```
We can't add 3,8 or 8,13 because it won't be k-free

So, for size 3 we have 5

`dp[3] = 5`

-----


Let's inspect group of 4 items:
```
3 -> 8 -> 13 -> 18
```
we can have the following valid subsets:
```
[3]
[8]
[13]
[18]
[3,13]
[3,18]
[8,18]
[]
```
`dp[4] = 8`

Now, let's put all together:


```
dp[0] = 1
dp[1] = 2
dp[2] = 3
dp[3] = 5
dp[4] = 8
```

Do you see a pattern?

Yeah, it's a freaking fibonacci.


Now we can make a generate `recursive relation`:

```
dp[i] = dp[i - 1] + dp[i - 2]
```

------
Summary:

1. Sort and make groups of items with different of K (with sorting it's easy to make such groups)
2. Count how many valid subsets each group can have
3. Multiple them together



# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countTheNumOfKFreeSubsets = function(nums, k) {
  const map = new Map()
  let maxChain = 0

  nums.sort((a, b) => a - b)

  // make groups where each element has difference of k
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let prev = num - k
    let value = 1

    if (map.has(prev)) {
      value += map.get(prev)
      map.delete(prev)
    }
    map.set(num, value)
    maxChain = Math.max(maxChain, value)
  }

  // compute subset for each group by group length
  const dp = Array(maxChain + 1)
  dp[0] = 1 // []
  dp[1] = 2 // [], x

  for (let i = 2; i <= maxChain; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  let value = 1
  for (let size of map.values()) {
    value *= dp[size]
  }

  return value
};
```