# Scala

**Author:** MihailsC
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3120904/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3120904/)

---

# Code
```
object Solution {
    def queensAttacktheKing(queens: Array[Array[Int]], king: Array[Int]): List[List[Int]] = {
        val Array(xk, yk) = king

        def canAttack: Array[Int] => Boolean = {
            case queen @ Array(xq, yq) =>
                val xAttack = (xq == xk) && !blockedPathX(queen)
                lazy val yAttack = (yq == yk) && !blockedPathY(queen)
                lazy val diagAttack = ((xq - xk).abs == (yq - yk).abs) && !blockedPathDiag(queen)
                xAttack || yAttack || diagAttack
        }

        def blockedPathX: Array[Int] => Boolean = {
            case queen @ Array(xq, yq) =>
                val ys = yq.min(yk) + 1 until yq.max(yk)
                queens.exists {
                    case Array(x, y) => x == xq && ys.contains(y)
                }
        }

        def blockedPathY: Array[Int] => Boolean = {
            case queen @ Array(xq, yq) =>
                val xs = xq.min(xk) + 1 until xq.max(xk)
                queens.exists {
                    case Array(x, y) => xs.contains(x) && y == yq
                }
        }

        def blockedPathDiag: Array[Int] => Boolean = {
            case queen @ Array(xq, yq) =>
                val dx = (xk - xq).sign
                val dy = (yk - yq).sign
                val xs = xq until xk by dx
                val ys = yq until yk by dy
                val xys = (xs.zip(ys).toSet).diff(Set((xq, yq)))
                queens.exists {
                    case Array(x, y) => xys.contains(x -> y)
                }
        }

        queens
            .filter(canAttack)        
            .map(_.toList)
            .toList
    }
}
```