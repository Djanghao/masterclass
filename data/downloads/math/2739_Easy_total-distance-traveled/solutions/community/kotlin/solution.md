# Kotlin solution (Simulation)

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/3798221/](https://leetcode.com/problems/total-distance-traveled/solutions/3798221/)

---

# Code
```
class Solution {
    fun distanceTraveled(mainTank: Int, additionalTank: Int): Int {
        var result = 0
        var remainingMainTank = mainTank
        var remainingAdditionalTank = additionalTank

        while (remainingMainTank - 5 >= 0) {
            remainingMainTank -= 5
            remainingAdditionalTank--

            if (remainingAdditionalTank >= 0)
                remainingMainTank++
                
            result += 50
        }

        return result + remainingMainTank * 10
    }
}
```