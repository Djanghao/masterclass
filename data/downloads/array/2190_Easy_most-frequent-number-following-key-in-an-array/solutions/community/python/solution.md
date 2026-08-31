# Python - Multiple Solutions + One-Liners | Clean and Simple

**Author:** domthedeveloper
**Votes:** 8
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1924231/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1924231/)

---

**Solution - Count by hand**:
```
class Solution:
    def mostFrequent(self, nums, key):
        counts = {}
        
        for i in range(1,len(nums)):
            if nums[i-1]==key:
                if nums[i] not in counts: counts[nums[i]] = 1
                else: counts[nums[i]] += 1
        
        return max(counts, key=counts.get)
```

**Solution - Counter**:
```
class Solution:
    def mostFrequent(self, nums, key):
        arr = [nums[i] for i in range(1,len(nums)) if nums[i-1]==key]
        c = Counter(arr)
        return max(c, key=c.get)
```

**One-Liner - Counter**:
```
class Solution:
    def mostFrequent(self, nums, key):
        return max(c := Counter([nums[i] for i in range(1,len(nums)) if nums[i-1]==key]), key=c.get)
```

**One-Liner - Mode**:
```
class Solution:
    def mostFrequent(self, nums, key):
        return mode(nums[i] for i in range(1,len(nums)) if nums[i-1]==key)
```

**One-Liner - Mode with Pairwise** (Credit: [stefan4trivia](https://leetcode.com/stefan4trivia)):
```
class Solution:
    def mostFrequent(self, nums, key):
        return mode(b for a, b in pairwise(nums) if a == key)
```