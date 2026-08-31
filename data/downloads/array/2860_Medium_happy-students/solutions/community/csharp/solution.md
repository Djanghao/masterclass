# [C#] [100%] Easy two queues O(n log n) time

**Author:** akhlebka
**Votes:** 1
**Link:** [https://leetcode.com/problems/happy-students/solutions/4055532/](https://leetcode.com/problems/happy-students/solutions/4055532/)

---

# Algorithm
1. Sort all students ascending
2. Initialize selected and unselected lists (I've used queues to make it more obvious)
3. Mark all students as unselected and check if none of them is 0 we can not select any of them and be **happy** with it and increase total.
4. While unselected has any students dequeue student (current) from $$unselected$$ queue and enqueue to $$selected$$ queue.
    4.1. If $$current$$ student value lower or equal then the amount of students in $$selected$$ queue go next student
    4.2. Else if $$unselected$$ queue is empty or it's first student is lower then the amount of students in $$selected$$ queue increase total.
5. Return total.

# Complexity
- Time complexity: $$O(n log(n))$$ (because of sorting)

- Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public int CountWays(IList<int> nums) {
        var list = nums.ToList();
        list.Sort();

        var selected = new Queue<int>();
        var unselected = new Queue<int>(list);

        var total = 0;

        if (unselected.Peek() != 0)
        {
            total++;
        }

        while (unselected.Count != 0)
        {
            var current = unselected.Dequeue();
            selected.Enqueue(current);

            if (current >= selected.Count)
            {
                continue;
            }

            if (unselected.Any())
            {
                if (unselected.Peek() > selected.Count)
                {
                    total++;
                }
                continue;
            }
            total++;
        }

        return total;
    }
}
```