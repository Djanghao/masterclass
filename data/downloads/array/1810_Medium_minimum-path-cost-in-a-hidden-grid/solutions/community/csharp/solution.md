# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1255051/](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1255051/)

---

**Without Priority Queue**
```
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *     bool canMove(char direction);
 *     int move(char direction);
 *     bool isTarget();
 * };
 */

class Solution 
{
    int[,] grid = new int[200,200];
    int[,] visited = new int[200,200];
    int[] target = {-1,-1};
    int[] dx = {-1,1,0,0};
    int[] dy = {0,0,-1,1};
    char[] dir = {'U','D','L','R'};
    Dictionary<char,char> dirMap = new Dictionary<char,char>{{'U','D'},{'D','U'},{'L','R'},{'R','L'}};
    
    public int FindShortestPath(GridMaster master) 
    {
        InitializeGrid(master,100,100);
        
        if(target[0]==-1 || target[1]==-1)
            return -1;
        
        int[,] dis = new int[200,200];
        
        for(int i=0;i<200;i++)
        {
            for(int j=0;j<200;j++)
                dis[i,j] = int.MaxValue;
        }
        
        Queue<(int x,int y)> qu = new Queue<(int x,int y)>();
        qu.Enqueue((100,100));
        dis[100,100] = 0;
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            for(int d=0; d<4; d++)
            {
                int i = cur.x + dx[d];
                int j = cur.y + dy[d];
                
                if(i<0 || i>=200 || j<0 || j>=200 || grid[i,j]==0)
                    continue;
                
                if(dis[i,j] > dis[cur.x,cur.y] + grid[i,j])
                {
                    dis[i,j] = dis[cur.x,cur.y] + grid[i,j];
                    qu.Enqueue((i,j));
                }
                
            }
        }
        
        return dis[target[0],target[1]] == int.MaxValue ? -1 : dis[target[0],target[1]];
    }
    
    
    private void InitializeGrid(GridMaster master, int x, int y)
    {
        visited[x,y] = 1;
        
        if(master.isTarget())
            target = new int[]{x, y};
        
        for(int d=0; d<4; d++)
        {
            int i = x + dx[d];
            int j = y + dy[d];
            
            if(master.canMove(dir[d]) && visited[i,j]==0)
            {
                grid[i,j] = master.move(dir[d]);
                InitializeGrid(master,i,j);
                master.move(dirMap[dir[d]]);
            }
        }
        
    }
}
```
-------------------------------------------------------------
**With Priority Queue**
```
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *     bool canMove(char direction);
 *     int move(char direction);
 *     bool isTarget();
 * };
 */

class Solution 
{
    int[,] grid = new int[200,200];
    int[,] visited = new int[200,200];
    int[] target = {-1,-1};
    int[] dx = {-1,1,0,0};
    int[] dy = {0,0,-1,1};
    char[] dir = {'U','D','L','R'};
    Dictionary<char,char> dirMap = new Dictionary<char,char>{{'U','D'},{'D','U'},{'L','R'},{'R','L'}};
    
    public int FindShortestPath(GridMaster master) 
    {
        InitializeGrid(master,100,100);
        Array.Clear(visited,0,200*200);
        int[,] dis = new int[200,200];
        
        for(int i=0;i<200;i++)
        {
            for(int j=0;j<200;j++)
                dis[i,j] = int.MaxValue;
        }
        
        PriorityQueue<(int x,int y,int dis)> qu = new PriorityQueue<(int x,int y,int dis)>();
        qu.compare = (x,y) => x.dis.CompareTo(y.dis);
        qu.Enqueue((100,100,0));
        visited[100,100] = 1;
        dis[100,100] = 0;
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            if(cur.x==target[0] && cur.y==target[1])
                return cur.dis;
            
            for(int d=0; d<4; d++)
            {
                int i = cur.x + dx[d];
                int j = cur.y + dy[d];
                
                if(i<0 || i>=200 || j<0 || j>=200 || grid[i,j]==0 || visited[i,j]==1)
                    continue;
                
                visited[i,j] = 1;
                
                if(dis[i,j] > dis[cur.x,cur.y] + grid[i,j])
                {
                    dis[i,j] = dis[cur.x,cur.y] + grid[i,j];
                    qu.Enqueue((i,j,dis[i,j]));
                }
                
            }
        }
        
        return -1;
    }
    
    
    private void InitializeGrid(GridMaster master, int x, int y)
    {
        visited[x,y] = 1;
        
        if(master.isTarget())
            target = new int[]{x, y};
        
        for(int d=0; d<4; d++)
        {
            int i = x + dx[d];
            int j = y + dy[d];
            
            if(master.canMove(dir[d]) && visited[i,j]==0)
            {
                grid[i,j] = master.move(dir[d]);
                InitializeGrid(master,i,j);
                master.move(dirMap[dir[d]]);
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