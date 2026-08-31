# Simple C# Solution! Beats 93.98%

**Author:** MageDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5307395/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5307395/)

---

![image.png](./images/0.png)


# Code
```
public class Solution {
    public int MinMovesToSeat(int[] seats, int[] students) {
        int sum = 0;
        Array.Sort(seats);
        Array.Sort(students);
        for(int i = 0; i < seats.Length; i++){
            sum += Math.Abs(seats[i] - students[i]);
        }
        return sum;
    }
}
```