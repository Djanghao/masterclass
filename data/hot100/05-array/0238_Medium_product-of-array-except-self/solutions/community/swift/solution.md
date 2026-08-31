# ✅ 2 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 56
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/3426752/](https://leetcode.com/problems/product-of-array-except-self/solutions/3426752/)

---

# First solution

## Approach
This approach to solving the problem involves using three arrays: `prefix`, `suffix`, and `result`. The `prefix` array is used to store the product of all elements before the current element, starting from the first element. The `suffix` array is used to store the product of all elements after the current element, starting from the last element. The `result` array is used to store the product of all elements excluding the current element, which is obtained by multiplying the corresponding elements in the `prefix` and `suffix` arrays.

To be specific, the `prefix` array is initialized with all 1's, and each element is updated by multiplying the previous element in the array with the corresponding element in the `nums` array. This is done by iterating through the `nums` array from the second element to the last element.

The `suffix` array is initialized with all 1's as well, and each element is updated by multiplying the next element in the array with the corresponding element in the `nums` array. This is done by iterating through the `nums` array in reverse order, from the second-to-last element to the first element.

Finally, the `result` array is initialized with all 0's, and each element is updated by multiplying the corresponding elements in the `prefix` and `suffix` arrays. This is done by iterating through the result array and accessing the corresponding elements in the `prefix` and `suffix` arrays.

## Complexity
This approach has a *time complexity* of $$O(n)$$ and a *space complexity* of $$O(n)$$, where $$n$$ is the length of the input array `nums`.

## Code
```swift
class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        var prefix = Array(repeating: 1, count: nums.count)
        var suffix = Array(repeating: 1, count: nums.count)
        var result = Array(repeating: 0, count: nums.count)

        for i in 1 ..< nums.count {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        for i in (0 ..< nums.count - 1).reversed() {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for i in 0 ..< result.count {
            result[i] = prefix[i] * suffix[i]
        }

        return result
    }
}
```


---

# Second solution

## Approach
This approach to solving the problem also involves using two arrays: `result` and `suffix`, but it **optimizes space** usage by only using a single `suffix` variable instead of a `suffix` array. The `result` array is used to store the product of all elements before the current element, starting from the first element, just like in the previous approach. The `suffix` variable is used to store the product of all elements after the current element, starting from the last element, but it is updated in reverse order.

To be specific, the `result` array is initialized with all 1's, and each element is updated by multiplying the previous element in the array with the corresponding element in the `nums` array. This is done by iterating through the nums array from the second element to the last element.

Then, the `suffix` variable is initialized with the value `1` and updated in reverse order by multiplying it with the corresponding element in the `nums` array and then updating the corresponding element in the `result` array with the product of the `prefix` and `suffix`. This is done by iterating through the `nums` array in reverse order, from the last element to the first element.

## Complexity
This approach also has a *time complexity* of $$O(n)$$ and a *space complexity* of $$O(1)$$, where $$n$$ is the length of the input array `nums`. (The output array does not count as extra space for space complexiy analysis)

## Code
```swift
class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        var result = Array(repeating: 1, count: nums.count)

        for i in 1 ..< nums.count {
            result[i] = result[i - 1] * nums[i - 1]
        }

        var suffix = 1
        for i in (0 ..< nums.count).reversed() {
            result[i] *= suffix
            suffix *= nums[i]
        }

        return result
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)



