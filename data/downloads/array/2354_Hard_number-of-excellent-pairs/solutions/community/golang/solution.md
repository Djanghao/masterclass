# Go // 246ms combinatorics // Full explanation

**Author:** cyclic
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/2330729/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/2330729/)

---

**Observations:**

The second condition given details things regarding the AND and OR operators, as well as the total bit count of the results. Let's inspect the two bitwise operations:
```
  1010      1010
& 1100    | 1100
------    ------
  1000      1110
```

From this, we can observe that we will get a `1` in the AND if it is `1` in both of the inputs only, and we get a `1` in the OR if either input has a `1` at that position. Let's inspect how the sum of the set bits in the AND and the OR is affected position by position:

If a position has two 1s, we increase the sum of the number of set bits by 2 -- 1 for the AND and 1 for the OR. If a position has a 1 and a 0, we increase the sum by 1 for the OR only. If a position has two 0s, we don't increase the sum, since both the AND and the OR are 0 at this position. Notice that the amount we increase the sum for a position is always equal to the number of 1s at this position!

Therefore, we want the number of ordered pairs of numbers `(a, b)` such that `popcount(a) + popcount(b) >= k`, where `popcount` represents a function that returns the number of 1 bits in a number.

This suggests a combinatorial approach of sorts. We'll keep the number of distinct elements from `nums` with `i` 1 bits in `bits[i]`. Then for each pair `(x, y)` where `x + y >= k`, we can multiply `bits[x] * bits[y]` to get the number of pairs corresponding to this. Note that we only want distinct elements, since having (for example) `210` twice is meaningless -- the second instance of `210` is not used in any pairs, since any pairs it is in could already have been made with the first `210`.

To convince ourselves this works, let's look at pairs in the result. A pair `(a, b)` where `a` and `b` have different numbers of 1 counts (call these `x` and `y` as before) will have to be counted once -- namely, counted when we multiply `bits[x] * bits[y]`. The pair `(b, a)` likewise is counted when we add on `bits[y] * bits[x]` -- these are done in separate multiplications. If `a` and `b` both have `x` 1 bits set, then the multiplication `bits[x] * bits[x]` will include both `(a, b)` and `(b, a)`, since the first number in the pair is one of `bits[x]` choices and the second number is another one such choice. Finally, all pairs in the form `(a, a)` are supposed to be counted exactly once -- reversing the numbers does not create a distinct pair -- and it is, in fact, only counted once in the product `bits[x] * bits[x]` as desired.

**Implementation:**

We first will need a function to count the number of 1 bits set in a number. In C++, this would be accomplished by just calling `__builtin_popcount`, but Go doesn't give us something like this, so we get to build it ourselves! We could loop through each bit individually and maintain a sum, but this is slow, so we do it in parallel instead. In particular, the first step is used to make the number stored in the highest 2 bits equal to the number of 1s in the highest 2 bits. In the second step, the number stored in the highest 4 bits is equal to the number of 1s in the highest 4 bits of the original integer, and so on until the last step has the highest 32 bits equal to the number of 1s in the highest 32 bits of the original integer -- namely, the whole thing. This allows us to do the popcount in only 20 operations and 5 assignments.

For our main function, we proceed mostly as described previously. To store the integers that we already have (to avoid duplicates), we use a `map[int]bool`, which is set to true for any integers that we have already added. All other integers are not in the map and therefore map to the default value of false when acessed. The `bits` array is used to store the number of distinct elements of `nums` with each number of 1 bits. We then iterate through `nums` and use our `popcount` function from earlier to increment the corresponding value when necessary. This takes O(n) time.

We then iterate through all possible combinations of `i` and `j` such that `0 <= i, j < 32` and `i, j >= k`. Note that we don't need to check `32` for either `i` or `j`, because that implies the sign bit is set in the original number in `nums`, however, we know that all elements are positive as given. For each, we multiply and add to our total as described earlier. We perform at most `32 * 32 = 1024` multiplications and additions, so this step is `O(1)` as it's not dependent on the size of any of the inputs.

**Code:**
```
func popcount(n int) int {
    n = (n & 0x55555555) + ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    n = (n & 0x0f0f0f0f) + ((n >> 4) & 0x0f0f0f0f)
    n = (n & 0x00ff00ff) + ((n >> 8) & 0x00ff00ff)
    return (n & 0x0000ffff) + ((n >> 16) & 0x0000ffff)
}

func max(a int, b int) int {
    if (a > b) {
        return a
    }
    return b
}

func countExcellentPairs(nums []int, k int) int64 {
    used := make(map[int]bool)
    bits := make([]int, 32)
    for _, x := range nums {
        if(used[x]) {
            continue
        }
        used[x] = true
        bits[popcount(x)]++
    }
    res := int64(0)
    for i := 0; i < 32; i++ {
        for j := max(0, k - i); j < 32; j++ {
            res += int64(bits[i] * bits[j])
        }
    }
    return res
}
```

If this helped you, please upvote!