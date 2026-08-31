# Python two pointer solution with comments

**Author:** mxmb
**Votes:** 10
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/1338345/](https://leetcode.com/problems/faulty-sensor/solutions/1338345/)

---

```python
def badSensor(self, sensor1: List[int], sensor2: List[int]) -> int:
        n = len(sensor1)
        for i in range(n):
            if sensor1[i] != sensor2[i]: # find point at which the sensors differ
                break
        j = k = i # init two pointers
        while j < n-1 and sensor1[j] == sensor2[j+1]: # find to what point sensor1 data is shifted
            j += 1
        while k < n-1 and sensor1[k+1] == sensor2[k]: # find to what point sensor2 data is shifted
            k += 1
        # a sensor is faulty if the ptr reaches end of arr
        # if both reach end of arr, it's impossible to tell
        return -1 if k == n-1 and j == n-1 else 1 if j == n-1 else 2
```