# [Go] Simple Bruteforce

**Author:** Samuel3Shin
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/3769967/](https://leetcode.com/problems/array-transformation/solutions/3769967/)

---

# Code
```
func transformArray(arr []int) []int {
    N := len(arr)    
    for true {
        flag := false
        tmp := []int{}
        for i:=0; i<N; i++ {
            tmp = append(tmp, arr[i])
        }
        for i:=1; i<N-1; i++ {
            if arr[i] < arr[i-1] && arr[i] < arr[i+1] {
                tmp[i]++
                flag = true
            } else if arr[i] > arr[i-1] && arr[i] > arr[i+1] {
                tmp[i]--
                flag = true
            }
        }
        arr = tmp
        if !flag {
            break
        }
    }
    return arr
}
```