# Ruby one-liner

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2682149/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2682149/)

---

```
# @param {Integer} _n
# @param {Integer[][]} logs
# @return {Integer}
def hardest_worker(_n, logs)
  ([[0, 0]] + logs).each_cons(2).min_by { |(_, x), (t, y)| [x - y, t] }[1][0]
end
```