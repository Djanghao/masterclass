# C# 2 queues solution

**Author:** clewBy
**Votes:** 2
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/2892432/](https://leetcode.com/problems/process-tasks-using-servers/solutions/2892432/)

---

```
public class Solution {
    public int[] AssignTasks(int[] servers, int[] tasks) {
        PriorityQueue<Server,Server> busy = new(new ServerComparer());
        PriorityQueue<Server,Server> avail = new(new ServerComparer());
        for(int i = 0; i < servers.Length; i++){
            var s = new Server() { TimeFree = 0, Weight = servers[i], Index = i };
            avail.Enqueue(s,s);
        }
        int[] result = new int[tasks.Length];
        int currTime = 0, resultIdx = 0;
        for(int i = 0; i < tasks.Length;){
            // if server has finished it's work move it back to avail queue
            while(busy.Count > 0 && busy.Peek().TimeFree <= currTime){
                var s = busy.Dequeue();
                s.TimeFree = 0;
                avail.Enqueue(s,s);             
            }
            // while process all tasks with start time less or equal to curr time
            while(i < tasks.Length && i <= currTime && avail.Count > 0){
                var s = avail.Dequeue();
                s.TimeFree = currTime+tasks[i];
                busy.Enqueue(s,s);
                result[resultIdx++] = s.Index;
                i++;
            }
            // if no available servers - move in time when 
            // one of the servers becomes available 
            if(avail.Count == 0) currTime = busy.Peek().TimeFree;
            else currTime++;
        }
        return result;
    }
    class Server{
        public int TimeFree { get; set; }
        public int Weight { get; set; }
        public int Index { get; set; }
    }
    class ServerComparer : IComparer<Server>{
        public int Compare(Server x, Server y){
            if(x.TimeFree != y.TimeFree){
                return x.TimeFree-y.TimeFree;
            } else if(x.Weight != y.Weight){
                return x.Weight-y.Weight;
            } else
                return x.Index-y.Index;
        }
    }
}
```