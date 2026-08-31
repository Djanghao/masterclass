# JAVA SOLUTION USING HASHSET

**Author:** Subhankar752
**Votes:** 5
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1439808/](https://leetcode.com/problems/array-nesting/solutions/1439808/)

---

The main idea is to check for every index and keep count of the distinct elements which is donw by using HashSet.
```
class Solution {
    public int arrayNesting(int[] nums) {
        int n = nums.length;
        int ans = Integer.MIN_VALUE;
        for(int i = 0 ; i < n ; i++){
            HashSet<Integer> hs = new HashSet<>();
            hs.add(nums[i]);
            int x = nums[i];
            while(!hs.contains(nums[x])){
                hs.add(nums[x]);
                x = nums[x];
            }
            ans = Math.max(ans , hs.size());
        }
        return ans;
    }
}
```
Result: TLE in last 3 test cases.

Observation: We can use a single HashSet for the entire operation. Since there are elements from 0 to (n - 1) so overlapping indexes can be avoided by keeping track of the number of times insertion is done. The implementation is given below.

```
class Solution {
    public int arrayNesting(int[] nums) {
        int n = nums.length;
        HashSet<Integer> hs = new HashSet<>();
        int ans = Integer.MIN_VALUE;
        for(int i = 0 ; i < n ; i++){
            int j = i;
            int count = 0;
            while(!hs.contains(nums[j])){
                hs.add(nums[j]);
                j = nums[j];
                count++;
            }
            ans = Math.max(ans , count);
        }
        return ans;
    }
}
```
Result : Accepted. 
Do upvote id it was helpful.