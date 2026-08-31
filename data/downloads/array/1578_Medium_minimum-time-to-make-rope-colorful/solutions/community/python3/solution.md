# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 73
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463216/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463216/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2023-12-24 062247.png](./images/0.png)


# Approaches
(Also explained in the code)

1. The function `minCost` calculates the minimum cost needed for removing balloons of different colors within their groups.
1. It uses two pointers (`i` and `j`) to traverse the `neededTime` array and analyze groups of balloons with the same color.
1. Inside the while loop, it accumulates the total removal time for each color group (currTotal) and identifies the maximum removal time within that group (`currMax`).
1. It subtracts the maximum removal time from the total removal time within each color group and adds this cost to the `totalTime`.
1. Finally, it returns the computed `totalTime`.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    int minCost(string colors, vector<int>& neededTime) {
        int totalTime = 0; // Initialize the total time to 0
        int i = 0, j = 0; // Initialize two pointers i and j

        // Loop until either pointer reaches the end of the 'neededTime' array
        while (i < neededTime.size() && j < neededTime.size()) {
            int currTotal = 0, currMax = 0; // Initialize variables to calculate current total and maximum time

            // Find all the balloons having the same color as the balloon indexed at i
            while (j < neededTime.size() && colors[i] == colors[j]) {
                currTotal += neededTime[j]; // Accumulate total removal time for the same color group
                currMax = max(currMax, neededTime[j]); // Track maximum removal time within the group
                j++; // Move the pointer to the next balloon
            }

            // Once the end of the current color group is reached, add the cost of this group to totalTime
            totalTime += currTotal - currMax; // Deduct the maximum removal time from the total removal time
            i = j; // Move the starting pointer to the next color group
        }
        return totalTime; // Return the calculated total time
    }
};



```
```Java []
class Solution {
    public int minCost(String colors, int[] neededTime) {
        int totalTime = 0;
        int i = 0, j = 0;

        while (i < neededTime.length && j < neededTime.length) {
            int currTotal = 0, currMax = 0;

            while (j < neededTime.length && colors.charAt(i) == colors.charAt(j)) {
                currTotal += neededTime[j];
                currMax = Math.max(currMax, neededTime[j]);
                j++;
            }

            totalTime += currTotal - currMax;
            i = j;
        }
        return totalTime;
    }
}



```
```python3 []
class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        totalTime = 0
        i = 0
        j = 0

        while i < len(neededTime) and j < len(neededTime):
            currTotal = 0
            currMax = 0

            while j < len(neededTime) and colors[i] == colors[j]:
                currTotal += neededTime[j]
                currMax = max(currMax, neededTime[j])
                j += 1

            totalTime += currTotal - currMax
            i = j

        return totalTime



```
```javascript []
var minCost = function(colors, neededTime) {
    let totalTime = 0;
    let i = 0;
    let j = 0;

    while (i < neededTime.length && j < neededTime.length) {
        let currTotal = 0;
        let currMax = 0;

        while (j < neededTime.length && colors[i] === colors[j]) {
            currTotal += neededTime[j];
            currMax = Math.max(currMax, neededTime[j]);
            j++;
        }

        totalTime += currTotal - currMax;
        i = j;
    }

    return totalTime;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---