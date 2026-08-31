# easy dart solution

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/4783112/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/4783112/)

---



# Code
```
class Solution {
  double trimMean(List<int> arr) {
    double reminder= arr.length*(5/100);
    int rem=reminder.toInt();
    arr.sort();
    print(reminder);
    print(rem);
    for(int i=0;i<rem;i++){
        arr.removeAt(0);
           arr.removeAt(arr.length-1);
    }
  
    double mean=0;
   arr.forEach((element){
       mean+=element;
   });
   return mean/arr.length;
  }
}
```