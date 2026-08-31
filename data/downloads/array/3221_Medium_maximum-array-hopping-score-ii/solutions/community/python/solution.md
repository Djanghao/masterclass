# Greedy (same idea for monostack) O(N), O(1) space

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5536326/](https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5536326/)

---

Inputs:
`jump score: (j - i) * nums[j]`
find max cumulative score jumping from `0` to `N - 1` x times.

1. We know for sure that the first element and the last element will be picked (inferred from the description)
2. We set `j` pointer to the last element
3. Find `i` to the left of `j` that will result with the biggest possible **multiplier** for the next jump - **pick next [i] > [j] element for i**

Example 2 dry run:
Let's look at the example 2 (finally a good example and not the usual `confuse yourself even more`)
```
index   0123456
nums    4528913
picked  *   * *
            i j
```
> Options:
(we're jumping backward)
3 -> 1: (6 - 5) * 3 = 3
vs
3 -> 9: (6 - 4) * 3 = 6

> We pick `9` as **the next jump will benefit more** with `jump_len x 9` than `jump_len x 1`

> From  the above the best choice is `3 -> 9` with the score `6`
Now we reset `j` and `i` for the next jump and start again.

> (we're jumping backward)
9 -> 8,2,5,4
vs
9 -> 4: (4 - 0) * 9 = 36

> From  the above the best choice is `9 -> 4` with the score `32`
Total: `36 + 6 = 42`

4. add jump score and repeat 3 till `j > 0`

```
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        N = len(nums)
        i = j = N - 1
        res = 0
        while j > 0:
            while i > 0 and nums[i] < nums[j]:
                i -= 1
            res += (j - i) * nums[j]
            j = i
            i -= 1
        return res
```
The same idea with monostack: find the biggest element to the left and calc best jumps.