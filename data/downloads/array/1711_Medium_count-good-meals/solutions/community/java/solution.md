# [Java] HashMap Two Sum O(N)

**Author:** sheepmeow
**Votes:** 135
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/999119/](https://leetcode.com/problems/count-good-meals/solutions/999119/)

---

Strictly speaking this is O(22*N) but 22 can be treated as constant.

Basic idea is somewhat similar to that of two sum, where we store the count of all encountered nums in a hashmap. Then for each num, we go through all powers of twos in the integer range (22 iterations total), and try to find the corresponding entry in the map. 

EDIT: Thanks to @chin-heng's point, we can further reduce the constant modifier to 22 from 32, due to the constraint in problem that `0 <= deliciousness[i] <= 2^20`.

```java
class Solution {
    int mod = 1000000007;
    public int countPairs(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = arr.length;
        long res = 0;
        for (int num : arr) {
            int power = 1;
            for (int i = 0; i < 22; i++) {
                if (map.containsKey(power - num)) {
                    res += map.get(power - num);
                    res %= mod;
                }
                power *= 2;
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return (int) res;
    }
}
```