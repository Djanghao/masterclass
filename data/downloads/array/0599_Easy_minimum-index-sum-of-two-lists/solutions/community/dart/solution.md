# dart east solution

**Author:** Shaham_Ahammed
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/4641244/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/4641244/)

---



# Code
```
class Solution {
  List<String> findRestaurant(List<String> list1, List<String> list2) {
    List<String>result=[];
    int? least;
    for(int i=0;i<list1.length;i++){
        for(int j=0;j<list2.length;j++){
            if(list1[i]==list2[j] ){
                if(result.isEmpty){
                    result.add(list1[i]);
                    least=i+j;
                }else if(i+j<least!){
                    result.clear();
                    result.add(list1[i]);
                    least=i+j;
                }else if(i+j==least!){
                    result.add(list1[i]);
                }
            }
        }
    }
    return result;
  }
}
```