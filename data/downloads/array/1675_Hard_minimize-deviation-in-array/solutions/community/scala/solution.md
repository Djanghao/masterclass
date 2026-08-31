# Scala Solution using Priority_queue

**Author:** user0023Ug
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3224674/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3224674/)

---

# Intuition
To Solve this Question Either All number has to be even or odd.
 

# Approach
As Given in Question we can divide a even number by 2 and multiply an odd number by 2. 
But dividing an even number by 2 does not ensure an odd number ,but multiplying an odd number by 2 ensures always an even number.So we convert all numbers to even format.
Then we find the current diff.Now using a max_heap we update 
our diff and pushing in max_heap ( heap_top/2).
When we encounter an odd number in we stop because this will the least number as odd number can be multiplied only. So our diff will only increase

 

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
 $$O(n)$$

# Code
```
object Solution {
    def minimumDeviation(nums: Array[Int]): Int = {
        
        import scala.collection.mutable.PriorityQueue 
        // Max_heap
        val mx = new PriorityQueue[Int]()
        var x : Array[Int] = 
        for (i <- nums )
           yield 
              if( i%2 == 0) i
              else i*2
        for ( i <- x) mx+=i      
       // Vec is min element which we have
        var vec = x.reduceLeft(_ min _)
        // Initialising ans
        var ans = Int.MaxValue
       // head of queue ->largest element
        while( mx.head % 2 == 0){
            val xx = mx.dequeue 
            ans = Math.min( ans, xx-vec)
            // we are trying to minimise our diff
            mx.enqueue(xx/2)
            vec = Math.min( vec, xx/2)
        }
        Math.min(ans, mx.dequeue-vec);

        
         
    }
}
```