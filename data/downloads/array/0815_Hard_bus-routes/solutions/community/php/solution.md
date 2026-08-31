# Bus routes

**Author:** jonathanwambua
**Votes:** 0
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4282765/](https://leetcode.com/problems/bus-routes/solutions/4282765/)

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

    /**
     * @param Integer[][] $routes
     * @param Integer $source
     * @param Integer $target
     * @return Integer
     */
    function numBusesToDestination($routes, $source, $target) {
        if($source == $target) return 0;

        $bus_stops = [];
        $countRoutes = count($routes);

        for($i = 0; $i < $countRoutes; $i++) {
            $countStops = count($routes[$i]);
            for($j = 0; $j < $countStops; $j++) {
                $bus_stops[$routes[$i][$j]][] = $i;
            }
        }

        $to_visit = new SplQueue(); //queue
        $buses = [];

        foreach($bus_stops[$source] as $bus) {
            foreach($routes[$bus] as $route) {
                $to_visit->enqueue([$route, 1]);
            }
            $buses[$bus] = true;
        }

        while(!$to_visit->isEmpty()) {
            $tmp = $to_visit->dequeue();
            $route = $tmp[0];
            $amount = $tmp[1];

            if($route == $target) return $amount;

            foreach($bus_stops[$route] as $bus) {
                if(!isset($buses[$bus])){
                    $buses[$bus] = true;
                    foreach($routes[$bus] as $x) {
                        $to_visit->enqueue([$x, $amount + 1]);
                    }
                }
            }
        }

        return -1;
    }
}
```