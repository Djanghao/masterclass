# Simple Java solution

**Author:** southpenguin
**Votes:** 762
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/61372/](https://leetcode.com/problems/contains-duplicate-ii/solutions/61372/)

---

    public boolean containsNearbyDuplicate(int[] nums, int k) {
            Set<Integer> set = new HashSet<Integer>();
            for(int i = 0; i < nums.length; i++){
                if(i > k) set.remove(nums[i-k-1]);
                if(!set.add(nums[i])) return true;
            }
            return false;
     }