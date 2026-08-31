# Solution with comments

**Author:** alexmkv
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5331205/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5331205/)

---

```
func canBeIncreasing(nums []int) bool {
    // will keep track of one removed
    oneRemoved := false
    for i := 1; i < len(nums); i++ {
        if nums[i-1] < nums[i] {
            continue
        }
        // if we found not conformed element
        // and it is second one
        // than nothing will help us
        if oneRemoved {
            return false
        }
        // we need to do something
        oneRemoved = true
        // it is last element we can just remove it
        // and everything will be ok
        if i == len(nums)-1 {
            return true
        }
        // check that we should removing current element
        if nums[i+1] > nums[i-1] {
            // just skip checking for next one, otherwise we'll
            // check against current one
            i++
            continue
        }
        // is it ok to remove previous one?
        if i == 1 || nums[i] > nums[i-2] {
            continue
        }
        // nothing we can do here
        return false
    }
    return true
}
```