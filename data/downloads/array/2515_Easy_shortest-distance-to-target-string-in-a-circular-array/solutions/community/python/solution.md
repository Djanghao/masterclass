# Java | C++ | Python Solution Explained

**Author:** hi-malik
**Votes:** 15
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948046/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948046/)

---

```
# Intuition behind this solution:
```
The problem asks us to find the shortest distance from the start index to the target string in a circular array. This means that we can move either to the left or right with each step, and if we reach the end of the array, we can continue from the beginning.

To solve this problem, we can iterate over the array and calculate the distance from each index to the target. This allows us to find the shortest distance to the target from any index in the array.

To calculate the distance from an index to the target, we can check if the index is before or after the start index. If it is before, we can calculate the distance to the left of the start index and also check if it is shorter to go around the array to the right and then to the target. If the index is after the start index, we can calculate the distance to the right of the start index and also check if it is shorter to go around the array to the left and then to the target.

Finally, we can update the shortest distance if the current index is the target, and return the shortest distance at the end. This should give us the shortest distance from the start index to the target in the circular array.
```
# Approach to solve this problem:
```

* First, check if the target exists in the array. If it does not, return -1.
* Initialize the shortest distance to be the maximum possible value.
* Iterate over the array and calculate the distance from each index to the target. To do this, check if the current index is before or after the start index. If it is before, calculate the distance to the left of the start index and also check if it is shorter to go around the array to the right and then to the target. If the current index is after the start index, calculate the distance to the right of the start index and also check if it is shorter to go around the array to the left and then to the target.
* If the current index is the target, update the shortest distance.


* Return the shortest distance.


This approach involves iterating over the array and calculating the distance from each index to the target. It then updates the shortest distance if the current index is the target. This allows us to find the shortest distance to the target from any index in the array.

**Java**

```
class Solution {
    public int closetTarget(String[] words, String target, int startIndex) {
        // First check if the target exists in the array
        boolean targetExists = false;
        for (String word : words) {
            if (word.equals(target)) {
                targetExists = true;
                break;
            }
        }
        if (!targetExists) {
            return -1;
        }

        // Initialize the shortest distance to be the maximum possible value
        int shortestDistance = Integer.MAX_VALUE;

        // Iterate over the array and check the distance from each index to the target
        for (int i = 0; i < words.length; i++) {
            // Calculate the distance from index i to the target
            int distance = 0;
            if (i < startIndex) {
                // If i is before startIndex, the distance is the number of steps to the left of startIndex
                distance = startIndex - i;
                // Check if it is shorter to go around the array to the right and then to the target
                int distanceToRight = words.length - startIndex + i;
                if (distanceToRight < distance) {
                    distance = distanceToRight;
                }
            } else if (i > startIndex) {
                // If i is after startIndex, the distance is the number of steps to the right of startIndex
                distance = i - startIndex;
                // Check if it is shorter to go around the array to the left and then to the target
                int distanceToLeft = startIndex + words.length - i;
                if (distanceToLeft < distance) {
                    distance = distanceToLeft;
                }
            }

            // If the current index is the target, update the shortest distance
            if (words[i].equals(target)) {
                shortestDistance = Math.min(shortestDistance, distance);
            }
        }

        return shortestDistance;
    }
}
```

**C++**

```
class Solution {
public:
    int closetTarget(vector<string>& words, string target, int startIndex) {
        // First check if the target exists in the array
        bool targetExists = false;
        for (string word : words) {
            if (word == target) {
                targetExists = true;
                break;
            }
        }
        if (!targetExists) {
            return -1;
        }

        // Initialize the shortest distance to be the maximum possible value
        int shortestDistance = INT_MAX;

        // Iterate over the array and check the distance from each index to the target
        for (int i = 0; i < words.size(); i++) {
            // Calculate the distance from index i to the target
            int distance = 0;
            if (i < startIndex) {
                // If i is before startIndex, the distance is the number of steps to the left of startIndex
                distance = startIndex - i;
                // Check if it is shorter to go around the array to the right and then to the target
                int distanceToRight = words.size() - startIndex + i;
                if (distanceToRight < distance) {
                    distance = distanceToRight;
                }
            } else if (i > startIndex) {
                // If i is after startIndex, the distance is the number of steps to the right of startIndex
                distance = i - startIndex;
                // Check if it is shorter to go around the array to the left and then to the target
                int distanceToLeft = startIndex + words.size() - i;
                if (distanceToLeft < distance) {
                    distance = distanceToLeft;
                }
            }

            // If the current index is the target, update the shortest distance
            if (words[i] == target) {
                shortestDistance = min(shortestDistance, distance);
            }
        }

        return shortestDistance;
    }
};
```

**Python**

```
class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:
        # First check if the target exists in the array
        target_exists = False
        for word in words:
            if word == target:
                target_exists = True
                break
        if not target_exists:
            return -1

        # Initialize the shortest distance to be the maximum possible value
        shortest_distance = float('inf')

        # Iterate over the array and check the distance from each index to the target
        for i in range(len(words)):
            # Calculate the distance from index i to the target
            distance = 0
            if i < startIndex:
                # If i is before startIndex, the distance is the number of steps to the left of startIndex
                distance = startIndex - i
                # Check if it is shorter to go around the array to the right and then to the target
                distance_to_right = len(words) - startIndex + i
                if distance_to_right < distance:
                    distance = distance_to_right
            elif i > startIndex:
                # If i is after startIndex, the distance is the number of steps to the right of startIndex
                distance = i - startIndex
                # Check if it is shorter to go around the array to the left and then to the target
                distance_to_left = startIndex + len(words) - i
                if distance_to_left < distance:
                    distance = distance_to_left

            # If the current index is the target, update the shortest distance
            if words[i] == target:
                shortest_distance = min(shortest_distance, distance)

        return shortest_distance
```

**Analysis**

* **The time complexity :-** of this solution is `O(n)`, where n is the length of the array words. This is because we iterate over the array once to calculate the shortest distance.

* **The space complexity :-** of this solution is `O(1)`, as we only use a constant amount of space regardless of the size of the input.

Therefore, this solution has an efficient time complexity and a low space complexity, making it a good solution for this problem.