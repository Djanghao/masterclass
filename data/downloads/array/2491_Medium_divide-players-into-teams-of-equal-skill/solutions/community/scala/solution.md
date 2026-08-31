# Scala, Beats 100% time and space

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5869974/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5869974/)

---

# Intuition
All teams are of two, and must have the same skill.  So we can accumulate through team-mate pairs to compute total chemistry

# Approach
Sort the skill array and traverse inward from front and back concurrently, multiplying chemistry.  Break out and return -1 if any teammate pair does not match the expected skill level.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```scala []
object Solution {

  import scala.util.boundary
  import scala.util.boundary.break

  final val FAIL : Long = -1
  
  def dividePlayers(skill: Array[Int]): Long = {
//        assume(skill.length > 0)
//        assume(skill.length % 2 == 0)
        val sortedSkill: Array[Long] = skill.map(_.longValue).sorted
        val teamTotalSkill: Long = sortedSkill.head + sortedSkill.last
        var leftIndex : Int = 0
        var rightIndex : Int = sortedSkill.length-1
        var totalChemistry: Long = 0
        boundary:
            while( leftIndex < rightIndex ) {
//                assume(sortedSkill(leftIndex) > 0)
//                assume(sortedSkill(rightIndex) > 0)
                if( sortedSkill(leftIndex) + sortedSkill(rightIndex) == teamTotalSkill ) {
                    totalChemistry = totalChemistry + (sortedSkill(leftIndex) * sortedSkill(rightIndex))
                    leftIndex += 1
                    rightIndex -= 1
                } else {
                    totalChemistry = FAIL;
                    break()
                }
        }
        totalChemistry
    }

//    assert(dividePlayers(Array(3,4)) == 12)
//    assert(dividePlayers(Array(3,2,5,1,3,4)) == 22)
//    assert(dividePlayers(Array(1,1,2,3)) == -1)

}
```