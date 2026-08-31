# Scala solution

**Author:** KNfZywgEjP
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-watch/solutions/6065853/](https://leetcode.com/problems/binary-watch/solutions/6065853/)

---

# Code
```scala []
object Solution {
    def readBinaryWatch(turnedOn: Int): List[String] = {
    val listOfHoursInt = Range(0, 12).toList
    val listOfMinutesInt = Range(0,60).toList

    def mixHoursAndMinutes(): List[String] = {
      val hoursAndMinutes: Map[Int, List[Int]] = listOfHoursInt.flatMap(h => Map(h -> listOfMinutesInt)).toMap

      hoursAndMinutes.flatMap { case (hour, minutes) =>
        val hourBitCount = Integer.bitCount(hour)
        val bitCount = minutes.map{ m =>
          val minutePlusHourBit = Integer.bitCount(m) + hourBitCount
          if(minutePlusHourBit == turnedOn) {
            val result = if(m >= 10) s"$hour:$m" else s"$hour:0$m"
            (true, Some(result))
          } else (false, None)
        }

        bitCount.filter(_._1 == true).flatMap(_._2)
      }.toList
    }

    if (turnedOn < 0 || turnedOn > 10) List.empty else if(turnedOn == 0) List("0:00") else mixHoursAndMinutes()
  }
}
```