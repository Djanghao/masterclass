# JavaScript: super simple

**Author:** rayanka
**Votes:** 51
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/877229/](https://leetcode.com/problems/design-parking-system/solutions/877229/)

---

```
var ParkingSystem = function(big, medium, small) {
    this.count = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  return this.count[carType - 1]-- > 0;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
 ```