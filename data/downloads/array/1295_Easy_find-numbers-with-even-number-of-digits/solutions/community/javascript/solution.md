# ✅C++✅ C# ✅JavaScript ✅PHP .🔥Very easy and different ,explained solutions.💯

**Author:** aloneguy
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/3565954/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/3565954/)

---

# Solution: There are two different easy approaches for this question!
1 => We can get the number of digits in each element by converting them into string.
2 => We can get the number of digits in each element by this mathematical solution.  <b>len=math.floor(math.log10(number)+1)</b>
After all,the only thing we have to do is checking that the length is even or not.
<!-- Describe your first thoughts on how to solve this problem. -->

```C++ []
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int count=0;
        for(int x:nums)
            count+=to_string(x).length()%2==0;
            
        return count;
    }
};
```
```C# []
public class Solution {
    public int FindNumbers(int[] nums) => nums.Count(d => d.ToString().Length %2 ==0);    
    
}
```
```C# []
public class Solution {
    public int FindNumbers(int[] nums) {
        int count=0;
        foreach(var x in nums)
        count+=Math.Floor(Math.Log10(x)+1)%2==0? 1:0;
        return count;
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
     let count=0;
     for(let x of nums)
     count+=Math.floor(Math.log10(x)+1)%2==0;
     return count;
};
```
```PHP []
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findNumbers($nums) {
      $count=0;
      foreach($nums as $x)  
      $count+=floor(log10($x)+1)%2 == 0;
      return $count;
    }
}
```

![Vote.jpg](./images/0.jpeg)

