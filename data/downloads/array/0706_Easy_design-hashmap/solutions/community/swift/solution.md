# Swift Linked List solution

**Author:** CrazyMillerGitHub
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/1462052/](https://leetcode.com/problems/design-hashmap/solutions/1462052/)

---

```
final class Node {

	typealias Pair = (key: Int, val: Int)

	var pair: Pair
	var next: Node?

	init(value: Pair) {
		self.pair = value
	}
}

final class LinkedList {

	private(set) var head: Node?
	private(set) var tail: Node?

	func get(_ key: Int) -> Int {
		var current = head
		while current != nil {
			if current!.pair.key == key {
				return current!.pair.val
			}
			current = current?.next
		}
		return -1
	}

	func remove(_ key: Int) {
		var current = head
		var prev: Node? = nil

		while current != nil {
			if current!.pair.key == key {
				guard prev != nil else {
					head = current?.next
					return
				}
				prev?.next = current?.next
				return
			}
			prev = current
			current = current?.next
		}
	}

	func append(pair: Node.Pair) {
		let node = Node(value: pair)
		guard head != nil else {
			head = node
			tail = node
			return
		}
		guard !updateIfExist(pair: pair) else { return }
		node.next = head
		head = node
	}

	// MARK: - Private method

	private func updateIfExist(pair: Node.Pair) -> Bool {
		var current = head
		while current != nil {
			if current!.pair.key == pair.key {
				current?.pair.val = pair.val
				return true
			}
			current = current?.next
		}
		return false
	}
}

final class MyHashMap {
	
	private var linkedListArr: ContiguousArray<LinkedList?>
	private let arrLenght: Int

	/** Initialize your data structure here. */
	init() {
		arrLenght = 2970
		linkedListArr = ContiguousArray(repeating: nil, count: arrLenght)
	}
	
	/** value will always be non-negative. */
	func put(_ key: Int, _ value: Int) {
		let mappedValue = key % arrLenght
		if linkedListArr[mappedValue] == nil {
			linkedListArr[mappedValue] = .init()
		}
	
		linkedListArr[mappedValue]?.append(pair: (key, value))
	}
	
	/** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
	func get(_ key: Int) -> Int {
		guard let linkedList = linkedListArr[key % arrLenght], linkedList.head != nil else { return -1 }
		return linkedList.get(key)
	}
	
	/** Removes the mapping of the specified value key if this map contains a mapping for the key */
	func remove(_ key: Int) {
		guard let linkedList = linkedListArr[key % arrLenght], linkedList.head != nil else { return }
		linkedList.remove(key)
	}
}
```