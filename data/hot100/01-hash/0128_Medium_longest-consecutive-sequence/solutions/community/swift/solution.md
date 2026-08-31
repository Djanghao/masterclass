# ✅ Simple Swift O(n) Solution | Easy To Understand

**Author:** smthinthewayy
**Votes:** 29
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/3430669/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/3430669/)

---

# Approach
To solve this problem, we can take the following approach:
1. Convert the given array into a `set`. This reduces the time complexity of searching for elements in the array from $$O(n)$$ to $$O(1)$$.
2. Initialize a variable `longestStreak` to `0`, which will store the length of the longest consecutive sequence that we find.
3. Iterate over the elements in the `set`.
4. For each element, check if the `set` contains the previous integer `num - 1`. If it does not, then this `num` is the starting point of a consecutive sequence.
5. Initialize two variables `currentNum` and `currentStreak` to the value of `num` and `1` respectively. `currentStreak` represents the length of the current consecutive sequence that we are examining.
6. While the `set` contains the next integer `currentNum + 1`, increment `currentNum` and `currentStreak`.
7. If the `currentStreak` is greater than the `longestStreak`, update the value of `longestStreak` to `currentStreak`.
8. Repeat steps 4 to 7 for all elements in the `set`.
9. Return the value of `longestStreak`.


# Complexity
The *time complexity* of the given solution is $$O(n)$$, where $$n$$ is the number of elements in the input array.

The *space complexity* of the given solution is $$O(n)$$ where $$n$$ is the number of elements in the input array.

# Code
```
class Solution {
    func longestConsecutive(_ nums: [Int]) -> Int {
        let set = Set(nums)
        var longestStreak = 0

        for num in set {
            if !set.contains(num - 1) {
                var currentNum = num
                var currentStreak = 1

                while set.contains(currentNum + 1) {
                    currentNum += 1
                    currentStreak += 1
                }

                longestStreak = max(longestStreak, currentStreak)
            }
        }

        return longestStreak
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)
