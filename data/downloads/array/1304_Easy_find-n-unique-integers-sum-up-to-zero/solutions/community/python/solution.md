# Python3 code: simple and readable with explanation

**Author:** Dr_Sean
**Votes:** 38
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/470450/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/470450/)

---

# Explanation:
# 
First, take a look at a few examples:
```
n = 1: ans = [0]
n = 2: ans = [-1,1]
n = 3: ans = [-1,0,1]
n = 4: ans = [-2,-1,1,2]
n = 5: ans = [-2,-1,0,1,2]
```

- So, we should return an array where the values are symmetric. 
- If ```n%2``` is not equal to zero (n is odd), we append 0 to the answer list.
- The maximum value is equal to ```n//2```; and the minimum value is equal to ```-n//2```.
- So, we use a ```for``` loop; and each time we add ```-i``` and ```i``` to the answer list. 


# Python3 code:
# 
```
        L, rem = n // 2, n % 2
        if rem != 0: ans = [0]
        else: ans = []
        for i in range(1,L+1):
            ans.append(-i)
            ans.append(i) 
        return ans
```