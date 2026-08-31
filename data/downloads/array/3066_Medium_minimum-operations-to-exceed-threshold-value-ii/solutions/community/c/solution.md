# [rust/python/c++] PriorityQueue

**Author:** Memba1
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4962588/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4962588/)

---

**RUST**
```
impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        use std::collections::BinaryHeap ;
        use std::cmp::{min,max} ;
        let mut min_heap:BinaryHeap<i64> = BinaryHeap::new() ;
        for num in nums.iter() {
            min_heap.push( (*num * -1)as i64 );
        }
        let mut op_cnt:i32 = 0 ;
        while let (Some(x),Some(y)) = (min_heap.pop(),min_heap.pop()) {
            let (mi,ma) = (min(-1*x,-1*y),max(-1*x,-1*y));
            if mi < k as i64 {
                op_cnt += 1 ;
                min_heap.push((mi*2+ma)* -1) ;
            }
            else{
                break;
            }
        }
        op_cnt
        
    }
}

```
**C++**
```
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        auto cmp = [] (long a,long b)->bool{
            return a>b ;
        };
        priority_queue<long,vector<long>,decltype(cmp)> pq(nums.begin() ,nums.end(),cmp) ; 
        int op_cnt = 0 ;
        while(pq.size() > 1 && pq.top() < k){
            long x , y ;
            x = pq.top() ; pq.pop() ;
            y = pq.top() ; pq.pop() ;
            pq.push(min(x,y) * 2 + max(x,y));
            op_cnt++;
        }
        return op_cnt ;
    }
};
```
**PYTHON**
```
import heapq as hp
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        hp.heapify(nums)
        op_cnt = 0
        while len(nums)>1 and nums[0] < k:
            x  = hp.heappop(nums)
            y = hp.heappop(nums)
            hp.heappush(nums, min(x,y)*2 + max(x,y))
            op_cnt += 1
        return op_cnt
```