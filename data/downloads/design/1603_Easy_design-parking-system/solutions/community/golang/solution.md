# [Go] Using Map

**Author:** akash__gupta
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/1301219/](https://leetcode.com/problems/design-parking-system/solutions/1301219/)

---

```
type ParkingSystem struct {
    CarType map[int]int
}


func Constructor(big int, medium int, small int) ParkingSystem {
    return ParkingSystem{
        CarType: map[int]int{1: big, 2: medium, 3: small},
    }
}


func (this *ParkingSystem) AddCar(carType int) bool {
    if this.CarType[carType] > 0{
        this.CarType[carType]-=1
        return true
    }
    
    return false
}