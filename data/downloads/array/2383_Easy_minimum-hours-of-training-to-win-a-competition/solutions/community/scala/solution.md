# [ Scala ] using foldLeft

**Author:** shu_sh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/4737527/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/4737527/)

---

# Intuition

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minNumberOfHours(initialEnergy: Int, initialExperience: Int, energy: Array[Int], experience: Array[Int]): Int = {
        val energyTraining = Math.max(0, energy.sum - initialEnergy + 1 )
        val experienceTraining = experience.foldLeft((initialExperience, 0)){
            case ((initExp, diff), currExp) => 
                if(initExp - currExp > 0) (initExp + currExp, diff)
                else {
                    val currDiff = currExp - initExp + 1
                    (initExp + currExp, Math.max(currDiff, diff))
                }
        }._2

    energyTraining + experienceTraining
    }
}
```