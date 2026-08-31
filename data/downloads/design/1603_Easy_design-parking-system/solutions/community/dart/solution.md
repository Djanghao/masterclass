# Dart easy parking!🎉

**Author:** vpmaharani09
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/3323474/](https://leetcode.com/problems/design-parking-system/solutions/3323474/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ParkingSystem {
    int bigCar = 0;
    int mediumCar = 0; 
    int smallCar = 0;

  ParkingSystem(int big, int medium, int small) {
      this.bigCar = big;
      this.mediumCar = medium;
      this.smallCar = small;
  }
  
  bool addCar(int carType) {
      bool res = false;
      if(carType == 1 && this.bigCar != 0){
          this.bigCar--;
          res = true;
      }else if(carType == 2 && this.mediumCar != 0){
          this.mediumCar--;
          res = true;
      }else if(carType == 3 && this.smallCar != 0){
          this.smallCar--;
          res = true;
      }
      return res;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = ParkingSystem(big, medium, small);
 * bool param1 = obj.addCar(carType);
 */
```