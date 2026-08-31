# C# Solution for Make Two Arrays Equal By Reversing Subarrays Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5578655/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5578655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key intuition is that to transform arr into target using subarray reversals, both arrays must have the same elements with the same frequencies. If the frequency of each element in arr matches the frequency of each element in target, then it is possible to rearrange arr to match target through a series of reversals.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Check Lengths: Ensure target and arr have the same length. If not, return false immediately.
2.	Count Frequencies:
	\u2022	Iterate through target and populate targetFreq dictionary with element counts.
	\u2022	Iterate through arr and populate arrFreq dictionary with element counts.
3.	Compare Frequencies:
	\u2022	For each element in targetFreq, check if it exists in arrFreq with the same count.
	\u2022	If any element\u2019s frequency does not match, return false.
	\u2022	If all elements\u2019 frequencies match, return true.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Frequency Counting:
	\u2022	Counting frequencies for both target and arr takes O(n) each, where n is the length of the arrays.
\u2022	Comparison:
	\u2022	Comparing the frequency dictionaries takes O(n) in the worst case if every element is unique.

Total time complexity: O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Dictionaries:
	\u2022	The space needed for the frequency dictionaries is O(n) in the worst case when all elements are unique.

Total space complexity: O(n).

# Code
```
public class Solution {
    public bool CanBeEqual(int[] target, int[] arr) {
        // Check if both arrays have the same length
        if (target.Length != arr.Length)
            return false;
        
        // Frequency counters
        Dictionary<int, int> targetFreq = new Dictionary<int, int>();
        Dictionary<int, int> arrFreq = new Dictionary<int, int>();
        
        // Populate frequency counters for target
        foreach (int num in target) {
            if (targetFreq.ContainsKey(num)) {
                targetFreq[num]++;
            } else {
                targetFreq[num] = 1;
            }
        }
        
        // Populate frequency counters for arr
        foreach (int num in arr) {
            if (arrFreq.ContainsKey(num)) {
                arrFreq[num]++;
            } else {
                arrFreq[num] = 1;
            }
        }
        
        // Compare frequency counters
        foreach (var kvp in targetFreq) {
            int num = kvp.Key;
            int countTarget = kvp.Value;
            
            if (!arrFreq.ContainsKey(num) || arrFreq[num] != countTarget) {
                return false;
            }
        }
        
        return true;
    }
}
```