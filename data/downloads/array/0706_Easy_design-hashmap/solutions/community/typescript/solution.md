# ✅ Beats 98% and 97 % Hash Table || Easiest Explanation ||

**Author:** Gourav-2002
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/4127279/](https://leetcode.com/problems/design-hashmap/solutions/4127279/)

---

# Intuition
Here we will use O(10^6) Extra space and we will achieve using array

- add - O(1)
- remove - O(1)
- contains - O(1)

# Approach
Basics :)

# Complexity
- Time complexity : $$add - O(1) , remove - O(1), contains - O(1)
$$
- Space complexity : $$O(10^6)$$

# Code
``` Python []
from collections import defaultdict
class MyHashMap:

    def __init__(self):
        self.data=defaultdict()

    def put(self, key: int, value: int) -> None:
        self.data[key]=value

    def get(self, key: int) -> int:
        value=self.data.get(key)
        return value if value != None else -1

    def remove(self, key: int) -> None:
        self.data[key]=None


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
```
``` C++ []
#include <unordered_map>

class MyHashMap {
private:
    std::unordered_map<int, int> data;

public:
    void put(int key, int value) {
        data[key] = value;
    }

    int get(int key) {
        if (data.find(key) != data.end()) {
            return data[key];
        } else {
            return -1;
        }
    }

    void remove(int key) {
        data.erase(key);
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */
```
``` TypeScript []
class MyHashMap {
    private data: Map<number, number>;

    constructor() {
        this.data = new Map<number, number>();
    }

    put(key: number, value: number): void {
        this.data.set(key, value);
    }

    get(key: number): number {
        const value = this.data.get(key);
        return value !== undefined ? value : -1;
    }

    remove(key: number): void {
        this.data.delete(key);
    }
}
```
``` JavaScript []
class MyHashMap {
    constructor() {
        this.data = new Map();
    }

    put(key, value) {
        this.data.set(key, value);
    }

    get(key) {
        return this.data.has(key) ? this.data.get(key) : -1;
    }

    remove(key) {
        this.data.delete(key);
    }
}
```
``` Java []
import java.util.HashMap;

class MyHashMap {
    private HashMap<Integer, Integer> data;

    public MyHashMap() {
        this.data = new HashMap<>();
    }

    public void put(int key, int value) {
        data.put(key, value);
    }

    public int get(int key) {
        return data.getOrDefault(key, -1);
    }

    public void remove(int key) {
        data.remove(key);
    }
}
```
``` C# []
using System.Collections.Generic;

public class MyHashMap {
    private Dictionary<int, int> data;

    public MyHashMap() {
        data = new Dictionary<int, int>();
    }

    public void Put(int key, int value) {
        data[key] = value;
    }

    public int Get(int key) {
        return data.ContainsKey(key) ? data[key] : -1;
    }

    public void Remove(int key) {
        data.Remove(key);
    }
}
```
``` PHP []
class MyHashMap {
    private $data;

    public function __construct() {
        $this->data = [];
    }

    public function put($key, $value) {
        $this->data[$key] = $value;
    }

    public function get($key) {
        return isset($this->data[$key]) ? $this->data[$key] : -1;
    }

    public function remove($key) {
        unset($this->data[$key]);
    }
}
```
``` GO []
package main

type MyHashMap struct {
    data map[int]int
}

func Constructor() MyHashMap {
    return MyHashMap{
        data: make(map[int]int),
    }
}

func (this *MyHashMap) Put(key int, value int) {
    this.data[key] = value
}

func (this *MyHashMap) Get(key int) int {
    if val, ok := this.data[key]; ok {
        return val
    } else {
        return -1
    }
}

func (this *MyHashMap) Remove(key int) {
    delete(this.data, key)
}
```
``` Ruby []
class MyHashMap
  def initialize
    @data = {}
  end

  def put(key, value)
    @data[key] = value
  end

  def get(key)
    @data[key] || -1
  end

  def remove(key)
    @data.delete(key)
  end
end
```
``` Kotlin []
class MyHashMap() {
    private val data = mutableMapOf<Int, Int>()

    fun put(key: Int, value: Int) {
        data[key] = value
    }

    fun get(key: Int): Int {
        return data[key] ?: -1
    }

    fun remove(key: Int) {
        data.remove(key)
    }
}
```

![upvote.jpg](./images/0.jpeg)
