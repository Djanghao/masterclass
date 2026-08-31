# kotlin 100%

**Author:** bbbbeshka
**Votes:** 1
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2555357/](https://leetcode.com/problems/erect-the-fence/solutions/2555357/)

---

```
// distance between trees
fun dist(p1: Pair<Int, Int>, p2: Pair<Int, Int>): Double {
    return Math.sqrt(Math.pow((p2.second-p1.second).toDouble(),2.0)+ Math.pow((p2.first-p1.first).toDouble(), 2.0))
}

// angle to tree from tree (horizontally right = 0.0)
fun angle(p1: Pair<Int, Int>, p2: Pair<Int, Int>): Double {
    return Math.atan2((p2.second-p1.second).toDouble(), (p2.first-p1.first).toDouble()).let {
        if(it < 0) return (2.0 * Math.PI + it) else it
    }
}

fun outerTrees(trees: Array<IntArray>): Array<IntArray> {
    if(trees.size < 3) return trees

    val left = trees.asSequence().map { it[0] to it[1] }.toMutableList()

    // finding bottom (and if several - bottom left) tree
    left.sortWith(compareBy<Pair<Int, Int>> { it.second }.thenBy { it.first })
    val firstPoint = left[0]
    var nowPoint = firstPoint
    val pointList = mutableListOf(nowPoint)
    var prevAngle = 0.0
    
    while(true) {
        
        var nowList = mutableListOf<Pair<Pair<Int,Int>, Double>>()
        var nowMinAngleDiff = 7.0 // first after PI * 2 = 6.28....
        var nowMinAngle = 7.0

        // finding point (or list if there's several on line at the MIN angle)
        left.forEach {
            if(it != nowPoint) {
                val angle = angle(nowPoint, it)

                if(Math.abs(angle - nowMinAngle) < 0.0000001) { // prevent == on double
                    nowList.add(it to dist(it, nowPoint))
                } else {
                    val diff = if(angle >= prevAngle) (angle - prevAngle) else 2.0 * Math.PI - (angle - prevAngle)
                    if ((diff) < nowMinAngleDiff) {
                        nowMinAngle = angle
                        nowMinAngleDiff = (diff)

                        // found angle smaller to find next 'ANCHOR' point , clearing list and fill with it
                        nowList.clear()
                        nowList.add(it to dist(it, nowPoint))
                    }
                }
            }
        }
        prevAngle = nowMinAngle
        
        // sorting by distance from current point
        nowList.sortBy { it.second }
        val nowListOnlyPoints = nowList.map { it.first }.toMutableList()

        if(nowListOnlyPoints.last() == firstPoint) {
            nowListOnlyPoints.removeAt(nowListOnlyPoints.size - 1)
            left.removeAll(nowListOnlyPoints)
            pointList.addAll(nowListOnlyPoints)

            // next point = first => job is done
            break
        } else {
            nowPoint = nowListOnlyPoints.last()

            left.removeAll(nowListOnlyPoints)
            pointList.addAll(nowListOnlyPoints)
        }
    }
    return pointList.asSequence().map { intArrayOf(it.first, it.second) }.toList().toTypedArray()
}
```