# Java - Easy to Understand - Prefix and suffix sum - O(N)

**Author:** mtuzmen
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1499953/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1499953/)

---

I have been trying to solve problems as if I am in a real interview. Here is my quick solution in case it might be useful to you. Wish you good luck.

    public int findMiddleIndex(int[] nums) {
        if (nums == null || nums.length == 0) return -1;

        int sum = 0; 
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i]; 
        }
        
        int prefix = 0, suffix = 0; 
        for (int i = 0; i < nums.length; i++) {
            suffix = sum - prefix;
            prefix += nums[i]; 
            if (prefix == suffix) return i;
        }
        return -1;        
    }