# [C++] Hash map lookup and parent-check

**Author:** mhelvens
**Votes:** 13
**Link:** [https://leetcode.com/problems/design-file-system/solutions/365839/](https://leetcode.com/problems/design-file-system/solutions/365839/)

---

This is just a straight-forward application of a hash-map, with an additional check for the existence of the parent path.

_Note:_ Though I opted to keep this code simple, more efficient data-structures are possible. A hash map lookup is still _O(n)_ by the length of the string. So we could actually store this as a kind of [Trie](https://en.wikipedia.org/wiki/Trie), with a node for every directory (segment). That way, the parent lookup would already bring us partway towards the main path lookup.

```C++
class FileSystem {
public:
  bool createPath(const string& path, int value) {
    auto parent = path.substr(0, path.rfind('/'));
    if (!parent.empty() && !paths.count(parent))
      return false;
    return paths.emplace(path, value).second;
  }
    
  int get(const string& path) {
    auto it = paths.find(path);
    if (it == paths.end())
      return -1;
    return it->second;
  }
  
private:
  unordered_map<string, int> paths;
};
```