# Java Clean

**Author:** rexue70
**Votes:** 20
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/1647663/](https://leetcode.com/problems/recover-the-original-array/solutions/1647663/)

---

from N = 1000, we know we can try something similar to O(n2)
we find out K is actually a limited number, it would be the difference between first element with all the rest number, one by one, when we have this list of k, we can try them one by one.

when we have a possible k to guess, we will see if both low (nums[i]) and high (nums[i] + 2 * k) exist, and we increase counter by 1 (here in code has use tmp array), if counter is N / 2 in the end, we will conclue that we find one possible answer.

```
class Solution {
    public int[] recoverArray(int[] nums) {
        int N = nums.length;
        Arrays.sort(nums);
        List<Integer> diffList = new ArrayList<>();
        for (int i = 1; i < N; i++) {
            int diff = Math.abs(nums[i] - nums[0]);
            if (diff % 2 == 0 && diff > 0) diffList.add(diff / 2);
        }
        Map<Integer, Integer> map1 = new HashMap<>();
        for (int i = 0; i < N; i++)
            map1.put(nums[i], map1.getOrDefault(nums[i], 0) + 1);
        for (int diff : diffList) {
            Map<Integer, Integer> map = new HashMap<>(map1);
            List<Integer> tmp = new ArrayList<>();
            for (int i = 0; i < N; i++) {
			    if (tmp.size() == N / 2) break;
                int low = nums[i];
                int high = low + 2 * diff;
                if (map.containsKey(low) && map.containsKey(high)) {
                    tmp.add(low + diff);
                    map.put(low, map.get(low) - 1); 
                    map.put(high, map.get(high) - 1);
                    if (map.get(low) == 0) map.remove(low);
                    if (map.get(high) == 0) map.remove(high);
                }
            }
            if (tmp.size() == N / 2) return tmp.stream().mapToInt(i -> i).toArray();
        }
        return null;
    }
}
```