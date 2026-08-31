# Kotlin Solution using Binary Search

**Author:** elvinakhundzada
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/4322096/](https://leetcode.com/problems/split-array-largest-sum/solutions/4322096/)

---

# Code
```
fun splitArray(nums: IntArray, k: Int): Int {

    var start = nums.max()
    var end = nums.sum()

    while(start < end) {

        val middle = start + (end - start) / 2

        var subArrayCount = 1
        var sum = 0

        for (num in nums) {
            if(sum + num > middle) {
                sum = num
                subArrayCount ++
            } else {
               sum += num
            }
        }

        if(subArrayCount <= k) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    return end;
}
```