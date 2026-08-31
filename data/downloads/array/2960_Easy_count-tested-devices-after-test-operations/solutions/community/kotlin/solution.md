# Kotlin using some for loops

**Author:** CommanderPepper
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5094160/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5094160/)

---

# Code
```
class Solution {
    fun countTestedDevices(batteryPercentages: IntArray): Int {
        val batteries = batteryPercentages.toMutableList()
        var devicesTested = 0

        for(i in 0 until batteries.size){
            val battery = batteries[i]
            if(battery > 0){
                devicesTested++
                for(j in i + 1 until batteries.size){
                    val jBattery = batteries[j]
                    if(jBattery > 0){
                        batteries[j] = batteries[j] - 1
                    }
                }
            }
        }

        return devicesTested
    }
}
```