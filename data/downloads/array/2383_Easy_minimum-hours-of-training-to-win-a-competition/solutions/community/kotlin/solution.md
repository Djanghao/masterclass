# [Kotlin/Python] Lazy Training

**Author:** Pony1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2484839/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2484839/)

---

Kotlin
```
class Solution {
    fun minNumberOfHours(initialEnergy: Int, initialExperience: Int, energy: IntArray, experience: IntArray): Int {
        var training = 0
        var curEn = initialEnergy
        var curEx = initialExperience
        for ((en, ex) in (energy zip experience)) {
            if (curEn <= en) {
                training += en - curEn + 1
                curEn = en + 1
            }
            if (curEx <= ex) {
                training += ex - curEx + 1
                curEx = ex + 1
            }
            curEn -= en
            curEx += ex
        }
        return training
    }
}
```

Python
```
class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        training = 0
        curEn = initialEnergy
        curEx = initialExperience
        for en, ex in zip(energy, experience):
            if curEn <= en:
                training += en - curEn + 1
                curEn = en + 1
            
            if curEx <= ex:
                training += ex - curEx + 1
                curEx = ex + 1
            
            curEn -= en
            curEx += ex
        return training
```