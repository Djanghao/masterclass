# [Java/Python 3] Use array to record remaining slots.

**Author:** rock
**Votes:** 19
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/876853/](https://leetcode.com/problems/design-parking-system/solutions/876853/)

---

```java
    private int[] count;
    public ParkingSystem(int big, int medium, int small) {
        count = new int[]{0, big, medium, small};
    }
    
    public boolean addCar(int carType) {
        return count[carType]-- > 0;
    }
```
```python
    def __init__(self, big: int, medium: int, small: int):
        self.count = [0, big, medium, small]
    def addCar(self, carType: int) -> bool:
        self.count[carType] -= 1
        return self.count[carType] >= 0
```