# Java Populate Colors First using arrays

**Author:** SherwinVarghese
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1274294/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1274294/)

---

Prepoluate the distance array for each of the colors first and query them based on the inputs.

Solution
```
class Solution {
    public List<Integer> shortestDistanceColor(int[] colors, int[][] queries) {
        int colOne[] = populateColors(colors, 1);
        int colTwo[] = populateColors(colors, 2);
        int colThree[] = populateColors(colors, 3);
        
        List<Integer> result = new ArrayList<>();
        for(int q[]: queries) {
            if(q.length < 2 || q[0] >= colors.length) {
                result.add(-1);
            } else {
                if(q[1] == 1) {
                    int val = colOne[q[0]] == Integer.MAX_VALUE? -1: colOne[q[0]];
                    result.add(val);
                } else if(q[1] == 2) {
                    int val = colTwo[q[0]] == Integer.MAX_VALUE? -1: colTwo[q[0]];
                    result.add(val);
                } else {
                    int val = colThree[q[0]] == Integer.MAX_VALUE? -1: colThree[q[0]];
                    result.add(val);
                }
            }
            
        }
        return result;
        
    }
    
    int[] populateColors(int colors[], int color) {
        //find the minimum distance of the given color.
        int distance[] = new int[colors.length];
        Arrays.fill(distance, Integer.MAX_VALUE);
        int left = -1;
        for(int i = 0; i < colors.length; i++) {
            if(colors[i] == color) {
                distance[i] = 0;
                left = i;
            } else if(left != -1) {
                distance[i] = Math.min(distance[i], i - left);
            }
        }
        int right = colors.length;
        for(int i = colors.length-1; i >= 0; i--) {
            if(colors[i] == color) {
                distance[i] = 0;
                right = i;
            } else if(right != colors.length) {
                distance[i] = Math.min(distance[i], right - i);
            }
        }
        return distance;
    }
}
```