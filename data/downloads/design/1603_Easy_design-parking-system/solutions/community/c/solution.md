# [C++/ Python] Explained || Easy Understanding ||

**Author:** silencePlease
**Votes:** 44
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/876927/](https://leetcode.com/problems/design-parking-system/solutions/876927/)

---

```
class ParkingSystem {
public: vector<int> vehicle;
public:
    ParkingSystem(int big, int medium, int small) {
        vehicle = {big, medium, small};
    }

    bool addCar(int carType) {
        return vehicle[carType - 1]-- > 0;
    }
```
OR
```
class ParkingSystem {
public: vector<int> vehicle;
public:
    ParkingSystem(int big, int medium, int small) {
        vehicle = {big,medium,small};
    }
    bool addCar(int carType) {
        if(vehicle[carType-1]) {
            vehicle[carType-1]-=1
            return true
		}
		return false
	}
};
```

***For those who didn't understood***

**Explaination:**
		1] In the ***ParkingSystem*** constructor initialize all the elements in the **Vehicle** array / vector
		2] In ***addCar*** constructor check whether it is 1->big, 2-> medium or 3->small
			Then decrement the respective Vehicle array at the respective Index
			i.e, 
				vehicle[0] =>(big)
				vehicle[1] => (medium)
				vehicle[2] => (small)
**C++**
```
class ParkingSystem {
public: vector<int> vehicle;
public:
    ParkingSystem(int big, int medium, int small) {
        vehicle = {big,medium,small};
    }
    
    bool addCar(int carType) {
        if(carType == 1) {
            if(vehicle[0] > 0){
                vehicle[0]--;
                return true;
            }
        }
        else if(carType == 2) {
            if(vehicle[1] > 0){
                vehicle[1]--;
                return true;
            }
        }
        else if(carType == 3) {
            if(vehicle[2] > 0){
                vehicle[2]--;
                return true;
            }
        }
        return false;
    }
};
```
**Python**
```
class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.vehicle  =[big,medium,small]

    def addCar(self, carType: int) -> bool:
        if carType == 1 :
            if self.vehicle[0] > 0:
                self.vehicle[0]-=1
                return True
        elif carType == 2:
            if self.vehicle[1] > 0:
                self.vehicle[1]-=1
                return True
        elif carType == 3:
            if self.vehicle[2] > 0:
                self.vehicle[2]-=1
                return True
        return False
```