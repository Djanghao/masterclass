# ✅ Java | Easy | Similar to Leaders in an Array

**Author:** kalinga
**Votes:** 83
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3340519/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3340519/)

---

**T.C.:- O(N)
S.C.:- O(1)**
```
class Solution {
    public int[] replaceElements(int[] arr) {
        int max=-1;
        for(int i=arr.length-1;i>=0;i--){
            if(arr[i]>max){
                int temp=max;
                max=arr[i];
                arr[i]=temp;
            }
            else
                arr[i]=max;
        }
        return arr;
    }
}
```
![image](./images/0.jpeg)
