# scala solution

**Author:** macmerritt90
**Votes:** 0
**Link:** [https://leetcode.com/problems/kill-process/solutions/2024218/](https://leetcode.com/problems/kill-process/solutions/2024218/)

---

first scala attempt ran into time limits or memory issues.  I had to modify the code to be a little more functional in the way the "graph" was constructed. Seems to take more advantage of the language.  

small random scala tip thats included in the while loop: prepending is O(1), appending is O(N) so allways prepend to lists, then reverse at the end if needed.  

```
import scala.collection.mutable.Queue
object Solution {
    def killProcess(pid: List[Int], ppid: List[Int], kill: Int): List[Int] = {
        val pid2Children:Map[Int,List[Int]] = ppid.zip(pid).groupBy(_._1).map(t=> t._1 -> t._2.map(_._2))
        var outList = List[Int]()
        val queue = Queue(kill)
        while(queue.nonEmpty){
            var curI = queue.dequeue
            outList = curI +: outList
            pid2Children.get(curI).foreach(children=> children.foreach(queue.enqueue(_)))
        }
        outList
    }
}
```



For what it is worth,  my original solution that ran into time limits is also included here: 
```
import scala.collection.mutable.{Map,Set}
object Solution {
    def killProcess(pid: List[Int], ppid: List[Int], kill: Int): List[Int] = {
        val pid2Process: Map[Int,Process] = createProcessGraph(pid,ppid)
        return getAllChildren(pid2Process(kill))
    }
    
    private def createProcessGraph(pid:List[Int],ppid:List[Int]):Map[Int,Process] = {
        val outMap:Map[Int,Process] = Map[Int,Process]()
        for(i<-0 until ppid.size){
            //add current pid if needed
            outMap.get(pid(i)) match{
                case Some(_) =>
                case None => outMap += pid(i) -> Process(pid(i))
            }
            //add curent pid as child to its parent 
            if(ppid(i)!=0){
            outMap.get(ppid(i)) match{
                case Some(process) => process.children.add(outMap(pid(i)))
                case None => outMap += ppid(i) -> Process(ppid(i),Set(outMap(pid(i))))
            }
            }
        }
        outMap
    }
    
    private def getAllChildren(process:Process):List[Int] = {
        if(process.children.isEmpty){
            List(process.id)
        } else{
            process.id +: process.children.toList.flatMap(getAllChildren(_))
        }
    }
    
    case class Process(id:Int,children:Set[Process] = Set[Process]())
}
```