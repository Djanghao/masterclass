# C++ Map O(n) and Two Pointer O(nlogn) easy solution

**Author:** sachuverma
**Votes:** 106
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/961351/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/961351/)

---

***O(NlogN) approach***
We will sort the array, and start summing of elements from front and back
if  `sum == k` means they can be removed but we will not remove, we will just count 
if `sum > k` then last element must me small so ` j--`
if `sum < k` then first element should be bigger so ` i++`

```
class Solution {
public:
    int maxOperations(vector<int>& num, int k) {
      sort(num.begin(), num.end());
      int ans = 0;
      int i=0, j=num.size()-1;
      while(i < j){
        if(num[i] + num[j] == k){     // found elements just increase counter
          ans++; i++; j--;
        } 
		else if(num[i] + num[j] > k) j--;  // sum is large so decrease the bigger element, i.e. jth element
        else i++;    // sum is small so increase the smaller element, i.e. ith element
      }
      return ans;
    }
}
```

***O(N) approach***
count frequency using map in nums array
if `k - num == num` then num can be removed in pairs so  `ans += half of it's frequency`
else we` find k - num` is present in array using Map and if present `ans += min of count of num or k-num`
and update the values in Map also
```
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
      unordered_map<int, int> Map;
      for (auto &num: nums) Map[num]++;  // count freq of nums
      int ans = 0;
  
      for(auto it=Map.begin(); it!=Map.end(); ++it){
        int num = it->first, count = it->second;
        if(k - num == num) ans += count/2;   // if num is half of k add half of it's count in ans
        else if(Map.count(k - num)){   // find k-num in nums and add min freq of num or k-num to ans
          int Min = min(count, Map[k-num]);
          ans += Min;
          Map[num] -= Min;
          Map[k-num] -= Min;
        }
      }
      
      return ans;
    }
};
```