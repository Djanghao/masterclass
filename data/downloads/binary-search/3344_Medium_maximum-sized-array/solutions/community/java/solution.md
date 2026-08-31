# Java Brute Force O(n^2)

**Author:** REED_W
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sized-array/solutions/6021208/](https://leetcode.com/problems/maximum-sized-array/solutions/6021208/)

---

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```java []
    private int sln2(long s){
        long sum_i= 0; long sum_jk = 0;
        for(int n = 1;;n++){
            sum_i+=n-1;
            for(int j = 0;j<n-1;j++) {
                sum_jk+= ((n-1)|j)*2;
            }
            sum_jk+=n-1;
            if(sum_i*sum_jk>s) return n-1;
        }
    }

```