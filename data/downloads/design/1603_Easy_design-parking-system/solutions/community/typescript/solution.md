# Easy Solution + Approach Explanation in JavaScript!

**Author:** AleHS01
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/4258973/](https://leetcode.com/problems/design-parking-system/solutions/4258973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a switch stamente to determine carType and have 3 different values for each carType, but with a Map we can store both carType and slots associated with a carType and get Access to it in constant time, and easy update of the remaining slots
# Approach
<!-- Describe your approach to solving the problem. -->
- We can have a map where the key will be the carType in this case 1 representing big, 2 representing medium, and 3 representing small. In this map we would like to remember the amount of slots for each car (amount of slot are given)
- Then when a car arrive, we just check if we have slot available, if we do, let's decrement the amount of slot for that specific carType, and return true, because the car that came got a space
- else, return false, cause we dont have more space available for that carType
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.slots = {
        1: big,
        2: medium,
        3: small,
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.slots[carType] > 0){
        this.slots[carType]--;
        return true;
    }
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
```