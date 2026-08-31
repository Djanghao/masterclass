# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/1984376/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/1984376/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution { 
    public int smallestDivisor(int[] nums, int threshold) {
        int l = 1, r = 1000000; 
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (helper(mid, nums) > threshold) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }
    public int helper(int mid, int[] nums) {
        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            res += (nums[i] + mid - 1) / mid;
        }
        return res;
    }
}

```

***JavaScript***
```
var smallestDivisor = function(nums, threshold) {
    let left = 0;
    let right = 1e6;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
        
        if (threshold < sum) left = mid + 1;
        else right = mid;
    }
    
    return left;
};
```

***C++***
```
class Solution {
public:
    int smallestDivisor(vector<int>& nums, int threshold) {
        int l=1,r=1000001;
        int ans=0;
        while(l<=r){
            int mid=l+(r-l)/2;
            long long int sum=0;
            for(int i=0;i<nums.size();i++){
                if(nums[i]%mid==0){
                    sum+=(nums[i]/mid);
                } else{
                    sum+=(nums[i]/mid)+1;
                }
            }
            if(sum>threshold){
                l=mid+1;
            } else{
                ans=mid;
                r=mid-1;
            }
        }
        return ans;
    }
};
```

***Python***
```
class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        def ok(mid):
            ans = 0
            for num in nums:
                ans += math.ceil(num / mid)
                if ans > threshold: return False
            return True    
        l, r = 1, int(1e6)
        while l <= r:
            mid = (l+r) // 2
            if ok(mid): r = mid - 1
            else: l = mid + 1
        return l        
```

***Kotlin***
```
class Solution {
   fun smallestDivisor(nums: IntArray, threshold: Int): Int {
    fun valid(num: Int): Boolean {
        var sum = 0
        for (n in nums) {
            val div = if (n % num == 0) n / num else n / num + 1
            if (sum + div > threshold) return false
            else sum += div
        }
        return true
    }
    
    var l = 1; var r = nums.max()!! + 1 // [l, r)
    while (l < r) {
        val m = l + (r - l) / 2
        if (valid(m)) r = m
        else l = m + 1
    }
    return l
}
}
```

***Swift***
```
class Solution {
    func smallestDivisor(_ nums: [Int], _ t: Int) -> Int {
        let srt = nums.map { Double($0) }
        var lhs = 1, rhs = nums.max()!

        while lhs < rhs {
            let mid = lhs + (rhs - lhs) >> 1
            if srt.map({ Int(ceil($0/Double(mid))) }).reduce(0,+) > t {
                lhs = mid + 1
            } else {
                rhs = mid
            }
        }
        return lhs
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***