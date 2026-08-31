# 3 line PHP solution, beats 100% in runtime

**Author:** GVA-ranepa
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4059982/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4059982/)

---

# Approach
Count the sum of soldiers in each row.
Sort rows in ascending order.
Get the keys of sorted rows, splice first K of keys.


# Code
```
    function kWeakestRows($mat, $k) {
        $matNew = array_map('array_sum',$mat);
        asort($matNew);
        return array_splice(array_keys($matNew),0,$k);
    }
```