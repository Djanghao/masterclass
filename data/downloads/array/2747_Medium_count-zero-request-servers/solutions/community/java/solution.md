# Java Sliding Window with comments

**Author:** basic-abc
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3680688/](https://leetcode.com/problems/count-zero-request-servers/solutions/3680688/)

---

# Approach
Sort logs and queries. Iterate over queries and maintain a window of logs that are "active" with two pointers to include/exclude logs. Time complexity should be `O(nlog(n) + mlog(m))`, depending on which set is larger, the number of logs or the number of queries.
<!-- Describe your approach to solving the problem. -->

# Code
```
class Solution {
    public int[] countServers(int n, int[][] logs, int x, int[] queries) {
        // Sort logs according to time of log
        Arrays.sort(logs, (a, b) -> a[1] - b[1]);

        // Append query id to queries, and sort to time of query
        List<int[]> queriesWithId = new ArrayList<>();
        for (int i = 0; i < queries.length; i++) {
            queriesWithId.add(new int[] {i, queries[i]});
        }
        Collections.sort(queriesWithId, (a, b) -> a[1] - b[1]);

        int[] res = new int[queries.length];

        // Map to keep track of active servers, key - server id, value - number of logs within query window
        Map<Integer, Integer> activeServers = new HashMap<>();
        int loggerStart = 0; // left pointer to exclude logs
        int loggerEnd = 0; // right pointer to include logs
        for (int[] query : queriesWithId) {
            int queryId = query[0];
            int queryStart = query[1] - x;
            int queryEnd = query[1];
            // System.out.println("query: " + queryId + " -> [" + queryStart + ", " + queryEnd + "]");

            // capture all logs that are within time period - expand window
            while (loggerEnd < logs.length && logs[loggerEnd][1] <= queryEnd) {
                int server = logs[loggerEnd][0];
                // System.out.println("Add log (server, time): " + server + ", time: " + logs[loggerEnd][1]);
                activeServers.put(server, activeServers.getOrDefault(server, 0) + 1);
                loggerEnd++;
            }
            
            // exclude all logs no longer within time period - narrow window
            while (loggerStart < logs.length && logs[loggerStart][1] < queryStart) {
                int server = logs[loggerStart][0];
                // System.out.println("Remove log (server, time): " + server + ", time: " + logs[loggerStart][1]);
                activeServers.put(server, activeServers.get(server) - 1);
                if (activeServers.get(server) == 0) activeServers.remove(server);
                loggerStart++;
            }

            res[queryId] = n - activeServers.size();
            // System.out.println("res[queryId]: " + res[queryId]);
        }
        return res;
    }
}
```