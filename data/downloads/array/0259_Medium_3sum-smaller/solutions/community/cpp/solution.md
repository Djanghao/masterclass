# My O(n^2) c++ solution

**Author:** MichaelJiang
**Votes:** 4
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/68856/](https://leetcode.com/problems/3sum-smaller/solutions/68856/)

---

    class Solution {
    public:
        int threeSumSmaller(vector<int>& nums, int target) {
            sort(nums.begin(),nums.end());
            if(nums.size()<3)
            return 0;
            int start = 0, end = nums.size()-1;
            int count = 0;
            while(start<end){
                int a = nums[start];
                int left = start+1, right = end;
                while(left<right){
                    int b = nums[left], c = nums[right];
                    if(a+b+c >= target){
                        right--;
                    }
                    else if(a+b+c < target){
                        count = count + right - left;
                        left++;
                    }
                }
                start++;
            }
            return count;
        }
    };