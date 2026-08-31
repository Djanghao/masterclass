# ✅ Line Sweep Solution | O(N) Runtime & O(1) Space | Easy to Follow

**Author:** blopez024
**Votes:** 10
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4233066/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4233066/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. In the constraints section, we are told the max length of the array will be 100.
2. Using that information we can build an array (`line`) to help track the **start** and **end** points of the car.  
3. The array `line`, will be set to a fixed size of **102**.  This will help translate the `start` and `end points` to the correct index location. 
3. The `start point` will be marked in the array by incrementing its count by 1.  
4. The (`end point + 1`) will be marked by decrementing its count by 1.
5. Once all the points have been added to the array, we will fill the space in between points. `line[i] += line[i - 1]` 
6. After we do so, we can check the number of points on the line.
7. A point will be on the line if its `line[index] != 0`.

# Example:

1. Constraint for example: `nums.length <= 10`
2. nums: `[[2, 4], [5,9]`
3. line array = `[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`
4. point = `[2, 4]`
5. line array = `[0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0]`
6. point = `[5, 9]`
7. line array = `[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0]`
8. line array = `[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]`
9. points on line = `8`




# Complexity
- Time complexity: $$O(N)$$, $$N$$ is the number of coordinates
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->




# Code
```python []
class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        
        line = [0] * 102
        points_on_line = 0

        for s,e in nums:
            line[s] += 1
            line[e + 1] -= 1

        for i in range(1, 102):
            line[i] += line[i - 1]
            if line[i] != 0:
                points_on_line += 1

        return points_on_line
```
```javascript []
    /**
    * @param {number[][]} nums
    * @return {number}
    */
    var numberOfPoints = function(nums) {
        let line = new Array(102).fill(0);
        let points_on_line = 0;

        for (let i = 0; i < nums.length; i++) {
            let s = nums[i][0];
            let e = nums[i][1];
            line[s] += 1;
            line[e + 1] -= 1;
        }

        for (let i = 1; i < 102; i++) {
            line[i] += line[i - 1];
            if (line[i] != 0) {
                points_on_line += 1;
            }
        }

        return points_on_line;
    };
```
```java []
class Solution {
    public int numberOfPoints(List<List<Integer>> nums) {
    int[] line = new int[102];
    int points_on_line = 0;

    for (int i = 0; i < nums.size(); i++) {
        int s = nums.get(i).get(0);
        int e = nums.get(i).get(1);
        line[s] += 1;
        line[e + 1] -= 1;
    }

    for (int i = 1; i < 102; i++) {
        line[i] += line[i - 1];
        if (line[i] != 0) {
            points_on_line += 1;
        }
    }

    return points_on_line;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfPoints(vector<vector<int>>& nums) {
        int line[102] = {0};
        int points_on_line = 0;

        for (int i = 0; i < nums.size(); i++) {
            int s = nums[i][0];
            int e = nums[i][1];
            line[s] += 1;
            line[e + 1] -= 1;
        }

        for (int i = 1; i < 102; i++) {
            line[i] += line[i - 1];
            if (line[i] != 0) {
                points_on_line += 1;
            }
        }

        return points_on_line;
    }
};
```

![image.png](./images/0.png)
