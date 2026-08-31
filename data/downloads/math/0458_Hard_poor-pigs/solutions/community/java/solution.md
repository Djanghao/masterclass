# Poor Pigs | Easiest Solution | 0ms | Java ✅ | C++

**Author:** gajendrasinghthakur
**Votes:** 54
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/4220381/](https://leetcode.com/problems/poor-pigs/solutions/4220381/)

---

# Please Upvote


![image.png](./images/0.png)

# Code in JAVA
```
class Solution
{
    public int poorPigs(int buckets, int tdie, int ttest)
    {
        int test = ttest/tdie;
        int i=0;
        while(Math.pow(test+1,i)< buckets)
        {
            i++;
        }
        return i;
    }
}
```

# Code in C++
```
class Solution 
{
public: int poorPigs(int buckets, int timeDetect, int timeTest)
{
    return ceil(log2(buckets)/log2(int(timeTest/timeDetect)+1));
}
};

```