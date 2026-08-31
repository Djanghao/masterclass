# Java Short And Clear

**Author:** omilus
**Votes:** 5
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/1224299/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/1224299/)

---

```
public int subarrayBitwiseORs(int[] arr) {
        HashSet<Integer> res = new HashSet<>();
        HashSet<Integer> prev = new HashSet<>();
        
        for(int num: arr) {
            HashSet<Integer> cur = new HashSet<>();
            cur.add(num);
            for(int prevNum: prev) cur.add(num | prevNum);
            prev = cur;
            res.addAll(cur);
        }
        
        return res.size();
    }
}
```