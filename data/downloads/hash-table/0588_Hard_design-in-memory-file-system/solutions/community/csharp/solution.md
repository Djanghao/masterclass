# C# | Dictionary

**Author:** anaken
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/4223509/](https://leetcode.com/problems/design-in-memory-file-system/solutions/4223509/)

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
public class Directory
{
    public string name;
    public Directory(string name)
    {
        this.name = name;
        directories = new Dictionary<string,Directory>();
        files = new Dictionary<string,string>();
    }
    public Dictionary<string,Directory> directories;
    public Dictionary<string,string> files;
}

public class FileSystem {
    Directory root;
    public FileSystem() 
    {
        root = new Directory("/");
    }
    
    public IList<string> Ls(string path) 
    {
        string[] dirs = path.Split("/");

        IList<string> result = new List<string>();

        Directory curr = root;

        for(int i = 0 ; i < dirs.Length-1; i++)
        {
           if(!string.IsNullOrEmpty(dirs[i])) 
           {
              curr = curr.directories[dirs[i]];
           }        
        }
        if(curr.files.ContainsKey(dirs[dirs.Length-1]))
        {
            // FilePath
            result.Add(dirs[dirs.Length-1]);
        }
        else
        {
           // DirectoryPath
           if(curr.directories.ContainsKey(dirs[dirs.Length-1]))
           {
             curr = curr.directories[dirs[dirs.Length-1]];
           }          
           
           // All File names in this directory
           foreach(string file in curr.files.Keys)
           {
               result.Add(file);
           }

           // All Directory Names in this directory
            foreach(string directory in curr.directories.Keys)
           {
               result.Add(directory);
           }
        }
        string[] ar = result.ToArray();
        Array.Sort(ar);
        return ar.ToList();
    }
    
    public void Mkdir(string path) 
    {
        string[] dirs = path.Split("/");
        Directory curr = root;
        foreach(string dir in dirs)
        {
            if(string.IsNullOrEmpty(dir)) continue;

            if(!curr.directories.ContainsKey(dir))
            {
                curr.directories.Add(dir,new Directory(dir));
            }
            curr = curr.directories[dir];
        }
    }
    
    public void AddContentToFile(string filePath, string content) 
    {
        string[] dirs = filePath.Split("/");
        Directory curr = root;

        for(int i = 0 ; i < dirs.Length-1; i++)
        {
           if(string.IsNullOrEmpty(dirs[i])) continue; 
           curr = curr.directories[dirs[i]];
        }

        string fileName = dirs[dirs.Length-1];
        if(curr.files.ContainsKey(fileName))
        {
            string currFileValue = curr.files[fileName];
            currFileValue += content;
            curr.files[fileName] = currFileValue;
        }
        else
        {
            curr.files.Add(fileName,content);
        }     
    }
    
    public string ReadContentFromFile(string filePath) 
    {
        string[] dirs = filePath.Split("/");
        Directory curr = root;

        for(int i = 0 ; i < dirs.Length-1; i++)
        {
           if(string.IsNullOrEmpty(dirs[i])) continue;  
           curr = curr.directories[dirs[i]];
        }

        string fileName = dirs[dirs.Length-1];
        
        return curr.files[fileName];
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * FileSystem obj = new FileSystem();
 * IList<string> param_1 = obj.Ls(path);
 * obj.Mkdir(path);
 * obj.AddContentToFile(filePath,content);
 * string param_4 = obj.ReadContentFromFile(filePath);
 */
```