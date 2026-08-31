# Kotlin Recursive solution

**Author:** Humblefool97
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/5111735/](https://leetcode.com/problems/next-closest-time/solutions/5111735/)

---


# Code
```
class Solution {
    /**
        Intuition:
        1. Split the time in a char set
        2. Convert the current time in to minutes
        3. set minDiff i.e minimum difference between the current & new time as one day (24*60 = 1440 mins)
        4. initialise result as current time

        5.i Create for nested loops each for h1 h2 m1 m2 (h1h2:m1m2)
          ii. call timeCheck(h1h2, m1m2) with h1h2 forms hour. m1m2 forms minutes
        
        6. timeCheck(hours:String,minutes:String)
            1. Validate if hours & minutes fall within limits
            1. convert new time to minutes
            2.Check the time difference
                1. if new time > currentTime, newTime-current
                2.else, newTime+1440 - current . A day added
                3.If the diff > 0 and < minDiff
                    1.set diff as minDiff. as this seems more closer
                    2.result as new time
    
    
     */
    fun nextClosestTime(time: String): String {
        val timeSet = time.filter{it.isDigit()}.toSet()
        val hours = time.substring(0,2).toInt()
        val minutes = time.substring(3).toInt()
        val currentTime = hours * 60 + minutes
        var minDiff = 24*60
        var result = currentTime

        fun backtrack(time:String,depth:Int){
            if(depth == 4){
                val newHour = time.substring(0,2).toInt()
                val newMinutes = time.substring(2,4).toInt()
                if(newHour < 24 && newMinutes < 60){
                    val newTime = newHour * 60 + newMinutes
                    val diff = if(newTime > currentTime) newTime - currentTime else newTime+1440 - currentTime
                    if(diff > 0 && diff < minDiff){
                        minDiff = diff
                        result = newTime
                    }
                }

                return
            }

              for(digit in timeSet){
                    backtrack(time+digit,depth+1)
                }
        }
        backtrack("",0)
        return String.format("%02d:%02d",result/60,result%60)

    }
}
```