# Kotlin: O(1) time and O(1) space

**Author:** kotlinvim
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/953668/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/953668/)

---


    fun angleClock(hour: Int, minutes: Int): Double {
        val anglePerMin = 360 / 60
        val anglePerHour = 360 / 12

        val minAngle = minutes.toDouble() * anglePerMin
        val hourAngle = (hour % 12 + minAngle.toDouble() / 360) * anglePerHour
        
        val res = Math.abs(hourAngle - minAngle)
        return if (res < 180) res else 360 - res
    }
