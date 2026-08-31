# Math

**Author:** gnayoaix
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/3730512/](https://leetcode.com/problems/perfect-rectangle/solutions/3730512/)

---

# Intuition
\u8FD9\u9898\u5C5E\u4E8E\u96BE\u8005\u4E0D\u4F1A\u4F1A\u8005\u4E0D\u96BE\u3002
\u4E3B\u8981\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u5165\u624B\uFF0C\u4E00\u4E2A\u662F\u9762\u79EF\uFF0C\u4E00\u4E2A\u662F\u9876\u70B9\u4E2A\u6570\u3002

- \u9996\u5148\u5404\u4E2A\u5C0F\u77E9\u5F62\u5982\u679C\u80FD\u7EC4\u6210perfect rectangle\uFF0C\u90A3\u4E48\u603B\u9762\u79EF\u548C\u4E00\u5B9A\u7B49\u4E8E\u65B0\u7684\u77E9\u5F62\u7684\u9762\u79EF\u3002\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u627E\u5230\u5DE6\u4E0B\u89D2\u548C\u53F3\u4E0A\u89D2\u7684\u70B9\u7684x\uFF0Cy\u5750\u6807\u3002
- \u4F46\u662F\u8FD9\u8FD8\u662F\u4E0D\u591F\u7684\uFF0C\u56E0\u4E3A\u53EF\u80FD\u5B58\u5728\u4E24\u4E2A\u77E9\u5F62\u9762\u79EF\u91CD\u5408\u7684\u60C5\u51B5
- \u73B0\u5728\u5C31\u518D\u9700\u8981\u6839\u636E\u9876\u70B9\u5224\u65AD\u4E86\uFF0C\u6BCF\u4E2A\u5C0F\u77E9\u5F62\u76844\u4E2A\u9876\u70B9\u90FD\u53EF\u4EE5\u505A\u8BB0\u5F55\uFF0C\u5982\u679C\u6700\u7EC8\u80FD\u7EC4\u6210perfect rectangle\u90A3\u4E48\u4E00\u5B9A\u53EA\u67094\u4E2A\u9876\u70B9\u51FA\u73B0\u5947\u6570\u6B21\u3002\u8FD9\u91CC\u53EF\u4EE5\u5DE7\u7528set\uFF0C\u51FA\u73B0\u8FC7\u5C31remove\uFF0C\u53CD\u6B63\u5219add\uFF0C\u6700\u540E\u53EA\u8981\u5224\u65ADsize\u5373\u53EF
- \u8FD9\u91CC\u4ECD\u7136\u662F\u4E0D\u591F\u7684\uFF0C\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u5224\u5B9A\u6700\u540E\u7684\u8FD94\u4E2A\u70B9\u7EC4\u6210\u7684\u603B\u9762\u79EF\u662F\u4E0D\u662F\u8DDF\u603Barea\u76F8\u540C\u6216\u8005\u4E5F\u53EF\u4EE5\u5224\u5B9A\u4E4B\u524D\u7684\u5DE6\u4E0B\u89D2\u548C\u53F3\u4E0A\u89D2\u7684\u4E24\u4E2A\u70B9\u662F\u4E0D\u662F\u5728set\u91CC\u9762\u3002

# Code
```
class Solution {
    data class Point(val x: Int, val y: Int)
    fun isRectangleCover(rectangles: Array<IntArray>): Boolean {
        var x1 = Int.MAX_VALUE
        var y1 = Int.MAX_VALUE
        var x2 = Int.MIN_VALUE
        var y2 = Int.MIN_VALUE

        var area = 0
        val points = mutableSetOf<Point>()

        for ((x, y, a, b) in rectangles) {
            x1 = Math.min(x1, x)
            y1 = Math.min(y1, y)
            x2 = Math.max(x2, a)
            y2 = Math.max(y2, b)

            area += (a - x) * (b - y)

            checkPoint(Point(x, y), points)
            checkPoint(Point(x, b), points)
            checkPoint(Point(a, y), points)
            checkPoint(Point(a, b), points)
        }

        if (area != (x2 - x1) * (y2 - y1) || points.size != 4) return false
        return Point(x1, y1) in points && Point(x2, y2) in points
    }

    fun checkPoint(p: Point, points: MutableSet<Point>) {
        if (p in points) {
            points.remove(p)
        } else {
            points.add(p)
        }
    }
}
```