# scala solutions with foldLeft and with recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/5534844/](https://leetcode.com/problems/watering-plants/solutions/5534844/)

---

```scala
object Solution {
  def wateringPlants(plants: Array[Int], capacity: Int): Int =
    plants.iterator.zipWithIndex.foldLeft((0,capacity)){case ((acc,rem),(p,i)) =>
      if(plants(i) <= rem) (acc+1, rem-p)
      else (acc+i*2+1, capacity-p) 
    }._1

  def wateringPlants1(plants: Array[Int], capacity: Int): Int =
    def f(i: Int= 0, rem: Int = capacity, acc: Int = 0): Int = {
      if(i == plants.length) acc
      else if(plants(i) <= rem) f(i+1, rem - plants(i), acc+1)
      else f(i+1, capacity - plants(i), acc+i*2+1)
    }
    f()

  def wateringPlants0(plants: Array[Int], capacity: Int): Int =
    def f(pos: Int= -1, rem: Int = capacity, acc: Int = 0): Int = {
      if(pos == plants.length-1) acc
      else if(plants(pos+1) <= rem) f(pos+1, rem - plants(pos+1), acc+1)
      else f(pos+1, capacity - plants(pos+1), acc+(pos+1)*2+1)
    }
    f()
}
```