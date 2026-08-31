# Go HashMap + Binary Search clear solutions

**Author:** qube
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/1959695/](https://leetcode.com/problems/fair-candy-swap/solutions/1959695/)

---

HashMap:
```
func fairCandySwap(aliceSizes []int, bobSizes []int) []int {
    alice, bob, aliceCandies := 0, 0, map[int]bool{}
    for _, candy := range aliceSizes { alice += candy; aliceCandies[candy] = true }
    for _, candy := range bobSizes { bob += candy }
    delta := (alice-bob)/2
    for _, b := range bobSizes { if aliceCandies[b+delta] { return []int{b+delta, b} } }
    return nil
}
```

Binary Search:
```
func fairCandySwap(aliceSizes []int, bobSizes []int) []int {
    alice, bob := 0, 0
    for _, candy := range aliceSizes { alice += candy }
    for _, candy := range bobSizes { bob += candy }
    delta := (alice-bob)/2
    sort.Ints(aliceSizes)
    for _, b := range bobSizes { if a := binarySearch(aliceSizes, b+delta); a != -1 { return []int{a, b} } }
    return nil
}

func binarySearch(arr []int, target int) int {
    left, right := 0, len(arr)-1
    for left <= right {
        mid := left+(right-left)/2
        if arr[mid] == target { return arr[mid] }
        if arr[mid] < target { left = mid+1 } else { right = mid-1 }
    }
    return -1
}
```