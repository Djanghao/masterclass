# Python beats 99.6% & 100% in two ways easy

**Author:** macqueen
**Votes:** 8
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/433344/](https://leetcode.com/problems/powerful-integers/solutions/433344/)

---

```python
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        res , i , j = set() , 0 , 0
        while x**i<bound:
            while x**i + y**j <= bound:
                # print("i:{} j:{} x**i:{} y**j:{} add:{}".format(i,j,x**i,y**j,x**i+y**j))
                res.add(x**i+y**j)
                j+=1
                if y==1:  break
            i+=1
            j = 0
            if x==1: break
        return list(res)
```

attention  , ```if x==1: break``` if not the code will loop forever when i==1 because when i==1 
whatever ``` i**1 or i**2 ``` it always equal 1
**It beats 99.6% time 100% space , I found a trick could make code faster**
 I found```x**i ``` was calculate many times in one loop  , It could be calculated only once. so we use two variables tempx and i   .  ```tempx = x**i``` calculate tempx once , use tempx many times
 
 ```python
     def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        res , i , j = set() , 0 , 0
        tempx , tempy= x**i , y**j
        while tempx<bound:
            while tempx + tempy <= bound:
                #print("i:{} j:{} x**i:{} y**j:{} add:{}".format(i,j,tempx,tempy,tempx+tempy))
                res.add(tempx+tempy)
                j+=1
                tempy = y**j
                if y==1:  break
            i+=1
            tempx = x**i
            j = 0
            tempy = y**j
            if x==1: break
        return list(res)
 ```
 Runtime: 20 ms, faster than **99.66%** of Python3 online submissions for Powerful Integers.
Memory Usage: 12.7 MB, less than **100.00%** of Python3 online submissions for Powerful Integers.

**If it helps you , please give me a vote star
Thanks**