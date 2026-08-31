# Boolean flag approach. Kotlin

**Author:** evgenim
**Votes:** 1
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/4676080/](https://leetcode.com/problems/zigzag-iterator/solutions/4676080/)

---

# Intuition
Create boolean flag

# Code
```
class ZigzagIterator {
    val iter1: Iterator<Int>
    val iter2: Iterator<Int>

    var flag = true
   
    constructor(v1: IntArray, v2: IntArray) {
        iter1 = v1.iterator()
        iter2 = v2.iterator()
    }

    fun next(): Int {
        if (!iter1.hasNext()) return iter2.next()
        if (!iter2.hasNext()) return iter1.next()

        return (if (flag) iter1 else iter2).next().also {flag = !flag}
    }
    
    fun hasNext(): Boolean {
        return (iter1.hasNext() || iter2.hasNext())
    }
}

// Your ZigzagIterator object will be instantiated and called as such:
// var i = ZigzagIterator(v1, v2)
// var ret = ArrayList<Int>()
// while(i.hasNext()){
//		ret.add(i.next())
// }
```