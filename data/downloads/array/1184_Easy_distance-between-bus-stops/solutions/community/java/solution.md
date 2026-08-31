# JAVA || beats 100% ||  💯 || Simple ||

**Author:** gowtham491
**Votes:** 10
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/2608436/](https://leetcode.com/problems/distance-between-bus-stops/solutions/2608436/)

---

```
class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        int frontSum=0;
        int backSum=0;
        for(int i=start;i!=destination;i=(i+1)%distance.length) frontSum+=distance[i];
        for(int i=destination;i!=start;i=(i+1)%distance.length) backSum+=distance[i];
        return Math.min(frontSum,backSum);
    }
}
Please upvote if you like the solution \uD83D\uDE4F