# only using for loop

**Author:** Adilcp
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/5730470/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/5730470/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int>? sortByBits(List<int> arr) {
    arr.sort();
   
   List<String>copy=[];
   List<int>countList=[];
   int count=0;
   int maxCount=0;
   String  data ='';
   List<int>dd=[];
   
    for(var i in arr){
        count=0;
        copy.add(i.toRadixString(2));
        data=i.toRadixString(2);
        //print(data);
          for(var k =0;k<data.length;k++){
           if(data[k]=='1'){
                count++;
            }

          }
          countList.add(count);
         // print(count);
           if(count>maxCount){
            maxCount=count;
           }
          } 
         for(int k=0;k<=maxCount;k++){
           for(int m=0;m<arr.length;m++){
            if(countList[m]==k){
                dd.add(arr[m]);
            }
           }
         }
        // print(arr);
  //print(countList);
    // print(copy);
   //  print(dd);
     return dd;

  }
}
```