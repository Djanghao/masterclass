# Java solution , 0 ms , Seriously ? why we need % 2 ?

**Author:** scala62
**Votes:** 235
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1152555/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1152555/)

---

We should just need to flip the count whenever encounter a negative number 
```
   public int arraySign(int[] nums) {
        int sign = 1; 
        for (int n : nums) {
            if (n == 0) {
                return 0; 
            } 
			if (n < 0) {
                sign = -sign; 
            }
        }
        return sign; 
    }
```