# Solution with Hash +90%

**Author:** fredo30400
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4340711/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4340711/)

---

```javascript []
var canFormArray = function(arr, pieces) {
    let arr2 = [];
    let d = new Map();
    for(let t of pieces){d.set(t[0],t);}
    for(let t of arr){
        if (d.has(t)){arr2 = arr2.concat(d.get(t));}
    }
    return JSON.stringify(arr2)==JSON.stringify(arr);
};
```
```java []
class Solution {
    public boolean canFormArray(int[] arr, int[][] pieces) {
        int[] arr2 = new int[arr.length];
        int index = 0;
        Map<Integer,int[]> d = new HashMap<>();
        for(int[] t:pieces){d.put(t[0],t);}
        for(int t:arr){
            if (d.containsKey(t)){
                int i=0;
                for(;i<d.get(t).length;i++){
                    arr2[index+i] = d.get(t)[i];}
                index += i;
            }
        }
        return Arrays.equals(arr,arr2);
    }
}
```
```ruby []
def can_form_array(arr, pieces)
    arr2 = []
    d = {}
    pieces.each{|t| d[t[0]]=t}
    arr.each{|t|
        arr2 += d[t] if d.key?(t)
    }
    return arr2==arr
end
```
