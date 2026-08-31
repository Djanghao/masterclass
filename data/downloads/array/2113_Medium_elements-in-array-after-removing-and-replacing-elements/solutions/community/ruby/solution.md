# Ruby Solution - O(n)

**Author:** ryp0313
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/2077446/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/2077446/)

---

```
# @param {Integer[]} nums
# @param {Integer[][]} queries
# @return {Integer[]}
def element_in_nums(nums, queries)
    result = []
    queries.each do |arr|
        odd = true
        if (arr[0]/nums.length)%2 == 0
            odd = false
        end
        if !odd 
            i = arr[0]%nums.length + arr[1]
            if i < nums.length
                result.push(nums[i])
            else
                result.push(-1)
            end
        else
            edge = arr[0]%nums.length - 1
            if arr[1] >= 0 && arr[1] <= edge
                result.push(nums[arr[1]])
            else
                result.push(-1)
            end
        end
    end
    return result
end