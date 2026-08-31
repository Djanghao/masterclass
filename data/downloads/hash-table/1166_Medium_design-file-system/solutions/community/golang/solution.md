# Tree Solution (via Hashmap) --- Golang

**Author:** wip727
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/4684340/](https://leetcode.com/problems/design-file-system/solutions/4684340/)

---


# Code
```
type FileSystem struct {
    Value int
    Children map[string]*FileSystem
}


func Constructor() FileSystem {
    return FileSystem{
        Children: make(map[string]*FileSystem),
    }
}


func (this *FileSystem) CreatePath(path string, value int) bool {
    folders := strings.Split(path, "/")
    folders = folders[1:]
    if len(folders) == 0 {
        return false
    }
    i := 0
    for ; i < len(folders) - 1; i++ {
        if len(folders[i]) == 0 {
            return false
        }
        if v, ok := this.Children[folders[i]]; ok {
            this = v
        } else {
            return false
        }
    }
    if _, ok := this.Children[folders[i]]; ok {
        // folder already exists
        return false
    }

    this.Children[folders[i]] = &FileSystem{
        Value: value,
        Children: make(map[string]*FileSystem),
    }
    return true
}


func (this *FileSystem) Get(path string) int {
    folders := strings.Split(path, "/")
    folders = folders[1:]
    for i := 0; i < len(folders); i++ {
        if v, ok := this.Children[folders[i]]; ok {
            if i == len(folders) - 1 {
                return v.Value
            }
            this = v
        } else {
            return -1
        }
    }
    return -1
}


/**
 * Your FileSystem object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.CreatePath(path,value);
 * param_2 := obj.Get(path);
 */
```