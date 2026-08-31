# C# - SortedSet - nlogn

**Author:** Dileepp
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/4033661/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/4033661/)

---

# Intuition
Use SortedSet to overcome TimeLimitExceeded issue.

# Approach
Checking the existence in SortedSet is O(1) and doing search is a binary search operation since collection is sorted.

# Complexity
- Time complexity:
O(n * log(n)) 
(n is count of arrival)

- Space complexity:
O(n)

# Code
```
public class Solution {

    class DuplicateKeyComparer : IComparer<int>
    {
        public int Compare(int x, int y)
        {
            int result = x.CompareTo(y);

            result = result == 0 ? 1 : result;

            return result;
        }            
    }

    class ServerEqualityComparer : IComparer<Server>
    {
        public int Compare(Server x, Server y)
        {
            if (x == null || y == null) return -1;

            return x.Id.CompareTo(y.Id);
        }

        public bool Equals(Server x, Server y)
        {
            if(x == null || y == null) return false;

            return x.Id.Equals(y.Id);
        }

        public int GetHashCode(Server obj)
        {
            return obj.Id.GetHashCode();
        }
    }

    class Server
    {
        public int Id { get; set; }

        public int ReqCount { get; set; }

        public int FreeTime { get; set;}
    }

    public IList<int> BusiestServers(int k, int[] arrival, int[] load) {
        var busyServers = new SortedList<int, Server>(new DuplicateKeyComparer()); // free time, server
        var serverRange = Enumerable.Range(0, k);
        var serverReqCount = new Dictionary<int, int>(serverRange.Select(i => new KeyValuePair<int, int>(i, 0))); // server, req count
        var freeServers = new SortedSet<Server>(serverRange.Select(i => new Server
        {
            FreeTime = 0,
            Id = i,
            ReqCount = 0
        }), new ServerEqualityComparer());

        for (var i = 0; i < arrival.Length; i++)
        {
            while (busyServers.Count > 0 && busyServers.ElementAt(0).Value.FreeTime <= arrival[i])
            {
                var firstServer = busyServers.First().Value;
                freeServers.Add(firstServer);
                busyServers.RemoveAt(0);
            }

            if (freeServers.Count == 0)
            {
                //req dropped
                continue;
            }

            Server freeServer = null;

            if (freeServers.Contains(new Server { Id = i % k }))
            {
                freeServers.TryGetValue(new Server { Id = i % k }, out freeServer);
            }
            else
            {
                //first or default will do binary search if the collection is sorted
                freeServer = freeServers.FirstOrDefault(j => j.Id > (i % k)) ?? freeServers.Min;                    
            }

            serverReqCount[freeServer.Id]++;
            freeServer.FreeTime = arrival[i] + load[i];
            busyServers.Add(freeServer.FreeTime, freeServer);
            freeServers.Remove(freeServer);
        }

        var maxReqCount = 0;
        var maxReqServers = new List<int>(serverReqCount.Count);

        foreach (var item in serverReqCount)
        {
            if (item.Value > maxReqCount)
            {
                maxReqCount = item.Value;
                maxReqServers = new List<int> { item.Key };
            }
            else if (item.Value == maxReqCount)
            {
                maxReqServers.Add(item.Key);
            }
        }

        return maxReqServers;
    }
}
```