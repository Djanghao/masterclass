# [C#] HashSet | LINQ Abuse

**Author:** PJz41
**Votes:** 2
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/2946774/](https://leetcode.com/problems/reward-top-k-students/solutions/2946774/)

---

# Approach
Start by using a HashSet for pos and neg feedback words for O(1) looks up.

1. Zip report and student_id together as they share an index
2. Select the student_id with their respective sum (calculated by checking each word in report and whether it matches pos or neg feedback)
3. Order by descending score
4. Order by ascending student id
5. Select student id
6. Take top k students
# Code
```
public class Solution {
    public IList<int> TopStudents(string[] positive_feedback, string[] negative_feedback, string[] report, int[] student_id, int k) {
        HashSet<string> pos = new(positive_feedback), neg = new(negative_feedback);
        return student_id
            .Zip(report, (sid, rep) => new {sid, rep})
            .Select(p => 
                (p.sid, p.rep.Split(" ").Sum(x => x switch
                {
                    _ when pos.Contains(x) => 3,
                    _ when neg.Contains(x) => -1,
                    _ => 0
                })))
            .OrderByDescending(x => x.Item2)
            .ThenBy(x => x.Item1)
            .Select(x => x.Item1)
            .Take(k)
            .ToList();
    }
}
```
# Complexity
|    |    |
| :- | :- |
| `n` student count | `m` max word count in reports |
| `p` pos feedback size | `n` neg feedback size |
- Time complexity: $$O(n * m + nlogn)$$
sumation or sort as upper bound
- Space complexity: $$O(n + p)$$