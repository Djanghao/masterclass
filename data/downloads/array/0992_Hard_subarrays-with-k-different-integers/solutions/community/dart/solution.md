# Dart - Solution - Hash Table, Sliding Window

**Author:** WarMac4964
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945533/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945533/)

---

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
class Solution {
  int subarraysWithKDistinct(List<int> nums, int k) {
    int result = 0;

    int result1 = atMostK(nums, k);
    int result2 = atMostK(nums, k-1);

    return result1 - result2;
  }

  int atMostK(List<int> nums, int k){
    Map<int,int> mpp = {};
    int l = 0;
    int r = 0;
    int result = 0;

    while(r < nums.length){
        mpp[nums[r]] = putOrElse(mpp, nums[r]);
        while(mpp.length > k){
            mpp[nums[l]] = getOrElse(mpp, nums[l]) - 1;
            if(mpp[nums[l]] == 0){
                mpp.remove(nums[l]);
            }
            l+=1;
        }
        result += r-l+1;
        r++;
    }

    return result;
  }

  int putOrElse(Map<int,int> map, int value){
    if(map.containsKey(value)){
        return map[value]! + 1;
    }else{
        return 1;
    }
  }

  int getOrElse(Map<int,int> map, int value){
    if(map.containsKey(value)){
        return map[value]!;
    }else{
        return 0;
    }
  }
}
```