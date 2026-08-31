# [Go] Single Pass

**Author:** Samuel3Shin
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/3811327/](https://leetcode.com/problems/faulty-sensor/solutions/3811327/)

---

# Code
```
import "fmt"

func badSensor(sensor1 []int, sensor2 []int) int {
    N := len(sensor1)
    i := 0
    j := 0            
    for idx:=0; idx<N; idx++ {
        if sensor1[i]==sensor2[idx] {
            i++
        }
        if sensor2[j]==sensor1[idx] {
            j++
        }
    }
    if i==N-1 && j==N-1 {
        return -1
    } else if i==N-1 {
        return 1
    } else if j==N-1 {
        return 2
    }
    return -1
}
```