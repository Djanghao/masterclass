# two pointers scala

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/5260747/](https://leetcode.com/problems/faulty-sensor/solutions/5260747/)

---

# Intuition
When given two sets of sensor readings that should be identical, we need to determine if one of the sensors has a defect. If a sensor is defective, it drops exactly one data point, causing all subsequent data points to shift one position to the left, with the last position filled with a random value. The task is to identify which sensor has this defect by comparing the two sensor readings to find discrepancies and analyzing the shift patterns.

# Approach
1. Identify the First Divergence Point: Iterate through both sensor arrays to find the first index where the readings differ.
2. Initialize Pointers: Use two pointers starting from the divergence point.
3. Check Shifted Data Patterns:
    - For sensor1, check if its current reading matches the next reading in sensor2.
    - For sensor2, check if its next reading matches the current reading in sensor1.
    - Continue advancing the pointers while the conditions hold.
4. Determine the Faulty Sensor:
    - If both pointers reach the end, it\u2019s impossible to determine the faulty sensor, so return -1.
    - If the pointer for sensor1 reaches the end, sensor1 is defective.
    - If the pointer for sensor2 reaches the end, sensor2 is defective.

# Complexity
- Time complexity:
$$O(n)$$, because we are iterating through the arrays a constant number of times.

- Space complexity:
$$O(1)$$, as we are only using a fixed amount of extra space (a few integer variables for indexing and pointers).

# Code
```
object Solution {
    def badSensor(sensor1: Array[Int], sensor2: Array[Int]): Int = {
        val n = sensor1.length
        
        // Find the first point where the sensors differ
        var i = 0
        while (i < n && sensor1(i) == sensor2(i)) {
            i += 1
        }
        
        // If no difference is found, return -1
        if (i == n) return -1
        
        // Initialize two pointers
        var j = i
        var k = i
        
        // Check for shifted data in sensor1
        while (j < n - 1 && sensor1(j) == sensor2(j + 1)) {
            j += 1
        }
        
        // Check for shifted data in sensor2
        while (k < n - 1 && sensor1(k + 1) == sensor2(k)) {
            k += 1
        }
        
        // Determine which sensor is faulty
        if (j == n - 1 && k == n - 1) -1
        else if (j == n - 1) 1
        else if (k == n - 1) 2
        else -1
    }
}

```