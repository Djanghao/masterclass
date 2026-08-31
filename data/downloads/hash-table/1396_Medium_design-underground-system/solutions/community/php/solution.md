# [PHP] Easy to understand OOP-ish approach | 100% Faster + Smaller

**Author:** samsonong
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1978007/](https://leetcode.com/problems/design-underground-system/solutions/1978007/)

---

# Upvote if I've helped you understand the problem better!
## Comment below if you have questions or improvement suggestions.
```
class UndergroundSystem {
    
    /**
     *  $routeTimingDb is used to store instances of travel from
     *  point A to point B. Data are stored as 3D arrays in the 
     *  following configuration: $routeTimingDb[stationA_stationB][timing]
     *  
     *  Utility functions for $routeTimingDb are at the end of this file.
     *  
     *  $gantryDb is used to store instances ongoing trips of our
     *  customers. Data are stored as 3D arrays in the following
     *  configuration: $gantryDb[cardId][startStation, startTime]
     */
    private $routeTimingDb, $gantryDb;
    
    /**
     */
    function __construct() {
        
    }
  
    /**
     * Store the check-in record.
     * 
     * @param Integer $id
     * @param String $stationName
     * @param Integer $t
     * @return NULL
     */
    function checkIn($id, $stationName, $t) {
        $this->$gantryDb[$id] = ['startStation' => $stationName, 'startTime' => $t];
    }
  
    /**
     * Retrieve the check-in record, create a route timing record,
     * and remove the check-in record.
     * 
     * @param Integer $dista
     * @param String $stationName
     * @param Integer $t
     * @return NULL
     */
    function checkOut($id, $stationName, $t) {
        // Store Route Timing 
        $checkInRecord = $this->$gantryDb[$id];
        $this->storeRouteTiming(
            $checkInRecord['startStation'],
            $checkInRecord['startTime'],
            $stationName,
            $t
        );
        // Clear check-in record
        unset($this->$gantryDb[$id]);
    }
  
    /**
     * @param String $startStation
     * @param String $endStation
     * @return Float
     */
    function getAverageTime($startStation, $endStation) {
        $allRouteTiming = $this->getAllRouteTiming($startStation, $endStation);
        if (count($allRouteTiming) > 0)
            return array_sum($allRouteTiming) / count($allRouteTiming);
        else
            return 0.0;
    }
  
    /**
     * @param String $startStation
     * @param Integer $startTime
     * @param String $endStation
     * @param Integer $endTime
     * @return NULL
     */
    private function storeRouteTiming($startStation, $startTime, $endStation, $endTime) {
        $this->$routeTimingDb[$startStation."_".$endStation][] = $endTime - $startTime;
    }
    
    /**
     * @param String $startStation
     * @param String $endStation
     * @return array
     */
    private function getAllRouteTiming($startStation, $endStation) {
        return $this->$routeTimingDb[$startStation."_".$endStation];
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * $obj = UndergroundSystem();
 * $obj->checkIn($id, $stationName, $t);
 * $obj->checkOut($id, $stationName, $t);
 * $ret_3 = $obj->getAverageTime($startStation, $endStation);
 */
```