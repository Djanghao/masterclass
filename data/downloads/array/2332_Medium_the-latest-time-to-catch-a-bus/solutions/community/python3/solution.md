# Clean and Concise Greedy with Intuitive Explanation

**Author:** wickedmishra
**Votes:** 7
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259189/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259189/)

---

##### Rationale
* We could imagine the time given in the `passengers` Array to be a seat. A passenger may take a seat only if it is not taken already. The problem then boils down to finding the last possible seat for our candidate. This analogy makes it easier to visualize the problem
* Since we would like our candidate to take the last seat, we could find the last possible seat number that they could take
	* Fit as many people as possible in every bus until you max out. We could sort the Arrays to make it easier
	* The maximum seat would either be the last seat in the last bus if it is maxed out or the bus capacity (buses[-1])
* Iterate backwards from the last possible seat, if it is available, allocate it

##### Complexities
* Time: `O(blogb + plogp)`
* Space: `O(p)`


```
class Solution:
    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:
        buses.sort()
        passengers.sort()
        
        passenger = 0
        for bus in buses:
            maxed_out = False
            cap = capacity
            
            while passenger < len(passengers) and passengers[passenger] <= bus and cap != 0:
                passenger += 1
                cap -= 1
                
            if cap == 0:
                maxed_out = True
                
        if maxed_out:
            max_seat = passengers[passenger - 1]
        else:
            max_seat = buses[-1]
    
        booked = set(passengers)
        for seat in range(max_seat, 0, -1):
            if seat not in booked:
                return seat
```