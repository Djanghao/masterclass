# Swift Solution.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3331597/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3331597/)

---

# Approach
1. Create a map, where the key is the remainder of the number divided by value, and the value is the number of times that remainder appears.
2. Loop through the numbers in the array.
3. If the remainder of the number divided by value is negative, add it to the map.
4. Otherwise, add the remainder to the map.
5. Set the index to 0.
6. Loop through the map until the map is empty.
7. If the index divided by value is in the map, decrement the value by 1.
8. Otherwise, return the index.
9. Increment the index by 1.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution
{
    func findSmallestInteger(_ nums: [Int], _ value: Int) -> Int
    {
        var map = [Int: Int]()
        for num in nums
        {
            if num % value < 0
            {
                map[num % value + value, default: 0] += 1
            }
            else
            {
                map[num % value, default: 0] += 1
            }
        }
        var index = 0
        while true
        {
            if let count = map[index % value]
            {
                map[index % value] = count - 1
                if map[index % value] == 0
                {
                    map.removeValue(forKey: index % value)
                }
            }
            else
            {
                return index
            }
            index += 1
        }
    }
}
```