# Scala using merge sort technique

**Author:** Geef99j8Vi
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5474419/](https://leetcode.com/problems/robot-collisions/solutions/5474419/)

---

# Approach
Use merge sort technique to merge collision of robots


# Code
```
object Solution {
  case class Info(var index: Int, var health: Int, var direction: Char)

  def isDead(i: Info): Boolean = {
    i.index == -1
  }

  def merge(input: Array[Info], start: Int, mid: Int, right: Int): Unit = {
    var l: Int = mid
    var r: Int = mid + 1

    def collide(i1: Info, i2: Info): Unit = {
      if (i1.health < i2.health) {
        i1.index = -1
        l -= 1
        i2.health -= 1
        if (i2.health <= 0) {
          i2.index = -1
          r += 1
        }
      } else if (i1.health > i2.health) {
        i2.index = -1
        r += 1
        i1.health -= 1
        if (i1.health <= 0) {
          i1.index = -1
          l -= 1
        }
      } else {
        i1.index = -1
        i2.index = -1
        r += 1
        l -= 1
      }
    }

    while (l >= start && isDead(input(l))) {
      l -= 1
    }
    while (r <= right && isDead(input(r))) {
      r += 1
    }
    while ((l >= start && r <= right) && (input(l).direction == 'R' && input(r).direction == 'L')) {
      collide(input(l), input(r))
        while (l >= start && isDead(input(l))) {
            l -= 1
        }
        while (r <= right && isDead(input(r))) {
            r += 1
        }
    }
  }

  def collapse(input: Array[Info], start: Int, end: Int): Unit = {
    if (start < end) {
      val m = start + (end - start) / 2
      collapse(input, start, m)
      collapse(input, m + 1, end)
      merge(input, start, m, end)
    }
  }

  def survivedRobotsHealths(positions: Array[Int], healths: Array[Int], directions: String): List[Int] = {
    val relative = positions.zipWithIndex.sortBy(_._1).map {
      case (_, robotIndex) =>
        Info(robotIndex, healths(robotIndex), directions(robotIndex))
    }

    println(s"${relative.toList}")

    collapse(relative, 0, positions.length - 1)
    println(s"${relative.toList}")
    relative.filter(_.index != -1)
        .map(i => (i.health, i.index))
        .sortBy(_._2)
        .toList
        .map(_._1)    
  }
}

```