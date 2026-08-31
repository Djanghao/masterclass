# ✅C++ Solution | | Python | | Java | | Easy Understanding | | Brute-Force

**Author:** ak_ydv
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3711574/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3711574/)

---

`Time complexity: ` $$O(n^2)$$

`Space complexity: `$$O(1)$$


# $$C++$$
```
class Solution {
public:
    int longestAlternatingSubarray(vector<int>& v, int k) {
        int ans = 0;
        for(int i = 0;i < v.size();i++){
            int ct = 0;
            if((v[i] % 2 == 0) && (v[i] <= k)){
                ct = 1;
                for(int j = i + 1;j < v.size();j++){
                    if((v[j] % 2 == v[j - 1] % 2) || v[j] > k) break;
                    ct++;
                }
            }
            
            ans = max(ans,ct);
        }
        return ans;
    }
};
```

# $$Python$$
```
class Solution:
    def longestAlternatingSubarray(self, v, k):
        ans = 0
        for i in range(len(v)):
            ct = 0
            if (v[i] % 2 == 0) and (v[i] <= k):
                ct = 1
                for j in range(i + 1, len(v)):
                    if (v[j] % 2 == v[j - 1] % 2) or v[j] > k:
                        break
                    ct += 1
            ans = max(ans, ct)
        return ans


```

# $$Java$$ 
```
class Solution {
    public int longestAlternatingSubarray(int[] nums, int threshold) {
        int ans = 0;
        int n = nums.length;
        for(int i=0; i<n; i++) {
            if(nums[i]%2==0 && nums[i]<=threshold) {
                int e = i+1;
                while(e<n && nums[e]<=threshold && nums[e]%2!=nums[e-1]%2){
                    e++;
                }
                ans = Math.max(ans, e-i);
            }
        }
        return ans;
    }
}
```

![upvote(jaishreeram).jpeg](./images/0.jpeg)
