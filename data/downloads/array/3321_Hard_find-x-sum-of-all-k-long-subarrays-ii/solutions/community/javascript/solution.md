# JS solution | Red-Black Tree | OrderedSet | O((n - k + 1) *log x)

**Author:** 22xiao
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5912112/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5912112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The problem asks to compute the **x-sum** of subarrays of length `k` in a sliding window fashion. The **x-sum** is the sum of the `x` most frequent elements in each subarray, with ties broken by choosing larger elements.

To solve this, we can maintain frequency counts of the elements in the current sliding window of size `k` and efficiently manage the top `x` most frequent elements using a **Red-Black Tree** that allows for quick retrieval of the largest elements based on both frequency and value.


Since Javascript doesn't have build-in **Red-Black Tree**, so we need to write the `RBTree` class and the `OrderedSet` class on ourselves.

# Approach
<!-- Describe your approach to solving the problem. -->

1. **Sliding Window**: Iterate over the array using a sliding window of size `k`. At each step, update the window by adding a new element on the right and removing an element from the left.

2. **Frequency Map(`freqMap`)**: For each sliding window, maintain a frequency map that tracks how often each element appears. When adding a new element to the window, increase its frequency. When removing an element from the window, decrease its frequency.

3. **Ordered Set(`top` and `rest`)**: To keep track of the top `x` elements based on frequency (and value for tie-breaking), use a red-black tree (implemented in the `OrderedSet` class) to efficiently maintain the order of elements. The `top` ordered set stores the `x` most frequent elements, while the `rest` set stores the remaining elements. These sets allow efficient insertion, deletion, and retrieval based on the frequency of the elements.

4. **Sum Calculation**: For each window, compute the sum of the top `x` most frequent elements by iterating over the elements stored in the ordered set. If the number of distinct elements is less than `x`, simply take all available elements.

5. **Output**: Store the sum for each window in the result array.

# Complexity
- **Time complexity**: `O((n - k + 1) *log x)`
    - **Insert/Delete Operations**: Each insert and delete operation in the red-black tree takes `O(log x)` where `x` is the number of distinct elements in the current window.
    - **Sliding Window**: For each of the `n - k + 1` windows, we process elements at most twice (once for insertion and once for deletion).
    - **Overall Complexity**: The time complexity is `O((n - k + 1) *log x)` due to maintaining the top `x` elements and the sliding window mechanism.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity**: `O(k + x)`
    - **Frequency Map and Ordered Sets**: We store the frequencies of elements in the sliding window, which uses `O(k)` space in the worst case (since each window contains at most `k` elements).
    - **Overall Complexity**: The space complexity is `O(k + x)` due to the frequency map and the ordered set for the top `x` elements.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var findXSum = function (nums, k, x) {
	const n = nums.length;
	let res = [],
		sum = 0;
	let freqMap = new Map(),
		top = new OrderedSet(),
		rest = new OrderedSet();

	for (let i = 0; i < n; i++) {
		let count = freqMap.get(nums[i]) || 0;
		if (count > 0) {
			if (rest.find(nums[i], count)) {
				rest.delete(nums[i], count);
			} else {
				top.delete(nums[i], count);
				sum -= nums[i] * count;
			}
		}

		freqMap.set(nums[i], count + 1);
		top.insert(nums[i], count + 1);
		sum += nums[i] * (count + 1);

		if (top.size > x) {
			const [minNum, minCount] = top.getMin();
			sum -= minNum * minCount;
			rest.insert(minNum, minCount);
			top.delete(minNum, minCount);
		}

		if (i >= k) {
			const leftCount = freqMap.get(nums[i - k]);
			if (rest.find(nums[i - k], leftCount)) {
				rest.delete(nums[i - k], leftCount);
			} else {
				top.delete(nums[i - k], leftCount);
				sum -= leftCount * nums[i - k];
			}

			freqMap.set(nums[i - k], leftCount - 1);
			if (leftCount - 1 > 0) {
				rest.insert(nums[i - k], leftCount - 1);
			}
			if (top.size < x && rest.size > 0) {
				const [maxNum, maxCount] = rest.getMax();
				sum += maxNum * maxCount;
				top.insert(maxNum, maxCount);
				rest.delete(maxNum, maxCount);
			}
		}
		if (i >= k - 1) {
			res.push(sum);
		}
	}
	return res;
};
class RBTreeNode {
	constructor(key, value, nilNode) {
		this.key = key;
		this.value = value;
		this.color = 'red';
		this.left = nilNode;
		this.right = nilNode;
		this.parent = nilNode;
	}

	isRed() {
		return this.color === 'red';
	}
}

class RBTree {
	constructor() {
		this.nil = new RBTreeNode(null, null, null); // nil \u8282\u70B9\u521D\u59CB\u5316
		this.nil.color = 'black'; // nil \u8282\u70B9\u662F\u9ED1\u8272\u7684
		this.root = this.nil;
	}

	// \u81EA\u5B9A\u4E49\u7684\u6BD4\u8F83\u51FD\u6570\uFF0C\u5148\u6309value\u6BD4\u8F83\uFF0Cvalue\u76F8\u540C\u518D\u6309key\u6BD4\u8F83
	compare(node1, node2) {
		if (node1.value !== node2.value) {
			return node1.value - node2.value; // \u6309value\u5347\u5E8F\u6392\u5E8F
		}
		return node1.key - node2.key; // value\u76F8\u540C\u5219\u6309key\u5347\u5E8F\u6392\u5E8F
	}

	insert(key, value) {
		let z = new RBTreeNode(key, value, this.nil);
		let y = this.nil;
		let x = this.root;
		// \u63D2\u5165\u8282\u70B9\u65F6\u6839\u636Ecompare\u51FD\u6570\u6765\u6BD4\u8F83
		while (x !== this.nil) {
			y = x;
			if (this.compare(z, x) < 0) {
				x = x.left;
			} else {
				x = x.right;
			}
		}

		z.parent = y;
		if (y === this.nil) {
			this.root = z;
		} else if (this.compare(z, y) < 0) {
			y.left = z;
		} else {
			y.right = z;
		}

		z.left = this.nil;
		z.right = this.nil;
		z.color = 'red';

		this.insertFixup(z);
	}

	// \u4FEE\u6539 delete \u65B9\u6CD5\uFF0C\u57FA\u4E8E key \u548C value \u67E5\u627E
	delete(key, value) {
		let node = this.root;
		let targetNode = null;
		// \u67E5\u627E\u7B26\u5408 key \u548C value \u7684\u8282\u70B9
		while (node !== this.nil) {
			let tempNode = new RBTreeNode(key, value, this.nil);
			if (this.compare(tempNode, node) === 0) {
				targetNode = node; // \u627E\u5230\u76EE\u6807\u8282\u70B9
				break;
			} else if (this.compare(tempNode, node) < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}

		if (targetNode) {
			this._deleteNode(targetNode);
		}
	}

	_deleteNode(node) {
		let y = node;
		let yOriginalColor = y.color;
		let x;

		if (node.left === this.nil) {
			x = node.right;
			this.transplant(node, node.right);
		} else if (node.right === this.nil) {
			x = node.left;
			this.transplant(node, node.left);
		} else {
			y = this.minimum(node.right);
			yOriginalColor = y.color;
			x = y.right;
			if (y.parent === node) {
				x.parent = y;
			} else {
				this.transplant(y, y.right);
				y.right = node.right;
				y.right.parent = y;
			}
			this.transplant(node, y);
			y.left = node.left;
			y.left.parent = y;
			y.color = node.color;
		}

		if (yOriginalColor === 'black') {
			this.deleteFixup(x);
		}
	}

	transplant(u, v) {
		if (u.parent === this.nil) {
			this.root = v;
		} else if (u === u.parent.left) {
			u.parent.left = v;
		} else {
			u.parent.right = v;
		}
		v.parent = u.parent;
	}

	minimum(node) {
		while (node.left !== this.nil) {
			node = node.left;
		}
		return node;
	}

	maximum(node) {
		while (node.right !== this.nil) {
			node = node.right;
		}
		return node;
	}

	deleteFixup(x) {
		while (x !== this.root && !x.isRed()) {
			if (x === x.parent.left) {
				let w = x.parent.right;
				if (w.isRed()) {
					w.color = 'black';
					x.parent.color = 'red';
					this.leftRotate(x.parent);
					w = x.parent.right;
				}
				if (!w.left.isRed() && !w.right.isRed()) {
					w.color = 'red';
					x = x.parent;
				} else {
					if (!w.right.isRed()) {
						w.left.color = 'black';
						w.color = 'red';
						this.rightRotate(w);
						w = x.parent.right;
					}
					w.color = x.parent.color;
					x.parent.color = 'black';
					w.right.color = 'black';
					this.leftRotate(x.parent);
					x = this.root;
				}
			} else {
				let w = x.parent.left;
				if (w.isRed()) {
					w.color = 'black';
					x.parent.color = 'red';
					this.rightRotate(x.parent);
					w = x.parent.left;
				}
				if (!w.right.isRed() && !w.left.isRed()) {
					w.color = 'red';
					x = x.parent;
				} else {
					if (!w.left.isRed()) {
						w.right.color = 'black';
						w.color = 'red';
						this.leftRotate(w);
						w = x.parent.left;
					}
					w.color = x.parent.color;
					x.parent.color = 'black';
					w.left.color = 'black';
					this.rightRotate(x.parent);
					x = this.root;
				}
			}
		}
		x.color = 'black';
	}

	insertFixup(z) {
		while (z.parent.isRed()) {
			if (z.parent === z.parent.parent.left) {
				let y = z.parent.parent.right;
				if (y.isRed()) {
					z.parent.color = 'black';
					y.color = 'black';
					z.parent.parent.color = 'red';
					z = z.parent.parent;
				} else {
					if (z === z.parent.right) {
						z = z.parent;
						this.leftRotate(z);
					}
					z.parent.color = 'black';
					z.parent.parent.color = 'red';
					this.rightRotate(z.parent.parent);
				}
			} else {
				let y = z.parent.parent.left;
				if (y.isRed()) {
					z.parent.color = 'black';
					y.color = 'black';
					z.parent.parent.color = 'red';
					z = z.parent.parent;
				} else {
					if (z === z.parent.left) {
						z = z.parent;
						this.rightRotate(z);
					}
					z.parent.color = 'black';
					z.parent.parent.color = 'red';
					this.leftRotate(z.parent.parent);
				}
			}
		}
		this.root.color = 'black';
	}

	leftRotate(x) {
		let y = x.right;
		x.right = y.left;
		if (y.left !== this.nil) {
			y.left.parent = x;
		}
		y.parent = x.parent;
		if (x.parent === this.nil) {
			this.root = y;
		} else if (x === x.parent.left) {
			x.parent.left = y;
		} else {
			x.parent.right = y;
		}
		y.left = x;
		x.parent = y;
	}

	rightRotate(x) {
		let y = x.left;
		x.left = y.right;
		if (y.right !== this.nil) {
			y.right.parent = x;
		}
		y.parent = x.parent;
		if (x.parent === this.nil) {
			this.root = y;
		} else if (x === x.parent.left) {
			x.parent.left = y;
		} else {
			x.parent.right = y;
		}
		y.right = x;
		x.parent = y;
	}
}

class OrderedSet {
	constructor() {
		this.rbtree = new RBTree();
		this.size = 0;
	}

	insert(key, value) {
		this.rbtree.insert(key, value);
		this.size++;
	}

	find(key, value) {
		let node = this.rbtree.root;
		let targetNode = null;
		let tempNode = new RBTreeNode(key, value, this.rbtree.nil);

		while (node !== this.rbtree.nil) {
			if (this.rbtree.compare(tempNode, node) === 0) {
				targetNode = node;
				break;
			} else if (this.rbtree.compare(tempNode, node) < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}

		return targetNode ? targetNode.value : null;
	}

	delete(key, value) {
		this.rbtree.delete(key, value);
		this.size--;
	}

	getMin() {
		let node = this.rbtree.minimum(this.rbtree.root);
		return [node.key, node.value];
	}

	getMax() {
		let node = this.rbtree.maximum(this.rbtree.root);
		return [node.key, node.value];
	}

	// \u4E2D\u5E8F\u904D\u5386
	inorderTraversal() {
		const result = [];
		const inorder = (node) => {
			if (node !== this.rbtree.nil) {
				inorder(node.left); // \u9012\u5F52\u5DE6\u5B50\u6811
				result.push([node.key, node.value]); // \u8BBF\u95EE\u5F53\u524D\u8282\u70B9
				inorder(node.right); // \u9012\u5F52\u53F3\u5B50\u6811
			}
		};
		inorder(this.rbtree.root);
		return result;
	}
}
```