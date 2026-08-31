# C# Solution for Single Number III Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/5233389/](https://leetcode.com/problems/single-number-iii/solutions/5233389/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is straightforward: by counting the frequency of each element in the array, we can easily identify the elements that appear exactly once. This is because elements that appear twice will have a frequency of 2, and elements that appear only once will have a frequency of 1.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Count Frequencies:
	\u2022	Use a dictionary to store the frequency of each number as we iterate through the array.
	\u2022	If a number is encountered for the first time, add it to the dictionary with a frequency of 1.
	\u2022	If the number is already in the dictionary, increment its frequency.
2.	Identify Unique Numbers:
	\u2022	Iterate through the dictionary to find the two numbers with a frequency of 1.
	\u2022	Store these numbers in a list and then convert the list to an array for the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is  O(n) , where  n  is the number of elements in the input array. This is because:

\u2022	We iterate through the array once to count the frequencies of the elements.
\u2022	Iterating through the dictionary to find the unique numbers takes  O(n)  time in the worst case, as the number of unique elements can be at most  n .

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this solution is  O(n) . This is because:

\u2022	We use a dictionary to store the count of each number. In the worst case, where all numbers in the array are unique, the dictionary will store  n  elements.

# Code
```
public class Solution {
    public int[] SingleNumber(int[] nums) {
        Dictionary<int, int> frequency = new Dictionary<int, int>();

        // Step 1: Count frequencies
        foreach (int num in nums) {
            if (frequency.ContainsKey(num)) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        }

        // Step 2: Find the two numbers that appear only once
        List<int> result = new List<int>();
        foreach (var pair in frequency) {
            if (pair.Value == 1) {
                result.Add(pair.Key);
            }
        }

        return result.ToArray();
    }
}
```