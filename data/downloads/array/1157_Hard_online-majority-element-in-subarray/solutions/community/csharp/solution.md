# C# | Memory beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 6
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5801564/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5801564/)

---

# Intuition
This problem is about finding an element in a subarray that appears frequently enough to be considered a "majority" element. To solve this efficiently, I need a way to quickly determine how many times each element appears within a specified range of the array.

# Approach
Preprocess the Array: First, I create a dictionary that maps each element to a list of its positions in the array. This allows me to quickly look up where each element appears.

Query the Subarray: For each query, I use binary search on the lists of positions to count how many times each element appears within the specified range. This helps in determining if any element meets the threshold requirement.

# Complexity
- Time complexity:

Preprocessing: O(n log n) for building the position lists.

Querying: O(m log n), where m is the number of distinct elements. This is efficient because binary search on sorted lists is quick.

- Space complexity:
O(n) for storing the positions of each element.

# Code
```csharp []
public class MajorityChecker {
    private readonly Dictionary<int, List<int>> _positions;
    
    public MajorityChecker(int[] arr) {
        _positions = new Dictionary<int, List<int>>();
        
        for (int i = 0; i < arr.Length; i++) {
            if (!_positions.ContainsKey(arr[i])) {
                _positions[arr[i]] = new List<int>();
            }
            _positions[arr[i]].Add(i);
        }
    }
    
    public int Query(int left, int right, int threshold) {
        foreach (var kvp in _positions) {
            int num = kvp.Key;
            var indices = kvp.Value;
            
            int leftIndex = BinarySearch(indices, left);
            int rightIndex = BinarySearch(indices, right + 1) - 1;
            
            if (leftIndex < indices.Count && indices[leftIndex] <= right && rightIndex >= 0) {
                int count = rightIndex - leftIndex + 1;
                if (count >= threshold) {
                    return num;
                }
            }
        }
        return -1;
    }

    private int BinarySearch(List<int> list, int target) {
        int low = 0, high = list.Count;
        while (low < high) {
            int mid = (low + high) / 2;
            if (list[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}

```