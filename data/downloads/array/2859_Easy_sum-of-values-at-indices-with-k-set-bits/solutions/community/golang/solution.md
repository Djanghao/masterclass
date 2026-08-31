# Go. True bit manipulation

**Author:** sergei-m
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4174846/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4174846/)

---

# The points that I highlighted while studying this problem:

1. If `k = 0`, then we have only `1` element that meets the task criteria, this is the element with index `0`;
1. If `k > 0`, then we will never use the element with index 0 in solving the problem, which means we can use its memory for our needs;
1. If we solve the problem with brute force, then you can notice that for `k = 10` we first go through indices that do not have the required number of \u201Cset bits\u201D. Because the first number with 10 bits set is `1023`. This means that with brute force, we made `1022` unnecessary iterations;
1. I would like to somehow find the next index that will satisfy the requirements of the task.


# Now let's see how we implement these points:
**Points 1 and 2**. This is simple code, it is before the loop.

**Point 3**. We can implement it by shifting one bit to the left by k bits and then subtracting 1

For example `k = 3`.
The first number that has `3 bits set` is `7`.
To get this number we:
- Shift 1 bit by 3 to the left
`1 << 3 = 1000`
If we convert 1000 to the decimal system, then this is the number `8`.
- Therefore, the next step is to subtract `1` from the resulting number.
`8 - 1 = 7`

**Point 4**. This point is easier to remember than to explain how it works.
We find the next number which contains the required number of "bits set". The trick was taken from the solution -> "[Hacker's Delight](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4063345/hacker-s-delight/)".


# Code
```
func sumIndicesWithKSetBits(nums []int, k int) int {
  if k == 0 {
    return nums[0]
  }

  nums[0] = 0

  for i := 1 << k - 1; i < len(nums); {
    nums[0] += nums[i]

    b := i & -i
    c := i + b

    i = (c^i) >> 2 / b | c
  }

  return nums[0]
}

```