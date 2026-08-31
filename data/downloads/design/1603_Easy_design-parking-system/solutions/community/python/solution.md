# Python fast and efficient (97%)

**Author:** alexanco
**Votes:** 24
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/1128843/](https://leetcode.com/problems/design-parking-system/solutions/1128843/)

---

Declare `__slots__` at the class level to save a little memory.  Use a dictionary to store the count of available spots (cars never seem to leave this garage...).

When adding a car for a given type, first check the number of available spots via `available_spots = self._parking[carType]`.  If it is a truthy (e.g. > 0), then reduce availability by one and return True.  Otherwise the function just returns `None`, a falsy.

```
class ParkingSystem:
    __slots__ = ['_parking']
	
    def __init__(self, big: int, medium: int, small: int):
        self._parking = {
            1: big, 
            2: medium, 
            3: small
        }

    def addCar(self, carType: int) -> bool:
        available_spots = self._parking[carType]
        if available_spots:
            self._parking[carType] = available_spots - 1
            return True
```