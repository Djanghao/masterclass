# Most frequent and second most frequent numbers in odd and even places, O(n)

**Author:** dipendupaul
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4323851/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4323851/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As we have to create a series of two numbers with minimal changes, the first one appearing in all odd places and second one appearing in all even places. Intuitively, we should find out which number appears the most in odd places, and similarly which number appears the most in even places. 
Let's say x appears the most in odd places and y appears the most in even places, then minimal number of changes would be : total length - (count of x in odd places + count of y in even places)

**Special Case:** x == y (most frequent numbers in odd and even are same)
At this moment, we start to see the need of finding out the second most frequent number.
We will either keep the most frequent number in odd places and keep second most frequent number in even places, or vice versa, whichever results into minimal change.   
       
# Approach
<!-- Describe your approach to solving the problem. -->
Hash tables is used to keep the count of each number appearing in odd and also even places. And from there we go on finding the most frequent and second most frequent numbers and their corresponding frequencies.
  
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n), required for hash tables
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumOperations(int[] nums) {
        int n = nums.Length;

        Dictionary<int, int> series1Count = new Dictionary<int, int>();
        Dictionary<int, int> series2Count = new Dictionary<int, int>();

        int series1Len = 0;
        int series1FirstFrequent = -1, series2FirstFrequent = -1;
        int series1FirstFrequentCount = 0, series2FirstFrequentCount = 0, series1SecondFrequentCount = 0, series2SecondFrequentCount = 0;

        for(int i = 0; i < n; i+=2){
            if(series1Count.ContainsKey(nums[i]))
                series1Count[nums[i]]++;
            else series1Count.Add(nums[i], 1);
            
            series1Len++;
        }

        foreach(var kv in series1Count){
            if(kv.Value > series1FirstFrequentCount){
                series1FirstFrequent = kv.Key;
                series1SecondFrequentCount = series1FirstFrequentCount;
                series1FirstFrequentCount = kv.Value;
            }
            else if(kv.Value > series1SecondFrequentCount){
                series1SecondFrequentCount = kv.Value;
            }
        }

        for(int i = 1; i < n; i+=2){
            if(series2Count.ContainsKey(nums[i]))
                series2Count[nums[i]]++;
            else series2Count.Add(nums[i], 1);
        }

        foreach(var kv in series2Count){
            if(kv.Value > series2FirstFrequentCount){
                series2FirstFrequent = kv.Key;
                series2SecondFrequentCount = series2FirstFrequentCount;
                series2FirstFrequentCount = kv.Value;
            }
            else if(kv.Value > series2SecondFrequentCount){
                series2SecondFrequentCount = kv.Value;
            }
        }

        int series2Len = n - series1Len;
        if(series1FirstFrequent == series2FirstFrequent){
            return Math.Min(series1Len - series1FirstFrequentCount + series2Len - series2SecondFrequentCount,
                series1Len - series1SecondFrequentCount + series2Len - series2FirstFrequentCount);
        }
        else{
            return (series1Len - series1FirstFrequentCount) + (series2Len - series2FirstFrequentCount);
        }

    }
}
```