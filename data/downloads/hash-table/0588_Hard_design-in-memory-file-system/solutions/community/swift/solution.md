# ✅ Video | Beats RT:100%/RAM:100% (sometimes?)

**Author:** Piotr_Maminski
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/6060013/](https://leetcode.com/problems/design-in-memory-file-system/solutions/6060013/)

---

![image.png](./images/0.png)

https://youtu.be/Eb8GRDxyhfI?si=liif1hul477MaFOR

```python3 []
from typing import List
from dataclasses import dataclass
from pathlib import Path


@dataclass
class FileNode:
    """Represents a node in the file system (file or directory)"""
    name: str
    is_file: bool = False
    content: str = ""
    children: dict = None

    def __post_init__(self):
        self.children = {} if self.children is None else self.children


class FileSystem:
    """A simple in-memory file system implementation"""
    
    def __init__(self):
        self.root = FileNode(name="/")

    def _traverse_path(self, path: str) -> FileNode:
        """Navigate to the node at the given path"""
        current = self.root
        if path == "/":
            return current

        path_parts = Path(path).parts[1:]  
        for part in path_parts:
            current = current.children[part]
        return current

    def _create_path(self, path: str) -> FileNode:
        """Create all necessary nodes along the path and return the final node"""
        current = self.root
        if path == "/":
            return current

        path_parts = Path(path).parts[1:] 
        for part in path_parts:
            if part not in current.children:
                current.children[part] = FileNode(name=part)
            current = current.children[part]
        return current

    def ls(self, path: str) -> List[str]:
        """List contents of a directory or return file name"""
        node = self._traverse_path(path)
        if node.is_file:
            return [node.name]
        return sorted(node.children.keys())

    def mkdir(self, path: str) -> None:
        """Create a new directory"""
        self._create_path(path)

    def addContentToFile(self, file_path: str, content: str) -> None:
        """Create or append content to a file"""
        node = self._create_path(file_path)
        node.is_file = True
        node.content += content

    def readContentFromFile(self, file_path: str) -> str:
        """Read content from a file"""
        node = self._traverse_path(file_path)
        return node.content
```
```cpp []
class FileSystem {
private:
    struct File {
        bool isFile{false};
        std::string content;
        std::map<std::string, File*> children;
    };

    File* root;

    // Helper method to navigate to a specific path
    File* navigateTo(const std::string& path) {
        File* current = root;
        std::stringstream ss(path);
        std::string part;

        while (getline(ss, part, '/')) {
            if (part.empty()) continue;
            
            if (!current->children.contains(part)) {
                current->children[part] = new File();
            }
            current = current->children[part];
        }
        return current;
    }

    // Helper method to get filename from path
    std::string getFileName(const std::string& path) {
        size_t pos = path.find_last_of('/');
        return (pos == std::string::npos) ? path : path.substr(pos + 1);
    }

public:
    FileSystem() : root(new File()) {}

    ~FileSystem() {
        // TODO: Implement destructor to clean up allocated memory
    }

    std::vector<std::string> ls(const std::string& path) {
        if (path.empty()) return {};

        File* file = navigateTo(path);
        std::vector<std::string> filesList;

        if (file->isFile) {
            filesList.push_back(getFileName(path));
        } else {
            for (const auto& [name, _] : file->children) {
                filesList.push_back(name);
            }
            std::sort(filesList.begin(), filesList.end());
        }

        return filesList;
    }

    void mkdir(const std::string& path) {
        navigateTo(path);
    }

    void addContentToFile(const std::string& filePath, const std::string& content) {
        File* file = navigateTo(filePath);
        file->isFile = true;
        file->content += content;
    }

    std::string readContentFromFile(const std::string& filePath) {
        return navigateTo(filePath)->content;
    }
};
```
```java []
class FileSystem {
    class FileNode {
        String name;
        boolean isFile;
        String content;
        Map<String, FileNode> children;
        
        public FileNode(String name) {
            this.name = name;
            this.isFile = false;
            this.content = "";
            this.children = new HashMap<>();
        }
    }
    
    private FileNode root;
    
    public FileSystem() {
        root = new FileNode("/");
    }
    
    private FileNode traversePath(String path) {
        FileNode current = root;
        if (path.equals("/")) return current;
        
        String[] parts = path.split("/");
        for (int i = 1; i < parts.length; i++) {
            current = current.children.get(parts[i]);
        }
        return current;
    }
    
    private FileNode createPath(String path) {
        FileNode current = root;
        if (path.equals("/")) return current;
        
        String[] parts = path.split("/");
        for (int i = 1; i < parts.length; i++) {
            if (!current.children.containsKey(parts[i])) {
                current.children.put(parts[i], new FileNode(parts[i]));
            }
            current = current.children.get(parts[i]);
        }
        return current;
    }
    
    public List<String> ls(String path) {
        FileNode node = traversePath(path);
        if (node.isFile) {
            return Arrays.asList(node.name);
        }
        
        List<String> result = new ArrayList<>(node.children.keySet());
        Collections.sort(result);
        return result;
    }
    
    public void mkdir(String path) {
        createPath(path);
    }
    
    public void addContentToFile(String filePath, String content) {
        FileNode node = createPath(filePath);
        node.isFile = true;
        node.content += content;
    }
    
    public String readContentFromFile(String filePath) {
        FileNode node = traversePath(filePath);
        return node.content;
    }
}
```
```csharp []
public class FileSystem {
    private class FileNode {
        public string Name { get; set; }
        public bool IsFile { get; set; }
        public string Content { get; set; }
        public Dictionary<string, FileNode> Children { get; set; }

        public FileNode(string name, bool isFile = false) {
            Name = name;
            IsFile = isFile;
            Content = "";
            Children = new Dictionary<string, FileNode>();
        }
    }

    private readonly FileNode root;

    public FileSystem() {
        root = new FileNode("/");
    }

    private FileNode TraversePath(string path) {
        FileNode current = root;
        if (path == "/") return current;

        string[] parts = path.Split('/', StringSplitOptions.RemoveEmptyEntries);
        foreach (string part in parts) {
            current = current.Children[part];
        }
        return current;
    }

    private FileNode CreatePath(string path) {
        FileNode current = root;
        if (path == "/") return current;

        string[] parts = path.Split('/', StringSplitOptions.RemoveEmptyEntries);
        foreach (string part in parts) {
            if (!current.Children.ContainsKey(part)) {
                current.Children[part] = new FileNode(part);
            }
            current = current.Children[part];
        }
        return current;
    }

    public IList<string> Ls(string path) {
        FileNode node = TraversePath(path);
        if (node.IsFile) {
            return new List<string> { node.Name };
        }
        return node.Children.Keys.OrderBy(x => x).ToList();
    }

    public void Mkdir(string path) {
        CreatePath(path);
    }

    public void AddContentToFile(string filePath, string content) {
        FileNode node = CreatePath(filePath);
        node.IsFile = true;
        node.Content += content;
    }

    public string ReadContentFromFile(string filePath) {
        FileNode node = TraversePath(filePath);
        return node.Content;
    }
}
```
```golang []
type FileNode struct {
    name     string
    isFile   bool
    content  string
    children map[string]*FileNode
}

type FileSystem struct {
    root *FileNode
}

func Constructor() FileSystem {
    return FileSystem{
        root: &FileNode{
            name:     "/",
            children: make(map[string]*FileNode),
        },
    }
}

func (fs *FileSystem) traversePath(path string) *FileNode {
    if path == "/" {
        return fs.root
    }
    
    current := fs.root
    parts := strings.Split(strings.Trim(path, "/"), "/")
    
    for _, part := range parts {
        current = current.children[part]
    }
    return current
}

func (fs *FileSystem) createPath(path string) *FileNode {
    if path == "/" {
        return fs.root
    }
    
    current := fs.root
    parts := strings.Split(strings.Trim(path, "/"), "/")
    
    for _, part := range parts {
        if _, exists := current.children[part]; !exists {
            current.children[part] = &FileNode{
                name:     part,
                children: make(map[string]*FileNode),
            }
        }
        current = current.children[part]
    }
    return current
}

func (fs *FileSystem) Ls(path string) []string {
    node := fs.traversePath(path)
    if node.isFile {
        return []string{node.name}
    }
    
    result := make([]string, 0, len(node.children))
    for name := range node.children {
        result = append(result, name)
    }
    sort.Strings(result)
    return result
}

func (fs *FileSystem) Mkdir(path string) {
    fs.createPath(path)
}

func (fs *FileSystem) AddContentToFile(filePath string, content string) {
    node := fs.createPath(filePath)
    node.isFile = true
    node.content += content
}

func (fs *FileSystem) ReadContentFromFile(filePath string) string {
    node := fs.traversePath(filePath)
    return node.content
}
```
```swift []
class FileNode {
    var name: String
    var isFile: Bool
    var content: String
    var children: [String: FileNode]
    
    init(name: String, isFile: Bool = false, content: String = "", children: [String: FileNode]? = nil) {
        self.name = name
        self.isFile = isFile
        self.content = content
        self.children = children ?? [:]
    }
}

class FileSystem {
    private var root: FileNode
    
    init() {
        root = FileNode(name: "/")
    }
    
    private func traversePath(_ path: String) -> FileNode {
        var current = root
        if path == "/" {
            return current
        }
        
        let components = path.split(separator: "/")
        for component in components {
            current = current.children[String(component)]!
        }
        return current
    }
    
    private func createPath(_ path: String) -> FileNode {
        var current = root
        if path == "/" {
            return current
        }
        
        let components = path.split(separator: "/")
        for component in components {
            let comp = String(component)
            if current.children[comp] == nil {
                current.children[comp] = FileNode(name: comp)
            }
            current = current.children[comp]!
        }
        return current
    }
    
    func ls(_ path: String) -> [String] {
        let node = traversePath(path)
        if node.isFile {
            return [node.name]
        }
        return node.children.keys.sorted()
    }
    
    func mkdir(_ path: String) {
        _ = createPath(path)
    }
    
    func addContentToFile(_ filePath: String, _ content: String) {
        let node = createPath(filePath)
        node.isFile = true
        node.content += content
    }
    
    func readContentFromFile(_ filePath: String) -> String {
        let node = traversePath(filePath)
        return node.content
    }
}
```
```javascript [JS]
class FileNode {
    constructor(name, isFile = false, content = "") {
        this.name = name;
        this.isFile = isFile;
        this.content = content;
        this.children = {};
    }
}

class FileSystem {
    constructor() {
        this.root = new FileNode("/");
    }
    
    _traversePath(path) {
        let current = this.root;
        if (path === "/") return current;
        
        const parts = path.split("/").filter(p => p.length > 0);
        for (const part of parts) {
            current = current.children[part];
        }
        return current;
    }
    
    _createPath(path) {
        let current = this.root;
        if (path === "/") return current;
        
        const parts = path.split("/").filter(p => p.length > 0);
        for (const part of parts) {
            if (!(part in current.children)) {
                current.children[part] = new FileNode(part);
            }
            current = current.children[part];
        }
        return current;
    }
    
    ls(path) {
        const node = this._traversePath(path);
        if (node.isFile) {
            return [node.name];
        }
        return Object.keys(node.children).sort();
    }
    
    mkdir(path) {
        this._createPath(path);
    }
    
    addContentToFile(filePath, content) {
        const node = this._createPath(filePath);
        node.isFile = true;
        node.content += content;
    }
    
    readContentFromFile(filePath) {
        const node = this._traversePath(filePath);
        return node.content;
    }
}
```
```typescript [TS]
class FileNode {
    children: { [key: string]: FileNode };

    constructor(
        public name: string,
        public isFile: boolean = false,
        public content: string = ""
    ) {
        this.children = {};
    }
}

class FileSystem {
    private root: FileNode;

    constructor() {
        this.root = new FileNode("/");
    }
    
    private _traversePath(path: string): FileNode {
        let current = this.root;
        if (path === "/") return current;
        
        const parts = path.split("/").filter(p => p.length > 0);
        for (const part of parts) {
            current = current.children[part];
        }
        return current;
    }
    
    private _createPath(path: string): FileNode {
        let current = this.root;
        if (path === "/") return current;
        
        const parts = path.split("/").filter(p => p.length > 0);
        for (const part of parts) {
            if (!(part in current.children)) {
                current.children[part] = new FileNode(part);
            }
            current = current.children[part];
        }
        return current;
    }
    
    ls(path: string): string[] {
        const node = this._traversePath(path);
        if (node.isFile) {
            return [node.name];
        }
        return Object.keys(node.children).sort();
    }
    
    mkdir(path: string): void {
        this._createPath(path);
    }
    
    addContentToFile(filePath: string, content: string): void {
        const node = this._createPath(filePath);
        node.isFile = true;
        node.content += content;
    }
    
    readContentFromFile(filePath: string): string {
        const node = this._traversePath(filePath);
        return node.content;
    }
}
```
```rust []
use std::collections::HashMap;
use std::path::Path;

#[derive(Default)]
struct FileNode {
    name: String,
    is_file: bool,
    content: String,
    children: HashMap<String, FileNode>,
}

impl FileNode {
    fn new(name: String) -> Self {
        FileNode {
            name,
            is_file: false,
            content: String::new(),
            children: HashMap::new(),
        }
    }
}

struct FileSystem {
    root: FileNode,
}

impl FileSystem {
    fn new() -> Self {
        FileSystem {
            root: FileNode::new(String::from("/")),
        }
    }
    
    fn traverse_path(&self, path: &str) -> Option<&FileNode> {
        let mut current = &self.root;
        if path == "/" {
            return Some(current);
        }
        
        let path = Path::new(path);
        for component in path.components().skip(1) {
            if let Some(part) = component.as_os_str().to_str() {
                current = current.children.get(part)?;
            }
        }
        Some(current)
    }
    
    fn create_path(&mut self, path: &str) -> &mut FileNode {
        let mut current = &mut self.root;
        if path == "/" {
            return current;
        }
        
        let path = Path::new(path);
        for component in path.components().skip(1) {
            if let Some(part) = component.as_os_str().to_str() {
                current = current.children
                    .entry(part.to_string())
                    .or_insert_with(|| FileNode::new(part.to_string()));
            }
        }
        current
    }
    
    fn ls(&self, path: String) -> Vec<String> {
        if let Some(node) = self.traverse_path(&path) {
            if node.is_file {
                return vec![node.name.clone()];
            }
            let mut contents: Vec<_> = node.children.keys().cloned().collect();
            contents.sort();
            return contents;
        }
        vec![]
    }
    
    fn mkdir(&mut self, path: String) {
        self.create_path(&path);
    }
    
    fn add_content_to_file(&mut self, file_path: String, content: String) {
        let node = self.create_path(&file_path);
        node.is_file = true;
        node.content.push_str(&content);
    }
    
    fn read_content_from_file(&self, file_path: String) -> String {
        if let Some(node) = self.traverse_path(&file_path) {
            return node.content.clone();
        }
        String::new()
    }
}
```
- Complexity: Time O(n log n) & O(p + c)

![image.png](./images/1.png)


