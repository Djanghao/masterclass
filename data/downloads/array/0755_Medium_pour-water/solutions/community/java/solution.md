# Java | Simulate Moving it

**Author:** Student2091
**Votes:** 4
**Link:** [https://leetcode.com/problems/pour-water/solutions/1928381/](https://leetcode.com/problems/pour-water/solutions/1928381/)

---

Codes commented. Feel free to ask any questions.
```Java
class Solution {
    public int[] pourWater(int[] heights, int volume, int k) {
        for (int i = 0; i < volume; i++){
            if (!move(heights, k, -1) && !move(heights, k, 1)){ // move left then move right
                heights[k]++; // if both fail, then increment itself
            }
        }

        return heights;
    }

    private boolean move(int[] heights, int k, int d){
        int min = k;
        for (int i = k;  i >= 0 && i < heights.length; i += d){
            if (i != k && heights[i] > heights[i - d])
                break; // only check height when it has moved (i.e. i != k)
            if (heights[i] < heights[min]){
                min = i;
            }
        }
        if (min != k){
            heights[min]++;
        }
        return min != k;
    }
}
```