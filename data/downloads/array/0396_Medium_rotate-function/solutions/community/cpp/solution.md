# C++ | O(n) | with Mathematical Explanation | 100% fast

**Author:** whykunal
**Votes:** 22
**Link:** [https://leetcode.com/problems/rotate-function/solutions/2493898/](https://leetcode.com/problems/rotate-function/solutions/2493898/)

---

eg- A = [4, 3, 2, 6]

F(0) = 0A + 1B + 2C +3D
F(1) = 0D + 1A + 2B +3C
F(2) = 0C + 1D + 2A +3B
F(3) = 0B + 1C + 2D +3A

**sum = 1A + 1B + 1C + 1D**

F(1)-F(0) = a+b+c-3d
				= a+b+c+d - 4d
				= sum - n * Bk[0];
**F(1) = F(0) + sum - n*Bk[0]**
*(where B[0] is the first element when array is rotated k-times).*

Similarly, 
F(1) = F(0) + sum - 4D
F(2) = F(1) + sum - 4C
F(3) = F(2) + sum - 4B

**So,**
```
F(k) = F(k-1) + sum - nBk[0]
```

**What is Bk[0]?**
```
k = 0; B[0] = A[0];
k = 1; B[0] = A[len-1];
k = 2; B[0] = A[len-2];
```


```
class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        int sum =0;
        int f=0;
        for(int i=0;i<nums.size();i++){
			sum+=nums[i];
			f+=i*nums[i]
		}
        
        int globalSum = f;
        
        for(int i=nums.size()-1;i>0;i--){
            f = f + sum -nums.size()*nums[i];
            globalSum = max(f,globalSum);
        }
        return globalSum;
    }
};
```


`Give a Like if you understood the mathematical explanation`