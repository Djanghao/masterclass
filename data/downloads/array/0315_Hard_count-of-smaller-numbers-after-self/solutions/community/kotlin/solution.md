# Kotlin - Binary Indexed Tree, and Segment Tree

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1299244/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1299244/)

---

Solution - [github](https://github.com/idiotleon/leetcode-solution-kotlin-leon/tree/main/src/main/kotlin/com/idiotleon/leetcode/lvl5/lc0315)

<b>Problem List</b>
#BinaryIndexedTree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_data_structure/tree/by_data_structure/binary_indexed_tree.txt)
#SegmentTree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_data_structure/tree/by_data_structure/segment_tree.txt)
#RangeQuery - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/range_query)


```
/**
 * @author: Leon
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 *
 * Time Complexity:     O(`nNums` * lg(`nNums`)) + O(`nNums`) ~ O(`nNums` * lg(`nNums`))
 * Space Complexity:    O(`nNums`) + O(`highestRank`)
 *
 * Reference:
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76674/3-Ways-(Segment-Tree-Binary-Indexed-Tree-Merge-Sort)-clean-Java-code
 */
class Solution {
    fun countSmaller(nums: IntArray): List<Int> {
        val nNums = nums.size
        val ans = MutableList<Int>(nNums){ 0 }
        
        val min = nums.min()!!
        var maxRank = Int.MIN_VALUE
        for(idx in nums.indices){
            nums[idx] -= min - 1
            maxRank = maxOf(maxRank, nums[idx])
        }
        
        val fenwick = IntArray(maxRank + 1){ 0 }
        for(idx in nums.indices.reversed()){
            ans[idx] = query(nums[idx] - 1, fenwick)
            update(nums[idx], fenwick)
        }
        
        return ans
    }
    
    private fun update(idx: Int, fenwick: IntArray){
        val nBits = fenwick.size
        
        var idx = idx
        
        while(idx < nBits){
            ++fenwick[idx]
            idx += (idx and -idx)
        }
    }
    
    private fun query(idx: Int, fenwick: IntArray): Int{
        var idx = idx
        var sum = 0
        
        while(idx > 0){
            sum += fenwick[idx]
            idx -= (idx and -idx)
        }
        
        return sum
    }
}
```

```
/**
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 *
 * Time Complexity:     O(`nNums` * lg(`nNums`))
 * Space Complexity:    O(`nNums`)
 *
 * References:
 *  https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76674/3-Ways-(Segment-Tree-Binary-Indexed-Tree-Merge-Sort)-clean-Java-code
 */
class Solution {
    fun countSmaller(nums: IntArray): List<Int> {
        val nNums = nums.size
        
        val ans = MutableList(nNums){ 0 }
        
        val min = nums.min()!!
        val max = nums.max()!!
        
        val root = SegmentTreeNode(min, max)
        
        for(idx in nums.indices.reversed()){
            ans[idx] = query(nums[idx] - 1, root)
            update(nums[idx], root)
        }
        
        return ans
    }
    
    private fun query(value: Int, node: SegmentTreeNode?): Int{
        if(node == null)
            return 0
        
        return if(value >= node.max){
            node.count
        }else{
            val mid = node.getMid()
            
            if(value < mid){
                query(value, node.left)
            }else{
                query(value, node.left) + query(value, node.right)
            }
        }
    }
    
    private fun update(value: Int, node: SegmentTreeNode?){
        if(node == null)
            return
        
        if(value < node.min || value > node.max)
            return
        
        ++node.count
        if(node.max == node.min)
            return
        
        val mid = node.getMid()
        if(value < mid){
            if(node.left == null)
                node.left = SegmentTreeNode(node.min, mid - 1)
                
            update(value, node.left)
        }else{
            if(node.right == null)
                node.right = SegmentTreeNode(mid, node.max)
                
            update(value, node.right)
        }
    }
    
    private data class SegmentTreeNode(
        val min: Int,
        val max: Int,
        var count: Int = 0,
        var left: SegmentTreeNode? = null,
        var right: SegmentTreeNode? = null
    ){
        fun getMid() = (max + 1 - min) / 2 + min
    }
}
```