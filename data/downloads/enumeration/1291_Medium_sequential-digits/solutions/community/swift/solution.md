# Cleanest: Time O(1), Memory O(1)

**Author:** Khizanag
**Votes:** 2
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4664870/](https://leetcode.com/problems/sequential-digits/solutions/4664870/)

---

## Intuition
The solution uses a predefined list of all possible sequential digit numbers. It then filters out the ones within the specified range.

## Approach
1. Create a static list, `all`, containing all possible sequential digit numbers.
2. Filter the numbers in the range `[low, high]` from the `all` list.
3. Return the sorted list of valid sequential digit numbers.

## Complexity
- Time complexity: $$O(1)$$ since the solution filters from a predefined list.
- Space complexity: $$O(1)$$ as the predefined list is constant.

## Code
```swift
private let all = [
    12, 23, 34, 45, 56, 67, 78, 89,
    123, 234, 345, 456, 567, 678, 789,
    1234, 2345, 3456, 4567, 5678, 6789,
    12345, 23456, 34567, 45678, 56789,
    123456, 234567, 345678, 456789,
    1234567, 2345678, 3456789,
    12345678, 23456789,
    123456789
]

func sequentialDigits(_ low: Int, _ high: Int) -> [Int] {
    all.filter((low...high).contains)
}
