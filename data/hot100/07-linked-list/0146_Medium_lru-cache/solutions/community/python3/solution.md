# Solution

**Author:** deleted_user
**Votes:** 447
**Link:** [https://leetcode.com/problems/lru-cache/solutions/3171305/](https://leetcode.com/problems/lru-cache/solutions/3171305/)

---

```C++ []
class LRUCache {
public:
    inline static int M[10001];
    inline static int16_t L[10002][2];
    int cap, size = 0;
    const int NONE = 10001;
    int head = NONE, tail = NONE;
    
    LRUCache(int capacity) : cap(capacity) {
        memset(M, 0xff, sizeof M);
    }
    
    inline void erase(int key) {
        const int pre = L[key][0];
        const int nxt = L[key][1];
        L[pre][1] = nxt;
        L[nxt][0] = pre;
        if (head == key) head = nxt;
        if (tail == key) tail = pre;
    }
    
    inline void push_front(int key) {
        L[key][0] = NONE;
        L[key][1] = head;
        L[head][0] = key;
        head = key;
        if (tail == NONE)
            tail = key;
    }
    
    inline int pop_back() {
        int ret = tail;
        tail = L[tail][0];
        L[tail][1] = NONE;
        if (tail == NONE)
            head = NONE;
        return ret;
    }
    
    int get(int key) {
        if (M[key] == -1) return -1;
        erase(key);
        push_front(key);
        return M[key];
    }
    
    void put(int key, int value) {
        if (M[key] != -1) {
            erase(key);
        } else {
            if (size == cap) {
                int poped = pop_back();
                M[poped] = -1;
                size -= 1;
            }
            size += 1;
        }
        push_front(key);
        M[key] = value;
    }
};

#include <unistd.h>
static char buf[20000000];

int mgetchar() {
    static int pos = 0;
    pos++;
    return buf[pos-1] == '\\0' ? EOF : buf[pos-1];
}

int getmethod() {
    int c = mgetchar();
    while (mgetchar() != '"');
    return c;
}

int getinput(vector<int>& ret) {
    int c;
    while((c = mgetchar()) != EOF && c != '[');
    while ((c = mgetchar()) != EOF) {
        if (c == '"')
            ret.push_back(getmethod());
        else if (c == ']')
            return 1;
    }
    return 0;
}

int getone() {
    while(mgetchar() != '[');
    int ans = 0, c;
    while((c = mgetchar()) != ']') {
        if (isdigit(c))
            ans = ans * 10 + c - '0';
    }
    return ans;
}

pair<int,int> gettwo() {
    while(mgetchar() != '[');
    pair<int,int> ans;
    int c;
    while((c = mgetchar()) != ',') {
        if (isdigit(c))
            ans.first = ans.first * 10 + c - '0';
    }
    while((c = mgetchar()) != ']') {
        if (isdigit(c))
            ans.second = ans.second * 10 + c - '0';
    }
    return ans;
}

void getpara(FILE *fp, vector<int>& funcs) {
    while(mgetchar() != '[');
    fprintf(fp, "[");
    LRUCache lru(getone());
    for (int i = 0; i < funcs.size(); i++) {
        auto f = funcs[i];
        if (f == 'L') {
            fprintf(fp, "null");
        } else if (f == 'g') {
            int v = lru.get(getone());
            fprintf(fp, "%d", v);
        } else {
            pair<int,int> v = gettwo();
            lru.put(v.first, v.second);
            fprintf(fp, "null");
        }
        if (i + 1 < funcs.size())
            fprintf(fp, ",");
    }
    while(mgetchar() != ']');
    fprintf(fp, "]\
");
}

int main() {
    int n = read(0, buf, 20000000);
    buf[n] = '\\0';

    FILE *fp = fopen("user.out", "w");
    vector<int> funcs;
    while (getinput(funcs)) {
        getpara(fp, funcs);
        funcs.clear();
    }
    fclose(fp);
}
```

```Python3 []
from collections import OrderedDict

class LRUCache:
    __slots__ = ('data', 'capacity')

    def __init__(self, capacity: int):
        self.data: Dict[int, int] = OrderedDict()
        self.capacity: int = capacity

    def get(self, key: int) -> int:
        return -1 if key not in self.data else self.data.setdefault(key, self.data.pop(key))

    def put(self, key: int, value: int) -> None:
        try:
            self.data.move_to_end(key)
            self.data[key] = value
        except KeyError:
            self.data[key] = value
            if len(self.data) > self.capacity:
                self.data.popitem(last=False)
```

```Java []
class LRUCache {
    class Node{
        int key;
        int value;

        Node prev;
        Node next;

        Node(int key, int value){
            this.key= key;
            this.value= value;
        }
    }

    public Node[] map;
    public int count, capacity;
    public Node head, tail;
    
    public LRUCache(int capacity) {
        
        this.capacity= capacity;
        count= 0;
        
        map= new Node[10_000+1];
        
        head= new Node(0,0);
        tail= new Node(0,0);
        
        head.next= tail;
        tail.prev= head;
        
        head.prev= null;
        tail.next= null;
    }
    
    public void deleteNode(Node node){
        node.prev.next= node.next;
        node.next.prev= node.prev;       
        
        return;
    }
    
    public void addToHead(Node node){
        node.next= head.next;
        node.next.prev= node;
        node.prev= head;
        
        head.next= node;      
        
        return;
    }
    
    public int get(int key) {
        
        if( map[key] != null ){
            
            Node node= map[key];
            
            int nodeVal= node.value;
            
            deleteNode(node);
            
            addToHead(node);
            
            return nodeVal;
        }
        else
            return -1;
    }
    
    public void put(int key, int value) {
        
        if(map[key] != null){
            
            Node node= map[key];
            
            node.value= value;
            
            deleteNode(node);
            
            addToHead(node);
            
        } else {
            
            Node node= new Node(key,value);
            
            map[key]= node;
            
            if(count < capacity){
                count++;
                addToHead(node);
            } 
            else {
                
                map[tail.prev.key]= null;
                deleteNode(tail.prev);
                
                addToHead(node);
            }
        }
        
        return;
    }
    
}
```
