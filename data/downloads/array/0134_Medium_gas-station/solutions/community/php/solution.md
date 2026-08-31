# Greedy algorithm approach

**Author:** dimakoua
**Votes:** 1
**Link:** [https://leetcode.com/problems/gas-station/solutions/4240574/](https://leetcode.com/problems/gas-station/solutions/4240574/)

---

# Intuition
The problem at hand involves finding a valid starting point in a circular route for a car to travel, given two arrays representing the gas available at each station and the cost to travel between stations. The intuition here is to use a greedy algorithm approach to determine the starting point. We aim to find a station where the car can make a complete circuit without running out of gas.

# Approach
The approach taken to solve this problem is as follows:

1. Initialize variables total_surplus, start, and surplus to keep track of the total surplus gas, the current starting point, and the current surplus gas.
2. Iterate through the given arrays representing gas and cost for each station.
3. At each station, calculate the surplus gas by subtracting the cost from the available gas.
4. Update the total_surplus and the surplus variables.
5. If the current surplus becomes negative (indicating that it's not possible to reach the next station from the current starting point), reset the surplus to zero and update the start to the next station.
6. Continue this process until you have checked all stations.
7. After the loop, check if the total_surplus is less than zero. If it is, return -1, indicating that it's not possible to complete the circuit. Otherwise, return the start as the valid starting point.

# Complexity
- Time complexity: O(n)
The algorithm processes the gas and cost arrays in a single pass, where n is the number of stations. Therefore, the time complexity is O(n).

- Space complexity: O(1)
The algorithm uses a constant amount of extra space to store variables like total_surplus, start, and surplus. Therefore, the space complexity is O(1).

# Code
```
class Solution {

    /**
     * @param Integer[] $gas
     * @param Integer[] $cost
     * @return Integer
     */
    function canCompleteCircuit($gas, $cost) {
        $len = count($gas);
        $total_surplus = $start = $surplus = 0;

        for($i=0;$i<$len;$i++){
            $total_surplus += $gas[$i] - $cost[$i];
            $surplus += $gas[$i] - $cost[$i];

            if($surplus < 0){
                $surplus = 0;
                $start = $i + 1;
            }
        }
        return $total_surplus < 0 ? -1 : $start;
    }
}
```