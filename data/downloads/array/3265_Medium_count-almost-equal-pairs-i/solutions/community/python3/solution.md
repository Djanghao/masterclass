# Easy Video Solution (Critical Thinking )🔥 || How to 🤔 in Interview || Simulation

**Author:** ayushnemmaniwar12
**Votes:** 23
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5687053/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5687053/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you make equal 



***Easy Video Explanation***

https://youtu.be/-EHuHxskvJ0
    

# Code


```C++ []
class Solution {
    
public:
   bool check(int num1, int num2) {
        string first = to_string(num1);
        string second = to_string(num2);
      
        // Pad the shorter string with leading zeros
        while(first.length() < second.length()) first =  "0" + first;
        while(second.length() < first.length()) second = "0" + second;

        int diffCount = 0;
        int firstMismatch = -1, secondMismatch = -1;

        for (int i = 0; i < first.length(); i++) {
            if (first[i] != second[i]) {
                diffCount++;
                if (diffCount == 1) {
                    firstMismatch = i;
                } else if (diffCount == 2) {
                    secondMismatch = i;
                } else {
                    return false;
                }
            }
        }

        // If there were exactly two mismatches, check if swapping makes the strings equal
        if (diffCount == 2) {
            swap(first[firstMismatch], first[secondMismatch]);
        }

        return first == second;
    }

    int countPairs(vector<int>& nums) {
        int count = 0;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j] || check(nums[i], nums[j])) {
                    count++;
                }
            }
        }
        return count;
    }
};
```
```python []
class Solution:
    def check(self, num1, num2):
        first = str(num1)
        second = str(num2)

        # Pad the shorter string with leading zeros
        while len(first) < len(second):
            first = "0" + first
        while len(second) < len(first):
            second = "0" + second

        diff_count = 0
        first_mismatch = -1
        second_mismatch = -1

        for i in range(len(first)):
            if first[i] != second[i]:
                diff_count += 1
                if diff_count == 1:
                    first_mismatch = i
                elif diff_count == 2:
                    second_mismatch = i
                else:
                    return False

        # If there were exactly two mismatches, check if swapping makes the strings equal
        if diff_count == 2:
            first = list(first)
            first[first_mismatch], first[second_mismatch] = first[second_mismatch], first[first_mismatch]
            first = ''.join(first)

        return first == second

    def count_pairs(self, nums):
        count = 0
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] == nums[j] or self.check(nums[i], nums[j]):
                    count += 1
        return count

# Example usage:
sol = Solution()
nums = [123, 321, 213, 132, 231, 312]
print("Number of pairs:", sol.count_pairs(nums))  # Example output

```
```Java []
import java.util.*;

class Solution {

    public boolean check(int num1, int num2) {
        String first = String.valueOf(num1);
        String second = String.valueOf(num2);

        // Pad the shorter string with leading zeros
        while (first.length() < second.length()) first = "0" + first;
        while (second.length() < first.length()) second = "0" + second;

        int diffCount = 0;
        int firstMismatch = -1, secondMismatch = -1;

        for (int i = 0; i < first.length(); i++) {
            if (first.charAt(i) != second.charAt(i)) {
                diffCount++;
                if (diffCount == 1) {
                    firstMismatch = i;
                } else if (diffCount == 2) {
                    secondMismatch = i;
                } else {
                    return false;
                }
            }
        }

        // If there were exactly two mismatches, check if swapping makes the strings equal
        if (diffCount == 2) {
            char[] firstArray = first.toCharArray();
            char temp = firstArray[firstMismatch];
            firstArray[firstMismatch] = firstArray[secondMismatch];
            firstArray[secondMismatch] = temp;
            first = new String(firstArray);
        }

        return first.equals(second);
    }

    public int countPairs(List<Integer> nums) {
        int count = 0;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (Objects.equals(nums.get(i), nums.get(j)) || check(nums.get(i), nums.get(j))) {
                    count++;
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        List<Integer> nums = Arrays.asList(123, 321, 213, 132, 231, 312);
        System.out.println("Number of pairs: " + sol.countPairs(nums));  // Example output
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1) No extra space is used

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00