# [scala] - two mutable Map

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3497100/](https://leetcode.com/problems/frequency-tracker/solutions/3497100/)

---

# Code
```
class FrequencyTracker() {

  val counts = scala.collection.mutable.Map.empty[Int, Int].withDefaultValue(0)

  val frequencies = scala.collection.mutable.Map.empty[Int, Int].withDefaultValue(0)

  def add(number: Int): Unit = {
    val frequency = counts(number)
    frequencies(frequency) -= 1
    frequencies(frequency + 1) += 1
    counts(number) += 1
  }

  def deleteOne(number: Int): Unit = {
    val frequency = counts(number)
    if (frequency > 0) {
      frequencies(frequency) -= 1
      frequencies(frequency - 1) += 1
      counts(number) -= 1
    }
  }

  def hasFrequency(frequency: Int): Boolean =
    frequencies(frequency) > 0
}
/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
```