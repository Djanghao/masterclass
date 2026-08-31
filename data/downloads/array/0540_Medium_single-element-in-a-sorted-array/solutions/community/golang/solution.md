# [Go] Multiple Solutions in Go (GoLang) 100%

**Author:** krex0r
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3869802/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3869802/)

---

Hello Gophers!

From worst to best and a bonus!

| Number | Solution Name           | Time Complexity | Space Complexity | Valid  |
|--------|-------------------------|-----------------|------------------|--------|
| 1      | Using a `map`           | O(n)            | O(n)             | False  |
| 2      | XOR                     | O(n)            | O(1)             | True   |
| 3      | Iteration               | O(n)            | O(1)             | True   |
| 4      | Ugly Binary Search      | O(log n)        | O(1)             | True   |
| 5      | Cleaner Binary Search   | O(log n)        | O(1)             | True   |
| 6      | Bonus                   | ?               | ?                | ?      |


## Solution 1: Using a `map`

Not good from constraint:

> Your solution must run in O(log n) time and O(1) space.

### Complexity

Time: `O(n)`
Space: `O(n)`

### Code

```go
func singleNonDuplicate(nums []int) int {
    countMap := make(map[int]int)

    for _, num := range nums {
        countMap[num]++
    }

    for k, v := range countMap {
        if v == 1 {
            return k
        }
    }

    return -1
}
```

## Solution 2: XOR

### Complexity

Time: `O(n)`
Space: `O(1)`

### Code

```go
func singleNonDuplicate(nums []int) int {
    result := 0
    // Time: O(n)
    for _, num := range nums {
        result ^= num
    }
    return result
}
```


## Solution 3: Iteration

### Complexity

Time: `O(n)`
Space: `O(1)`

### Code

```go
func singleNonDuplicate(nums []int) int {
    // Time: O(n/2) = O(n)
    for i := 0; i < len(nums)-1; i += 2 {
        if nums[i] != nums[i+1] {
            return nums[i]
        }
    }
    return nums[len(nums)-1]
}

```

## Solution 4: Ugly Binary Search

### Complexity

Time: `O(log n)`
Space: `O(1)`

### Code

```go
func singleNonDuplicate(nums []int) int {
    if len(nums) == 1 {
        return nums[0]
    }

    left, right := 0, len(nums)-1

    // Time: O(log n) (Binary Search)
    for left < right {
        mid := average(left, right)
        if isEven(mid) {
            if mid == 0 {
                if nums[mid] != nums[mid+1] {
                    return nums[mid]
                }
                left++
            } else if mid == len(nums)-1 {
                if nums[mid] != nums[mid-1] {
                    return nums[mid]
                }
                right--
            } else {
                if nums[mid] == nums[mid+1] {
                    left = mid+1
                } else if nums[mid] == nums[mid-1] {
                    right = mid-1
                } else {
                    return nums[mid]
                }
            }
        } else /* isOdd */ {
            if nums[mid] == nums[mid-1] {
                if left == mid {
                    left++
                }
                left = mid+1
            } else if nums[mid] == nums[mid+1] {
                right = mid-1
            } else {
                return nums[mid]
            }
        }
    }

    return nums[left]
}

func average(x, y int) int {
    return x + (y-x)/2
}

func isEven(x int) bool {
    return x%2 == 0
}
```

## Solution 5: Cleaner Binary Search

### Complexity

Time: `O(log n)`
Space: `O(1)`

### Code

```go
func singleNonDuplicate(nums []int) int {
    // Time: O(log n) (Binary Search)
    left, right := 0, len(nums)-1
    for left < right {
        mid := left + (right-left) / 2
        if mid%2 == 1 {
            mid--
        }
        if nums[mid] != nums[mid+1] {
            right = mid
        } else {
            left = mid + 2
        }
    }
    return nums[left]
}
```

## Solution 6: Using the `sort` pkg

[`sort.Search()` uses binary search](https://pkg.go.dev/sort#Search), use it if you can!

### Complexity

Time: `O(log n)`
Space: `O(1)`

```go
import "sort"

func singleNonDuplicate(nums []int) int {
    return nums[2*sort.Search(len(nums)/2, func(i int) bool {
        return nums[2*i] != nums[2*i+1]
    })]
}
```