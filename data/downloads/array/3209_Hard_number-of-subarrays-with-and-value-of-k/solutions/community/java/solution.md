# HashMap Soln | LC: 898

**Author:** vaibhav1701
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428978/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428978/)

---

- We store the occurences of all the AND values before i-th value.
- Now we do and with all the previous AND's and if it is equal to k then we add how many times the value occured previously.
- [LC: 898](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/5357781/ors-of-subsequences-with-dry-run/) you can attempt this question before doing this.

# Code
```
class Solution {

    public long countSubarrays(int[] nums, int k) {
        HashMap<Integer, Integer> prevMap = new HashMap<>();
        long ans = 0;

        for (int i = 0; i < nums.length; i++) {
            int cv = nums[i];
            if (cv == k)
                ans++;
            HashMap<Integer, Integer> currMap = new HashMap<>();

            for (int key : prevMap.keySet()) {
                int andVal = key & cv;
                if (andVal == k) {
                    ans += prevMap.get(key);
                }
                currMap.put(andVal, currMap.getOrDefault(andVal, 0) + prevMap.get(key));
            }
            currMap.put(cv, currMap.getOrDefault(cv, 0) + 1);
            prevMap = currMap;
        }
        return ans;
    }
}
```