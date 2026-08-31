# C# split parsing, hash code to check unique

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/4315166/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/4315166/)

---

# Code
```
public class Solution {
    public IList<IList<string>> FindDuplicate(string[] paths) 
    {
        var lookupByHash = 
            GetFilePaths(paths).ToLookup(_ => _.ContentHash);

        return lookupByHash
            .Where(_ => _.Count() > 1)
            .Select(l => l.Select(fi => fi.FilePath).ToArray())
            .ToArray();
    }

    IEnumerable<FileInfo> GetFilePaths(string[] paths)
    {
        foreach(var p in paths)
        {
            var dirEntry = p.Split(' ');

            for(var i = 1; i < dirEntry.Length; i++)
            {
                var f = dirEntry[i].Split('(');

                // Here should be something like MD5 sum calculation
                var hash = f[1].GetHashCode().ToString();

                yield return new FileInfo
                { 
                    FileName = f[0],
                    ContentHash = hash, 
                    Dir = dirEntry[0]
                };
            }
        }
    }

    public class FileInfo
    {
        public string FileName { get; set; }
        public string ContentHash { get; set; }
        public string Dir { get; set; }

        public string FilePath => Dir + '/' + FileName;
    }
}
```