# ✅✅ Very easy 📢📢📢 Oracle Pivot Solution ✅✅

**Author:** Gaju27
**Votes:** 13
**Link:** [https://leetcode.com/problems/reformat-department-table/solutions/1593183/](https://leetcode.com/problems/reformat-department-table/solutions/1593183/)

---

```
SELECT *
  FROM department
       PIVOT (SUM (revenue)
             Revenue
             FOR month
             IN ('Jan' Jan,
                'Feb' Feb,
                'Mar' Mar,
                'Apr' Apr,
                'May' May,
                'Jun' Jun,
                'Jul' Jul,
                'Aug' Aug,
                'Sep' Sep,
                'Oct' Oct,
                'Nov' Nov,
                'Dec' Dec));
````