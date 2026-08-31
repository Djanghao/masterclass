# Simple solution in C# using binary search method

**Author:** samy-timalsina
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/6045541/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/6045541/)

---



# Complexity
- Time complexity:
  O(NLog(M))

where N is the length of an array nums, and M is the max element in the array nums.

- Space complexity:
  O(1)

# Code
```csharp []
public class Solution {
    public int SmallestDivisor(int[] nums, int threshold) {
        int start = 1;
        int end = (int)1e6;
        int ans = (int)1e6;
        while(start <= end){
            int mid = (start + end)/2;
            
            int total = 0;
            foreach(int num in nums){
                total += (int)Math.Ceiling((double)num/(double)mid);
            }

            if(total <= threshold){
                ans = Math.Min(ans, mid);
                end = mid - 1;
            }
            else start = mid + 1;
        }

        return ans;
    }
}
```