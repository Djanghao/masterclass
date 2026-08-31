# Python/JS/Go/C++ by prefix sum. [ With explanation ]

**Author:** brianchiang_tw
**Votes:** 11
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/511735/](https://leetcode.com/problems/range-sum-query-immutable/solutions/511735/)

---

Python sol. with O(n) init, O(1) query by prefix sum. 

[\u4E2D\u6587\u89E3\u984C\u6587\u7AE0](https://vocus.cc/article/6511745dfd89780001d072c3)

[\u4E2D\u6587\u89E3\u984C\u5F71\u7247
Tutorial video in Chinese](https://youtu.be/HHFnsTqE2sA)

---

Hint:
#1.
Think of the concept of dynamic programming, and **look-up table**.

#2.
Since **input array**, *nums*, is **immutable**, we can build a **prefix sum table** to **speed up range sum query** later.

---

Recurrence relationship:
Let *S* denotes the **prefix sum table**
*S*[ *0* ] = *nums*[ *0* ]
*S*[ *i* ] = *S*[ *i - 1* ] + *nums*[ *i* ] for every *i* = 1, 2, 3, ..., n

Range sum Query:
Query( *i*, *j* ) = *S*[ *j* ], if *i* =0
Query( *i*, *j* ) = *S*[ *j* ] - *S*[ *i* -1 ], otherwise.

---

Algorithm:

Step_#1:
Build the prefix sum table based on recurrence relationship, during initialization in O(n).

Step_#2:
Handle incoming range sum query by index lookup in prefix sum table, in O(1).

---


```Python []
class NumArray:

    def __init__(self, nums: List[int]):
        
        self.size = len(nums)
        

        # build prefix sum table when input nums is valid
        self.s = [ 0 for _ in range(self.size) ]

        self.s[0] = nums[0]

        # s[k] = nums[0] + ... + nums[k]
        # s[k] = s[k-1] + nums[k]
        for k in range(1,self.size):
            self.s[k] = self.s[ k-1 ] + nums[ k ]
        

    def sumRange(self, left: int, right: int) -> int:
        

        # lookup table from prefix sum table, s
        if left == 0:
            return self.s[ right ]
        else:
            return self.s[ right ]-self.s[ left-1 ]
```
```Javascript []
var NumArray = function(nums) {
    
    this.size = nums.length;
    this.prefixSum = Array( nums.legnth ).fill( 0 );
    
    this.prefixSum[0] = nums[0];
    
    for( let i = 1; i < this.size ; i++ ){
        this.prefixSum[i] = this.prefixSum[i-1] + nums[i];
    }
    
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
    // lookup table from prefixSum
    if( left == 0 ){
        return this.prefixSum[right];
    }else{
        return this.prefixSum[right] - this.prefixSum[left-1];
    }
    
    
};
```
```Go []
type NumArray struct {
    size int;
    prefixTable []int;
}


func Constructor(nums []int) NumArray {
    
    numArray := new(NumArray)
    
    numArray.size = len(nums)
    
    // build prefix sum table
    numArray.prefixTable = make( []int, len(nums) )
    
    numArray.prefixTable[0] = nums[0]
    
    for k := 1 ; k < numArray.size ; k++{
        numArray.prefixTable[k] = numArray.prefixTable[k-1] + nums[k]
    }
    
    return *numArray
}


func (this *NumArray) SumRange(left int, right int) int {
    
    if left == 0 {
        return this.prefixTable[right]
    }else{
        return this.prefixTable[right] - this.prefixTable[left-1]
    }
    
}
```
```C++ []
class NumArray {
public:
    NumArray(vector<int>& nums) {
        
        size = nums.size();
        
        // build prefix sum table 
        prefixSum = vector<int>(size, 0);

        prefixSum[0] = nums[0];

        for( int k = 1; k < size ; k++){
            prefixSum[k] = prefixSum[k-1] + nums[k];
        }

    }
    
    int sumRange(int left, int right) {
        
        // lookup table from prefixSum
        if( left == 0 ){
            return prefixSum[right];
        
        }else{
            return prefixSum[right] - prefixSum[left-1];    
        }
        
    }
private:
    int size;
    vector<int> prefixSum;
};
```

---

Complexity analysis:

Time complexity: O(n)
O(n) : building of prefix sum table, s.

O(1) : each single range sum query.

---

Space complexity: O(n)

O(n) : size of prefix sum table, s.


---

Reference:

[1] [OpenGenius: Prefix sum array](https://iq.opengenus.org/prefix-sum-array/)

---

Related leetcode challenge:

[Leetcode #304 Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)

[Leetcode #1352 Product of the Last K Numbers](https://leetcode.com/problems/product-of-the-last-k-numbers/)