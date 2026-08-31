# easy solution in all languages with their runtime (ms) - guess which is the fastest(this solution)

**Author:** Sajal_
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5229040/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5229040/)

---

- go - 0ms
- java - 1ms
- c++ - 6ms
- python - 24ms
- python3 - 53ms
- javasript - 74ms
- dart - 413ms


```python3 []
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        count = 0
        for i in nums1:
            for j in nums2:
                if i % (j * k) == 0:
                    count += 1
        return count
```

```javascript []
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0
    for(let i = 0;i< nums1.length;i++){
        for(let j =0;j<nums2.length;j++){
            if (nums1[i] % (nums2[j]*k)==0){
                count ++
            }
        }
    }
    return count
};
```
```c++ []
class Solution {
public:
    int numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        int count = 0;
        for (int i = 0; i<nums1.size();i++){
            for (int j = 0;j<nums2.size();j++){
                if (nums1[i] % (nums2[j]*k) ==0){
                    count ++ ;
                }
            }
        }
        return count;
    }
};
```
```go []
func numberOfPairs(nums1 []int, nums2 []int, k int) int {
    count := 0;
    for i := 0 ; i<len(nums1) ;i++{
        for j := 0 ;j<len(nums2);j++{
            if nums1[i] % (nums2[j]*k)==0{
                count ++;
            }
        }
    }
    return count;
}
```
```java []
class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int count = 0;
        for (int i = 0; i<nums1.length;i++){
            if(nums1[i]%k!=0) continue;
            for (int j = 0;j<nums2.length;j++){
                if (nums1[i] % (nums2[j]*k) ==0){
                    count ++ ;
                }
            }
        }
        return count;
    }
}
```
```python []
class Solution(object):
    def numberOfPairs(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: int
        """
        count = 0
        for i in nums1:
            for j in nums2:
                if i % (j * k) == 0:
                    count += 1
        return count
```
```dart []
class Solution {
  int numberOfPairs(List<int> nums1, List<int> nums2, int k) {
    int count = 0;
        for (int i = 0; i<nums1.length;i++){
            if(nums1[i]%k!=0) continue;
            for (int j = 0;j<nums2.length;j++){
                if (nums1[i] % (nums2[j]*k) ==0){
                    count ++ ;
                }
            }
        }
        return count;
  }
}

```

