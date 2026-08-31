# Ruby -- video explanation + simple & readable solution

**Author:** akejriwal1
**Votes:** 3
**Link:** [https://leetcode.com/problems/3sum/solutions/3100089/](https://leetcode.com/problems/3sum/solutions/3100089/)

---

# Intuition
Explanation - https://www.youtube.com/watch?v=jzZsG8n2R9A&ab_channel=NeetCode

# Approach
Iterate over a sorted array -- use index value as value a, use two pointers to determine value b and value c.

# O(n^2) time complexity

# O(n) space complexity * depends on implementation of sort! or it's O(1) for array 

```
def three_sum(nums)
    output = []
    return output if nums.length < 3

    nums.sort!

    nums.each_with_index do |num, index|
        next if index > 0 && num == nums[index - 1]

        start_pointer = index + 1
        end_pointer = nums.length - 1

        while start_pointer < end_pointer
            summation = nums[index] + nums[start_pointer] + nums[end_pointer]

            if summation == 0
                output << [nums[index], nums[start_pointer], nums[end_pointer]]
                start_pointer += 1
                start_pointer += 1 while nums[start_pointer] == nums[start_pointer - 1] && start_pointer < end_pointer
            elsif summation < 0
                start_pointer += 1
            elsif summation > 0
                end_pointer -= 1
            end
        end
    end

    output
end
```

