# Python | Using insert and without insert |  very Easy

**Author:** Sukhdev_143
**Votes:** 131
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1021340/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1021340/)

---

Note:-*If you have any doubt, Free to ask me, Please **Upvote** if you like it.*
##### **Read comments for better understanding**
**With insert**
```
        arr=[]
        for n,i in zip(nums,index): 
            arr.insert(i,n)
        return arr
```
**Without insert**
```
        arr = []
        for n,i in zip(nums,index): 
            arr[i:i] = [n]
        return arr
```