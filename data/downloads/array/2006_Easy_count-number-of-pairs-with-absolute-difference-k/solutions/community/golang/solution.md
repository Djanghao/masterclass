# Golang map solution with explanation

**Author:** nathannaveen
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1478907/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1478907/)

---

The main idea of this solution is `nums[i] + k = nums[j]` and `nums[i] - k = nums[j]`, if you don't understand:

`|nums[i] - nums[j| = k`

Now if we took off the absolute value sign we get 2 equations:

`-(nums[i] - nums[j]) = k` and
`nums[i] - nums[j] = k`

Let us start with `-(nums[i] - nums[j]) = k`:

	-(nums[i] - nums[j]) = k
	Mulitply both sides by -1 so
	nums[i] - nums[j] = -k
	add k to both sides, and add nums[j] to both sides
	nums[i] + k = nums[j]

Now we can do `nums[i] - nums[j] = k`:

	nums[i] - nums[j] = k
	add nums[j] to both sides, and subtract k from both sides
	nums[i] - k = nums[j]

Now you might be wondering why `nums[i] + k = nums[j]` and `nums[i] - k = nums[j]` is useful, it is because we can loop through `nums`, and then add the number of elements that equal `nums[i] + k` (aka `nums[j]`) and the number of elements that equal `nums[i] - k` (This could be called `nums[j]`, but `nums[j]` is already assigned to `nums[i] + k`, so this could be called `nums[l]`).


``` go
func countKDifference(nums []int, k int) int {
    res := 0
    m := make(map[int] int)
    
    for _, num := range nums {
        m[num]++
        res += m[num + k] + m[num - k]
    }
    
    return res
}
```