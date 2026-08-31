# Simple and easy-understanding O(n^2) JAVA solution

**Author:** SOY
**Votes:** 213
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/68817/](https://leetcode.com/problems/3sum-smaller/solutions/68817/)

---

    public class Solution {
        int count;
        
        public int threeSumSmaller(int[] nums, int target) {
            count = 0;
            Arrays.sort(nums);
            int len = nums.length;
        
            for(int i=0; i<len-2; i++) {
                int left = i+1, right = len-1;
                while(left < right) {
                    if(nums[i] + nums[left] + nums[right] < target) {
                        count += right-left;
                        left++;
                    } else {
                        right--;
                    }
                }
            }
            
            return count;
        }
    }