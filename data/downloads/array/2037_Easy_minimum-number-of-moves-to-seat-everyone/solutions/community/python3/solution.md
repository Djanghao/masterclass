# [Java/Python 3] Sort both and sum the corresponding difference.

**Author:** rock
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1524213/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1524213/)

---

```java
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int moves = 0;
        for (int i = 0; i < seats.length; ++i) {
            moves += Math.abs(seats[i] - students[i]);
        }
        return moves;
    }
```
```python
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        return sum(abs(e - t) for e, t in zip(seats, students))
```
In case you love short python 3 code:

```python
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        return sum(abs(st - std) for st, std in zip(*map(sorted, (seats, students))))
```

**Analysis:**

Time: `O(nlogn)`, space: `O(S)`, where `n = seats.length, S = space cost during sorting`.