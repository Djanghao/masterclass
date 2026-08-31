# Golang solution with explanation 100%

**Author:** JieBai
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/1042777/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/1042777/)

---

Solution summary : Change all numbers to their possible max value, then keeps on reducing max value

1. The number of operations on each number are limited, which are X2 on odd number and /2 on even number, for example : 
	5 can be changed to 5, 10
	12 can be changed to 12, 6, 3
2. Since it's hard to manage 2 operations at the same time, we may consider to change all numbers to their possible max value 
3. We just need to keep on reducing the max value to find out the min range (till the max value is an odd number), as reduce other values won't help on reduce range
4. During the process, maintain the min value and calculate min range

How to dynamically maintain the max value of a list? Here I choose to use heap.

```
func minimumDeviation(nums []int) int {
    res := 2<<32
    MIN := 2<<32
    //*2 on all odd numbers and maintain MIN number
    for i := 0; i < len(nums); i++ {
        if nums[i] % 2 == 1 {
            nums[i] *= 2
        }
        MIN = min(MIN, nums[i]) 
    }
    
    //generate a max root heap
    genHeap(nums)
    
    //divide heap root by 2 if it's even number, re-do heap, maintain the MIN and result in the process
    for nums[0] % 2 == 0 {
        nums[0] /= 2
        MIN = min(nums[0], MIN)
        heapify(nums, len(nums), 0)
        res = min(res, (nums[0] - MIN))
    }
    return res
}

func genHeap(nums []int) {
    for i := len(nums) / 2; i >= 0; i-- {
        heapify(nums, len(nums), i)
    }
    return
}

func heapify(nums []int, n, i int) {
    c1 := i * 2 + 1
    c2 := i * 2 + 2
    max := i
    if c1 < n && nums[c1] > nums[max] {
        max = c1
    }
    if c2 < n && nums[c2] > nums[max] {
        max = c2
    }
    if max != i {
        swap(nums, max, i)
        heapify(nums, len(nums), max)
    }
    return
}

func swap(nums []int, a, b int) {
    temp := nums[a]
    nums[a] = nums[b]
    nums[b] = temp
    return
}

func min(a, b int) int {
    if a < b {
        return a
    } else {
        return b
    }
}
```
