# Ruby go through kill list

**Author:** user0712R
**Votes:** 0
**Link:** [https://leetcode.com/problems/kill-process/solutions/2108956/](https://leetcode.com/problems/kill-process/solutions/2108956/)

---

```
# @param {Integer[]} pid
# @param {Integer[]} ppid
# @param {Integer} kill
# @return {Integer[]}
def kill_process(pid, ppid, kill)
    children= {}  
    for i in 0..pid.size-1
        children[ppid[i]] ||= []
        children[ppid[i]] << pid[i]
    end    
    kill_process_with_children([kill],children)   
end

def kill_process_with_children(kill_list,children)
    killed = []
    while !kill_list.empty?
        current = kill_list.shift
       killed << current
       kill_list += children[current] if children[current]
    end
    killed
end
```