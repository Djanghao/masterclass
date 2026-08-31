# Scala with mutable map

**Author:** murnax
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/1086334/](https://leetcode.com/problems/design-parking-system/solutions/1086334/)

---

```
class ParkingSystem(_big: Int, _medium: Int, _small: Int) {
  var c = scala.collection.mutable.Map(1 -> _big, 2 -> _medium, 3 -> _small)
    
  def addCar(carType: Int): Boolean = c(carType) match {
    case 0 => false
    case _ => {
      c.put(carType, c(carType) - 1)
      true
    }
  }
}
```