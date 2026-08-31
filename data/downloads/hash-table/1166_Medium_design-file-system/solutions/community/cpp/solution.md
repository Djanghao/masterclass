# C++ Solution, using hashmap

**Author:** RobinDz10
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-file-system/solutions/2134261/](https://leetcode.com/problems/design-file-system/solutions/2134261/)

---

```
class FileSystem {
    unordered_map<string, int> ump;
    
public:
    FileSystem() {
        
    }
    
    bool createPath(string path, int value) {
        if(ump.find(path) != ump.end())
            return false;
        int pos = -1;
        for(int i = path.length() - 1; i >= 0; --i){
            if(path[i] == '/'){
                pos = i;
                break;
            }
        }
        if(pos > 0){
            string str = path.substr(0, pos);
            if(ump.find(str) == ump.end())
                return false;
        }
        ump[path] = value;
        return true;
    }
    
    int get(string path) {
        if(ump.find(path) != ump.end())
            return ump[path];
        return -1;
    }
};
```