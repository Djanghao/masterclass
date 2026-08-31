# Go | Sorting | Find Median and Iterate

**Author:** b3k3r
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4418709/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4418709/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Find the median value of nums. From there iterate outward until you find a lower and upper palindromic number. To find if a number is palindromic just convert to string and two-pointer from low and high to mid.

Once you have palindromic low and high, calculate the cost for each and return the min.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O( n * log(n) ) for sorting
Finding the palindromic numbers for low and high will prob not exceed this.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
func minimumCost(nums []int) int64 {
    sort.Ints(nums)
    mid := len(nums)/2
    if len(nums) % 2 == 0 {
        mid = (nums[mid-1] + nums[mid]) / 2
    } else {
        mid = nums[mid]
    }
    
    i, j := mid, mid    
    xlow, xhigh := -1, -1
    for xlow == -1 || xhigh == -1 {        
        if xlow == -1 && isPalindromic(i) {
            xlow = i
        }            
        if xhigh == -1 && isPalindromic(j) {
            xhigh = j
        }
        i, j = i-1, j+1
    }
    
    var anslow int64
    var anshigh int64
    for i := range nums {
        if nums[i] != xlow { 
            anslow = anslow + int64(abs(nums[i]-xlow))
        }
        if nums[i] != xhigh {
            anshigh = anshigh + int64(abs(nums[i]-xhigh))
        }
        
    }
    return min(anslow, anshigh)
}

func min(x, y int64) int64 { if x < y { return x }; return y }

func abs(x int) int { if x < 0 { return -x }; return x }

func isPalindromic(num int) bool {
    numStr := strconv.Itoa(num)
    for i, j := 0, len(numStr)-1; i < j; i, j = i+1, j-1 {
        if numStr[i] != numStr[j] { return false }
    }
    return true
}
```