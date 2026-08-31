# Java HashMap

**Author:** nnnnnni
**Votes:** 28
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711428/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711428/)

---

Complexity
Time O(n)
Space O(n)

 Iterating over the map could be better becase of the duplicates in the nums array, thanks @indianpie.
```
public List<Integer> findLonely(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        List<Integer> res = new ArrayList<>();
		for (int num : map.keySet()) {
       //  for (int num : nums) {
            if (map.get(num) == 1 && !map.containsKey(num - 1) && !map.containsKey(num + 1)) {
                res.add(num);
            }
        }
        return res;
    }
```