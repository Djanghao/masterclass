# Java Binary Search

**Author:** nadirvardar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/4508709/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/4508709/)

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
    /*
        1. Optimize(minimize) the maximum distance between adjacent gas stations
        2. What range of values we are trying to optimize ?
            //           1 3 4 8
            // distances  2 1 4                        max distance between adjacent gas stations in the input(4)  
            [0                                         4]        
        This is bisection search(not looking for specific answer, 
            we are looking for a close value withint the range(1e-6)).
     */
    public double minmaxGasDist(int[] stations, int k) {
        // we cannot use the smalles distance, since k can be so high and the solution can be less than 1.
        double left = 0; 
        double right = 0; // upper bound
        for (int i = 0; i < stations.length - 1; i++) // last item is not considered, becasue of overflow
            right = Math.max(right, stations[i + 1] - stations[i]);       

        while (left <= right - 0.000001) { 
            double mid = left + (right - left) / 2d;

            // ** given the value mid, figure out how many gas stations are needed to achieve it. 
            // statitions: 1 3 4 8 10 
            //              2 1 4 2        -> desired, mid = 1.5
            //              1 0 2 1           statitions to reach desired
            // sum is 4, check with k
            int addedGasStations = 0;
            for (int i = 0; i < stations.length - 1; ++i)
                addedGasStations += (int) ((stations[i + 1] - stations[i]) / mid);
            
            // we add more gastatitons to move to left
            // [     >K              |          <K            ]
            if (addedGasStations > k)
                // I am in the left zone, since this is double, we cannot do `+1`
                left = mid;
            else
                // I am in the right zone
                right = mid;
        }
        return left; // right also can be returned, they are so close.
    }
}
```