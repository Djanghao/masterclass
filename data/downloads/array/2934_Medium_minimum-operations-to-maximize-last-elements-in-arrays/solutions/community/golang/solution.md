# Go Solution

**Author:** Antriksh_Telang
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/5096296/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/5096296/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minOperations(nums1 []int, nums2 []int) int {
    //We don't swap last elements
    n := len(nums1)
    copy1, copy2 := make([]int, n), make([]int, n)

    for i := 0; i < n; i++ {
        copy1[i] = nums1[i]
        copy2[i] = nums2[i]
    }

    temp := copy1[n-1]
    copy1[n-1] = copy2[n-1]
    copy2[n-1] = temp

    ans := solve(copy1, copy2) + 1 //This has the swap
    ans = Min(ans, solve(nums1, nums2))

    if ans == math.MaxInt32 {
        return -1
    }

    return ans
}

func Min(a, b int) int {
    return int(math.Min(float64(a), float64(b)))
}

func solve(nums1, nums2 []int) int {
    c := 0
    n := len(nums1)

    for i := 0; i < n-1; i++ {
        if nums1[i] <= nums1[n-1] && nums2[i] <= nums2[n-1] {
            continue
        } 

        temp := nums1[i]
        nums1[i] = nums2[i]
        nums2[i] = temp

        //Check again after swapping
        if nums1[i] > nums1[n-1] || nums2[i] > nums2[n-1] {
            c = math.MaxInt32
            break
        }

        c++
    }

    return c
}
```