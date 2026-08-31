# Php Solution

**Author:** OmarAshraf20
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-partition/solutions/2771833/](https://leetcode.com/problems/array-partition/solutions/2771833/)

---

```
        sort($nums);
        $newNums = array_chunk($nums, 2);
        $counts = 0;
        foreach ($newNums as $newNum) {
            $counts += $newNum[0];
        }
        return $counts;
```