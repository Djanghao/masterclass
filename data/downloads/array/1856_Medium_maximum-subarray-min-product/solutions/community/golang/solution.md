# [Go] Monotonic Stack - explanation in comments

**Author:** stanroze
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/2144805/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/2144805/)

---

A monotonic stack is a stack that keeps an invariant. 
An **increasing** monotonic stack, keeps the invariant that the items on the stack are in increasing order.
A **decreasing** monotonic stack, keeps the invariant that the items on the stack are in decreasing order.

**key note:** we don't keep the values on the stack, we keep their indeces as long as the values at these indeces keep the invariant described above.

What does the monotonic stack give us? It allows us to find the Next *increasing/decreasing* Element and the Previous *increasing/decreasing* Element. 

```
func maxSumMinProduct(nums []int) int {
    // maintain an increasing stack
    // store indeces on the stack rather than actual values (important)
    //          storing indeces provides us with a window
    // the invariant on the stack is like this
    //
    //                ..... j-th item is the item we're on                           j
    //                |     this is the END BORDER of our window                ....][....
    //                |
    //          [1,2] 1
    //           |  \\___stack.Pop() is the *previous* minimum,                       j
    //           |                  so its the previous windows minimum   .....m....][......
    //            \\stack.Top() is the prev-previous minimum 
    //                         the minimum BEFORE the beginning          i           j
    //                         of this window                       .....][....m....][......
    //
    // therefore the window we're looking at is between (i:j)  - exclusive 
    //                                     therefore [i+1:j-1] - inclusive
    //
    // the FORMULA becomes m * prefix_sum(i+1:j-1)
    
    // set up boundaries [-1] + [nums] + [-1]
    nums = append([]int{-1}, append(nums, -1)...)
    
    prefix, stak := NewPrefixSum(nums), NewStack()
    maxProd := 0
    // i = start; j = end; m = curr
    for end := range nums {
        for stak.Len() > 0 && nums[end] < nums[stak.Top()] {
            curr, start := stak.Pop(), stak.Top()
            maxProd = max(maxProd, nums[curr] * prefix.Sum(start+1, end-1))
        }

        stak.Push(end)
    }

    return maxProd % (1e9+7)
}

type pSum struct {
    Sum   func(i, j int) int
}

func NewPrefixSum(arr []int) pSum {
    // build the sums
    sums := make([]int, len(arr) + 1)
    for i:=0; i<len(arr); i++ { 
        sums[i+1] = sums[i] + arr[i]
    }
    return pSum{
        Sum: func(i, j int) int {
          return sums[j+1] - sums[i]  
        },
    }
}

type stack struct {
    Len     func() int
    Push    func(x int)
    Pop     func() int
    Top     func() int
    Print   func() string
}

func NewStack() stack {
    arr := make([]int, 0)
    return stack{
        Len: func() int {
            return len(arr)
        },
        Push: func(x int) {
            arr = append(arr, x)
        },
        Pop:  func() int {
            item := arr[len(arr)-1]
            arr = arr[:len(arr)-1]
            return item
        },
        Top: func() int {
            return arr[len(arr)-1]
        },
        Print: func() string {
            return fmt.Sprintf("%d", arr)
        },
    }
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
```