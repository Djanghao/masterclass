# Simple recursive solutions and an iterative one

**Author:** anikit
**Votes:** 6
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/2931659/](https://leetcode.com/problems/keys-and-rooms/solutions/2931659/)

---

Recursive solution:
```csharp
public class Solution 
{
    public bool CanVisitAllRooms(IList<IList<int>> rooms)
    {
        var visited = new bool[rooms.Count];
        Dfs(room: 0);
        return visited.All(v => v);

        void Dfs(int room)
        {
            if (visited[room]) return;
            
            visited[room] = true;

            foreach (int key in rooms[room])
            {
                Dfs(key);
            }
        }
    }
}
```
Alternatively, we can check whether the room was visited before calling `Dfs`:
```csharp
public class Solution 
{
    public bool CanVisitAllRooms(IList<IList<int>> rooms)
    {
        var visited = new bool[rooms.Count];
        Dfs(room: 0);
        return visited.All(v => v);

        void Dfs(int room)
        {
            visited[room] = true;

            foreach (int key in rooms[room])
            {
                if (!visited[key]) Dfs(key);
            }
        }
    }
}
```

A nice iterative solution by [PrashantUnity](https://leetcode.com/PrashantUnity/) from the comments:
```csharp
public class Solution 
{
    public bool CanVisitAllRooms(IList<IList<int>> rooms)
    {
        Stack<int> stack = new();
        HashSet<int> visited = new();

        stack.Push(0);
        visited.Add(0);

        while (stack.Count > 0)
        {
            int cur = stack.Pop();
            visited.Add(cur);

            foreach (int key in rooms[cur])
            {
                if (!visited.Contains(key)) stack.Push(key);
            }
        }

        return visited.Count == rooms.Count;
    }
}
```