# Easy to understand || No extra space || Java

**Author:** karmasharma
**Votes:** 25
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/884016/](https://leetcode.com/problems/duplicate-zeros/solutions/884016/)

---

```
        int n = arr.length;
        for(int i = 0; i<arr.length; i++) {
            if(arr[i] ==0) {
                int j;
                for(j = n-2; j>=i+1; j--) {
                    arr[j+1] = arr[j];
                }
                arr[j+1] = 0;
                i++;
            }
        }
```