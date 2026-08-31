# C# Sort and BinarySearch Solution

**Author:** austintaylorx
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2955423/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2955423/)

---

# Code
```
public class Solution {
    public int[] AnswerQueries(int[] nums, int[] queries) {
        Array.Sort(nums);

        int[] answers = new int[queries.Length];

        for(int i = 1; i < nums.Length; ++i){
            nums[i] += nums[i - 1];
        }

        for(int i = 0; i < queries.Length; i++){
            answers[i] = Math.Abs(BinarySearch(nums, queries[i]) + 1);
        }

        return answers;
    }

    public int BinarySearch(int[] nums, int target){
        int min = 0;
        int max = nums.Length - 1;
        int mid = 0;
        while(min <= max){
            mid = (min + max) / 2;
            if(nums[mid] == target) return mid;
            if(target > nums[mid]){
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        return -min - 1;
    }
}
```