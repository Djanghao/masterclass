# Go - simple solution

**Author:** czubakowski
**Votes:** 26
**Link:** [https://leetcode.com/problems/remove-element/solutions/1389895/](https://leetcode.com/problems/remove-element/solutions/1389895/)

---

iterate through nums keeping a separate pointer to our insert location.  If the value in nums isn't the val we're removing, then insert it at the insert location and increment the insert location.  Since the insert location is always the next available spot, it is also keeping the length of the returned array.
```
func removeElement(nums []int, val int) int {
    i := 0
    for _, v := range nums {
        if v != val {
            nums[i] = v
            i++
        }
    }
    return i
}
```