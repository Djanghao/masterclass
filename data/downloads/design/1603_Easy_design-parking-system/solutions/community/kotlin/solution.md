# Kotlin Solution

**Author:** 3336360dhdh
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/903871/](https://leetcode.com/problems/design-parking-system/solutions/903871/)

---

```
class ParkingSystem(var big: Int, var medium: Int, var small: Int) {
    fun addCar(carType: Int): Boolean {
        return when (carType) {
            1 -> big-- > 0
            2 -> medium-- > 0
            3 -> small-- > 0
            else -> false
        }
    }
}
```