# C# Solution for Robot Collisions Problem

**Author:** Aman_Raj_Sinha
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5472513/](https://leetcode.com/problems/robot-collisions/solutions/5472513/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires simulating the movement and collisions of robots on a line. Each robot has a direction (either left or right), a position, and health. The main challenge is to handle the collisions correctly and determine the final health of the surviving robots in the order they were given.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization:
	\u2022	Determine the number of robots and store it in n.
	\u2022	Create an array indices to keep track of the original indices of the robots.
	\u2022	Initialize an empty stack to manage right-moving robots.
2.	Sort Robots by Position:
	\u2022	Sort the indices array based on the positions of the robots to ensure they are processed from left to right.
3.	Process Each Robot:
	\u2022	Iterate through each currentIndex in the sorted indices array:
	    \u2022	If the robot is moving to the right (\u2018R\u2019):
	        \u2022	Push currentIndex onto the stack.
	    \u2022	If the robot is moving to the left (\u2018L\u2019):
	        \u2022	While the stack is not empty and the current robot\u2019s health is greater than 0:
	            \u2022	Pop the top robot from the stack (this is the most recent right-moving robot).
	            \u2022	Compare the health of the current left-moving robot and the top right-moving robot:
	                \u2022	If the top right-moving robot has more health:
	                    \u2022	Decrease its health by 1 and push it back onto the stack.
	                    \u2022	Set the current left-moving robot\u2019s health to 0.
	                \u2022	If the current left-moving robot has more health:
	                    \u2022	Decrease its health by 1.
	                    \u2022	Set the top right-moving robot\u2019s health to 0.
	                \u2022	If both robots have the same health:
	                    \u2022	Set both robots\u2019 health to 0.
4.	Collect Surviving Robots:
	\u2022	Iterate through each robot index from 0 to n - 1:
	\u2022	If the robot\u2019s health is greater than 0:
	\u2022	Append the robot\u2019s health to the result list.
5.	Return the result list, which contains the health of the surviving robots.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Sorting: Sorting the indices array based on the positions takes O(n log n).
2.	Processing Each Robot: Each robot is processed once, and in the worst case, each robot can interact with every other robot exactly once (if they all collide sequentially), which results in O(n) operations.
3.	Collecting Surviving Robots: Iterating through the robots to collect survivors is O(n).

The overall time complexity is dominated by the sorting step, resulting in O(n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Storage for Indices: The indices array takes O(n) space.
2.	Stack for Right-Moving Robots: The stack can hold up to n elements in the worst case, requiring O(n) space.
3.	Result List: Storing the health of surviving robots requires O(n) space in the worst case.

Thus, the overall space complexity is O(n).

# Code
```
public class Solution {
    public IList<int> SurvivedRobotsHealths(int[] positions, int[] healths, string directions) {
        int n = positions.Length;
        int[] indices = new int[n];
        for (int i = 0; i < n; i++) {
            indices[i] = i;
        }

        // Sort indices by the positions of the robots
        Array.Sort(indices, (i, j) => positions[i].CompareTo(positions[j]));

        Stack<int> stack = new Stack<int>();
        for (int i = 0; i < n; i++) {
            int currentIndex = indices[i];
            if (directions[currentIndex] == 'R') {
                stack.Push(currentIndex);
            } else { // directions[currentIndex] == 'L'
                while (stack.Count > 0 && healths[currentIndex] > 0) {
                    int j = stack.Pop(); // j is the index of the right-moving robot
                    if (healths[j] > healths[currentIndex]) {
                        healths[j]--; // right-moving robot survives with reduced health
                        healths[currentIndex] = 0; // left-moving robot is removed
                        stack.Push(j);
                        break;
                    } else if (healths[j] < healths[currentIndex]) {
                        healths[currentIndex]--; // left-moving robot survives with reduced health
                        healths[j] = 0; // right-moving robot is removed
                    } else { // healths[j] == healths[currentIndex]
                        healths[currentIndex] = 0; // both robots are removed
                        healths[j] = 0;
                        break;
                    }
                }
            }
        }

        List<int> result = new List<int>();
        for (int i = 0; i < n; i++) {
            if (healths[i] > 0) {
                result.Add(healths[i]);
            }
        }

        return result;
    }
}
```