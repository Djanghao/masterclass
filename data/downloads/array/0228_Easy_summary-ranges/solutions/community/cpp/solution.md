# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 78
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/3627119/](https://leetcode.com/problems/summary-ranges/solutions/3627119/)

---

# An Upvote will be encouraging \uD83D\uDC4D

# Approach and Intuition

- First, we check if the input list nums is empty. If it is, we return an empty list since there are no ranges to summarize.

- Initialize an empty list called ranges to store the summarized ranges.

- Set the start variable to the first element of the nums list. This will be the starting point of the current range.

- Iterate over the nums list starting from the second element (index 1) using a for loop.

- For each iteration, compare the current element nums[i] with the previous element nums[i-1]. If they are not consecutive (i.e., nums[i] is not equal to nums[i-1] + 1), it means the current range has ended.

- In this case, we need to add the summarized range to the ranges list. We check if the start value is equal to the previous element (nums[i-1]). If they are equal, it means the range consists of only one number. So we append the string representation of start to the ranges list.

- If the start value is different from the previous element, it means the range has more than one number. In this case, we append the string representation of start concatenated with "->" and the string representation of the previous element (nums[i-1]) to the ranges list.

- After adding the summarized range, we update the start variable to the current element (nums[i]) since it will be the starting point of the next range.

- After the loop, we need to handle the last range. We check if the start value is equal to the last element of nums (nums[-1]). If they are equal, it means the last range consists of only one number. So we append the string representation of start to the ranges list.

- If the start value is different from the last element, it means the last range has more than one number. In this case, we append the string representation of start concatenated with "->" and the string representation of the last element (nums[-1]) to the ranges list.

- Finally, we return the ranges list, which contains the summarized ranges as strings.

The intuition behind this approach is to iterate over the nums list and identify consecutive sequences of numbers. Whenever a sequence is interrupted, we add the summarized range to the ranges list. By keeping track of the starting point of each range (start variable), we can determine whether a range consists of a single number or multiple numbers. The code handles the first and last ranges separately to ensure all ranges are summarized correctly.

```Python []
class Solution:
    def summaryRanges(self, nums):
        if not nums:
            return []

        ranges = []
        start = nums[0]

        for i in range(1, len(nums)):
            if nums[i] != nums[i-1] + 1:
                if start == nums[i-1]:
                    ranges.append(str(start))
                else:
                    ranges.append(str(start) + "->" + str(nums[i-1]))
                start = nums[i]

        # Handle the last range
        if start == nums[-1]:
            ranges.append(str(start))
        else:
            ranges.append(str(start) + "->" + str(nums[-1]))

        return ranges
```
```Java []

class Solution {
    public List<String> summaryRanges(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new ArrayList<>();
        }

        List<String> ranges = new ArrayList<>();
        int start = nums[0];

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1] + 1) {
                if (start == nums[i - 1]) {
                    ranges.add(Integer.toString(start));
                } else {
                    ranges.add(start + "->" + nums[i - 1]);
                }
                start = nums[i];
            }
        }

        // Handle the last range
        if (start == nums[nums.length - 1]) {
            ranges.add(Integer.toString(start));
        } else {
            ranges.add(start + "->" + nums[nums.length - 1]);
        }

        return ranges;
    }
}

```
```C++ []

class Solution {
public:
    std::vector<std::string> summaryRanges(std::vector<int>& nums) {
        if (nums.empty()) {
            return {};
        }

        std::vector<std::string> ranges;
        int start = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[i - 1] + 1) {
                if (start == nums[i - 1]) {
                    ranges.push_back(std::to_string(start));
                } else {
                    ranges.push_back(std::to_string(start) + "->" + std::to_string(nums[i - 1]));
                }
                start = nums[i];
            }
        }

        // Handle the last range
        if (start == nums.back()) {
            ranges.push_back(std::to_string(start));
        } else {
            ranges.push_back(std::to_string(start) + "->" + std::to_string(nums.back()));
        }

        return ranges;
    }
};
```
# An Upvote will be encouraging \uD83D\uDC4D