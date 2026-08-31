# JavaScript Binary Search solution with comments.

**Author:** lostpanda
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/1329763/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/1329763/)

---

```
var minmaxGasDist = function(stations, k) {
    /*We have to minimize the maximum distance 
    between adjacent gas stations. Minimum distance between 2 stations 
    cannot be 0 it should be the maximum of all the distances 
    between adjacent gas stations divided by k but for simplicity let's set it to 0.*/
    let startD = 0;
    /*maximum distance will be the maximum of all the distances between 
    adjacent stations*/
    let endD = 0;
    for(let i = 0; i < stations.length - 1; i++){
        /*Formula explanation given at the end*/
        endD = Math.max(endD, stations[i + 1] - stations[i]);
    }
    /*This is bisection search so tolerance level is given*/
    let tolerance = 0.000001;
    while(startD <= endD - tolerance){
        let midD = startD + (endD - startD)/2.0;
        /*If minD is the minimum distance that we are trying to achieve then
        then how many stations are required?*/
        let numOfStations = 0;
        for(let i = 0; i < stations.length - 1; i++){
            numOfStations += Math.ceil((stations[i + 1] - stations[i])/midD) - 1;
        }
        if(numOfStations > k){
            startD = midD;
        }else{
            endD = midD;
        }
    }
    return startD;
    
    /*Example to understand the formula for number of gas stations needed
    -- Suppose the input is
    stations = [1, 3, 4, 9, 10]  k = 2;
    distance between 1 - 3 = 2
    distance between 3 - 4 = 1
    distance between 4 - 9 = 5
    distance between 9 - 10 = 1
    startD = 0, endD = 5 (Maximum of (2, 1, 5, 2))
    After 1st iteration of while loop midD = 2.5
    
    How many stations are required to bring down the max. distance to 2.5?
    numOfStations = 0
    distance between 1 - 3 = 2 | max required dist = 2.5 (2 < 2.5) Conceptually 0. 
    Using formula(Math.ceil(2/2.5) - 1) = 0.
    numOfStations = numOfStations + 0 -> 0
    
    distance between 3 - 4 = 1 | max required dist = 2.5 (1 < 2.5) Conceptually 0. 
    Using formula(Math.ceil(1/2.5) - 1) = 0.
    numOfStations = numOfStations + 0 -> 0
    
    distance between 4 - 9 = 5 | max required dist = 2.5 (5 > 2.5) Conceptually 1. 
    Using formula(Math.ceil(5/2.5) - 1) = 1.
    numOfStations = numOfStations + 1 -> 1
    
    distance between 9 - 10 = 1 | max required dist = 2.5 (1 < 2.5) Conceptually 0. 
    Using formula(Math.ceil(1/2.5) - 1) = 0.
    numOfStations = numOfStations + 0 -> 1
    
    Rest is the binary search
    */
};
```