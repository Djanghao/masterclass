# Java | TC: O(1) | SC: O(N) | Using ArrayList & HashMap

**Author:** NarutoBaryonMode
**Votes:** 28
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1495123/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1495123/)

---

```java
/**
 * Using ArrayList & HashMap.
 *
 * Time Complexity: All function have average O(1)
 *
 * Space Complexity: O(N)
 *
 * N = Number of values currently stored in the data structure.
 */
class RandomizedCollection {

    List<Integer> nums;
    Map<Integer, Set<Integer>> idxMap;
    Random random;

    public RandomizedCollection() {
        nums = new ArrayList<>();
        idxMap = new HashMap<>();
        random = new Random();
    }

    public boolean insert(int val) {
        boolean response = !idxMap.containsKey(val);

        if (response) {
            idxMap.put(val, new HashSet<>());
        }
        idxMap.get(val).add(nums.size());
        nums.add(val);

        return response;
    }

    public boolean remove(int val) {
        if (!idxMap.containsKey(val)) {
            return false;
        }

        Set<Integer> idxSet = idxMap.get(val);
        int idxToBeRemoved = idxSet.iterator().next();
        if (idxSet.size() == 1) {
            idxMap.remove(val);
        } else {
            idxSet.remove(idxToBeRemoved);
        }

        int lastIdx = nums.size() - 1;
        if (idxToBeRemoved != lastIdx) {
            int lastVal = nums.get(lastIdx);
            Set<Integer> lastIdxSet = idxMap.get(lastVal);
            lastIdxSet.add(idxToBeRemoved);
            lastIdxSet.remove(lastIdx);
            nums.set(idxToBeRemoved, lastVal);
        }

        nums.remove(lastIdx);

        return true;
    }

    public int getRandom() {
        return nums.get(random.nextInt(nums.size()));
    }
}
```

Solution for Part I: [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/1495119/Java-or-TC:-O(1)-or-SC:-O(N)-or-Using-ArrayList-and-HashMap)