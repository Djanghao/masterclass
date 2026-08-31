# O(n) solution using KMP - to find a pattern in given input

**Author:** itsluminous
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4709364/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4709364/)

---

# Intuition
First convert given nums array to array of -1,0,1 by comparing each digit with next digit.
Now, the problem reduces to finding number of occurrences of a pattern in a given string/array

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```csharp
class Solution {
    public int countMatchingSubarrays(int[] nums, int[] pattern) {
        formatNumsArray(nums);                  // convert the nums array to -1, 0, 1 format
        var lps = computeLPS(pattern);          // Build longest prefix suffix array for KMP
        return kmpSearch(nums, pattern, lps);   // now check how many times pattern matches
    }

    private void formatNumsArray(int[] nums){
        var n = nums.length;
        for(var i=0; i<n-1; i++){
            if(nums[i] == nums[i+1]) nums[i] = 0;
            else if(nums[i] > nums[i+1]) nums[i] = -1;
            else nums[i] = 1;
        }
        nums[n-1] = 9;   // any arbitrary number other than -1, 0, 1
    }

    private int[] computeLPS(int[] pattern){
        var n = pattern.length;
        var lps = new int[n];
        int len=0, i=1;     // len is the current longest prefix suffix and i is curr index in pattern
        
        while(i < n){
            if(pattern[i] == pattern[len]){
                len++;
                lps[i] = len;
                i++;
            }
            // two possibilities when there is no match
            else if(len == 0){
                lps[i] = len;   // basically, lps[i] is set to 0
                i++;
            }
            else{
                len = lps[len-1];
            }
        }

        return lps;
    }

    private int kmpSearch(int[] nums, int[] pattern, int[] lps){
        int nLen = nums.length, pLen = pattern.length;
        int nIdx = 0, pIdx = 0;

        var matchCount = 0;
        while(nIdx < nLen){
            if(nums[nIdx] == pattern[pIdx]){
                nIdx++;
                pIdx++;
            }

            // if we reached end of pattern array, then it was a match
            if(pIdx == pLen){
                matchCount++;
                pIdx = lps[pIdx-1];
            }
            else if(nIdx < nLen && nums[nIdx] != pattern[pIdx]){
                // this is where KMP differs vs brute force. 
                // We will skip comparison for 0 to lps[pIdx-1] characters in pattern
                if(pIdx != 0) pIdx = lps[pIdx-1];
                else nIdx++;
            }
        }

        return matchCount;
    }
}
```