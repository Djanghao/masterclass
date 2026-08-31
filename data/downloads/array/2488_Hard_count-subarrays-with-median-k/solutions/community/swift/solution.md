# Swift (WITH Explanation)

**Author:** artemvor1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3248387/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3248387/)

---

- Find the index of k - ***ind***
- Traverse from right to left (from ind-1 to 0) and count the balance that means which numbers predominates (from i to ind) \u2013 numbers greater or less than k? If balance equals 0 - the parity between them. 
Count and  Remember all balances in map dictionary
- Then loop from ind+1 to the end. 
 Add to var count all subarrays which satisfy 2 conditions:
   -  opposite balance between start and end (greater count equals less count)  - odd case
   - subarrays, where numberes greater k one more than less numbers  - even case

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countSubarrays(_ nums: [Int], _ k: Int) -> Int {
        let ind = nums.firstIndex(of: k)! // find k in the array
        var map = [0: 1] // already including the zero balance for k itself (+1 count for 0 balance)
        var balance = 0   
        for i in (0..<ind).reversed() {  // count and remember all ballances left to k 
            balance += (nums[i] > k) ? 1 : -1  
            map[balance, default: 0] += 1
        }

        var count = (map[0] ?? 0) + (map[1] ?? 0) // already counting all subarrays with ballance equal to 0 and 1 
        balance = 0
        for i in ind+1..<nums.count {
            balance += nums[i] > k ? 1 : -1
            count += map[-balance] ?? 0   // cases when k is the MIDDLE median \u2013 in odd subarrays
            count += map[-balance+1] ?? 0  // cases when k is the LEFT median for even subarrays
        }
        return count 
    }
}
```