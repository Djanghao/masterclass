# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 3
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/1262456/](https://leetcode.com/problems/network-delay-time/solutions/1262456/)

---

.Net 6 and later
```
public class Solution {
    public int NetworkDelayTime(int[][] times, int n, int k) 
    {
        List<List<(int node, int wt)>> adjList = new();
        
        for(int i=0; i<=n; i++)
            adjList.Add(new());
        
        foreach(var edge in times)
            adjList[edge[0]].Add((edge[1],edge[2]));
        
        int[] minDis = new int[n+1];
        Array.Fill(minDis,int.MaxValue);
        minDis[k] = 0;
        
        PriorityQueue<int,int> qu = new();
        qu.Enqueue(k,0);
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            foreach(var nd in adjList[cur])
            {
                if(minDis[nd.node] > minDis[cur] + nd.wt)
                {
                    minDis[nd.node] = minDis[cur] + nd.wt;
                    qu.Enqueue(nd.node, minDis[nd.node]);
                }
            }
        }
        
        int maxDis = 0;
        
        for(int i=1;i<=n;i++)
            maxDis = Math.Max(maxDis,minDis[i]);
        
        return maxDis==int.MaxValue ? -1 : maxDis;
        
    }
}
```
Before .Net 6
```
public class Solution 
{
    public int NetworkDelayTime(int[][] edges, int n, int k) 
    {
        List<List<(int n,int w)>> adjList = new List<List<(int n,int w)>>();
        
        for(int i=0;i<=n;i++)
            adjList.Add(new List<(int n,int w)>());
        
        for(int i=0; i<edges.Length; i++)
        {
            adjList[edges[i][0]].Add((edges[i][1],edges[i][2]));
        }
        
        int[] minDis = new int[n+1];
        Array.Fill(minDis,int.MaxValue);
        minDis[k]=0;
        Dijkstra(adjList,k,new int[n+1], minDis);
        int max = 0;
        
        for(int i=1;i<=n;i++)
        {
            if(minDis[i]==int.MaxValue)
                return -1;
            
            max = Math.Max(max,minDis[i]);
        }
        
        return max;
    }
    
    private void Dijkstra(List<List<(int n,int w)>> adjList, int node, int[] visited, int[] minDis)
    {
        PriorityQueue<(int n, int dis)> qu = new PriorityQueue<(int n, int dis)>();
        qu.compare = (x,y)=>x.dis.CompareTo(y.dis);
        qu.Enqueue((node,0));
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            visited[cur.n] = 1;
            
            foreach(var nd in adjList[cur.n])
            {
                if(visited[nd.n]==1)
                    continue;
                
                if(minDis[nd.n] > minDis[cur.n] + nd.w)
                {
                    minDis[nd.n] = minDis[cur.n] + nd.w;
                    qu.Enqueue((nd.n, minDis[nd.n]));
                }
            }
            
        }
    }
}

//https://gist.github.com/paralleltree/31045ab26f69b956052c

class PriorityQueue<T>
{
    private List<T> list;
    public int Count { get { return list.Count; } }
    public readonly bool IsDescending;
    public Comparison<T> compare;

    public PriorityQueue()
    {
        list = new List<T>();
    }

    public PriorityQueue(bool isdesc)
        : this()
    {
        IsDescending = isdesc;
    }

    public PriorityQueue(int capacity)
        : this(capacity, false)
    { }

    public PriorityQueue(IEnumerable<T> collection)
        : this(collection, false)
    { }

    public PriorityQueue(int capacity, bool isdesc)
    {
        list = new List<T>(capacity);
        IsDescending = isdesc;
    }

    public PriorityQueue(IEnumerable<T> collection, bool isdesc)
        : this()
    {
        IsDescending = isdesc;
        foreach (var item in collection)
            Enqueue(item);
    }


    public void Enqueue(T x)
    {
        list.Add(x);
        int i = Count - 1;

        while (i > 0)
        {
            int p = (i - 1) / 2;
            if ((IsDescending ? -1 : 1) * compare(list[p], x) <= 0) break;

            list[i] = list[p];
            i = p;
        }

        if (Count > 0) list[i] = x;
    }

    public T Dequeue()
    {
        T target = Peek();
        T root = list[Count - 1];
        list.RemoveAt(Count - 1);

        int i = 0;
        while (i * 2 + 1 < Count)
        {
            int a = i * 2 + 1;
            int b = i * 2 + 2;
            int c = b < Count && (IsDescending ? -1 : 1) * compare(list[b], list[a]) < 0 ? b : a;

            if ((IsDescending ? -1 : 1) * compare(list[c], root) >= 0) break;
            list[i] = list[c];
            i = c;
        }

        if (Count > 0) list[i] = root;
        return target;
    }

    public T Peek()
    {
        if (Count == 0) throw new InvalidOperationException("Queue is empty.");
        return list[0];
    }

    public void Clear()
    {
        list.Clear();
    }
}
```