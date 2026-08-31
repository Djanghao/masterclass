# PHP 100 % C++ 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/4753889/](https://leetcode.com/problems/distance-between-bus-stops/solutions/4753889/)

---

# Approach
i merge two arrays "distance" to symplify slicing.

```PHP []
class Solution {
    function distanceBetweenBusStops($distance, $start, $destination) {
        $s = min($start,$destination);
        $d = max($start,$destination);
        $l = count($distance);
        $distance = array_merge($distance,$distance);
        return min(array_sum(array_slice($distance,$s+$l,$d-$s)),array_sum(array_slice($distance,$d,$s+$l-$d)));
    }
}
```
```C++ []
class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int s = min(start,destination);
        int d = max(start,destination);
        int l = distance.size();
        int dt[2*l];
        for(int i=0;i<l;i++){dt[i]=distance[i];dt[i+l]=distance[i];}
        int s1 = 0;
        int s2 = 0;
        for(int i=s+l;i<d+l;i++){s1+=dt[i];}
        for(int i=d;i<s+l;i++){s2+=dt[i];}
        return min(s1,s2);
    }
};
```




