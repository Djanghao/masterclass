# Ruby/C# - Recursive solution

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432691/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432691/)

---

# Solution

Add two arguments to the function: 
 `time` - remainning time in the current session;
 `spent` - number of sessions already worked.
 
# Explanation

Check all tasks that can feet in remaining `time` and choose minimum posible value recursivelly 
or just start a new session if none feet (in remaining `time`).
# Ruby

```ruby
def min_sessions(tasks, session_time, time = 0, spent = 0)
  return spent if tasks.empty?
  return tasks[0] <= time ? spent : spent + 1 if tasks.one?

  candidates = tasks.uniq.select { _1 <= time }

  if candidates.empty?
    t = tasks.max
    arr = tasks.dup
    arr.delete_at(arr.index(t))
    min_sessions(arr, session_time, session_time - t, spent + 1)
  else
    candidates.map do |t|
      arr = tasks.dup
      arr.delete_at(arr.index(t))
      min_sessions(arr, session_time, time - t, spent)
    end.min
  end
end
```

# C#

```cs
public class Solution {
    public int MinSessions(int[] tasks, int sessionTime, int time = 0, int spent = 0) {
        if (tasks.Length == 0) return spent;
        if (tasks.Length == 1) return tasks[0] <= time ? spent : spent + 1;

        var candidates = tasks.Where(t => t <= time).Distinct().ToArray();

        if (candidates.Length == 0) {
            int t = tasks.Max();
            var arr = tasks.ToList();
            arr.RemoveAt(arr.IndexOf(t));
            return MinSessions(arr.ToArray(), sessionTime, sessionTime - t, spent + 1);
        } else {
            return candidates.Min(t => {
                var arr = tasks.ToList();
                arr.RemoveAt(arr.IndexOf(t));
                return MinSessions(arr.ToArray(), sessionTime, time - t, spent);
            });
        }
    }
}
```