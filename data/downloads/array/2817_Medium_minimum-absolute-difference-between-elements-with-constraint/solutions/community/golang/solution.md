# [GoLang] Keeping list sorted, Binary Search

**Author:** dkochetov
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3904221/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3904221/)

---

# Approach
Gophers are not so lucky to have powerful standart libraries like C++/Python with sorted containers libs. So, no SortedList, no AvlTree that would help solving this problem quicker with better complexity.

Instead of implementing AvlTree from scratch (that can take a lot of time), we can just use copy() for shifting sublist and make a space for insertion of new elements. Not so fast but all test cases passed :)

`419 ms, 11.7 MB`

# Code
```golang []
func minAbsoluteDifference(nums []int, x int) int {
    if x == 0 { return 0 }  // optimisation
    
    n := len(nums)
    sortedList := make([]int, 0, n)
    ans := int(1e10)

    for i := x; i < n; i++ {
        num, newEl := nums[i], nums[i-x]

        // insert new element, so 'sortedList' contains all elements in range [0, i-x] in sorted order
        ln := len(sortedList)
        insertIdx := sort.Search(ln, func(j int) bool { return sortedList[j] >= newEl })
        sortedList = append(sortedList, 0)
        copy(sortedList[insertIdx+1:], sortedList[insertIdx:])
        sortedList[insertIdx] = newEl
        ln++

        // find idx of nearest element that is greater or equal to 'num' in 'sortedList' using binary search
        nearestNumIdx := sort.Search(ln, func(j int) bool { return sortedList[j] >= num })
        // checking both 'nearestNumIdx' and 'nearestNumIdx'-1, it might be closer to num
        for idx := nearestNumIdx - 1; idx <= nearestNumIdx; idx++ {
            if idx < 0 || idx >= ln { continue }
            ans = min(ans, abs(num - sortedList[idx]))
        }
    }
    return ans
}

func min(a, b int) int {
    if a < b { return a }
    return b
}
func abs(a int) int {
    if a < 0 { return -a }
    return a
}

```