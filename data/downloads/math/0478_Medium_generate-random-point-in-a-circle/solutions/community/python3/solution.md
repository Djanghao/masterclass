# 478: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 4
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/3281220/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/3281220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize the class with radius, x_center, and y_center as instance variables.
2. When randPoint() is called, generate a random length between 0 and radius using random.uniform(0, self.radius**2).
3. Generate a random angle in radians between 0 and 2*pi using random.uniform(0, 1) * 2 * math.pi.
4. Compute the x and y coordinates of the random point using the formulas:
x = x_center + length * cos(angle)
y = y_center + length * sin(angle)
5. Return the coordinates as a list [x, y].

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def __init__(self, radius: float, x_center: float, y_center: float):
    self.radius = radius
    self.x_center = x_center
    self.y_center = y_center

  def randPoint(self) -> List[float]:
    length = math.sqrt(random.uniform(0, self.radius**2))
    degree = random.uniform(0, 1) * 2 * math.pi
    x = self.x_center + length * math.cos(degree)
    y = self.y_center + length * math.sin(degree)
    return [x, y]

```