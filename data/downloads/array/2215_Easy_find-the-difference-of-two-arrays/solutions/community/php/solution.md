# Set Theory - Symmetric Difference

**Author:** dtheriault
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3479911/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3479911/)

---

```typescript []
const findDifference = (nums1: number[], nums2: number[]): number[][] => {
    const A = new Set(nums1), B = new Set(nums2)
    return [
        Array.from(A).filter(v => !B.has(v)),
        Array.from(B).filter(v => !A.has(v)),
    ]
}
```
```javascript []
const findDifference = (nums1, nums2) => {
    const A = new Set(nums1), B = new Set(nums2)
    return [
        Array.from(A).filter(v => !B.has(v)),
        Array.from(B).filter(v => !A.has(v)),
    ]
}
```
```php []
class Solution
{
    public function findDifference(array $nums1, array $nums2): array 
    {
        $A = array_flip($nums1);
        $B = array_flip($nums2);
        return [[...array_keys(array_diff_key($A, $B))], [...array_keys(array_diff_key($B, $A))]];
    }
}
```
```python3 []
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        return [set(nums1) - set(nums2), set(nums2) - set(nums1)]
```
```golang []
func findDifference(nums1 []int, nums2 []int) [][]int {
    num1map, num2map := make(map[int]bool), make(map[int]bool)
    for _, num := range nums1 {
        num1map[num] = true
    }
    for _, num := range nums2 {
        num2map[num] = true
    }
    num1exclusive, num2exclusive := make([]int, 0), make([]int, 0)
    for num := range num1map {
        if _, ok := num2map[num]; !ok {
            num1exclusive = append(num1exclusive, num)
        }
    }
    for num := range num2map {
        if _, ok := num1map[num]; !ok {
            num2exclusive = append(num2exclusive, num)
        }
    }
    return [][]int{num1exclusive, num2exclusive}
}
```