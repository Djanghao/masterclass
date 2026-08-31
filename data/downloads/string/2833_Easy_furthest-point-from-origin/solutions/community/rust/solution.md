# Python and Rust Solutions: 0 ms

**Author:** ajesh-mishra
**Votes:** 2
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3965472/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3965472/)

---

# Python Solutions
```python []
class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        l_count, r_count = moves.count('L'), moves.count('R')
        return abs(l_count - r_count) + (len(moves) - (l_count + r_count))
```
```python []
class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        l_count, r_count, _count = (0, 0, 0)
        for move in moves:
            if move == 'L':
                l_count += 1
            elif move == 'R':
                r_count += 1
            else:
                _count += 1
        return abs(l_count - r_count) + _count
```

# Rust Solutions
```rust []
impl Solution {
    pub fn furthest_distance_from_origin(moves: String) -> i32 {
        let [l_count, r_count, _count] = moves.chars().fold([0, 0, 0], |mut acc, m| {
            match m {
                'L' => acc[0] += 1,
                'R' => acc[1] += 1,
                '_' => acc[2] += 1,
                _ => {}
            }
            acc
        });
        (l_count as i32 - r_count).abs() + _count
    }
}
```
```rust []
impl Solution {
    pub fn furthest_distance_from_origin(moves: String) -> i32 {
        let (mut l_count, mut r_count, mut _count) = (0, 0, 0);
        for m in moves.chars() {
            match m {
                'L' => l_count += 1,
                'R' => r_count += 1,
                '_' => _count += 1,
                _ => {}
            }
        }
        (l_count as i32 - r_count).abs() + _count
    }
}
```