# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/1984303/](https://leetcode.com/problems/find-peak-element/solutions/1984303/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
   public int findPeakElement(int[] num) {    
    return helper(num,0,num.length-1);
}

public int helper(int[] num,int start,int end){
    if(start == end){
        return start;
    }else if(start+1 == end){
        if(num[start] > num[end]) return start;
        return end;
    }else{
        
        int m = (start+end)/2;
        
        if(num[m] > num[m-1] && num[m] > num[m+1]){

            return m;

        }else if(num[m-1] > num[m] && num[m] > num[m+1]){

            return helper(num,start,m-1);

        }else{

            return helper(num,m+1,end);

        }
        
    }
}
}
```

***C++***
```
class Solution {
public:
     int findPeakElement(vector<int>& nums) {
        int l=0,r=nums.size()-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(mid==0||nums[mid]>nums[mid-1]){
                if((mid==nums.size()-1||nums[mid]>nums[mid+1])){
                 return mid;   
                }else{
                    l=mid+1;
                }
            }else {
                r=mid-1;
            }
        }
               return -1;
    }
};
```

***Python***
```
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        low, high = 0, len(nums)-1
        while low < high:
            mid = low + int((high-low)/2)
            if nums[mid] < nums[mid+1]:
                low = mid+1
            else:
                high = mid
        return low
```

***JavaScript***
```
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    nums[mid] < nums[mid + 1] ? left = mid + 1 : right = mid;
  }
  return left;
};
```

***Kotlin***
```
class Solution {
    fun findPeakElement(nums: IntArray): Int {
        
        var l = 0
        var r = nums.size - 1
        if(nums.size == 1)
            return 0
        
        while(l <= r) {
            
            if(l == 0 && nums[l] > nums[l+1])
                return l
            
            if(l > 0 && nums[l] > nums[l+1] && nums[l] > nums[l-1])
                return l
            
            if(r == nums.size-1 && nums[r] > nums[r-1])
                return r
            
            if(r < nums.size - 1 && nums[r] > nums[r+1] && nums[r] > nums[r-1])
                return r
            
            l++
            r--
        }
        return 0
    }
}
```

***Swift***
```
class Solution {
    func findPeakElement(_ nums: [Int]) -> Int {
        if nums.count == 1 { return 0 }
        
        var left = 0
        var right = nums.count - 1
        
        while left < right {
            var mid = (left + right) / 2
            if nums[mid] < nums[mid + 1] {
                left = mid + 1
            } else {
                right = mid
            }
        }
        
        return left
    }
    
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***