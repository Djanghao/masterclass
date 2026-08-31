# Python 3 | Lock | Explanation

**Author:** idontknoooo
**Votes:** 9
**Link:** [https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/2930765/](https://leetcode.com/problems/traffic-light-controlled-intersection/solutions/2930765/)

---

# Intuition
Simply make sure operation in each thread is atomic and won't be bothered by other threads. `Lock()` can also be replaced by `Semaphore(1)`.

# Code
```python
from threading import Lock

class TrafficLight:
    def __init__(self):
        self.lock = Lock()
        self.green = 1

    def carArrived(
        self,
        carId: int,                      # ID of the car
        roadId: int,                     # ID of the road the car travels on. Can be 1 (road A) or 2 (road B)
        direction: int,                  # Direction of the car
        turnGreen: 'Callable[[], None]', # Use turnGreen() to turn light to green on current road
        crossCar: 'Callable[[], None]'   # Use crossCar() to make car cross the intersection
    ) -> None:

        with self.lock:
            if self.green != roadId:
                self.green = roadId
                turnGreen()
            crossCar()    
```