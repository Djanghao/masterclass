# Short and Simple Java solution (easy to understand)

**Author:** issac3
**Votes:** 415
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/27987/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/27987/)

---

Question wants us to return the length of new array after removing duplicates and that we don't care about what we leave beyond new length , hence we can use `i` to keep track of the position and update the array. 

 
----------


Remove Duplicates from Sorted Array(no duplicates) :

    public int removeDuplicates(int[] nums) {
        int i = 0;
        for(int n : nums)
            if(i < 1 || n > nums[i - 1]) 
                nums[i++] = n;
        return i;
    }


Remove Duplicates from Sorted Array II (allow duplicates up to 2):

    public int removeDuplicates(int[] nums) {
       int i = 0;
       for (int n : nums)
          if (i < 2 || n > nums[i - 2])
             nums[i++] = n;
       return i;
    }