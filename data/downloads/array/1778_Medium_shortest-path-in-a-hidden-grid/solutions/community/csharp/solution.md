# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1255594/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1255594/)

---

**Without Priority Queue**
```
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *     bool canMove(char direction);
 *     void move(char direction);
 *     bool isTarget();
 * };
 */

class Solution 
{
    int[] dx = {-1,1,0,0};
    int[] dy = {0,0,-1,1};
    char[] dir = {'U','D','L','R'};
    Dictionary<char,char> mapDir = new Dictionary<char,char>
    {
        {'U','D'},{'D','U'},{'L','R'},{'R','L'}
    };
    int[,] grid = new int[1000,1000];
    int[,] visited = new int[1000,1000];
    int[] target = {-1,-1};
    
    public int FindShortestPath(GridMaster master) 
    {
        InitializeGrid(master,500,500);
        
        if(target[0]==-1 || target[1]==-1)
            return -1;
        
        int[,] dis = new int[1000,1000];
        
        for(int i=0; i<1000; i++)
        {
            for(int j=0; j<1000; j++)
            {
                dis[i,j] = int.MaxValue;
            }
        }
        
        dis[500,500] = 0;
        
        Queue<(int x,int y)> qu = new Queue<(int x,int y)>();
        qu.Enqueue((500,500));
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            for(int d=0;d<4;d++)
            {
                int a = cur.x + dx[d];
                int b = cur.y + dy[d];
                
                if(a<0 || a>=1000 || b<0 || b>=1000 || grid[a,b]==0)
                    continue;
                
                if(dis[a,b] > dis[cur.x,cur.y] + grid[a,b])
                {
                    dis[a,b] = dis[cur.x,cur.y] + grid[a,b];
                    qu.Enqueue((a,b));
                }
            }
        }
        
        return dis[target[0],target[1]];
    }
    
    private void InitializeGrid(GridMaster master, int i, int j)
    {
        visited[i,j] = 1;
        
        if(master.isTarget())
            target = new int[]{i,j};
        
        for(int d=0;d<4;d++)
        {
            int a = i + dx[d];
            int b = j + dy[d];
            
            if(a<0 || a>=1000 || b<0 || b>=1000 || visited[a,b]==1 || !master.canMove(dir[d]))
                continue;
            
            grid[a,b] =  1;
            master.move(dir[d]);
            InitializeGrid(master,a,b);
            master.move(mapDir[dir[d]]);
        }
    }
}
```
-------------------------------------------------------------
With Priority Queue
```
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *     bool canMove(char direction);
 *     void move(char direction);
 *     bool isTarget();
 * };
 */

class Solution 
{
    int[] dx = {-1,1,0,0};
    int[] dy = {0,0,-1,1};
    char[] dir = {'U','D','L','R'};
    Dictionary<char,char> mapDir = new Dictionary<char,char>
    {
        {'U','D'},{'D','U'},{'L','R'},{'R','L'}
    };
    int[,] grid = new int[1000,1000];
    int[,] visited = new int[1000,1000];
    int[] target = {-1,-1};
    
    public int FindShortestPath(GridMaster master) 
    {
        InitializeGrid(master,500,500);
        
        if(target[0]==-1 || target[1]==-1)
            return -1;
        
        int[,] dis = new int[1000,1000];
        
        for(int i=0; i<1000; i++)
        {
            for(int j=0; j<1000; j++)
            {
                dis[i,j] = int.MaxValue;
                visited[i,j] = 0;
            }
        }
        
        dis[500,500] = 0;
        
        PriorityQueue<(int x,int y,int dis)> qu = new PriorityQueue<(int x,int y,int dis)>();
        qu.compare = (x,y)=>x.dis.CompareTo(y.dis);
        visited[500,500] = 1;
        qu.Enqueue((500,500,0));
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            if(cur.x==target[0] && cur.y==target[1])
                return cur.dis;
            
            for(int d=0;d<4;d++)
            {
                int a = cur.x + dx[d];
                int b = cur.y + dy[d];
                
                if(a<0 || a>=1000 || b<0 || b>=1000 || grid[a,b]==0 || visited[a,b]==1)
                    continue;
                
                visited[a,b] = 1;
                
                if(dis[a,b] > dis[cur.x,cur.y] + grid[a,b])
                {
                    dis[a,b] = dis[cur.x,cur.y] + grid[a,b];
                    qu.Enqueue((a,b,dis[a,b]));
                }
            }
        }
        
        return -1;
    }
    
    private void InitializeGrid(GridMaster master, int i, int j)
    {
        visited[i,j] = 1;
        
        if(master.isTarget())
            target = new int[]{i,j};
        
        for(int d=0;d<4;d++)
        {
            int a = i + dx[d];
            int b = j + dy[d];
            
            if(a<0 || a>=1000 || b<0 || b>=1000 || visited[a,b]==1 || !master.canMove(dir[d]))
                continue;
            
            grid[a,b] =  1;
            master.move(dir[d]);
            InitializeGrid(master,a,b);
            master.move(mapDir[dir[d]]);
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