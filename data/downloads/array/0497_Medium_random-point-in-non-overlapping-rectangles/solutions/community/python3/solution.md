# Python O(n) with approach

**Author:** Obose
**Votes:** 6
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/3045897/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/3045897/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking us to pick a random point within a given list of rectangles. The key to solving this problem is to understand the concept of weighting. We can assign a weight to each rectangle based on the number of points it contains, and then use a random number generator to pick a rectangle based on its weight.
# Approach
<!-- Describe your approach to solving the problem. -->
- Create an instance variable weights that will store the weights of each rectangle.
- For each rectangle in the input list, calculate the number of points it contains and store it in weights.
- Calculate the total number of points in all rectangles and store it in the total variable.
- Create a prefix sum of weights to make it easier to pick a rectangle based on its weight.
- In the pick() method, use a bisect function to find the index of the rectangle that the random number falls within.
- Use a random number generator to pick a point within the selected rectangle.
# Complexity
- Time complexity: O(n) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
where n is the number of rectangles. We need to iterate through the rectangles once to calculate their weights and create the prefix sum.
- Space complexity: O(n) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where n is the number of rectangles. We need to store the weights of each rectangle in an array.
# Code
```
class Solution:

    def __init__(self, rects: List[List[int]]):
        self.rects = rects
        self.weights = []
        for rect in rects:
            self.weights.append((rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1))
        self.total = sum(self.weights)
        for i in range(1, len(self.weights)):
            self.weights[i] += self.weights[i - 1]
        self.weights = [0] + self.weights
        

    def pick(self) -> List[int]:
        index = bisect.bisect_left(self.weights, random.randint(1, self.total))
        rect = self.rects[index - 1]
        return [random.randint(rect[0], rect[2]), random.randint(rect[1], rect[3])]

# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()
```