# Dart Solution

**Author:** athulkichu02
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/5406689/](https://leetcode.com/problems/total-distance-traveled/solutions/5406689/)

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
class Solution {
  int distanceTraveled(int mainTank, int additionalTank) {
    int totalDistance=0;
    while(mainTank!=0){
        if(mainTank<5){
          totalDistance=totalDistance+ ( mainTank*10);
          mainTank =0;
        }else{
            totalDistance = totalDistance + 50;
            mainTank = mainTank-5;
            if(additionalTank !=0){
                mainTank = mainTank +1;
                additionalTank = additionalTank -1;
            }
        }
        
    }
    return totalDistance;
  }
}
```