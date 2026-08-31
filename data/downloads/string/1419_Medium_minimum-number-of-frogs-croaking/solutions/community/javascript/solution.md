# (C#、Javascript)My solution eazy to understand ,using foreach Counting Croak.

**Author:** q98765tw
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/3402612/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/3402612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Make characters and sizes that are not in sequence string.
return Now have most frogs.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C# []
public class Solution {
    public int MinNumberOfFrogs(string croakOfFrogs) {
    int c=0;int r=0;int o=0;int a=0;int k=0;
    //Make characters and sizes that are not in sequence string return -1
    foreach(char croakOfFrog in croakOfFrogs){
        if(croakOfFrog =='c') c++;
        else if(croakOfFrog =='r') r++;
        else if(croakOfFrog =='o') o++;
        else if(croakOfFrog =='a') a++;
        else if(croakOfFrog =='k') k++;
        else { return -1 ;}
        if(c<r || r<o || o<a || a<k) return -1;
    }
    if(c != r || r!= o || o!= a || a!=k) return -1;  
    //return ans
    int temp_c =0; //\u76EE\u524D\u5E7E\u96BB\u958B\u59CB\u53EB How many are starting to call
    int max_c =0;  //\u76EE\u524D\u6700\u591A\u96BB\u9752\u86D9 Now have most frogs 
    foreach(char croakOfFrog in croakOfFrogs){
        if(croakOfFrog =='c') {
           temp_c++; 
           max_c = Math.Max(temp_c, max_c);
        }
        if(croakOfFrog =='k'){
            temp_c--;
        }
    }
    return max_c;
    }
}
```
```javascript []
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    let c=0;let r=0;let o=0;let a=0;let k=0;
    //Make characters and sizes that are not in sequence string return -1
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') c++
        else if(croakOfFrog =='r') r++
        else if(croakOfFrog =='o') o++
        else if(croakOfFrog =='a') a++
        else if(croakOfFrog =='k') k++
        else { return -1}

        if(c<r || r<o || o<a || a<k) return -1
    }
    console.log(c,r,o,a,k)
    if(c !== r || r!== o || o!== a || a!==k) return -1
     
    //return ans
    let temp_c =0 //\u76EE\u524D\u5E7E\u96BB\u958B\u59CB\u53EB How many are starting to call
    let max_c =0  //\u76EE\u524D\u6700\u591A\u96BB\u9752\u86D9 Now have most frogs 
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') {
           temp_c++ 
           max_c = Math.max(temp_c, max_c);
        }
        if(croakOfFrog =='k'){
            temp_c--
        }
    }
    return max_c
};
```
