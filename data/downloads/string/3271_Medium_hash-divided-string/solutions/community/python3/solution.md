# Python 3, C++  ||  ord <--> chr  ||

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5716084/](https://leetcode.com/problems/hash-divided-string/solutions/5716084/)

---


```python3 []
class Solution:
    def stringHash(self, s: str, k: int) -> str:
       
        arr = [ord(ch)-97 for ch in s]
        
        return ''.join([ascii_lowercase[sum(arr[i:i+k])%26] 
                                for i in range(0, len(arr), k)])
```
```C++ []
class Solution {
public:
    std::string stringHash(const std::string& s, int k) {
        std::vector<int> arr;
        
        for (char ch : s) {
            arr.push_back(ch - 'a');
        }

        std::string result;

        for (size_t i = 0; i < arr.size(); i += k) {
            int sum = 0;

            for (size_t j = i; j < i + k && j < arr.size(); ++j) {
                sum += arr[j];
            }

            result += 'a' + (sum % 26);
        }
        
        return result;
    }
};
```
[https://leetcode.com/problems/hash-divided-string/submissions/1374410534/](https://leetcode.com/problems/hash-divided-string/submissions/1374410534/)