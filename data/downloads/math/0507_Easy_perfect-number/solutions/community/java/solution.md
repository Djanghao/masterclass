# 👏Beats 95.58% of users with Java || ✅Simple & Easy Well Explained Solution using Factor Trick🔥💥

**Author:** Rutvik_Jasani
**Votes:** 12
**Link:** [https://leetcode.com/problems/perfect-number/solutions/4977411/](https://leetcode.com/problems/perfect-number/solutions/4977411/)

---

# Intuition
Get sum of all factors and remove num from factor and compare with num if it is similar then return true else false.

# I Think This Can Help You(For Proof Click on the Image)
[![Screenshot 2024-02-24 232407.png](./images/0.png)](https://leetcode.com/problems/perfect-number/submissions/1223883952/)

# Approach
1. Initilize sum as 0, to store sum of all factors.
    ```
    int sum = 0;
    ```
2. Find the sum of all Factors.
    ```
    for(int i=1;i*i<num;i++){
        if(num%i==0){
            if(i!=(num/i)){
                sum = sum + i;
                sum = sum + (num/i);
            }else{
            sum = sum + i;
            }
        }
    }
    ```
3. Check if sum-num is equal to the num then return true else false.
    ```
    if((sum-num) == num){
        return true;
    }else{
        return false;
    }
    ```

# Complexity
- Time complexity:
O(root_n)

- Space complexity:
O(1)

# Code
```
class Solution {
    public boolean checkPerfectNumber(int num) {
        int sum = 0;
        for(int i=1;i*i<num;i++){
            if(num%i==0){
                if(i!=(num/i)){
                    sum = sum + i;
                    sum = sum + (num/i);
                }else{
                    sum = sum + i;
                }
            }
        }
        if((sum-num) == num){
            return true;
        }else{
            return false;
        }
    }
}
```

![_71eae110-0e71-4fc8-b986-1d9bcdd0a742.jpeg](./images/1.jpeg)
