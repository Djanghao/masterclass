# K Closest Points (Min Heap)

**Author:** edjosteneslima
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/5120923/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/5120923/)

---

# Code
```
class Solution {
  List<List<int>> kClosest(List<List<int>> points, int k) {
    MinHeap heap = MinHeap();

    for (List<int> p in points) {
        heap.push((p[0], p[1]));
    }

    List<List<int>> res = [];

    for (int i = 0; i < k; i++) {
        (int, int) p = heap.pop();
        res.add([p.$1, p.$2]);
    }

    return res;
  }
}

class MinHeap {
    MinHeap();

    List<(int, int)> _heap = [(-1, -1)];

    int get length => _heap.length - 1;

    (int, int) get first => _heap[1];

    void push((int, int) val) {
        _heap.add(val);
        int i = _heap.length - 1;

        while (i > 1 && _calculate(_heap[i]) < _calculate(_heap[i ~/ 2])) {
            _swap(i, i ~/ 2);
            i = i ~/ 2;
        }
    }

    (int, int) pop() {
        if (_heap.length == 1) {
            return (0, 0);
        }

        if (_heap.length == 2) {
            return _heap.removeAt(1);
        }

        (int, int) res = _heap[1];
        _heap[1] = _heap.removeLast();
        int i = 1;

        while (2 * i < _heap.length) {
            int left = 2 * i;
            int right = 2 * i + 1;

            if (_hasRightChild(i) && _isRightSmallerThenLeft(i) && _calculate(_heap[i]) > _calculate(_heap[right])) {
                _swap(i, right);
                i = right;
            } else if (_calculate(_heap[i]) > _calculate(_heap[left])) {
                _swap(i, left);
                i = left;
            } else {
                break;
            }
        }

        return res;
    }

    bool _hasRightChild(int i) {
        return 2 * i + 1 < _heap.length;
    }

    bool _isRightSmallerThenLeft(int i) {
        return _calculate(_heap[2 * i + 1]) < _calculate(_heap[2 * i]);
    }

    void _swap(int n, int m) {
        (int, int) tmp = _heap[n];
        _heap[n] = _heap[m];
        _heap[m] = tmp;
    }

    int _calculate((int, int) point) => point.$1*point.$1 + point.$2*point.$2;
}
```