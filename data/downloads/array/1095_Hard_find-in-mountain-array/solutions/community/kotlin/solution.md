# Modular Kotlin

**Author:** 2pac_shakur
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/984372/](https://leetcode.com/problems/find-in-mountain-array/solutions/984372/)

---

```
API's

fun findMountainIdx(A: MountainArray): Int
fun searchLeftHalf(target: Int, A: MountainArray, start: Int, end: Int): Int // left half is sorted in ascending order
fun searchRightHalf(target: Int, A: MountainArray, start: Int, end: Int): Int // right half is sorted in descending order

```

```
    fun findInMountainArray(target: Int, A: MountainArray): Int {
        val len = A.length()
        val mountainIdx = findMountainIdx(A)
        val mountain = A.get(mountainIdx)
        val first = A.get(0)
        val last = A.get(len - 1)

        if (target == mountain) return mountainIdx
        
        val maybeInFirstHalf = searchLeftHalf(target, A, 0, mountainIdx)
        if (maybeInFirstHalf != -1) return maybeInFirstHalf
        
        return searchRightHalf(target, A, mountainIdx, len - 1)
    }
    
    private fun findMountainIdx(A: MountainArray): Int {
        var left = 0
        var right = A.length() - 1
        while (left < right) {
            val mid = (left + right) / 2
            if (A.get(mid) > A.get(mid + 1)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
    
	
    private fun searchLeftHalf(target: Int, A: MountainArray, start: Int, end: Int): Int {
        var left = start
        var right = end
        while (left <= right) {
            val mid = (left + right) / 2
            if (A.get(mid) == target) return mid
            if (target > A.get(mid)) left = mid + 1
            else right = mid - 1
        }
        return -1
    }
    
    private fun searchRightHalf(target: Int, A: MountainArray, start: Int, end: Int): Int {
        var left = start
        var right = end
        while (left <= right) {
            val mid = (left + right) / 2
            if (A.get(mid) == target) return mid
            if (target < A.get(mid)) left = mid + 1
            else right = mid - 1
        }
        return -1
    }
```