# [Golang] Simple Solution with two bitMasks

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2694047/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2694047/)

---

```
func maximumANDSum(nums []int, numSlots int) int {
    mask1 := (1 << numSlots)-1
    mask2 := mask1
    res := 0
    
    // First try to store each number to its slot, which gives max result
    // Then try DP on remaining nums
    for id, num := range nums {
        if isSlotAvailable(num, &mask1, &mask2) {
            bookSlot(num, &mask1, &mask2)
            res += num
            nums[id] = 0     // Will not considered later in DP
        }
    }
    
    cache := make(map[string]int)
    return res + dp(0, nums, numSlots, &mask1, &mask2, cache)
}


func dp(id int, nums []int, numSlots int, mask1, mask2 *int, cache map[string]int) int {
    if id == len(nums) {
        return 0
    }
    
    key := strconv.Itoa(id) + "-" + strconv.Itoa(*mask1) + "-" + strconv.Itoa(*mask2)
    if value, ok := cache[key]; ok {
        return value
    }
    
    if nums[id] == 0 {
        return dp(id+1, nums, numSlots, mask1, mask2, cache)
    }
    
    res := 0
    // Check which slot suits better for the num
    for slot := 1; slot <= numSlots; slot++ {
        if isSlotAvailable(slot, mask1, mask2) {
            bookSlot(slot, mask1, mask2)
            currRes := nums[id] & slot
            res = max(res, currRes + dp(id+1, nums, numSlots, mask1, mask2, cache))
            unBookSlot(slot, mask1, mask2)
        }
    }
    cache[key] = res
    return res
}

func isSlotAvailable(slot int, mask1, mask2 *int) bool {
    if (*mask1) & (1 << (slot-1)) != 0 {
        return true
    }
    if (*mask2) & (1 << (slot-1)) != 0 {
        return true
    }
    return false
}

func bookSlot(slot int, mask1, mask2 *int) {
    if (*mask1) & (1 << (slot-1)) != 0 {
        (*mask1) = (*mask1) ^ (1 << (slot-1))
        return
    }
    (*mask2) = (*mask2) ^ (1 << (slot-1))
}

func unBookSlot(slot int, mask1, mask2 *int) {
    if (*mask1) & (1 << (slot-1)) == 0 {
        (*mask1) = (*mask1) | (1 << (slot-1))
        return
    }
    (*mask2) = (*mask2) | (1 << (slot-1))
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```