# Java O(N Log K) time complexity solution, using TreeSet and Priority Queue

**Author:** Harshita95
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/2423326/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/2423326/)

---

```
class ServerInfo {
    private int serverId;
    private int nextAvailableTime;
    
    public ServerInfo (int serverId, int nextAvailableTime) {
        this.serverId = serverId;
        this. nextAvailableTime = nextAvailableTime;
    }   
    
    public int getNextAvailableTime() {
        return this.nextAvailableTime;
    }    
    
    public int getServerId() {
        return this.serverId;
    }
}

class ServerComparator implements Comparator<ServerInfo> {
    public int compare(ServerInfo s1, ServerInfo s2) {
        if (s1.getNextAvailableTime() == s2.getNextAvailableTime())
            return Integer.compare(s1.getServerId(), s2.getServerId());
        return Integer.compare(s1.getNextAvailableTime(), s2.getNextAvailableTime());
    }
}

class Solution {
    
    ServerComparator serverComparator = new ServerComparator();
    
    
    public List<Integer> busiestServers(int k, int[] arrival, int[] load) {
        
        int[] serverRequestsCounter = new int[k];
        
        
        // Initially all servers are idle
        TreeSet<Integer> availableServers = new TreeSet<>();
        for (int serverId=0; serverId<k; serverId++) {
            availableServers.add(serverId);
        }
        
        // Maintain the buzy servers in Priority Queue, when new arrival time comes, free up previous servers
        PriorityQueue<ServerInfo> buzyServers = new PriorityQueue<>(serverComparator);
        
        for (int idx=0; idx<arrival.length; idx++) {
            
            int arrivalTime = arrival[idx];

            while (!buzyServers.isEmpty() 
                   && arrivalTime >= buzyServers.peek().getNextAvailableTime()) {
                
                availableServers.add(buzyServers.poll().getServerId());
                
            }
            
            if (availableServers.isEmpty())
                continue;
            
            // This will give next server Id which is freed up
            Integer assignedServerId = availableServers.ceiling(idx % k);
            
            if (assignedServerId == null) {
                assignedServerId = availableServers.first();
            }
            
            serverRequestsCounter[assignedServerId]++;
            
            // Remove the assigned server from available pool
            availableServers.remove(assignedServerId);
                  
            // Add the assigned server to buzy pool
            buzyServers.add(new ServerInfo(assignedServerId, arrivalTime + load[idx]));
        
        }
        
        return busiestServers(serverRequestsCounter, k);
    }
    
    
    private List<Integer> busiestServers (int[] serverRequestsCounter, int numServers) {
        int maxRequests = 0;
        
        for  (int i=0; i<numServers; i++) {
            maxRequests = Math.max(serverRequestsCounter[i], maxRequests);
        }
        
        List<Integer> busiestServers = new ArrayList<>();
            
        for (int i=0; i<numServers; i++) {
            if (serverRequestsCounter[i] == maxRequests) {
                busiestServers.add(i);
            }
        }
        
        return busiestServers;
    }
}
