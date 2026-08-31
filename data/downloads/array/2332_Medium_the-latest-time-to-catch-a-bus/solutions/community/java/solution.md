# Greedy Solution || Java

**Author:** virendra115
**Votes:** 31
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259320/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259320/)

---

```
public int latestTimeCatchTheBus(int[] buses, int[] passengers, int capacity) {
        Arrays.sort(buses);
        Arrays.sort(passengers);
        Set<Integer> set = new HashSet<>();
        int ans=0,j=0;
        for(int i=0;i<buses.length;i++){
            int c = 0;
            while(j<passengers.length && c<capacity && passengers[j]<=buses[i]){
                if(!set.contains(passengers[j]-1)){
                    ans=passengers[j]-1;
                }
                set.add(passengers[j]);
                j++; c++;
            }
            if(c<capacity && !set.contains(buses[i])){
                ans = buses[i];
            }
        }
        return ans;
    }
```

**Space Optimised Solution** (credit :- [@abdulazizms](https://leetcode.com/abdulazizms/))
```
public int latestTimeCatchTheBus(int[] buses, int[] passengers, int capacity) {
    Arrays.sort(passengers);
    Arrays.sort(buses);
    if(passengers[0] > buses[buses.length - 1]) return buses[buses.length - 1];
    int result = passengers[0] - 1;
    int i = 0, j = 0;
    while(i < buses.length){
        int occupiedSeats = 0;
        while(occupiedSeats < capacity && j < passengers.length && passengers[j] <= buses[i]){
            if(j > 0 && passengers[j] - passengers[j-1] != 1){
                result = passengers[j] - 1;
            }
            j++;
            occupiedSeats++;
        }
        if(j > 0 && occupiedSeats < capacity && buses[i] != passengers[j-1]){
            result = buses[i];
        }
        i++;
    }
    return result;
}
```