# My 8 line DP Java code(4 meaningful lines) with O(1) space

**Author:** SteveLee1989
**Votes:** 119
**Link:** [https://leetcode.com/problems/triangle/solutions/38732/](https://leetcode.com/problems/triangle/solutions/38732/)

---

    public class Solution {
        public int minimumTotal(List<List<Integer>> triangle) {
            for(int i = triangle.size() - 2; i >= 0; i--)
                for(int j = 0; j <= i; j++)
                    triangle.get(i).set(j, triangle.get(i).get(j) + Math.min(triangle.get(i + 1).get(j), triangle.get(i + 1).get(j + 1)));
            return triangle.get(0).get(0);
        }
    }

The idea is simple. 

1) Go from bottom to top.

2) We start form the row above the bottom row [size()-2].

3) Each number add the smaller number of two numbers that below it. 

4) And finally we get to the top we the smallest sum.