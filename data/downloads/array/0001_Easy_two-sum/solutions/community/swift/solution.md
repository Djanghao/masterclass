# ✅ 3 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 150
**Link:** [https://leetcode.com/problems/two-sum/solutions/3419246/](https://leetcode.com/problems/two-sum/solutions/3419246/)

---

# First solution using Brute Force

## Approach

The approach used in this solution is a brute force approach which involves iterating through each element of the array and checking if there is another element in the array that can be added to it to get the target value.

The function starts by getting the length of the input array. It then iterates through each element of the array using a nested loop. The outer loop iterates through the array from the first element to the second last element. The inner loop iterates through the array from the next element after the current outer loop index to the last element of the array.

For each iteration of the inner loop, the function checks if the sum of the current element and the element pointed to by the inner loop index is equal to the target value. If it is, the function returns an array of the two indices.

If no two elements in the array add up to the target value, the function returns an empty array.

## Complexity

Although this approach is simple and easy to understand, it has a *time complexity* of $$O(n^2)$$ which is not very efficient for large input arrays.

The *space complexity* of the function is $$O(1)$$.

## Code
```swift
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let n = nums.count

        for i in 0 ..< n {
            for j in i + 1 ..< n {
                if nums[i] + nums[j] == target {
                    return [i, j]
                }
            }
        }
    
        return []
    }
}
```

---

# Second solution using Dictionary

## Approach

This approach to solving the problem uses a dictionary to keep track of the difference between the target and each element in the input array. 

The function first initializes an empty dictionary called `dict`. 

Then, it loops through the array using the `enumerated()` method to get both the `index` and `value` of each element in the array. For each element, it checks if the difference between the `target` and the element is already in the dictionary. If it is, that means the current element plus the element at the index in the dictionary adds up to the `target`, so it returns the indices of those two elements. If the difference is not in the dictionary, it adds the difference as a key and the `index` as a value to the dictionary. 

If the loop is completed and no two elements in the array add up to the target, the function returns an empty array. 

## Complexity

Overall, this approach has a time complexity of $$O(n)$$ because it only needs to loop through the array once, and a space complexity of $$O(n)$$ because it needs to store the dictionary.

## Code
```swift
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int: Int]()
        
        for (index, value) in nums.enumerated() {
            if let addent = dict[value] {
                return [addent, index]
            } else {
                dict[target - value] = index
            }
        }
        
        return []
    }
}
```

---

# Third solution using Two Pointer

## Approach

The approach used in this solution is a two-pointer approach. The given array of integers `nums` is first sorted in ascending order in the line `let sortedNums = nums.sorted()`.

After sorting, two pointers `left` and `right` are initialized at the beginning and end of the sorted array respectively. The pointers are then moved inward from both ends towards the middle of the array while checking whether the sum of the values at these pointers is equal to the target value.

If the sum of the values at the `left` and `right` pointers is equal to the `target` value, the indices of these values in the initial unsorted array are returned. If the sum is less than the `target` value, the `left` pointer is moved one step to the `right`. If the sum is greater than the `target` value, the `right` pointer is moved one step to the `left`.

This process of incrementing and decrementing the pointers continues until the sum of the values at the pointers is equal to the `target` value, or the pointers meet in the middle and there are no more values to check.

## Complexity

The time complexity of this approach is $$O(n^2)$$.

The space complexity is $$O(n)$$ due to the creation of a new sorted array.

## Code
```
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let sortedNums = nums.sorted()
        var left = 0
        var right = nums.count - 1

        while left < right {
            let sum = sortedNums[left] + sortedNums[right]
            if sum == target {
                if let index1 = nums.firstIndex(of: sortedNums[left]),
                   let index2 = nums.lastIndex(of: sortedNums[right]) {
                return [index1, index2]
                }
            } else if sum < target {
                left += 1
            } else {
                right -= 1
            }
        }

        return []
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)


