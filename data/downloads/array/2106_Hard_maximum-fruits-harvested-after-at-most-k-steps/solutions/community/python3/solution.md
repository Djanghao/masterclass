# Sliding Window Solution O(N)

**Author:** Silencer312
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/5168207/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/5168207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can slide a window over the fruits array and calculate the max fruits we can accumulate. We calculate the max fruits accumulated when the window is valid, and then shrink it till it becomes invalid. The approach is a standard sliding window approach, but the trick is to figure out how and when the window is valud
# Approach
<!-- Describe your approach to solving the problem. -->
We keep increasing window till it reaches at least the start pos.
To check the window is valid, we need to calculate the steps needed to go to each end of the window from the start position. If the window is on one side of the start position, its easy. The steps needed are end - start (remember we need steps to traverse the window and not the length)
But when the window is on either side of start position, we first go to one end, then return to start and go to other end. Its intuitive to go to the smaller end and then return so as to minimize the steps. So the steps needed is (step of window) + MIN(steps needed to go to either end of the window from start position)

Again remember, the steps are calculated using the position in the fruits array

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:
        return self.max_fruits_sliding_window(fruits, startPos, k)
    
    def max_fruits_sliding_window(self, fruits, start_pos, k):
        # the sliding window approach is very intuitive to come up with
        # basically, create a window and slide it over the fruits array
        # when the window is valid, calculate the max fruits.
        # Then increase the end of the window, while calculating max fruits at every step
        # but when window becomes invalid, shrink from start to make it valid
        # The main thing is how to make sure window is valid? Here we are not interested in the width of the window
        # but rather the number of steps from the start position
        # first make sure you reach the start position cuz thats where you need to start
        # then the no of steps = steps in window - min(steps in either direction from start pos)
        # visualize the question, the most optimal walk is go in one direction, then switch. Going back and forth wont help
        # but to maximize steps, we need to go in shorter direction first, so not to waste steps coming back to start
        # thats why the steps needed is (window steps) - min(abs distance of both ends of window from start)
        # time: O(N)

        max_fruits, f = 0, 0
        start = 0
        for end, [p, a] in enumerate(fruits): # end is the index in fruits, and each fruit has position and amount
            f += a # accumulate fruits
            if p < start:
                continue # wait till window reaches the start

            # length of window = end - start + 1, but steps needed is end - start
            # since we are going from start to one end of window then going to another, we subtract that amount of steps needed to go from start to min end of window
            # but remember here steps is related to position, so use position
            while start <= end and p - fruits[start][0] + min(abs(start_pos - p), abs(start_pos - fruits[start][0])) > k:
                f -= fruits[start][1] # remove fruit at start of window in fruits
                start += 1

            max_fruits = max(max_fruits, f)

        return max_fruits
```