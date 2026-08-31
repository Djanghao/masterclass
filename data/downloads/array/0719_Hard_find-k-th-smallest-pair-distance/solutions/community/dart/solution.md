# Beats 100% 🔥🔥🔥 Dart Solution | Constant memory | Binary Search

**Author:** naxyo3
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5140790/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5140790/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlog(n) + nlog(high-lo))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
class Solution {
  int smallestDistancePair(List<int> nums, int k) {
    final n = nums.length;
    nums.sort();
      
    int high = nums[n-1]-nums[0];
    int lo = 0;
      
    bool moreThanK(int mid){
        int counter=0;
        int i=0, j=0;
        while(i<n){
          while(nums[i]-nums[j] > mid && j<n) j++;
          counter+=(i-j);
          if (counter>=k){
            return true;
          }
          i++;
        }
        return false;
    }  
      
    while(lo<=high){
        final mid = lo + (high-lo)~/2;
        if (moreThanK(mid)){
            high = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return lo;

  }
    
}
```