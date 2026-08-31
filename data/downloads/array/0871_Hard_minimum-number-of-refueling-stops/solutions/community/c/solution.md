# C++ Full Explained, Code with comments Clean code

**Author:** DarshanAgarwal95
**Votes:** 55
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2451314/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2451314/)

---

**Solution 1**
One of the solution use dynamic programming. Let dp[i][j] be a maximum amount of fuel we can have, when we reached station number i and refueled j times before this station (not included). Let us also add two more points to our stops: starting one and ending one. Then, how we can update dp[i][j]: we can

Either refuel on previous station, than we have dp[i-1][j-1] minus distance we covered between i-1 and i stations and plus amount of fuel we get at last station.
Or it can be dp[i-1][j] plus distance we covered between i-1 and i stations.
If we have cand < 0 in our code, than it means we can not reach position i with j refuels, so we leave it equal to minus infinity. Finally, in the end we check last station and find the smallest index where value is not negative and return it.

Complexity
Time complexity is O(n^2), space is O(n^2) as well. Space can be reduced to O(n).

//Approach-1 ( O(n^2) DP)
```
class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        int n = stations.size();
        
        vector<vector<ull>> t(n+1, vector<ull>(n+1, 0));
        //t[i][j] = Maximum distance reached if I stopped at 'j' fuelStops from total of 'i' fuelStops
        //i.e. j <= i
        
        //If j = 0, i.e. I did not use any fuelStops, Then maximum I can reach is 'startFuel' which I had initially
        
        //So, initialize the dp array with this information
        for(int i = 0; i<n+1; i++) {
            t[i][0] = startFuel;
        }
        
        //There is no point of filling 1st row because 
        //t[0][j] means I used j fuelStops from 0 fuelStops which doesn't make any sense for (j>0)
        //That's why I start from i = 1 and obviously j = 1 because for j = 0 we already populated the dp array
        
        for(int i = 1; i < n+1; i++) {
            for(int j = 1; j <= i; j++) { //I can use j=1 to j=i fuel stops and find max distance for t[i][j]
                //case-1 (I don't refuel at current fuelstop)
                //If I didn't refuel at current stop, the max distance I can cover is equal to maximum
                //distance I could cover from previous state
                t[i][j] = t[i-1][j];
                
                //case-2 (I will refuel at current fuelStop)
                //But check if you can even reach this station (stations[i-1][0]) or not from your previous station
                if(t[i-1][j-1] >= stations[i-1][0]) {
                    t[i][j] = max(t[i][j], t[i-1][j-1] + stations[i-1][1]);
                }
                
            }
        }
        
        //After you end up with all stations, check which t[n][j] was best for reaching target
        //Best means, minimum j used by you to reach target
        for(int j = 0; j<n+1; j++) {
            if(t[n][j] >= target)
                return j;
        }
        
        //You could never reach target, so return -1
        return -1;
    }
};
```
**Solution 2:**

There is also O(n log n) complexity solution, using heaps! Let us follow the following strategy: ride until we can, and if we can not, choose the biggest of stations we met previously and refuel at this station. Why it is working? Because in any case we need to spend target amount of fuel, and if we choose station with biggest amount of fuel inside, then we always better if we choose other station. So, the algorithm will work like this:

Add starting and ending position to our stations
Iterate through positions: update fuel: subtract distance we passed
If it happen that we have negative amount of fuel, we need to refuel at some station previously, we choose the biggest one, increase answer
If it happen, that we can not reach zero level, it means we are stuck and we can return -1 immediately.
Push new amount of fuel to our heap for just visited station.
Question
What happens if we have situation like this? -----10-------9--!---, we are at the moment at place ! and we meet two stations previously with fuel 9 recently and with fuel 10 some time ago. Then it seems like it is better to refuel at station with 9. However it is not the case and I spend some time realizing it. If we change from station with 9 to station with 10, when we reach !, we will have more fuel, because we always travel the same distance, but now we have more fuel in our tank.

Complexity
Time complexity is O(n log n), space complexity is O(n).

//Approach-2 : O(nlog(n)) using max-heap
//Similar Problem : Leetcode 1642. Furthest Building You Can Reach
```
class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        int n = stations.size();
        
        priority_queue<int> pq; //max heap
        /*
			if we can't reach target, I will first use the largestfuel Station
			(which can take me farthest) and move ahead and keep doing this.
        */
        int curr = startFuel; //my current position
        int i = 0; //station index
        int result = 0;
        while(curr < target) { //until I reach my target
            while(i < n && curr >= stations[i][0]) {
                /*
					  Sice, I am already ahead of or at this station
					  (i.e. curr >= stations[i][0])  we don't use this
					  station and try to move ahead but I store this
					  station in maxheap to use in future
				*/
                pq.push(stations[i][1]);
				//Keep the station at top which can take me farthest (maximum gas)
                i++;
            }
            
            if(pq.empty()) //we can't move further now
                return -1;
            
            int dist = pq.top();
            pq.pop();
            
            curr += dist;
            result++;
        }
        
        return result;
        
    }
};
```

**IF YOU LIKE IT,  THEN JUST PLEASE UPVOTE IT**