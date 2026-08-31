# easy solutions in different languages

**Author:** sayedadinan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5233730/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5233730/)

---

# Intuition
```Dart []
class Solution {
  int maximizeSum(List<int> nums, int k) {
    nums.sort((a, b) => b.compareTo(a));
    int maxElement = nums[0];
    int sum = 0;
    for (int i = 0; i < k; i++) {
      sum += maxElement;
      maxElement++;
    }

    return sum;
  }
}
```
```python []
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        maxElement=nums[0]
        count=0
        for i in range(k):
            count+=maxElement
            maxElement+=1
        return count
```
```Swift []
class Solution {
    func maximizeSum(_ nums: [Int], _ k: Int) -> Int {
        let sortedNums = nums.sorted(by: >)
        var maxElement = sortedNums[0]
        var sum = 0   
        for _ in 0..<k {
            sum += maxElement
            maxElement += 1
        }    
        return sum 
    }
}
```
```Go []
func maximizeSum(nums []int, k int) int {
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	maxElement := nums[0]
	sum := 0
	for i := 0; i < k; i++ {
		sum += maxElement
		maxElement++
	}
	return sum
}
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        maxElement=nums[0]
        count=0
        for i in range(k):
            count+=maxElement
            maxElement+=1
        return count
```