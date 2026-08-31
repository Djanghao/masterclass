# 🧽 Java Clean & Simple

**Author:** palmas
**Votes:** 26
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2292615/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2292615/)

---

```
class Solution {
    public int maximumSum(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int result = -1;

        for (int item : nums) {
            int key = getNumberTotal(item);

            if (!map.containsKey(key))
                map.put(key, item);
            else {
                result = Math.max(result, map.get(key) + item);
                map.put(key, Math.max(map.get(key), item));
            }
        }

        return result;
    }

    int getNumberTotal(int num) {
        int result = 0;
        while (num > 0) {
            result += num % 10;
            num /= 10;
        }

        return result;
    }
}
```

**Update**:

Thanks for ***@harsh_ju_sharma***, we can use an int[82] arr to store the value as a map to save more time and memory!
https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/discuss/2294703/java-on-but-space-optimised-explained-ttt

*Definitely go check his post to get the full explanation!*


```
class Solution {
    public int maximumSum(int[] nums) {
        int[] map = new int[82];
        int result = -1;

        for (int item : nums) {
            int key = getNumberTotal(item);

            if (map[key] != 0)
                result = Math.max(result, map[key] + item);
            map[key] = Math.max(map[key], item);
        }

        return result;
    }

    int getNumberTotal(int num) {
        int result = 0;
        while (num > 0) {
            result += num % 10;
            num /= 10;
        }

        return result;
    }
}
```



