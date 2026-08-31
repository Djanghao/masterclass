# The code speaks for itself.

**Author:** softwaresirppi
**Votes:** 1
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/4469760/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/4469760/)

---

# Approach
f(floors) -> moves relationship is kinda tricky to define.

My approach is to flip it around,
f(moves) -> floors
Let's define this function first.
```
floors = (sum of natural numbers upto moves - 1) + 1
floors = ((moves - 1) * (moves)) / 2 + 1
```
rearranging this function to reverse the mapping,
quadratic equation might be helpful.
```
moves = floor((1 + sqrt(8 * moves - 7)) / 2)
```
# Code
```
import . "math"
func twoEggDrop(floors int) int {
    return int((1 + Sqrt(8 * float64(floors) - 7)) / 2)
}

```