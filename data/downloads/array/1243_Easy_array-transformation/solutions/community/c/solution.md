# c solution

**Author:** nameldi
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-transformation/solutions/2254835/](https://leetcode.com/problems/array-transformation/solutions/2254835/)

---

```
int* transformArray(int* arr, int arrSize, int* returnSize){
    *returnSize = arrSize;
    int modFlag = 1, pre, cur;
    while(modFlag)
    {
        modFlag = 0;
        pre = arr[0];
        for(int i = 1; i < arrSize - 1; i++)
        {
            cur = arr[i];
            if((cur>pre) && (cur>arr[i+1]))
            { arr[i]--; modFlag = 1;}
            else if((cur<pre) && (cur<arr[i+1]))
            { arr[i]++; modFlag = 1;}
            pre = cur;
        }   
    }
    return arr;
}
```