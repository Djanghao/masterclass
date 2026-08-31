# [Java/C++/Python] HashMap

**Author:** lee215
**Votes:** 95
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/2388301/](https://leetcode.com/problems/task-scheduler-ii/solutions/2388301/)

---

# **Solution 1**
The last task of type `a` is completed on day `last[a]`.
Currently it takes us `res` day.

For the task `a`,
we can do it on `res + 1` day,
and it need to be bigger than `last[a] + space`.
So this task is completed on `max(res, last[a] + space) + 1`.

We keep doing this for all tasks, and finally return result `res`

Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long taskSchedulerII(int[] tasks, int space) {
        Map<Integer, Long> last = new HashMap<>();;
        long res = 0;
        for (int a : tasks)
            if (last.containsKey(a))
                last.put(a, res = Math.max(res, last.get(a) + space) + 1);
            else
                last.put(a, ++res);
        return res;
    }
```

**C++**
```cpp
    long long taskSchedulerII(vector<int>& tasks, int space) {
        unordered_map<int, long long> last;
        long long res = 0;
        for (int a: tasks)
            if (last.count(a))
                last[a] = res = max(res, last[a] + space) + 1;
            else
                last[a] = ++res;
        return res;
    }
```

**Python**
```py
    def taskSchedulerII(self, A, space):
        last = defaultdict(lambda: - len(A) - 10)
        res = 0
        for a in A:
            last[a] = res = max(res, last[a] + space) + 1
        return res
```
<br>

# Solution 2
`m[a]` is the next avaible day for task type of `a`
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long taskSchedulerII(int[] tasks, int space) {
        Map<Integer, Long> next = new HashMap<>();;
        long res = 0;
        for (int a : tasks) {
            res = Math.max(next.getOrDefault(a, 0L), res + 1);
            next.put(a, res + space + 1);
        }
        return res;
    }
```

**C++**
```cpp
    long long taskSchedulerII(vector<int>& tasks, int space) {
        unordered_map<int, long long> next;
        long long res = 0;
        for (int a : tasks)
            next[a] = (res = max(next[a], res + 1)) + space + 1;
        return res;
    }
```
<br>
