# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/3573371/](https://leetcode.com/problems/design-parking-system/solutions/3573371/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. This is only for first 10,000 Subscribers.  **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe

# Video Solution

# Search \uD83D\uDC49 `Design Parking System By Tech Wired` 

# or

# Click the Link in my Profile

# Approach:
The approach for the "Design Parking System" problem is to maintain a data structure that keeps track of the number of available parking spots for each car type. In this case, we can use a list or an array to store the available spots for big, medium, and small cars.

Initialize the parking system: In the constructor or initialization method, store the number of available spots for each car type in the data structure (list or array).

Add a car: In the addCar method, check if there is an available spot for the specified car type. If the number of available spots for that car type is greater than 0, decrement the count of available spots for that car type and return true to indicate a successful addition. Otherwise, return false to indicate that no parking spot is available for that car type.

# Intuition:
The parking system is designed to keep track of available parking spots for different car types. By maintaining the count of available spots for each car type, we can efficiently check and manage the parking availability for incoming cars.

When initializing the parking system, we store the initial count of available spots for each car type. This allows us to keep track of the available spots throughout the parking process.

When adding a car, we check if there is an available spot for the specified car type. If so, we decrement the count of available spots for that car type and indicate a successful addition. Otherwise, we indicate that no parking spot is available for that car type.



```Python []
class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.spots = [big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.spots[carType - 1] > 0:
            self.spots[carType - 1] -= 1
            return True
        else:
            return False

```
```Java []
class ParkingSystem {
    private int[] spots;

    public ParkingSystem(int big, int medium, int small) {
        spots = new int[]{big, medium, small};
    }

    public boolean addCar(int carType) {
        if (spots[carType - 1] > 0) {
            spots[carType - 1]--;
            return true;
        } else {
            return false;
        }
    }
}

```
```C++ []
class ParkingSystem {
private:
    int spots[3];

public:
    ParkingSystem(int big, int medium, int small) {
        spots[0] = big;
        spots[1] = medium;
        spots[2] = small;
    }

    bool addCar(int carType) {
        if (spots[carType - 1] > 0) {
            spots[carType - 1]--;
            return true;
        } else {
            return false;
        }
    }
};

```
