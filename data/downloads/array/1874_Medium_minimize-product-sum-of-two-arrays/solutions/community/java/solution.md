# Java without rearranging kind off O(n)

**Author:** Whis24Virus
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1351625/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1351625/)

---

```
public int minProductSum(int[] nums1, int[] nums2) {
        int arr1[] = new int[101];
        int arr2[] = new int[101];
        for(int i = 0; i < nums1.length; i ++){
            arr1[nums1[i]] ++;
            arr2[nums2[i]] ++;
        }
        int i = 1;
        int j = 100;
        int sum = 0;
        while(i < 101 && j > 0){
            while(i < 101 && arr1[i] == 0) i ++;
            while(j > 0  && arr2[j] == 0) j --;
             sum += (i * j);
            if(i == 101 || j == 0) return sum;
            arr1[i] --;
            arr2[j] --;
        }
        return sum;
    }
```