# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 20
**Link:** [https://leetcode.com/problems/lru-cache/solutions/1941828/](https://leetcode.com/problems/lru-cache/solutions/1941828/)

---

```
class LRUCache {
	var cache: [Int: Node] = [:]
	var count: Int = 0
	let capacity: Int
	var head: Node?
	var tail: Node?


	init(_ capacity: Int) {
		self.capacity = capacity
	}

    
	func get(_ key: Int) -> Int {
		if let node = cache[key] {
			moveToHead(node)
			
            return node.val
		} else {
			return -1
		}
	}

    
	func put(_ key: Int, _ value: Int) {
		if let node = cache[key] {
			node.val = value
			moveToHead(node)

        } else {
			let node = Node(key, value)
			
            node.next = head
			head?.prev = node
			head = node
			cache[key] = node
			count += 1
            if tail == nil {
                tail = head
            }
		}
        
		if count > capacity {
			cache.removeValue(forKey: tail!.key)
			tail = tail?.prev
			tail?.next = nil
			count -= 1
		}
	}

    
	func moveToHead(_ node: Node) {
		if node === head {
			return
		} else {
			node.prev?.next = node.next
			node.next?.prev = node.prev
			node.next = head
			head?.prev = node
			head = node
		}
		if node === tail {
			tail = tail?.prev
			tail?.next = nil
		}
	}
}


class Node {
	var key: Int
	var val: Int
	var prev: Node?
	var next: Node?
	
    
    init(_ key: Int, _ val: Int) {
		self.key = key
		self.val = val
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * let obj = LRUCache(capacity)
 * let ret_1: Int = obj.get(key)
 * obj.put(key, value)
 */
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.