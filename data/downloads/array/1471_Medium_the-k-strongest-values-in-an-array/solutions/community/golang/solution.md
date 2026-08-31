# Two Pointer with Golang

**Author:** hello_success
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/4818947/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/4818947/)

---


# Code
```
func getStrongest(arr []int, k int) []int {
    if len(arr) < 3 {
        return arr
    }
    if len(arr) == k {
        return arr
    }
    sort.Ints(arr)
    median := arr[int((len(arr)-1)/2)]
    leftPtr := 0
    rightPtr := len(arr)-1
    ans := make([]int, k)
    for i := 0; i < k; i++ {
        if arr[leftPtr] == getStronger(arr[leftPtr], arr[rightPtr], median){
            ans[i] = arr[leftPtr]
            leftPtr++
        } else {
            ans[i] = arr[rightPtr]
            rightPtr--
        }
    }
    return ans
}

func getStronger(a, b, m int)int{
    aProcessed := math.Abs(float64(a-m))
    bProcessed := math.Abs(float64(b-m))
    if aProcessed > bProcessed {
        return a
    }
    if bProcessed > aProcessed {
        return b
    }
    return int(math.Max(float64(a), float64(b)))
}
```