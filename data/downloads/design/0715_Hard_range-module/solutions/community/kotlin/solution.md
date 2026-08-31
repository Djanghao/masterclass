# Kotlin - Segment Tree

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-module/solutions/1299267/](https://leetcode.com/problems/range-module/solutions/1299267/)

---

Solution - [github](https://github.com/idiotleon/leetcode-solution-kotlin-leon/tree/main/src/main/kotlin/com/idiotleon/leetcode/lvl5/lc0715)

<b>Problem List</b>
#SegmentTree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_data_structure/tree/by_data_structure/segment_tree.txt)
#RangeQuery - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/range_query)

```
/**
 * @author: Leon
 * https://leetcode.com/problems/range-module/
 *
 * Time Complexities:
 *  addRange:       O()
 *  queryRange:     O()
 *  removeRange:    O()
 *
 * Space Complexity:    O()
 *
 * Reference:
 * https://leetcode.com/problems/range-module/discuss/495876/Clean-And-Concise-Lazy-Propagation-Segment-Tree
 */
class RangeModule() {
    
    private val root = SegmentTree()

    fun addRange(left: Int, right: Int) = root.addRange(left, right)

    fun queryRange(left: Int, right: Int) = root.queryRange(left, right)

    fun removeRange(left: Int, right: Int) = root.removeRange(left, right)

    private class SegmentTree{
        private companion object{
            private const val RANGE = 1e9.toInt() + 1
        }
        
        private val root = SegmentTreeNode(0, RANGE, false)
        
        fun addRange(rangeLo: Int, rangeHi: Int) = update(rangeLo, rangeHi, true, root)
        fun removeRange(rangeLo: Int, rangeHi: Int) = update(rangeLo, rangeHi, false, root)
        fun queryRange(rangeLo: Int, rangeHi: Int) = query(rangeLo, rangeHi, root)
        
        private fun query(rangeLo: Int, rangeHi: Int, node: SegmentTreeNode?): Boolean{
            if(node == null) return true
            if(rangeLo >= node.hi || rangeHi <= node.lo) return true
            
            if(rangeLo <= node.lo && node.hi <= rangeHi || (node.left == null)) return node.state
            
            val mid = node.lo + (node.hi - node.lo) / 2
            
            return when{
                rangeHi <= mid -> query(rangeLo, rangeHi, node.left)
                rangeLo >= mid -> query(rangeLo, rangeHi, node.right)
                else -> query(rangeLo, rangeHi, node.left) && query(rangeLo, rangeHi, node.right)
            }
        }
        
        
        private fun update(rangeLo: Int, rangeHi: Int, 
                           value: Boolean, 
                           node: SegmentTreeNode?){
            if(node == null) return
            
            if(rangeLo <= node.lo && node.hi <= rangeHi){
                node.state = value
                node.left = null
                node.right = null
                return
            }
            
            if(rangeLo >= node.hi || rangeHi <= node.lo) return
            
            val mid = node.lo + (node.hi - node.lo) / 2
            if(node.left == null){
                node.left = SegmentTreeNode(node.lo, mid, node.state)
                node.right = SegmentTreeNode(mid, node.hi, node.state)
            }
            
            update(rangeLo, rangeHi, value, node.left)
            update(rangeLo, rangeHi, value, node.right)
            node.state = node.left!!.state && node.right!!.state
        }
        
        private data class SegmentTreeNode(val lo: Int, val hi: Int, 
                                           var state: Boolean = false,  // has been tracked or not
                                           var left: SegmentTreeNode? = null, 
                                           var right: SegmentTreeNode? = null)
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
 ```