# Kotlin | Segment Tree + Binary Search | O(NlogN) | Explained

**Author:** lemmingby
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/2322755/](https://leetcode.com/problems/reverse-pairs/solutions/2322755/)

---

The inspiration for my solution comes from [here](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solution/) so you might want to read the segment tree part of that article first.

The logic is as follows:

1. We identify and sort all unique numbers in ```nums```, let their count be ```M``` 
2. We create a zero-initialized array ```buckets``` of size M to store the counts of all unique numbers in ```nums```. The items in buckets will be incremented as we iterate through ```nums```.
3. The segment tree (as explained [here](https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/) is tied to the buckets array, so each time we update the buckets we update the segment tree as well.
4. Since we update the buckets and the tree as we go, at each step of our main loop we know the count of each unique number in array after our current position. Each update has a ```logM``` complexity.
5. With this information at hand, all we have to do is to query our tree for the total count of numbers in range ```(-inf, nums[i]
-1)```. Each query has a ```logM``` complexity.
6. As numbers in ```nums``` are not in some continuous range, we have to use binary search to find the index of a number in buckets (we actually have to do this two times and each search has ```logM``` complexity).

So the overall complexity boils down to 4 * N * logM (and since M=N in the worst case, we get a NlogN)

```
class Solution {
    fun reversePairs(nums: IntArray): Int {
        val dsNums = nums.distinct().sorted()
        val buckets = IntArray(dsNums.size) {0}
        val segTree = RecursiveSegmentSumTree(buckets)
        var result = 0
        
        for (i in nums.size - 1 downTo 0) {
            val target = if (nums[i] > 0) (nums[i] - 1) / 2 else nums[i] / 2 - 1
            var targetIndex = dsNums.binarySearch(target)
            targetIndex = if (targetIndex >= 0) targetIndex else - targetIndex - 2
            
            
            if (targetIndex >= 0) {
                result += segTree.query(0, 0, targetIndex, 0, buckets.size - 1)
            }

            val index = dsNums.binarySearch(nums[i])
            segTree.update(0, 0, buckets.size - 1, index, ++buckets[index])
        }

        return result
    }
    
    class RecursiveSegmentSumTree(nums: IntArray) {
        val tree = IntArray(nums.size * 4)
        
        init {
            build(nums, 0, 0, nums.size - 1)
        }
        
        fun build(nums: IntArray, treeIndex: Int, segmentLeft: Int, segmentRight: Int) {
            if (segmentLeft == segmentRight) {
                tree[treeIndex] = nums[segmentLeft]
                return
            }
            
            val mid = (segmentLeft + segmentRight) / 2
            
            build(nums, treeIndex * 2 + 1, segmentLeft, mid)
            build(nums, treeIndex * 2 + 2, mid + 1, segmentRight)
            
            tree[treeIndex] = tree[treeIndex * 2 + 1] + tree[treeIndex * 2 + 2]
        }
        
        fun query(treeIndex: Int, rangeLeft: Int, rangeRight: Int, segmentLeft: Int, segmentRight: Int): Int {
            //Segment completely outside query range
            if (segmentLeft > rangeRight || segmentRight < rangeLeft) {
                return 0
            }
            
            //Segment completely inside query range
            if (segmentLeft >= rangeLeft && segmentRight <= rangeRight) {
                return tree[treeIndex]
            }
            
            //Segment overlaps with range
            val segmentMid = (segmentLeft + segmentRight) / 2
            val queryLeft = query(2 * treeIndex + 1, rangeLeft, rangeRight, segmentLeft, segmentMid)
            val queryRight = query(2 * treeIndex + 2, rangeLeft, rangeRight, segmentMid + 1, segmentRight)
            return queryLeft + queryRight
        }
        
        fun update(treeIndex: Int, segmentLeft: Int, segmentRight: Int, index: Int, newValue: Int) {
            if (segmentLeft == segmentRight) {
                tree[treeIndex] = newValue
                return
            }
            
            val segmentMid = (segmentLeft + segmentRight) / 2
            
            if (index <= segmentMid) {
                update(2 * treeIndex + 1, segmentLeft, segmentMid, index, newValue)
            } else {
                update(2 * treeIndex + 2, segmentMid + 1, segmentRight, index, newValue)
            }
            
            tree[treeIndex] = tree[treeIndex * 2 + 1] + tree[treeIndex * 2 + 2]
        }
    }
}
```