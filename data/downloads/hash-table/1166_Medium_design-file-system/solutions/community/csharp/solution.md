# Basic solution using dictionary

**Author:** mariuss
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/5379475/](https://leetcode.com/problems/design-file-system/solutions/5379475/)

---

# Intuition
This solution works, but given that this is a medium-level difficulty, I'm guessing it's supposed to be implemented in some other way, maybe using a tree structure.

# Code
```
public class FileSystem 
{
    private readonly Dictionary<string, int> data = [];

    public FileSystem() 
    {
    }
    
    public bool CreatePath(string path, int value)
    {
        if (string.IsNullOrEmpty(path) || data.ContainsKey(path))
        {
            return false;
        }

        string parentPath = path[..path.LastIndexOf("/")];

        if (!string.IsNullOrEmpty(parentPath) && !data.ContainsKey(parentPath))
        {
            return false;
        }

        data[path] = value;
        return true;
    }

    public int Get(string path) => data.TryGetValue(path, out var value) ? value : -1;
}

```