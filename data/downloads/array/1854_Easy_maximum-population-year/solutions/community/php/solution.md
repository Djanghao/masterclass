# Easy to Understand PHP approach.

**Author:** tripatheesaman1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/4779568/](https://leetcode.com/problems/maximum-population-year/solutions/4779568/)

---

# Intuition
Loop through each log keep track of the deaths and births for each year,sort it and just find the point where the population becomes maximum by iterating and counting.

# Approach
First find the number of deaths and births for each of the given year.
So if its [1993,2000] for 1993 birth will be 1 and for 2000 death will be -1. Store this in an array with key as the year and no of birth/death as value. If the year appears twice, increment the previous value for birth and decrement for death. Sort the array according to the key. This way the years are in order. Now just simply loop through the array and find the maximum population and store the year in a variable and reuturn the year.


# Code
```
class Solution {

    /**
     * @param Integer[][] $logs
     * @return Integer
     */
    function maximumPopulation($logs) {
      $result = [];
      foreach($logs as $log){
          $birthYear = $log[0];
          $deathYear = $log[1];
          $result[$birthYear] = isset($result[$birthYear]) ? $result[$birthYear] + 1: 1;
          $result[$deathYear] = isset($result[$deathYear]) ? $result[$deathYear] - 1: -1;
      }
      ksort($result);
      $currentPopulation = 0;
      $maxPopulation = 0;
      $maxYear = 0;
      foreach($result as $k=>$v){
          $currentPopulation +=$v;
          if($currentPopulation > $maxPopulation){
              $maxPopulation = $currentPopulation;
              $maxYear = $k;
          }
        
      }
        return $maxYear;
    }
}
```