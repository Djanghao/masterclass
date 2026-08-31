# max( bits from multiple numbers OR bits from any number not in current number OR num LSH k )

**Author:** dtheriault
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3520474/](https://leetcode.com/problems/maximum-or/solutions/3520474/)

---

- Time complexity: $O(n)$ - we iterate over nums twice
- Space complexity: $O(1)$ - we use constant auxiliary memory with 6 temporary variables
```golang []
func maximumOr(nums []int, k int) int64 {
    // O(n) - determine bits that appear in multiple numbers and those that appear in any number
    appearsInMultiple := 0
    appearsInAny := 0
    for _, num := range nums {
        appearsInMultiple |= appearsInAny & num
        appearsInAny |= num
    }

    // O(n) - determine maximum number we can form by taking
    // bits that appear in multiple numbers, bits that appear
    // in any number that don't appear in current num, and bits
    // we get from LSH of current num by k
    max := int64(appearsInAny)
    for _, num := range nums {
        n := int64(appearsInMultiple) | int64(appearsInAny & ^num) | int64(num) << k
        if n > max {
            max = n
        }
    }

    return max
}
```
```python3 []
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        # O(n) - determine bits that appear in multiple numbers and those
        # that appear in any number
        appearsInMultiple = 0
        appearsInAny = 0
        for num in nums:
            appearsInMultiple |= appearsInAny & num
            appearsInAny |= num

        # O(n) - determine maximum number we can form by taking
        # bits that appear in multiple numbers, bits that appear
        # in any number that don't appear in current num, and bits
        # we get from LSH of current num by k
        maximum = appearsInAny
        for num in nums:
            maximum = max(maximum, appearsInMultiple | appearsInAny & ~num | num << k)

        return maximum
```
```typescript []
const maximumOr = (nums: number[], k: number): number => {
    // O(n) - determine bits that appear in multiple numbers and those
    // that appear in any number
    let appearsInMultiple = 0n, appearsInAny = 0n
    for (let num of nums) {
        appearsInMultiple |= appearsInAny & BigInt(num)
        appearsInAny |= BigInt(num)
    }

    // O(n) - determine maximum number we can form by taking
    // bits that appear in multiple numbers, bits that appear
    // in any number that don't appear in current num, and bits
    // we get from LSH of current num by k
    let maximum = appearsInAny
    for (let num of nums) {
        const n = appearsInMultiple | appearsInAny & ~BigInt(num) | BigInt(num) << BigInt(k)
        if (n > maximum) {
            maximum = n
        }
    }

    return Number(maximum)
}
```
```javascript []
const maximumOr = (nums, k) => {
    // O(n) - determine bits that appear in multiple numbers and those
    // that appear in any number
    let appearsInMultiple = 0n, appearsInAny = 0n
    for (let num of nums) {
        appearsInMultiple |= appearsInAny & BigInt(num)
        appearsInAny |= BigInt(num)
    }

    // O(n) - determine maximum number we can form by taking
    // bits that appear in multiple numbers, bits that appear
    // in any number that don't appear in current num, and bits
    // we get from LSH of current num by k
    let maximum = appearsInAny
    for (let num of nums) {
        const n = appearsInMultiple | appearsInAny & ~BigInt(num) | BigInt(num) << BigInt(k)
        if (n > maximum) {
            maximum = n
        }
    }

    return Number(maximum)
}
```

Solutions for other problems in biweekly contest 104:

- [2678. Number of Senior Citizens
](/problems/number-of-senior-citizens/solutions/3520347/go-extract-11th-12th-character-and-check-if-60/)
- [2679. Sum in a Matrix
](/problems/sum-in-a-matrix/solutions/3520365/go-sort-rows-in-onm-log-m-time-then-determine-max-per-column/)