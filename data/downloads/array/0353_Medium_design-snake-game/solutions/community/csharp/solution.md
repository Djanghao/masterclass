# Optimized Solution

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/5085059/](https://leetcode.com/problems/design-snake-game/solutions/5085059/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class SnakeGame {

    int foodIndex = 0;
    int[][] f;
    int mx = 0;
    int my = 0;
    string dir = "";
    Dictionary<(int,int),string> dirChange = new ();
    LinkedList<Blob> snake = new ();
    public SnakeGame(int width, int height, int[][] food) {
        mx = width-1;
        my = height-1;
        f = food;
        Blob b = new Blob() {
            x = 0,
            y = 0,
            dir = "",
        };
        var ln = new LinkedListNode<Blob>(b);
        snake.AddLast(ln);
    }
    
    public int Move(string direction) 
    {
        var node = snake.First;
        Blob b = (Blob)node.Value;
        int prevx = b.x;
        int prevy = b.y;
        b.dir = direction;
        if (dir == "")
        {
            dir = direction;
        } else if (direction != dir)
        {
            dirChange[(b.x, b.y)] = direction;
            dir = direction;
        }
        
        switch(direction)
        {
            case "U":
                b.y -= 1;
                break;
            case "D":
                b.y += 1;
                break;
            case "L":
                b.x -=1;
                break;
            case "R":
                b.x += 1;
                break;
        }
        //Console.WriteLine($"Head : {b.x} : {b.y}");
        if (b.x <0 || b.x > mx || b.y < 0 || b.y > my)
        {
            return -1;
        }
        //Console.WriteLine($"{f[foodIndex][0]} : {f[foodIndex][1]} : {b.x} : {b.y}");
        if (foodIndex < f.Length && f[foodIndex][0] == b.y && f[foodIndex][1] == b.x)
        {
            foodIndex++;
            Blob newB = new Blob() {
                x = prevx,
                y = prevy,
                dir = direction
            };
            var ln = new LinkedListNode<Blob>(newB);
            snake.AddAfter(node, ln);
            return snake.Count-1;
        }
        int count = snake.Count;
        int c = 0;
        foreach(Blob lb in snake)
        {   
            c++;
            if (lb == b)
            {
                continue;
            }
            Blob xb = lb;
            switch(xb.dir)
            {
                case "U":
                    xb.y -= 1;
                    break;
                case "D":
                    xb.y += 1;
                    break;
                case "L":
                    xb.x -=1;
                    break;
                case "R":
                    xb.x += 1;
                    break;
            }
            if (dirChange.ContainsKey((xb.x, xb.y)))
            {
                xb.dir = dirChange[(xb.x, xb.y)];
                //Console.WriteLine($"{dirChange.Count} Dir change {xb.x} : {xb.y} : {xb.dir}");
                if (c == count)
                {
                    dirChange.Remove((xb.x, xb.y));
                    //Console.WriteLine($"Remove {dirChange.Count}");
                }
            }
            //Console.WriteLine($"{xb.x} : {xb.y}");
            if (b.x == xb.x && b.y == xb.y)
            {
                return -1;
            }
        }
        return snake.Count-1;
    }
}

public class Blob
{
    public int x {get; set;}
    public int y {get; set;}
    public string dir {get; set;}
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * SnakeGame obj = new SnakeGame(width, height, food);
 * int param_1 = obj.Move(direction);
 */
```