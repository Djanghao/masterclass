# [Simulation Tutorial] Design Parking System

**Author:** never_get_piped
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/5482882/](https://leetcode.com/problems/design-parking-system/solutions/5482882/)

---

**Topic** :  Simulation
___

## Solution
Create an array of size 4 to represent the available space for each type of car. In the `addCar` function, verify if there is sufficient space for the specified car type. If space is available, decrement the count by 1 and return true; otherwise, return false.


<br/><br/>

```c++ []
class ParkingSystem {
public:
    vector<int> space;
    ParkingSystem(int big, int medium, int small) {
        space = {0, big, medium, small};
    }
    
    bool addCar(int carType) {
        return space[carType]-- > 0;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 */
```
```Java []
class ParkingSystem {
    int[] space;
    public ParkingSystem(int big, int medium, int small) {
        space = new int[]{0, big, medium, small};
    }
    
    public boolean addCar(int carType) {
        return space[carType]-- > 0;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * boolean param_1 = obj.addCar(carType);
 */
```
```Python []
class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.space = [0, big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.space[carType] > 0:
            self.space[carType] -= 1
            return True
        else:
            return False


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)
```
```Go []
type ParkingSystem struct {
    space []int
}


func Constructor(big int, medium int, small int) ParkingSystem {
     return ParkingSystem{[]int{0, big, medium, small}}
}


func (this *ParkingSystem) AddCar(carType int) bool {
    if this.space[carType] > 0 {
        this.space[carType]--
        return true
    } else {
        return false
    }
}


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * obj := Constructor(big, medium, small);
 * param_1 := obj.AddCar(carType);
 */
```
```PHP []
class ParkingSystem {
    /**
     * @param Integer $big
     * @param Integer $medium
     * @param Integer $small
     */
    private $space;
    function __construct($big, $medium, $small) {
        $this->space = array(0, $big, $medium, $small);
    }
  
    /**
     * @param Integer $carType
     * @return Boolean
     */
    function addCar($carType) {
        if ($this->space[$carType] > 0) {
            $this->space[$carType]--;
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * $obj = ParkingSystem($big, $medium, $small);
 * $ret_1 = $obj->addCar($carType);
 */
```
```Javascript []
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.space = [0, big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (this.space[carType] > 0) {
        this.space[carType]--;
        return true;
    } else {
        return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
```


**Complexity**:
* Time Complexity : `O(1)` per call.
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**