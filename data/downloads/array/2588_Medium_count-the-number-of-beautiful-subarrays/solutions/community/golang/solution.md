# Go/Python O(n) time | O(1) space

**Author:** vtalantsev
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3288318/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3288318/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func beautifulSubarrays(nums []int) int64 {
    counter := make(map[int]int)
    counter[0] = 1
    answer := 0
    xor := 0
    for _,num := range(nums){
        xor^=num
        answer+=counter[xor]
        counter[xor]+=1
    }
    return int64(answer)
}
```
```python []
class Solution:
    def beautifulSubarrays(self, nums: List[int]) -> int:
        counter = defaultdict(int)
        counter[0] = 1
        answer = 0
        xor = 0
        for num in nums:
            xor^=num
            answer+=counter[xor]
            counter[xor]+=1
        return answer
```