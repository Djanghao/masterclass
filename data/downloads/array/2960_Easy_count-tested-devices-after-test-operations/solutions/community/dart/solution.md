# dart solution

**Author:** 4khil_Raj
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4770327/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4770327/)

---

# Complexity
- Time complexity:
O(n)^2

- Space complexity:
O(1)

# Code
```
class Solution {
  int countTestedDevices(List<int> batteryPercentages) {
    int count=0;
    for(int i=0;i<batteryPercentages.length;i++){
        if(batteryPercentages[i]>0){
            count++;
            for(int j=i+1;j<batteryPercentages.length;j++){
               batteryPercentages[j] = batteryPercentages[0]<0?0:batteryPercentages[j]-1;
            }
            }
        
    }
    return count;
  }
}
```