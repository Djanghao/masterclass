# Simple || beats 100 % || min Heap || JS || Explanation || please upvote

**Author:** rajat-ds
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5312320/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5312320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- suppose you have two numbers 2 and 10
- if you increment bigger number say 10
- then your product will become 22
- but if you increment smaller number say 2
- then your product will become 30
- so it is obvious we should always increment smaller number 
- So that we can get maximum increase in product

# Approach
<!-- Describe your approach to solving the problem. -->
- Make a min heap
- increment the smallest number
- heapify it again
- continue above steps K time
- now you will have required array
- mulitpy each element of array to get product
- remember to do modolus

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- to make min heap nlogn
- to heapify K times klogn
- total = nlogn + klogn

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- o(1)

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
      let MOD = Math.pow(10, 9) + 7;
       let result = 1;
    minHeap(nums)
    while(k>0){
        nums[0]+=1
        k--;
        heapyfy(nums,0,nums.length)
    }
   for (let i = 0; i < nums.length; i++) {
    result = (result * nums[i]) % MOD;
  }
    
    return result
};

var minHeap =( nums)=>{
    for( let i = Math.floor(nums.length/2) ; i>=0 ;i--){
        heapyfy(nums,i,nums.length)
    }
}

var heapyfy = (arr , i , heapSize ) =>{
    let lC = 2*i + 1 ;
    let rC = 2*i + 2 ;
    let min = i ;
    if( lC < heapSize && arr[lC] < arr[i])
        min = lC
    if( rC < heapSize && arr[rC] < arr[min])
        min = rC
    if(min!==i){
        [arr[i] , arr[min] ] = [ arr[min] , arr[i] ]
        heapyfy(arr,min,heapSize)
    }
        
}
```