# Simple solution using Switch

**Author:** Delta7Actual
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/4205045/](https://leetcode.com/problems/design-parking-system/solutions/4205045/)

---


# Approach

---

Initialize all `parking spaces`.
Check if it there is room in the corresponding parking space.
If there is, we decrement it by `1` to indicate one less parking spot is available and return `true` otherwise we return `false`

---

# AWESOME IMAGE!

---

![Screenshot 2023-10-02 131803.png](./images/0.png)

# Code
```C# []
public class ParkingSystem {
    int bigSpace;
    int midSpace;
    int smallSpace;

    public ParkingSystem(int big, int medium, int small) {
        this.bigSpace = big;
        this.midSpace = medium;
        this.smallSpace = small;
    }

    public bool AddCar(int carType) {
        switch (carType) {
            case 3:
                if (this.smallSpace != 0) {
                    this.smallSpace--;
                    return true;
                } else {
                    return false;
                }
            case 2:
                if (this.midSpace != 0) {
                    this.midSpace--;
                    return true;
                } else {
                    return false;
                }
            case 1:
                if (this.bigSpace != 0) {
                    this.bigSpace--;
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }
}
```
```C++ []
#include <iostream>

class ParkingSystem {
private:
    int bigSpace;
    int midSpace;
    int smallSpace;

public:
    ParkingSystem(int big, int medium, int small) {
        bigSpace = big;
        midSpace = medium;
        smallSpace = small;
    }

    bool addCar(int carType) {
        switch (carType) {
            case 3:
                if (smallSpace > 0) {
                    smallSpace--;
                    return true;
                } else {
                    return false;
                }
            case 2:
                if (midSpace > 0) {
                    midSpace--;
                    return true;
                } else {
                    return false;
                }
            case 1:
                if (bigSpace > 0) {
                    bigSpace--;
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }
};
```
```Python []
class ParkingSystem:
    def __init__(self, big, medium, small):
        self.bigSpace = big
        self.midSpace = medium
        self.smallSpace = small

    def addCar(self, carType):
        if carType == 3:
            if self.smallSpace > 0:
                self.smallSpace -= 1
                return True
            else:
                return False
        elif carType == 2:
            if self.midSpace > 0:
                self.midSpace -= 1
                return True
            else:
                return False
        elif carType == 1:
            if self.bigSpace > 0:
                self.bigSpace -= 1
                return True
            else:
                return False
        else:
            return False
```
