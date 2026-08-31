# Scala faster than 100%

**Author:** giulio-dambrosio
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/2098824/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/2098824/)

---

```
object Solution {
    import collection.mutable
    val directions: Array[(Int, Int)] =
        Array(
            0 -> 1,
            1 -> 0,
            0 -> -1,
            -1 -> 0,
        )
    def isRobotBounded(instructions: String): Boolean = {
        val (p1, d1) = playInstructions(instructions)
        p1 == (0, 0) || (d1 != 0)
    }
    
    def playInstructions(instructions: String, p: (Int, Int) = (0, 0), d: Int = 0): ((Int, Int), Int) = {
        var directionIndex = d
        var position = p
        instructions.chars.forEach { c =>
            var direction = directions(directionIndex)
            c.toChar match {
                case 'G' =>
                    position = (position._1 + direction._1) -> (position._2 + direction._2)
                case 'L' =>
                    directionIndex = (directionIndex + 3) % 4
                case 'R' =>
                    directionIndex = (directionIndex + 1) % 4
            }
        }
        position -> directionIndex
    }
}
```