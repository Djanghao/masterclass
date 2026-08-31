# C# Readable O(N) Stack Solution

**Author:** kkscales0
**Votes:** 3
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/1972690/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/1972690/)

---

```public class Solution {
    public int[] ExclusiveTime(int n, IList<string> logs) {
        Stack<LogObj> stk = new();
        int[] res = new int[n];
        
        foreach (string log in logs) {
            LogObj newLog = new LogObj(log);
            
            if (newLog.IsStart) {
                if (stk.Count != 0) {
                    LogObj last = stk.Peek();
					
					// Processes start at the beinning of the time block
                    int time = newLog.Time - last.Time;
                    
                    res[last.Funct] += time;
                }
                
                stk.Push(newLog);
                
            } else {
                LogObj last = stk.Pop();
				
				// Ending processes end at the end of the time block, so we add 1
                int time = (newLog.Time - last.Time) + 1;
                
                res[last.Funct] += time;
                
				// If there is a process in the stack that will start after this one ends
				// update its start time to the block after the current process ended
				// since it ended at the end of the time block
                if (stk.Count != 0) {
                    LogObj prev = stk.Peek();
                    prev.Time = newLog.Time + 1;
                }
            }
        }
        
        return res;
    }
}

public class LogObj {
    public int Time;
    public int Funct;
    public bool IsStart;
    
    public LogObj(string l) {
        string[] val = l.Split(':');
        this.Funct = Int32.Parse(val[0]);
        this.IsStart = val[1] == "start";
        this.Time = Int32.Parse(val[2]);
    }
}