# Simple Solution | Kotlin | Dart | Easy to understand

**Author:** SangramM
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/4936669/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/4936669/)

---

```Kotlin []
class Solution {
    fun sumOfThree(num: Long): LongArray {
        var ans = LongArray(3)
        
        var a = (num/3)
        var i = a-1
        var b = a+1

        if(num == (a+b+i)){
            ans[0] = i
            ans[1] = a
            ans[2] = b
            return ans;
        }else{
            return LongArray(0);
        }
    }
}
```
```Dart []
class Solution {
  List<int> sumOfThree(int num) {

    List<int> ans = [];

    int i = (num/3).toInt();
    int a = i-1;
    int b = i+1;

    if(i+a+b == num){
        ans.add(a);
        ans.add(i);
        ans.add(b);
    }

    return ans;
    
  }
}
```