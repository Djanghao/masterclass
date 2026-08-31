# Python3 || 11 lines, just odd numbers  || T/S:  99% / 25%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5904106/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5904106/)

---

Here's the intuition:

The *prime number* condition is a *red herring*. The real condition is the elements of `nums` are odd integers (excepting of course, 2). Odd numbers are either *4 mod 1* or *4 mod 3*. The *4 mod 1* case becomes trivial after analyzing some examples. The *4 mod 3* case requires a bit more investigation, but does have an intuitive answer as well.

```python3 []
class Solution:
    def minBitwiseArray(self, nums):

        def helper(num):

            if  num %4 == 1:            # <-- 4 mod 1 case
                return num - 1 

            if num %4 == 3:             # <-- 4 mod 3 case
                tmp = num
                for i in range(num.bit_length()):
                    tmp //= 2
                    if not tmp%2: break
                
                return num - (1<<i)     

            return -1                   # <-- just for num = 2


        return map(helper,nums)
```
```cpp []
#include <vector>
#include <cmath>  // for bit_length

class Solution {
public:
    std::vector<int> minBitwiseArray(const std::vector<int>& nums) {
        std::vector<int> result;
        
        for (int num : nums) {
            result.push_back(helper(num));
        }
        
        return result;
    }
    
private:
    int helper(int num) {
        if (num % 4 == 1) {  // Case when num % 4 == 1
            return num - 1;
        }
        
        if (num % 4 == 3) {  // Case when num % 4 == 3
            int tmp = num;
            for (int i = 0; i < (int)log2(num) + 1; ++i) {
                tmp /= 2;
                if (tmp % 2 == 0) {
                    return num - (1 << i);
                }
            }
        }

        return -1;  // Special case for num == 2
    }
};

```
```java []

class Solution {
    public int[] minBitwiseArray(List<Integer> nums) {
        List<Integer> result = new ArrayList<>();
        for (int num : nums) {
            result.add(helper(num));}

        int[] arrayResult = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            arrayResult[i] = result.get(i);}
        
        return arrayResult;}

    private int helper(int num) {
        if (num % 4 == 1) {  // 4 mod 1 case
            return num - 1;
        }
        if (num % 4 == 3) {  // 4 mod 3 case
            int tmp = num;
            int i = 0;
            while (tmp > 0) {
                tmp /= 2;
                if (tmp % 2 == 0) break;
                i++;}

            return num - (1 << i);}
        return -1;  // just for num = 2
    }
}
```
[https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/submissions/1420194451/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/submissions/1420194451/)


I could be wrong, but I think that time complexity is *O*(*NB*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *B* ~ average bit length the elements in `nums`.