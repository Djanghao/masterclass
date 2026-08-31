# C++ simplest intuitive solution with explanations

**Author:** YehudisK
**Votes:** 6
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/791156/](https://leetcode.com/problems/distance-between-bus-stops/solutions/791156/)

---

```
class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int n = distance.size();
        if (start == destination)
            return 0;

        int one_way = 0;
        int i = start;
        while (i != destination) // find distance of one way
        {
            one_way += distance[i];
            i = (i+1)%n;
        }
        
        int second_way = 0;
        i = destination;
        while (i != start) // find distance of second way
        {
            second_way += distance[i];
            i = (i+1)%n;
        }
        
        return one_way<second_way? one_way : second_way; // return the minimum
    }
};
```