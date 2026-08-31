# ✅ 3 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 65
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/3419018/](https://leetcode.com/problems/contains-duplicate/solutions/3419018/)

---

# First solution using Set

## Approach
This approach to solving the problem uses the property of sets in Swift that they cannot contain duplicates. Therefore, if we convert the given integer array `nums` to a set using `Set(nums)`, it will automatically remove any duplicate elements from `nums`. 

If there are no duplicates in `nums`, the `count` of the set will be equal to the `count` of the original array, so `nums.count == Set(nums).count` will be `true`, and the function will return `false`. 

However, if there are duplicates in `nums`, the count of the set will be less than the count of the original array, so `nums.count != Set(nums).count` will be `true`, and the function will return `true`.

## Complexity
The time complexity of this approach is $$O(n)$$, where $$n$$ is the number of elements in the input array `nums`.

The space complexity of this approach is also $$O(n)$$, as the size of the set `Set(nums)` will be at most $$n$$ if there are no duplicates.

Therefore, this approach has *linear time* and *space complexity*, which is efficient for an array of a moderate size.

## Code
```swift
class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        nums.count != Set(nums).count
    }
}
```

---

# Second solution using Dictionary

## Approach
This approach uses a dictionary to keep track of the frequency of each element in the input array.

The function initializes an empty dictionary dict to keep track of the frequency of each element. It then loops through each element in the input array `nums`. For each element, it checks if the element is already in the dictionary or not. If the element is already in the dictionary, it means that it appears more than once in the array, so the function returns `true`. Otherwise, it adds the element to the dictionary with a value of `1`.

If the function has looped through all the elements in the array without finding any duplicates, it means that every element is distinct, so the function returns `false`.

## Complexity
This approach has a time complexity of $$O(n)$$ because it loops through each element in the array exactly once, and a space complexity of $$O(n)$$ because it creates a dictionary with at most $$n$$ key-value pairs, where $$n$$ is the length of the input array.

## Code
```swift
class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var dict = [Int: Int]()

        for num in nums {
            if dict[num] != nil {
                return true
            } else {
                dict[num] = 1
            }
        }

        return false
    }
}
```

---

# Third solution using Sorting

## Approach
The solution approach first sorts the given array `nums` using the `sorted()` method which arranges the elements in *ascending* order. Sorting the array makes it easier to identify duplicates as they will be placed next to each other after sorting.

Then, the function iterates over the sorted array using a for-loop from the first element until the second last element. Within the loop, it compares the current element with the next element in the array. If they are equal, it means that there is a duplicate in the array and the function returns `true`.

If the for-loop completes its iteration without finding any duplicates, the function returns `false`, indicating that there are no duplicate elements in the array.

## Complexity
This approach has a time complexity of $$O(n \\cdot \\log n)$$ due to the sorting operation, where $$n$$ is the size of the input array.

The space complexity of the function is $$O(n)$$ due to the creation of a sorted version of the input array.

## Code
```swift
class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        let sortedNums = nums.sorted()

        for i in 0 ..< sortedNums.count - 1 {
            if sortedNums[i] == sortedNums[i + 1] {
                return true
            }
        }

        return false
    }
}
```

# Upvote ^_^

![upvote.png](./images/0.png)

