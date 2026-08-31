# C# Easy Solution

**Author:** BinksWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5133080/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5133080/)

---

# Code
```
public class Solution {
    public int MinimumAddedInteger(int[] nums1, int[] nums2) {
        Array.Sort(nums1);
        Array.Sort(nums2);
        /*  4, 8, 12, 16, 20
            10, 14, 18, x, y 
            in this case: 10 must be in one of (4, 10), (8, 10), (12,10)
            because 10 is the min value except x and y
            then just test 10-4=6, 10-8=2, 10-12=-2 which one is the min answer
        */ 
        var temp = new int[3]{nums2[0] - nums1[2], nums2[0] - nums1[1], nums2[0] - nums1[0]};
        var list1 = new List<int>(nums1);
        var index = 0;
        while(index < 3){
            var miss = 0;
            var list2 = new List<int>(nums2);
            for(var i = 0; i < list1.Count; i++){
                if(!list2.Contains(list1[i] + temp[index]))
                    miss++;
                else
                    list2.Remove(list1[i] + temp[index]);
            }
            if(miss <= 2)
                return temp[index];
            index++;
        }
        return int.MinValue;
    }
}
```