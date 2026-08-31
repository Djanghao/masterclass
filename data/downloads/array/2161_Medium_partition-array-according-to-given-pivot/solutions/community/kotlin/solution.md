# Kotlin O(n) solution with 3 pointers

**Author:** awawa
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747682/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747682/)

---

The idea to the solution is the following. Let's count elements that are less than `pivot` and elements that are equal to `pivot`. After that we can create new array and create three insertion pointers: `less`, `equal` and `greater`. Each pointer points to the index where elements less than `pivot`, equal to `pivot` and greater to `pivot` should be inserted. Obviously, `less` will always be equal to `0`, `equal` will be equal to the count of elements that are less than `pivot` (we are kind of preserving the space for those elements), and `greater` will be equal to the sum of counts of elements that are less than `pivot` and `equal` to pivot (same approach of preserving the space for those elements). After we set initial state of pointers we traverse the array again and put each element to its dedicated space, increasing pointers accordingly. For example, when we meet the element that is less than `pivot`, we place this element at `less` index and increase `less` by one. We do the same for `equal` and `greater`.

```
class Solution {
    fun pivotArray(nums: IntArray, pivot: Int): IntArray {
        var lessCount = 0
        var equalCount = 0
        for (num in nums) {
            if (num < pivot) lessCount++
            if (num == pivot) equalCount++
        }
        
        var lessInsert = 0
        var equalInsert = lessCount
        var greaterInsert = equalCount + lessCount
        val result = IntArray(nums.size)
        for (num in nums) {
            when {
                num < pivot -> result[lessInsert++] = num
                num == pivot -> result[equalInsert++] = num
                num > pivot -> result[greaterInsert++] = num
            }
        }
        return result
    }
}
```