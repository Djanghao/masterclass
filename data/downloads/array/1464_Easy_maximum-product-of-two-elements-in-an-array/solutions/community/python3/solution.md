# Python/JS/Go/C++ O(n) by linear scan. [w/ Comment] 有中文解題文章

**Author:** brianchiang_tw
**Votes:** 48
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/699731/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/699731/)

---

[\u4E2D\u6587\u89E3\u984C\u6587\u7AE0](https://vocus.cc/article/65780468fd897800013c9ad1)

O(n) by linear scan.

---

**Hint**:

Maintain a record of first largest number as well as second largest

---

**Implementation**:

Python:

```
class Solution(object):
    def maxProduct(self, nums):

        first, second = 0, 0
        
        for number in nums:
            
            if number > first:
                # update first largest and second largest
                first, second = number, first
                
            elif number > second:
                # update second largest
                second = number
        
        return (first - 1) * (second - 1)
```

---

Javascript:

```
var maxProduct = function(nums) {
    
    let [first, second] = [0, 0];
    
    for( const number of nums){
        
        if( number > first ){
            [first, second] = [number, first];
            
        }else if( number > second ){
            second = number;
        }
    } 
    
    return ( first - 1 ) * ( second - 1 );
    
};
```

---

Go:

```
func maxProduct(nums []int) int {
    
    first, second := 0, 0
    
    for _, number := range nums{
        
        if number > first{
            first, second = number, first
            
        }else if number > second {
            second = number
        }
    }
    
    return ( first - 1 )*( second - 1 )
}
```

---

C++

```
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        
        int first = 0, second = 0;
        
        for( const int& number: nums){
            
            if( number > first ){
                second = first;
                first = number;
                
            }else if( number > second ){
                second = number;
            }
            
        }
        
        return ( first - 1 ) * ( second - 1 );
    }
};
```