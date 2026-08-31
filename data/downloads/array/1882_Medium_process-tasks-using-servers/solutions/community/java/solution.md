# Java | Heap Solution | Interview Code with Classes

**Author:** polyvoid
**Votes:** 11
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/1635716/](https://leetcode.com/problems/process-tasks-using-servers/solutions/1635716/)

---

The question itself mentions that you need to choose minimum weight server with least index in order to schedule a given job.
This alone tells us that "Greedy" choice at each step should work.

So, everytime we need to schedule a task, we need to find a candidate server that satisfies "Greedy" requirement above. So, at current timestamp
1. Check all servers that are free at this point and add them to a PQ
2. Poll the PQ and assign tasks to the free servers

```
    private class Server {
        int weight;
        int index;

        public Server(int weight, int index) {
            this.weight = weight;
            this.index = index;
        }
    }
	
	// Represents task-server assignment
    private class Assign {
		// time at which this server will become free again
        int freeTime;
        Server server;

        public Assign(int freeTime, Server server) {
            this.freeTime = freeTime;
            this.server = server;
        }
    }

    public int[] assignTasks(int[] servers, int[] tasks) {
		// PQ to store servers (server with least weight or least index is polled first)
        Queue<Server> serverQueue = new PriorityQueue<>((s1, s2) -> {
            if (s1.weight - s2.weight != 0)
                return s1.weight - s2.weight;
            return s1.index - s2.index;
        });
		
		// PQ to store assigned servers (server with least freeTime is polled first)
        Queue<Assign> assignQueue = new PriorityQueue<>(Comparator.comparingInt(a -> a.freeTime));

        for (int i = 0; i < servers.length; ++i)
            serverQueue.add(new Server(servers[i], i));

        int j = 0;
        int time = 0;
        int[] ans = new int[tasks.length];

        while (j < tasks.length) {
			// check what all servers have become free
            while (!assignQueue.isEmpty() && assignQueue.peek().freeTime <= time) {
                serverQueue.add(assignQueue.poll().server);
            }
			// assign tasks to available servers
            // using condition "j <= time" because accd. to question "At second j, the jth task is inserted into the queue"
            while (!serverQueue.isEmpty() && j <= time && j < tasks.length) {
                int task = tasks[j];
                Server server = serverQueue.poll();
                ans[j] = server.index;
                assignQueue.add(new Assign(time + task, server));
                ++j;
            }
            // increase time, so that we can process next task
            if (!serverQueue.isEmpty())
                time++;
            else
                // when no servers are available, move to next available server's freeTime
				// this decreases loop iterations, since there can be a situation where time <<< next freeTime
                time = assignQueue.peek().freeTime;
        }

        return ans;
    }
```