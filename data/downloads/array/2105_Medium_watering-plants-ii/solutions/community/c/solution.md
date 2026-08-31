# C++ solutions

**Author:** Infox_92
**Votes:** 8
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/2832322/](https://leetcode.com/problems/watering-plants-ii/solutions/2832322/)

---

```
class Solution {
public:
    int minimumRefill(vector<int>& plants, int capacityA, int capacityB) {
        int N = plants.size(), i = 0, j = N - 1;
        
        if (N == 1) return 0;
        
        int totalFills = 0; 
        int aliceCan = capacityA, bobCan = capacityB; 
        
        // Iterate over all plants left and right one similutaneously.
        while (i <= j) {
            
            // We have reached middle plant.
            if (i == j) { 
                // The one with more water in can will water the plant.
                if (aliceCan >= bobCan) {
                    if (aliceCan < plants[i]) {
                        // Alice need to refill the can.
                        ++totalFills;
                    }
                    ++i;
                }
                else {
                    if (bobCan < plants[j]) {
                        // Bob need to refill the can.
                        ++totalFills;
                    }
                    --j;
                }
            } 
            
            else {
                // If Alice doesn't have sufficient water, she refills.
                if (aliceCan < plants[i]) {
                    aliceCan = capacityA;
                    ++totalFills;
                }
                
                // Alice waters.
                aliceCan -= plants[i];
                ++i;
                
                // If Bob doesn't have sufficient water, he refills.
                if (bobCan < plants[j]) {
                    bobCan = capacityB; 
                    ++totalFills;
                }
                
                // Bob waters.
                bobCan -= plants[j];
                --j;
            }
        }
        return totalFills;
    }
};
```