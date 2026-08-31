# 100% BFS solution with no DP

**Author:** macmerritt90
**Votes:** 1
**Link:** [https://leetcode.com/problems/race-car/solutions/2014513/](https://leetcode.com/problems/race-car/solutions/2014513/)

---

basic bfs would require searching 2^n position velocity pairs.  So we need to prune it down.  I have a hard time following the math behind the DP solutions, but the main point of the DP solutions seems to be that at any given target, there are three options to get there that should be considered: 
1) if we can accelerate straight to target then that is the solution
2) we accelerate one move past target, then reverse
3) we reverse one move before we would pass the target

```
import scala.collection.mutable.{Queue,Set}

object Solution {
    def racecar(target: Int): Int = {
        val queue = Queue[PVC]()
        
        queue.enqueue(PVC(0,1,0))
        var curPVC:PVC = null
        var aPVC:PVC = null //next pv if we accelerate
        var rPVC:PVC = null// next pv is we reverse
        while(!queue.isEmpty){
            curPVC = queue.dequeue
            if(curPVC.p==target){
                return curPVC.count
            }
            aPVC = PVC(curPVC.p+curPVC.v,curPVC.v*2,curPVC.count+1)
            rPVC = PVC(curPVC.p,if(curPVC.v>0){-1} else{1},curPVC.count+1)
            if(nextPointPassesTarget(aPVC,target)){
                queue.enqueue(PVC(aPVC.p,aPVC.v,curPVC.count+1))
                queue.enqueue(rPVC)
            } else{
                queue.enqueue(aPVC)
            }
        }
        return curPVC.count //we should never get here
    }
    def nextPointPassesTarget(nextPoint:PVC,target:Int):Boolean = {
        if(nextPoint.v>0){
            return nextPoint.p>target
        }else{
            return nextPoint.p<target
        }
    }

    case class PVC(p:Int,v:Int,count:Int) //point velocity count (for queue)
}
```