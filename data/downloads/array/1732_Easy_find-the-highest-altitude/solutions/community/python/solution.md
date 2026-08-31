# Beats 100% + Video of Prefix Sum| Java C++ Python

**Author:** jeevankumar159
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/3654565/](https://leetcode.com/problems/find-the-highest-altitude/solutions/3654565/)

---

# Approach
The altitude at any given point = sum of all pervious points in array. Keep track of max to track ans.

1. Initiate altitude = 0 and max = 0.
2. for i in arr: altitude+= arr[i]
3. max = Math.max(altitude, max) 
4. return max

<iframe width="560" height="315" src="https://www.youtube.com/embed/_Kfiw07DulY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    public int largestAltitude(int[] gain) {
        int altitude = 0;
        int max = 0;
        for(int i: gain){
            altitude +=i;
            max = Math.max(altitude, max);
        }
        return max;
    }
}
```

```
class Solution {
public:
    int largestAltitude(std::vector<int>& gain) {
        int altitude = 0;
        int max = 0;
        for(int i : gain) {
            altitude += i;
            max = std::max(altitude, max);
        }
        return max;
    }
};
```

```
class Solution:
    def largestAltitude(self, gain):
        altitude = 0
        max_altitude = 0
        for i in gain:
            altitude += i
            max_altitude = max(altitude, max_altitude)
        return max_altitude
```