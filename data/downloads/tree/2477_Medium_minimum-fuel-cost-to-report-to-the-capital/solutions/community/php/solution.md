# PHP | DFS implementation 143 Mb of memory, beats 100%

**Author:** billy_homeless
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3180089/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3180089/)

---

![image.png](./images/0.png)

# Code
```
class Solution {


    public $fuel = 0;

    /**
     * @param
     */
    function dfs ($i, $elem, &$map, $seats) {
        $reps = 1;

        foreach($map[$elem] as $city) {
            if ($i != $city) {
                $reps += $this->dfs($elem, $city, $map, $seats);
            }
        }

        if ($elem) $this->fuel += ceil($reps / $seats); 

        return $reps;   
    }

    /**
     * @param Integer[][] $roads
     * @param Integer $seats
     * @return Integer
     */
    function minimumFuelCost($roads, $seats) {
        $map = []; 

        foreach ($roads as $road) {
            $map[$road[0]][] = $road[1];
            $map[$road[1]][] = $road[0];
        }

        $this->dfs(-1, 0, $map, $seats);
        return $this->fuel;
    }
}
```