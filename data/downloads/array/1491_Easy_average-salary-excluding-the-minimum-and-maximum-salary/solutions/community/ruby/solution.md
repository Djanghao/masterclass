# Ruby easy one-liner

**Author:** Hoaxis
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2886586/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2886586/)

---

```
# @param {Integer[]} salary
# @return {Float}
def average(salary)
  (salary.sum - salary.minmax.sum) / (salary.size - 2).to_f
end
```