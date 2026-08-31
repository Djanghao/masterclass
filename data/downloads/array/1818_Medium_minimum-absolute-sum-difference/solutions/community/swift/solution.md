# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1986991/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1986991/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    private static final int MOD = 1_000_000_007;
    public int minAbsoluteSumDiff(int[] nums1, int[] nums2) {
        int res = 0;
        int reduce = 0;        // max value we may substract from result after replacing
        
        TreeSet<Integer> set = new TreeSet<>();
        for (int num : nums1) set.add(num);
        
        for (int i = 0; i < nums1.length; i++) {
            int n1 = nums1[i];
            int n2 = nums2[i];
            
            int curr = Math.abs(n1 - n2);
            res = (res + curr) % MOD;
            
            Integer lo = set.floor(n2);
            if (lo != null) reduce = Math.max(reduce, curr - Math.abs(lo - n2));
            
            Integer hi = set.ceiling(n2);
            if (hi != null) reduce = Math.max(reduce, curr - Math.abs(hi - n2));
        }
        
        return (res - reduce + MOD) % MOD;
    }
}
```

***JavaScript***
```
var minAbsoluteSumDiff = function(nums1, nums2) {
    const MOD = 1e9 + 7;
    const n = nums1.length;
    
    const origDiffs = [];
    let diffSum = 0;
    
    for (let i = 0; i < n; i++) {
        const num1 = nums1[i];
        const num2 = nums2[i];

        const currDiff = Math.abs(num1 - num2);

        origDiffs[i] = currDiff;
        diffSum += currDiff;
    }
    
    nums1.sort((a, b) => a - b);
    
    let minDiffSum = diffSum;
    
    for (let i = 0; i < n; i++) {
        const origDiff = origDiffs[i];
        
        const num2 = nums2[i];
        
        let left = 0;
        let right = n - 1;
        
        let bestDiff = origDiff;
        
        while (left <= right) {
            const mid = (left + right) >> 1;
            const num1 = nums1[mid]; 
           
            const candDiff = num1 - num2;
           
            if (Math.abs(candDiff) < bestDiff) {
                bestDiff = Math.abs(candDiff);
                if (bestDiff === 0) break;
            }
            
            if (candDiff < 0) left = mid + 1;
            else right = mid - 1;
        }
        
        const replacedDiffSum = (diffSum - origDiff) + bestDiff;
        
        minDiffSum = Math.min(minDiffSum, replacedDiffSum);
    }
    
    return minDiffSum % MOD;
};
```

***C++***
```
int minAbsoluteSumDiff(vector<int>& n1, vector<int>& n2) {
	// originalDiffSum - will accumulate sum of difference without replacement
	// maxDecrement - will store max decrement possible after replacement at any index of n1
	long n = size(n1), originalDiffSum = 0, maxDecrement = 0;
	set<int> s(begin(n1), end(n1));   // sorted nums1
	for(int i = 0; i < n; i++){
		long currDiff = abs(n1[i] - n2[i]);   // original difference for current index without replacement
		originalDiffSum += currDiff;
		// find closest element to n2[i] so that after replacement, diff is minimized
		// lower_bound will return smallest number greater than or equal to n2[i]. 
		// So we also need to check previous value of lower_bound in s which may further minimize the absolute difference.
		auto it = s.lower_bound(n2[i]);
		if(it != begin(s)) maxDecrement = max(maxDecrement, currDiff - abs(*prev(it) - n2[i]));
		if(it != end(s)) maxDecrement = max(maxDecrement, currDiff - abs(*it - n2[i]));            
	}
	// finally apply the maximum decrement that can be done after replacement
	return (originalDiffSum - maxDecrement) % 1000000007;
}
```

***Python***
```
class Solution:
    def minAbsoluteSumDiff(self, nums1: List[int], nums2: List[int]) -> int:        
        s1 = sorted(nums1) # making list ready for Binary search
        total = 0
        for i in range(len(nums1)):
            total += abs(nums1[i] - nums2[i])
            
        best = total
        
        for x, y in zip(nums1, nums2):
            currDiff = abs(x - y)
            
            idx = self.BinarySearch(s1, y)
            # if no element exist, idx gives you index of the next largest element
            # but idx - 1 might be also a potential answer, so we check that also
            if 0 <= idx < len(s1):
                val = s1[idx]
                
                potentialBest = total - currDiff + abs(val - y)
                best = min(best, potentialBest)
                
            if idx - 1 < len(s1):
                val = s1[idx - 1] 
                
                potentialBest = total - currDiff + abs(val - y)
                best = min(best, potentialBest)
            
        
        return best % (10 ** 9 + 7)
        
    
    def BinarySearch(self, arr, target):
        start, end = 0, len(arr) - 1
        while start <= end:
            mid = start + (end - start) // 2

            if arr[mid] == target:
                return mid
            elif arr[mid] > target:
                end = mid - 1
            else:
                start = mid + 1
        
        return start
```

***Kotlin***
```
import kotlin.math.abs

class Solution {
    private companion object{
        private const val MOD = 1e9.toLong() + 7        
    }
    
    fun minAbsoluteSumDiff(nums1: IntArray, nums2: IntArray): Int {
	
        var diff = 0L
        var minSumDiff = Long.MAX_VALUE
        
        for(idx in nums1.indices){
            diff += abs(nums1[idx] - nums2[idx])
        }
        
        if(diff == 0L) return 0
        
		// a pool of nums1
		// can also be implemented with the binary search
        var treeSet = TreeSet<Int>()
        for(num in nums1){
            treeSet.add(num)
        }
        
		// try all 3 combinations of sum differences:
		// 1. no change
		// 2. floor nums2[i] (if there is one)
		// 3. ceiling nums2[i] (if there is one)
        for(idx in nums1.indices){
            minSumDiff = minOf(minSumDiff, diff)
            
            val sumDiff = abs(nums1[idx] - nums2[idx])
            diff -= sumDiff
            
            treeSet.floor(nums2[idx])?.let{ // to find the floor value of nums2[i] in nums1[i]
                val floorDiff = abs(it - nums2[idx])
                diff += floorDiff
                minSumDiff = minOf(minSumDiff, diff)
                diff -= floorDiff
            }
            
            treeSet.ceiling(nums2[idx])?.let{ // to find the ceiling value of nums2[i] in nums1[i]
                val ceilingDiff = abs(it - nums2[idx])
                diff += ceilingDiff
                minSumDiff = minOf(minSumDiff, diff)
                diff -= ceilingDiff
            }
            
            diff += sumDiff
        }
        
        return (minSumDiff % MOD).toInt()
    }
}
```

***Swift***
```
class Solution {
    func minAbsoluteSumDiff(_ n1: [Int], _ n2: [Int]) -> Int {
        let ln1 = n1.count, n1s = n1.sorted()
        let raw = (0..<ln1).map({ abs(n1[$0] - n2[$0]) }).reduce(0, +)
        var res = raw
        
        func finder(_ val: Int) -> Int {
            var lhs = 0, rhs = ln1 - 1
            guard val > n1s[lhs] else { return -1 }
            guard val < n1s[rhs] else { return ln1 }
            while lhs < rhs {
                let mid = lhs + (rhs - lhs) >> 1
                switch n1s[mid] {
                case val: return mid
                case ...val: lhs = mid + 1
                case val...: rhs = mid - 1
                default: break
                }
            }
            return n1s[lhs] <= val ? lhs : (lhs - 1)
        }
        for i in 0..<ln1 {
            var tmp = raw - abs(n2[i] - n1[i])
            let id1 = finder(n2[i])
            switch id1 {
            case -1:
                tmp += abs(n1s[0] - n2[i])
            case ln1:
                tmp += abs(n1s[ln1 - 1] - n2[i])
            default:
                tmp += min(abs(n1s[id1] - n2[i]), abs(n1s[id1 + 1] - n2[i]))
            }
            res = min(res, tmp)
        }
        return res % 1_000_000_007
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***