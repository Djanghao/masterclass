# Swift Solution with detailed explanation.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/3229913/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/3229913/)

---

# Approach
1. We create a dictionary called "map" and "ps".
2. We create a variable called "n" and set it to the length of the array.
3. We create an array called "ans" and set it to an array of 0s the length of the array.
4. We iterate through the array, setting the value of i to the index of the array.
5. We create a variable called "value" and set it to the value of the key at the current index of the array in the dictionary "map".
6. If the value of the key at the current index of the array in the dictionary "map" is not nil, we set the value of the variable "times" to the value of the key at the current index of the array in the dictionary "map".
7. If the value of the key at the current index of the array in the dictionary "map" is not nil, we set the value of the variable "value" to the value of the variable "times" multiplied by the value of the variable "i" minus the value of the key at the current index of the array in the dictionary "ps".
8. We set the value of the key at the current index of the array in the dictionary "ans" to the value of the variable "value".
9. We set the value of the key at the current index of the array in the dictionary "map" to the value of the key at the current index of the array in the dictionary "map" plus 1.
10. We set the value of the key at the current index of the array in the dictionary "ps" to the value of the key at the current index of the array in the dictionary "ps" plus the value of the variable "i".
11. We remove all the key-value pairs from the dictionary "map".
12. We remove all the key-value pairs from the dictionary "ps".
13. We create a variable called "itr" and set it to 0.
14. We iterate through the array in reverse, setting the value of i to the index of the array.
15. We create a variable called "value" and set it to the value of the key at the current index of the array in the dictionary "map".
16. If the value of the key at the current index of the array in the dictionary "map" is not nil, we set the value of the variable "times" to the value of the key at the current index of the array in the dictionary "map".
17. If the value of the key at the current index of the array in the dictionary "map" is not nil, we set the value of the variable "value" to the value of the variable "times" multiplied by the value of the variable "itr" minus the value of the key at the current index of the array in the dictionary "ps".
18. We set the value of the key at the current index of the array in the dictionary "ans" to the value of the key at the current index of the array in the dictionary "ans" plus the value of the variable "value".
19. We set the value of the key at the current index of the array in the dictionary "map" to the value of the key at the current index of the array in the dictionary "map" plus 1.
20. We set the value of the key at the current index of the array in the dictionary "ps" to the value of the key at the current index of the array in the dictionary "ps" plus the value of the variable "itr".
21. We set the value of the variable "itr" to the value of the variable "itr" plus 1.
22. We return the dictionary "ans"

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution
{
    func getDistances(_ arr: [Int]) -> [Int]
    {
        var map = [Int: Int]()
        var ps = [Int: Int]()

        var n = arr.count
        var ans = [Int](repeating: 0, count: n)

        for i in 0..<arr.count
        {
            if let value = map[arr[i]]
            {
                let times = value
                let value = (times * i) - ps[arr[i]]!
                ans[i] += value
            }
            map[arr[i]] = (map[arr[i]] ?? 0) + 1
            ps[arr[i]] = (ps[arr[i]] ?? 0) + i
        }

        map.removeAll()
        ps.removeAll()

        var itr = 0
        for i in (0..<n).reversed()
        {
            if let value = map[arr[i]]
            {
                let times = value
                let value = (times * itr) - ps[arr[i]]!
                ans[i] += value
            }
            map[arr[i]] = (map[arr[i]] ?? 0) + 1
            ps[arr[i]] = (ps[arr[i]] ?? 0) + itr
            itr += 1
        }
        return ans
    }
}
```