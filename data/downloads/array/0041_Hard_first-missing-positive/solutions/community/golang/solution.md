# Golang concise solution with some explanation

**Author:** redtree1112
**Votes:** 25
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/17157/](https://leetcode.com/problems/first-missing-positive/solutions/17157/)

---

Let's say the array is `[3, 4, -1, 1, 3]`.
If the array doesn't have missing positive integer within its range, the array should be `[1, 2, 3, 4, 5]`.

So, the idea is, we iterate through the array and if we find an integer within `1` to `5`, then put it to the ideal position.  
For example, if we find `1`, then swap it with a value on index `0`. If we find `3`, then swap it with a value on index `2`.

After we swap the value, we need to examine the swapped new value again, so we should not move to the next position. But we need to be careful about the case when the value is set at the ideal index by default, or we put it already. In this case we need to skip that index, otherwise we'll see the infinite loop :-\\

walkthrough:
```
[3, 4, -1, 1, 3]
 \u2191 3, swap with array[2]
[-1, 4, 3, 1, 3]
 \u2191 -1, this is out of range, so proceed to the next index
[-1, 4, 3, 1, 3]
     \u2191 4, swap with array[3]
[-1, 1, 3, 4, 3]
     \u2191 1, swap with array[0]
[1, -1, 3, 4, 3]
     \u2191 -1, out of range, so proceed to the next index
[1, -1, 3, 4, 3]
        \u2191 3, but already on array[2], so proceed to the next index
[1, -1, 3, 4, 3]
           \u2191 4, but already on array[3], so proceed to the next index
[1, -1, 3, 4, 3]
              \u2191 3, but array[2] already occupied with 3, so proceed to the next index
end
```

After this iteration, you will notice that the value who is in  range `1 \u301c n` will sit on the right index. So what you need to do is iterate this modified array again and find the first integer that doesn't have a value of `i+1`. This case, that is `2` because there is `-1` at index `1`. If there is no such integer, then the first missing integer should be `n+1`.

```
func firstMissingPositive(nums []int) int {
	nlen := len(nums)
	for i := 0; i < nlen; i++ {
		if nums[i] >= 1 && nums[i] <= nlen && nums[i] != nums[nums[i]-1] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
			i-- // keep the same index
		}
	}

	for i := 0; i < nlen; i++ {
		if nums[i] != i+1 {
			return i + 1
		}
	}
	return nlen + 1
}
```