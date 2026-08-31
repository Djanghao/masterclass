# Scala, backtracking FP template. Memory and time, beats 100%.

**Author:** glususer
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3780831/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3780831/)

---

# Intuition
For each request, we can either take that request or skip that request and move onto next trequest. When we have finished all the requests, we need to check if the condition that the net movement across all buildings hsould be 0 is satisfied or not.

# Approach
This reminds me of backtracking and the constraints that requests are less than 16 further cements the notion that it should be solved using backtrack.

# Complexity
- Time complexity: Since we. are exploring every option and are not memozing the previous values, the time complexity should be $$0(2^m) * n. $$ *n factor comes because for each request once the number iof req finishes , we are checking whether the net movement across all buildings is 0 or not. 

- Space complexity: For each stack frame that we use, it contibutes n and therefore the space complexity is $$0(m)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def backtrack( requests: Array[Array[Int]],buildingsNetMovement:Array[Int], currCount:Int, maxCount:Int,i:Int ):Int={
  if(i >= requests.length){
    if(buildingsNetMovement.forall(_==0)) maxCount max currCount
    else maxCount
  }
  else{
    val currReq = requests(i)
    buildingsNetMovement(currReq(0)) = buildingsNetMovement(currReq(0))-1
    buildingsNetMovement(currReq(1)) = buildingsNetMovement(currReq(1))+1

    val take = backtrack(requests, buildingsNetMovement,currCount+1,maxCount ,i+1)

    buildingsNetMovement(currReq(0)) = buildingsNetMovement(currReq(0))+1
    buildingsNetMovement(currReq(1)) = buildingsNetMovement(currReq(1))-1
    val skip =backtrack(requests, buildingsNetMovement, currCount,maxCount,i+1)
    
    take max skip
  }
}
    def maximumRequests(n: Int, requests: Array[Array[Int]]): Int = {
        val buildingsNetMovement = Array.fill(n)(0)
        backtrack(requests, buildingsNetMovement,0,Int.MinValue,0)
    }
}
```