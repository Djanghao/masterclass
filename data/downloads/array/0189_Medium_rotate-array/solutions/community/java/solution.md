# Easy to read Java solution

**Author:** danny6514
**Votes:** 1705
**Link:** [https://leetcode.com/problems/rotate-array/solutions/54250/](https://leetcode.com/problems/rotate-array/solutions/54250/)

---

I really don't like those _*something little*_ line solutions as they are incredibly hard to read. Below is my solution.

    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
    
    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }