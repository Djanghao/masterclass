# [C#/Python/Scala] One-liners

**Author:** Pony1999
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1539348/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1539348/)

---

C#:
```
public class Solution {
    public int MinMovesToSeat(int[] seats, int[] students) {
        return seats.OrderBy(p => p).Zip(students.OrderBy(p => p), (p1, p2) => Math.Abs(p1 - p2)).Sum();
    }
}
```
Python:
```
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        return sum(abs(p1 - p2) for p1, p2 in zip(sorted(seats), sorted(students)))
```
Scala:
```
object Solution {
    def minMovesToSeat(seats: Array[Int], students: Array[Int]): Int = {
        (seats.sorted zip students.sorted).map{case (p1, p2) => (p1 - p2).abs}.sum
    }
}
```