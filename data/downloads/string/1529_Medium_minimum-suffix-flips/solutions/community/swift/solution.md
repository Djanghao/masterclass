# [Swift, C++, Python3] Simple solution with explanation, 5 lines.

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/6130728/](https://leetcode.com/problems/minimum-suffix-flips/solutions/6130728/)

---

# Intuition
Just count different segments with Zeroes and Ones.
If we start from 0, no need to count this segment because we have Zero initially.

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# C++ Code
```cpp []
class Solution {
public:
    int minFlips(string target) {
        int count = target[0] == '0' ? 0 : 1;

        for (int i = 1; i < target.size(); ++i)
            if (target[i] != target[i-1])
                count++;

        return count;
    }
};
```

# Swift Code
```swift []
class Solution {
    func minFlips(_ target: String) -> Int {
        var arr = Array(target)
        var count = arr[0] == "0" ? 0 : 1

        for i in 1 ..< arr.count {
            if (arr[i-1] != arr[i]) {
                count += 1
            }
        }

        return count
    }
}
```

# Python3 Code
```python3 []
class Solution:
    def minFlips(self, target: str) -> int:
        count = 0 if target[0] == "0" else 1

        for i in range(1, len(target)):
            if (target[i-1] != target[i]):
                count += 1

        return count
```