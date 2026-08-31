# Simple O(N) Java Solution Using Insert Index

**Author:** Kurteck
**Votes:** 1118
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/72011/](https://leetcode.com/problems/move-zeroes/solutions/72011/)

---

 
    // Shift non-zero values as far forward as possible
    // Fill remaining space with zeros

    public void moveZeroes(int[] nums) {
        if (nums == null || nums.length == 0) return;        

        int insertPos = 0;
        for (int num: nums) {
            if (num != 0) nums[insertPos++] = num;
        }        

        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }