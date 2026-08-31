# fastest solution beats 100 % of dart users (time ,space )

**Author:** m7medmahgoop
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/5156631/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/5156631/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
  int minOperations(List<int> nums1, List<int> nums2, int k) {
    int sum1=0;
    int sum2=0;
    int same=0;
    int a=0;
    if(k==0){
        for (int i=0; i<nums1.length;i++){
            if (nums1[i]!=nums2[i]){
                return -1;
            }
        }
        return 0;
    }
    for(int i=0; i<nums1.length;i++){
        sum1+=nums1[i];
        sum2+=nums2[i];
 
        double b =(nums1[i]-nums2[i]).abs()/k;
        double fraction = b - b.floorToDouble();
        if(fraction > 0){
            return -1;
        }
        a+=b.toInt();
    }
    if(sum1!=sum2){
        return -1;
    }
    else{
        if(a%2==0){
          return a~/2;
        }
        else{
          return -1;
        }
    }
    
  }
}
```