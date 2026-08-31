# ✅ Simple Swift Solution | Easy To Understand

**Author:** smthinthewayy
**Votes:** 13
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/3437444/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/3437444/)

---

# Approach
The solution provided uses a two-pointer approach where a `low` pointer and a `high` pointer are initialized at the start and end of the array respectively. 

Then, a while loop is used to iterate through the array, and in each iteration, the `sum` of the values at the `low` and `high` pointers is computed. If the `sum` is equal to the `target`, the indices of the numbers are returned as an integer array. If the `sum` is less than the `target`, the `low` pointer is incremented to move towards larger values, and if the `sum` is greater than the `target`, the `high` pointer is decremented to move towards smaller values.

This approach works because the array is sorted, and by moving the `low` and `high` pointers based on the `sum` of their values, we can find the two numbers that add up to the `target`. Since the problem statement guarantees that there is exactly one solution, the while loop will always terminate with the correct indices being returned.

# Complexity
This solution has a *time complexity* of $$O(n)$$ since we only make a single pass through the array, and a *space complexity* of $$O(1)$$ since we are only using a constant amount of extra space to store the `low` and `high` pointers.

# Code
```swift
class Solution {
    func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
        var low = 0
        var high = numbers.count - 1

        while low <= high {
            var sum = numbers[low] + numbers[high]
            if sum == target {
                return [low + 1, high + 1]
            } else if sum < target {
                low += 1
            } else {
                high -= 1
            }
        }

        return []
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)
