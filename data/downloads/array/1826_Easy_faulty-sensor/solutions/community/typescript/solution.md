# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/5695399/](https://leetcode.com/problems/faulty-sensor/solutions/5695399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int badSensor(int[] sensor1, int[] sensor2) {
    int i = 0, sz = sensor1.length;
    while (i < sz && sensor1[i] == sensor2[i]) {
        ++i;
    }
    while (i + 1 < sz && sensor1[i] == sensor2[i + 1] && sensor1[i + 1] == sensor2[i]) {
        ++i;
    }
    return i >= sz - 1 ? -1 : sensor1[i] == sensor2[i + 1] ? 1 : 2;
}
```
```javascript []
var badSensor = function(sensor1, sensor2) {
    let i = 0, sz = sensor1.length;
    while (i < sz && sensor1[i] === sensor2[i]) {
        ++i;
    }
    while (i + 1 < sz && sensor1[i] === sensor2[i + 1] && sensor1[i + 1] === sensor2[i]) {
        ++i;
    }
    return i >= sz - 1 ? -1 : sensor1[i] === sensor2[i + 1] ? 1 : 2;
};
```
```typescript []
function badSensor(sensor1: number[], sensor2: number[]): number {
    let i = 0;
    const sz = sensor1.length;
    
    // Find the first index where sensor1 and sensor2 differ
    while (i < sz && sensor1[i] === sensor2[i]) {
        ++i;
    }
    
    // Check if removing one element from sensor1 or sensor2 will make them equal
    while (i + 1 < sz && sensor1[i] === sensor2[i + 1] && sensor1[i + 1] === sensor2[i]) {
        ++i;
    }
    
    // Return 1 if sensor1 has a defect, 2 if sensor2 has a defect, -1 if neither
    return i >= sz - 1 ? -1 : sensor1[i] === sensor2[i + 1] ? 1 : 2;
};
```