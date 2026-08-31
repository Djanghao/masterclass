# Python/JS/Go O(n) by sliding-window and bucket [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 8
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/828127/](https://leetcode.com/problems/contains-duplicate-iii/solutions/828127/)

---

Python/Go O(n) by sliding-window and bucket

---

**Implementation**:

Python:

```
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        
        if t == 0 and len(set(nums)) == len(nums):
            
            # Quick response for t = 0
            # t = 0 requires at least one pair of repeated element
            
            return False
            
        
        size = len(nums)
        
        bucket = {}
        
        width = t + 1
        
        for idx, number in enumerate(nums):
            
            bucket_idx = number // width
            
            if bucket_idx in bucket:
                
                # two numbers in the same bucket, gap must be smaller than width
                return True
            
            elif bucket_idx + 1 in bucket and abs(number - bucket[bucket_idx + 1]) < width:
                
                # two number in two consecutive buckets, and gap is smaller than width
                return True
            
            elif bucket_idx - 1 in bucket and abs(number - bucket[bucket_idx - 1]) < width:
                
                # two number in two consecutive buckets, and gap is smaller than width
                return True
            
            # put current number into corresponding bucket
            bucket[bucket_idx] = number
            
            
            if idx >= k:
                
                # delete old number whose index distance larger than k
                del bucket[ nums[idx-k] //width ]
                
        return False
```

---

Javascript:

```
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    
    if(  (valueDiff == 0) && ( new Set(nums).size == nums.length ) ) {
        
        // Quick response for valueDiff = 0
        // valueDiff = 9 requires at least one pair ofrepeated element
        return false;
    }
    
    // key: element value / width
    // value: corresponding element 
    let bucket = new Map();
    
    const width = valueDiff + 1;
    
    for( let idx = 0 ; idx < nums.length ; idx++ ){
        
        let curNumber = nums[idx];
        
        let bucketIdx = Math.floor( curNumber / width );
        
        if( bucket.has(bucketIdx) ){
            
            // two numbers in the same bucket, gap must be smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx+1) && Math.abs( curNumber - bucket.get(bucketIdx+1) ) < width ){
        
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx-1) && Math.abs( curNumber - bucket.get(bucketIdx-1) ) < width ){
            
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
        }
        
        
        // put current number into corresponding bucket
        bucket.set( bucketIdx,  curNumber );
        
        if( idx >= indexDiff ){
            
            let oldNumber = nums[ idx - indexDiff ];
            let oldNumberBucketIdx = Math.floor( oldNumber / width);
            bucket.delete( oldNumberBucketIdx );
        } 
        
    }
    
   
    
    return false;
};
```

---

```

Go:

func Abs(x int) int {
    if x < 0{
        return -x
    }else{
        return x
    }
}

func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
 
    
    //size := len(nums)
    
    bucket := make( map[int]int)
    
    width := t+1
    
    for idx, number := range nums{
        
        var bucketIdx int
        
        if number >= 0 {
            
            bucketIdx = number / width
            
        }else{
            
            // offset patch for negative number
            bucketIdx = (number / width) - 1
        }
        
        if _, exist := bucket[bucketIdx]; exist{
            
            // two numbers in the smae bucket, gap must be smaller than width
            return true
            
        }else if _, exist := bucket[bucketIdx+1]; exist && ( Abs( number - bucket[bucketIdx+1] ) < width ) {
            
            // two number in two consecotive buckets, and gap is smaller than width
            return true
            
        }else if _, exist := bucket[bucketIdx-1]; exist && ( Abs(number - bucket[bucketIdx-1] ) < width ) {
        
            // two number in two consecotive buckets, and gap is smaller than width
            return true
        }
        
        
        // put current number into corresponding bucket
        bucket[bucketIdx] = number
        
        if idx >= k{
            delete(bucket, (nums[idx - k] / width) )
        }
        
    }
    
    return false
}
```

---

Related leetcode challenge:

[Leetcode #217 Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

[Leetcode #219 Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii)

[Leetcode #220 Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii)