# Rust/Python sort the meetings

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5243893/](https://leetcode.com/problems/count-days-without-meetings/solutions/5243893/)

---

# Intuition

Lets assume you start at `work_until` and your next meeting is at `meeting_start`. Yu will work `meeting_start - work_until - 1` days. Now until what time you can't work? It will be maximum between `work_until` and `meeting_end`.

So all you need is to sort all meetings and do what we just explained. In the end it is possible that you still have some days so you need to add `days - work_until`

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn count_days(days: i32, mut meetings: Vec<Vec<i32>>) -> i32 {
    meetings.sort_unstable();
    let (mut work_until, mut res) = (0, 0);
    for v in meetings {
      if v[0] > work_until {
        res += v[0] - work_until - 1;
      }
      work_until = work_until.max(v[1]);
    }

    return res + days - work_until;
  }
}
```
```python []
class Solution:
  def countDays(self, days: int, meetings: List[List[int]]) -> int:
    meetings.sort()
    work_until, res = 0, 0
    for s, e in meetings:
      if s > work_until:
        res += s - work_until - 1
      work_until = max(work_until, e)

    return res + days - work_until
```
