# Go solution 100%, 100% with image

**Author:** nathannaveen
**Votes:** 4
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/1082801/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/1082801/)

---

The idea of this can be show by this image

![](https://i.imgur.com/XEPQ2YV.jpg)


```
func containsPattern(arr []int, m int, k int) bool {
    counter := 0

    for i := 0; i < len(arr) - m; i++ {
        if arr[i] != arr[i+m] {
            counter = 0
        } else {
            counter++
        }

        if counter == (k-1)*m {
            return true
        }
    }

    return false
}
```