# Simple Go. Down += N. Up += N. Right++ Left++

**Author:** k1915361
**Votes:** 2
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5741068/](https://leetcode.com/problems/snake-in-matrix/solutions/5741068/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

```
N = 2
Matrix:
0	1
2	3

Down += 2   (N)
Up += 2     (N)
Right++
Left++


N = 3
Matrix:
0	1	2
3	4	5
6	7	8

Down += 3   (N)
Up += 3     (N)
Right++     (same with any number)
Left++      (same with any number)
```

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```golang []
func finalPositionOfSnake(n int, commands []string) int {
    c := 0

    for _, cm := range commands {
        if cm == "RIGHT" {
            c++
        } else if cm == "DOWN" {
            c += n
        } else if cm == "UP" {
            c -= n
        } else if cm == "LEFT" {
            c--
        }
    }

    return c
}
```